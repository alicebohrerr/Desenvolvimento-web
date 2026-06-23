// Importa o arquivo de estilos CSS do botão
import "../styles/button.css"

// Define o tipo das propriedades que o componente Button vai receber
interface IButtonProps {
    text: string;        // Texto que vai aparecer dentro do botão
    secondary?: boolean;  // Define se o botão é secundário (opcional)
}

// Cria o componente Button
export default function Button({ text, secondary }: IButtonProps) {
    return (
        // Renderiza um botão HTML
        // Se "secondary" for true, usa a classe "btn-secondary"
        // Se for false ou não existir, usa "btn-primary"
        <button className={secondary ? "btn-secondary" : "btn-primary"}>
            {/* Exibe o texto recebido via props dentro do botão */}
            {text}
        </button>
    )
}