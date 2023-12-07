import React, {useState} from 'react';
import Reply from "./Reply.jsx";
import Card from "./Card.jsx";


const defaultReplies = [
    {id: 1, title: 'abc', salary: '3000000-45000000 som', experience:'1-4 years', text:'blablabla'},
    {id: 2, title: 'abc', salary: '3000000-45000000 som', experience:'1-4 years', text:'blablabla'},
    {id: 3, title: 'abc', salary: '3000000-45000000 som', experience:'1-4 years', text:'blablabla'},
    {id: 4, title: 'abc', salary: '3000000-45000000 som', experience:'1-4 years', text:'blablabla'},
    {id: 5, title: 'abc', salary: '3000000-45000000 som', experience:'1-4 years', text:'blablabla'},
    {id: 6, title: 'abc', salary: '3000000-45000000 som', experience:'1-4 years', text:'blablabla'},

]

function Replies(props) {
    const [replies, setReplies] = useState(defaultReplies)
    return (
        <div className='flex justify-between flex-wrap px-20 py-10'>
            {replies && replies.map(reply => (
                <Reply
                    title={reply.title}
                    salary={reply.salary}
                    experience={reply.experience}
                    text={reply.text}
                />
            ))}
        </div>
    );
}

export default Replies;