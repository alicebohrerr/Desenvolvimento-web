import { useState } from "react";
import Menu from "../assets/menu.svg";
import Close from "../assets/close.svg";

import Logo from "../assets/logo.svg";
import "../styles/header.css";
import "../styles/utility.css";
import Button from "../components/button";
import HeroRectangleOne from "../assets/images/rectangleOne.png";
import HeroRectangleTwo from "../assets/images/rectangleTwo.png";
import "../styles/hero.css";
import "../styles/solution.css";
import TestimonialCard from "../components/testimonialCard";
import "../styles/pricing.css";
import "../styles/contact.css";
import "../styles/testimonial.css";
import "../styles/footer.css";
import Cliente1 from "../assets/images/cliente01.jpg";
import Cliente2 from "../assets/images/cliente02.jpg";
import Cliente3 from "../assets/images/cliente03.jpg";
import facebook from "../assets/facebook.svg";
import Card from "../components/card";



export default function Home() {
    
    const [showMobileMenu, setShowMobileMenu] = useState(false); 
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

async function sendContactEmail() {
  const response = await fetch("/api/send-email", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
		    email,
		    message
    }),
  });

  if (!response.ok) {
    const body = await response.json().catch(() => ({}));
    throw new Error(body.error ?? "Erro ao enviar mensagem.");
  }
}

    return (
        <>
            <header className="container py-sm">
                <nav className="flex items-center justify-between">
                    <img src={Logo} alt="logo NG DRONES" width={220} height={80} />

                    <div className="desktop-only">
                        <ul className="flex gap-1">
                            <li>
                                <a href="#">Home</a>
                            </li>
                            <li>
                                <a href="#solution">Soluções</a>
                            </li>
                            <li>

                                <a href="#testimonials">Depoimentos</a>
                            </li>
                            <li>
                                <a href="#pricing">Preços</a>
                            </li>
                            <li>
                                <a href="#contact">Contato</a>
                            </li>
                        </ul>
                    </div>

                    <div className="desktop-only">
                        <div className="flex items-center">
                            <a className="reverse-color ml-lg" href="">Login</a>
                            <Button text="Cadastre-se" />
                        </div>
                    </div>
                    <div className="mobile-menu">
                        {showMobileMenu ?
                            <div className="mobile-menu-content">
                                <div className="container flex">
                                    <ul>
                                        <li>
                                            <a href="#">Home</a>
                                        </li>
                                        <li>
                                            <a href="#solution">Soluções</a>
                                        </li>
                                        <li>
                                            <a href="#testimonials">Depoimentos</a>
                                        </li>
                                        <li>
                                            <a href="#pricing">Preços</a>
                                        </li>
                                        <li>
                                            <a href="#contact">Contato</a>
                                        </li>
                                    </ul>
                                    <span onClick={() => setShowMobileMenu(!showMobileMenu)} className="btn-wrapper">
                                        <img src={Close} alt="ícone fechar menu" width={24} height={24} />
                                    </span>
                                </div>
                            </div>
                            :
                            <span onClick={() => setShowMobileMenu(!showMobileMenu)} className="btn-wrapper" >
                                <img src={Menu} alt="ícone menu" width={24} height={24} />
                            </span>
                        }
                    </div>
                </nav>

                </header>

<section id="hero">
    <span className="desktop-only">
        <img src={HeroRectangleTwo} alt="Retângulo decorativo" />
    </span>

    <img src={HeroRectangleOne} alt="Retângulo decorativo" />

    <div className="container content">
        <p className="desktop-only">
            NG DRONES
        </p>

        <h1>Tecnologia e Precisão para sua Lavoura</h1>

        <p>
            Aplicação aérea de produtos agrícolas com drones,
            garantindo eficiência, economia e máxima cobertura
            para qualquer cultura.
        </p>

        <div className="flex gap-1">
            <span>
                <Button text="Solicitar orçamento" />
            </span>

            <span className="desktop-only">
                <Button text="Conheça nossos serviços" secondary />
            </span>
        </div>
    </div>
</section>

<section className="container" id="solution">
    <header>
        <span>
            <h2>Soluções</h2>

            <span className="desktop-only">
                <h2>Sob medida para sua propriedade</h2>
            </span>
        </span>

        <p>
            A NG Drones utiliza tecnologia de ponta para aumentar
            a produtividade da sua lavoura com aplicações seguras,
            rápidas e precisas.
        </p>
    </header>

    <section className="even-columns">
<Card
    icon="🚁"
    title="Aplicação de Defensivos"
    description="Pulverização precisa e uniforme, reduzindo desperdícios e aumentando a eficiência da aplicação."
/>

<Card
    icon="🌱"
    title="Dispersão de Sólidos"
    description="Distribuição rápida e homogênea para diferentes culturas e necessidades do produtor."
/>

<Card
    icon="📊"
    title="Análise de Dados"
    description="Monitoramento da lavoura com informações precisas para auxiliar na tomada de decisões."
/>
</section>
</section>

<section id="testimonials">

    <header>
        <span>
            <p className="desktop-only">
                O que nossos clientes dizem
            </p>

            <h2>Resultados comprovados</h2>
        </span>

        <p>
            Produtores rurais que confiaram na NG Drones
            já colhem os benefícios da tecnologia.
        </p>
    </header>

    <section className="carousel">

        <div className="carousel-content">

         

         <TestimonialCard
    image={Cliente1}
    name="Carlos Silva"
    role="Produtor Rural"
    text="A aplicação ficou muito mais uniforme e reduziu significativamente nosso desperdício."
/>

<TestimonialCard
    image={Cliente2}
    name="Marcos Almeida"
    role="Agricultor"
    text="Serviço rápido, seguro e com excelente cobertura."
/>

<TestimonialCard
    image={Cliente3}
    name="João Ferreira"
    role="Produtor de Soja"
    text="A produtividade aumentou e tivemos economia de insumos."
/>

</div>
    </section>

</section>

<section id="pricing" className="container">

    <header>
        <p className="desktop-only">
            Planos e preços
        </p>

        <h2>Nossos Planos</h2>
    </header>

    <section className="even-columns gap-1.5">

        <div className="pricing-card">

            <span className="plan">
                <h3>Básico</h3>

                <p>
                    Avaliação inicial da área para aplicação.
                </p>
            </span>

            <h2>Grátis</h2>

            <Button text="Solicitar" secondary />

            <span className="hr" />

            <span className="features">
                <p>✔ Visita técnica</p>
            </span>

            <span className="features">
                <p>✔ Orçamento sem compromisso</p>
            </span>

        </div>

        <div className="pricing-card premium">

            <span className="bonus">
                <p>MAIS CONTRATADO</p>
            </span>

            <span className="plan">
                <h3>Premium</h3>

                <p>
                    Aplicação e dispersão agrícola com drones para culturas em geral.
                </p>
            </span>

            <span className="price">
                <h2>Consultar</h2>
            </span>

            <Button text="Solicitar orçamento" />

            <span className="hr" />

            <span className="features">
                <p>✔ Aplicação precisa</p>
            </span>

            <span className="features">
                <p>✔ Redução na perca de insumos</p>
            </span>

            <span className="features">
                <p>✔ Cobertura uniforme</p>
            </span>

        </div>

    </section>

</section>

<section id="contact" className="container">

    <header>
        <p className="desktop-only">
            Entre em contato
        </p>

        <h2>Solicite um orçamento</h2>
    </header>

    <form className="contact-form">

        <input
            type="text"
            placeholder="Seu nome"
        />

        <input
            type="email"
            placeholder="Seu e-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
        />

        <textarea
            placeholder="Descreva sua necessidade"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
        />

        <span>
       <button
    className="btn-primary"
    onClick={sendContactEmail}
>
    Enviar Mensagem
</button>
        </span>
        

    </form>

</section>



<footer className="footer">

<div className="container footer-content">

                    <div className="footer-brand">
                        <img className="footer-logo" src={Logo} alt="Logo NgDrones" width={140} height={48} />

                        <p>
                            Tecnologia e precisão para aplicações agrícolas com drones.
                        </p>



                        <div className="footer-social">
                            <a href="#" aria-label="Facebook">
                                <img src={facebook} alt="" width={20} height={20} />
                               
                            </a>
                        </div>
                    </div>









        <div>
            <h3>Empresa</h3>

            <ul>
                <li><a href="#">Sobre nós</a></li>
                <li><a href="#">Faça parte do time</a></li>
                <li><a href="#">Blog</a></li>
            </ul>
        </div>

        <div>
            <h3>Funcionalidades</h3>

            <ul>
                <li><a href="#">Aplicação Agrícola</a></li>
                <li><a href="#">Mapeamento Aéreo</a></li>
                <li><a href="#">Monitoramento</a></li>
                <li><a href="#">Análise de Dados</a></li>
            </ul>
        </div>

        <div>
            <h3>Recursos</h3>

            <ul>
                <li><a href="#">Aplicativo Android</a></li>
                <li><a href="#">Aplicativo iOS</a></li>
                <li><a href="#">Solicitar Demonstração</a></li>
                <li><a href="#">API de Integração</a></li>
            </ul>
        </div>

    </div>

    <div className="footer-bottom">
        <p>© 2026 NG DRONES. Todos os direitos reservados.</p>
    </div>

</footer>




          
        </>
    );
}       


