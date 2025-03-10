interface ProyectItemProps {
    title: string;
    date: string;
    descriptions: string[];
}

function ProyectItem({title, date, descriptions}: ProyectItemProps) {
    return (
        <article className="flex flex-col gap-1">
            <header className="flex justify-between">
                <h3 className="text-xl">{title}</h3>
                <span className="text-xl">{date}</span>
            </header>
            <ul className="list-disc ml-4">
                {descriptions.map(description => (
                    <li>{description}</li>
                ))}
            </ul>
        </article>
    )
}

export default ProyectItem
