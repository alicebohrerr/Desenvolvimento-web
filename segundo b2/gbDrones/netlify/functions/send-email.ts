// Tipos do Netlify Functions (Handler e evento da requisição)
import type { Handler, HandlerEvent } from "@netlify/functions";

// Biblioteca para envio de e-mails
import nodemailer from "nodemailer";

// Define o formato dos dados que esperamos receber no body da requisição
interface ContactPayload {
  email: string;   // e-mail do usuário
  message: string; // mensagem enviada
}

// Origem permitida (vem de variável de ambiente)
const ALLOWED_ORIGIN = process.env.ALLOWED_ORIGIN ?? "";

// Função que gera os headers de CORS
const corsHeaders = (origin: string) => ({
  "Access-Control-Allow-Origin": ALLOWED_ORIGIN || origin, // permite origem configurada ou origem da requisição
  "Access-Control-Allow-Headers": "Content-Type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
});

// Handler principal da função serverless
const handler: Handler = async (event: HandlerEvent) => {

  // pega a origem da requisição
  const origin = event.headers["origin"] ?? "";

  // Trata requisição preflight (CORS)
  if (event.httpMethod === "OPTIONS") {
    return {
      statusCode: 204,
      headers: corsHeaders(origin),
      body: "",
    };
  }

  // Garante que só aceita POST
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      headers: corsHeaders(origin),
      body: JSON.stringify({ error: "Método não permitido." }),
    };
  }

  let payload: ContactPayload;

  // Tenta converter o body JSON
  try {
    payload = JSON.parse(event.body ?? "{}");
  } catch {
    return {
      statusCode: 400,
      headers: corsHeaders(origin),
      body: JSON.stringify({ error: "Body inválido." }),
    };
  }

  // Extrai email e message do payload
  const { email, message } = payload;

  // Validação de campos obrigatórios
  if (!email?.trim() || !message?.trim()) {
    return {
      statusCode: 422,
      headers: corsHeaders(origin),
      body: JSON.stringify({ error: "Campos obrigatórios: email, message." }),
    };
  }

  // Regex simples para validar e-mail
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(email)) {
    return {
      statusCode: 422,
      headers: corsHeaders(origin),
      body: JSON.stringify({ error: "E-mail inválido." }),
    };
  }

  // Cria o serviço de envio de e-mail (SMTP)
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST, // servidor SMTP
    port: Number(process.env.SMTP_PORT ?? 587), // porta SMTP
    secure: process.env.SMTP_SECURE === "true", // define se usa SSL/TLS
    auth: {
      user: process.env.SMTP_USER, // usuário SMTP
      pass: process.env.SMTP_PASS, // senha SMTP
    },
  });

  try {
    // Envia o e-mail
    await transporter.sendMail({
      from: `<${process.env.SMTP_USER}>`, // remetente
      replyTo: email, // resposta vai para o usuário
      to: process.env.CONTACT_EMAIL, // destino final (empresa)
      subject: "[Ng Drones] Nova mensagem Landing Page", // assunto

      text: message, // versão texto simples

      html: `
        <h2>Nova mensagem de contato</h2>
        <p><strong>E-mail:</strong> ${email}</p>
        <p><strong>Mensagem:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `,
    });

    // resposta de sucesso
    return {
      statusCode: 200,
      headers: corsHeaders(origin),
      body: JSON.stringify({ message: "E-mail enviado com sucesso." }),
    };

  } catch (error) {
    // erro ao enviar e-mail
    console.error("Erro ao enviar e-mail:", error);

    return {
      statusCode: 500,
      headers: corsHeaders(origin),
      body: JSON.stringify({ error: "Falha ao enviar o e-mail. Tente novamente mais tarde." }),
    };
  }
};

// exporta a função para o Netlify
export { handler };