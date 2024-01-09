import React from 'react';
import {Link} from "react-router-dom";
import {FaBriefcase} from "react-icons/fa";

function Vacancy({title, experience, location, description, company, id}) {
    return (
         <div className="flex flex-col rounded-lg bg-white mt-[20px] w-full shadow-xl px-5 py-4">
            <Link to={`/summaries/${id}`} className='text-[#3c9df2] text-[22px] hover:text-red-500 font-semibold'>
                {title}
            </Link>
            <p className="font-medium">
                {company}
            </p>
            <p className="font-normal">
                {location}
            </p>
            <div className="flex items-center gap-2 my-2">
                <FaBriefcase/>
                <p>{experience.split('-').join(' ')}</p>
            </div>
            <p className="mb-2">
                {description}
            </p>
            <button className="px-8 py-1 bg-green-500 hover:bg-green-600 w-fit rounded text-white">
                Reply
            </button>
        </div>
    );
}

export default Vacancy;