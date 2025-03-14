import {MediaImage} from 'iconoir-react';

interface ExperienceItemProps {
    title: string;
    date: string;
    jobTitle: string;
    location: string;
    descriptions: string[];
}

function ExperienceItem({title, date, jobTitle, location, descriptions}: ExperienceItemProps) {
    return (
        <article className="flex gap-2 border py-2 px-3 rounded">
            <div className="flex items-center">
                <MediaImage className="border rounded-full p-1"/>
            </div>
            <div>
                <span className="text-sm">{date}</span>
                <h3 className="text-xl">{title}</h3>
                <h4>{jobTitle}</h4>
            </div>
        </article>
    ) 
}

export default ExperienceItem
