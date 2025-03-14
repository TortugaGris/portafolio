interface ProyectItemProps {
    title: string;
    date: string;
    descriptions: string[];
}

function ProyectItem({title, date, descriptions}: ProyectItemProps) {
    return (
        <article className="flex flex-col border py-2 px-3 rounded">
            <span className="text-sm">{date}</span>
            <h3 className="text-xl">{title}</h3>
            <ul className="list-disc ml-4">
                {descriptions.map(description => (
                    <li>{description}</li>
                ))}
            </ul>
        </article>
    )
}

export default ProyectItem
