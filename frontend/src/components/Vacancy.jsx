import React from 'react';
import {Link} from "react-router-dom";
import {FaBriefcase} from "react-icons/fa";

function Vacancy({title, experience, location, description, company}) {
    return (
         <div className="flex flex-col rounded-lg bg-white mt-[20px] w-full shadow-xl px-5 py-4">
            <Link to='details' className='text-[#3c9df2] hover:text-red-500 font-semibold text-[18px]'>
                {title}
            </Link>
            <p className="font-light">
                {company}
            </p>
            <p className="font-light mb-4">
                {location}
            </p>
            <div className="flex items-center gap-2">
                <FaBriefcase/>
                <p>{experience}</p>
            </div>
            <p className="font-light mb-4">
                {description}
            </p>
            <button className="px-8 py-1 bg-green-500 hover:bg-green-600 w-fit rounded text-white">
                Reply
            </button>
        </div>
    );
}

export default Vacancy;