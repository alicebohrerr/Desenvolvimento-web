// Define o tipo das propriedades que o componente vai receber
interface TestimonialCardProps {
    name: string;   // Nome da pessoa
    role: string;   // Cargo ou função da pessoa
    text: string;   // Texto do depoimento
    image: string;  // URL da imagem da pessoa
}

// Componente que exibe um card de depoimento
export default function TestimonialCard({
    name,
    role,
    text,
    image
}: TestimonialCardProps) {
    return (
        // Container principal do card
        <div className="carousel-card">

            {/* Imagem da pessoa com alt usando o nome */}
            <img
                src={image}
                alt={name}
                className="testimonial-image"
            />

            {/* Texto do depoimento */}
            <span className="testimony">
                <p>{text}</p>
            </span>

            {/* Avaliação em estrelas (fixa) */}
            <span className="rating">
                ⭐⭐⭐⭐⭐
            </span>

            {/* Nome e cargo da pessoa */}
            <span className="names">
                <p>{name}</p>
                <p>{role}</p>
            </span>

        </div>
    );
}