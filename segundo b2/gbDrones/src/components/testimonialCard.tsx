interface TestimonialCardProps {
    name: string;
    role: string;
    text: string;
}

export default function TestimonialCard({
    name,
    role,
    text
}: TestimonialCardProps) {
    return (
        <div className="carousel-card">
            <span className="testimony">
                <p>{text}</p>
            </span>

            <span className="rating">
                ⭐⭐⭐⭐⭐
            </span>

            <span className="names">
                <p>{name}</p>
                <p>{role}</p>
            </span>
        </div>
    );
}