interface CardProps {
    icon: string;
    title: string;
    description: string;
}

export default function Card({
    icon,
    title,
    description
}: CardProps) {
    return (
        <div className="card">
            <span className="card-icon">{icon}</span>

            <h3>{title}</h3>

            <p>{description}</p>
        </div>
    );
}