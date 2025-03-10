interface ExperienceItemProps {
    title: string;
    date: string;
    jobTitle: string;
    location: string;
    descriptions: string[];
}

function ExperienceItem({title, date, jobTitle, location, descriptions}: ExperienceItemProps) {
    return (
        <article className="flex flex-col gap-1">
            <header className="flex justify-between">
                <h3 className="text-xl">{title}</h3>
                <span className="text-xl">{date}</span>
            </header>
            <div className="flex justify-between">
                <h4>{jobTitle}</h4>
                <span>{location}</span>
            </div>
            <ul className="list-disc ml-4">
                {descriptions.map(description => (
                    <li>{description}</li>
                ))}
            </ul>
        </article>
    ) 
}

export default ExperienceItem
