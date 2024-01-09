import React, {useState} from 'react';
import Reply from "./Reply.jsx";
import Card from "./Card.jsx";
import ReplyDetail from '../pages/ReplyDetail.jsx';


const defaultReplies = [
    {id: 1, title: 'Frontend разработчик (React)', company: 'ООО Свик', location:'Барнаул', salary: '3000000-45000000 som', experience:'1-4 years', description:'blablabla'},
    {id: 2, title: 'Frontend разработчик (React)', company: 'ООО Свик', location:'Барнаул', salary: '3000000-45000000 som', experience:'1-4 years', description:'blablabla'},
    {id: 3, title: 'Frontend разработчик (React)', company: 'ООО Свик', location:'Барнаул', salary: '3000000-45000000 som', experience:'1-4 years', description:'blablabla'},
    {id: 4, title: 'Frontend разработчик (React)', company: 'ООО Свик', location:'Барнаул', salary: '3000000-45000000 som', experience:'1-4 years', description:'blablabla'},
    {id: 5, title: 'Frontend разработчик (React)', company: 'ООО Свик', location:'Барнаул', salary: '3000000-45000000 som', experience:'1-4 years', description:'blablabla'},
    {id: 6, title: 'Frontend разработчик (React)', company: 'ООО Свик', location:'Барнаул', salary: '3000000-45000000 som', experience:'1-4 years', description:'blablabla'},

]

function Replies() {
    const [replies, setReplies] = useState(defaultReplies)

    return (
        <div className='flex flex-col pb-10'>
            <h1 className="text-[28px] font-semibold mt-5">Вам подойдут эти вакансии</h1>
            {replies && replies.map(reply => (
                <Reply
                    title={reply.title}
                    salary={reply.salary}
                    company={reply.company}
                    location={reply.location}
                    experience={reply.experience}
                    description={reply.description}
                />
            ))}
        </div>
    );
}

export default Replies;
