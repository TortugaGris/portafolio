interface ExperienceItemProps {
    title: string;
    date: string;
    jobTitle: string;
    logo: string
    location: string;
    descriptions: string[];
}
// <MediaImage className="border rounded-full p-1"/>

function ExperienceItem({title, date, jobTitle, logo, descriptions}: ExperienceItemProps) {
    return (
        <article className="flex gap-2 border border-gray-300 py-2 px-3 rounded">
            <div className="flex mt-2">
                <div className="rounded-full border border-gray-400 w-14 h-14 overflow-hidden flex items-center justify-center bg-white">
                    <img src={logo} className="object-cover"/>
                </div>
            </div>
            <div>
                <span className="text-sm text-gray-500">{date}</span>
                <h3 className="text-xl">{title}</h3>
                <h4>{jobTitle}</h4>
                <ul className="list-disc ml-4">
                    {descriptions.map(description => (
                        <li>{description}</li>
                    ))}
                </ul>
            </div>
        </article>
    ) 
}

export default ExperienceItem
