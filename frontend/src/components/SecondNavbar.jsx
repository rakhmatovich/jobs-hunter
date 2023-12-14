import React from 'react';
import {useNavigate} from "react-router-dom";

function SecondNavbar() {
    const navigate = useNavigate()
    const handleSubmit = event => {
        event.preventDefault()
        navigate('/')
    }
    return (
        <nav className="w-full bg-black flex items-center justify-center">
            <img src="/Small-removebg-preview.png" alt="" className='w-[5%] cursor-pointer' onClick={handleSubmit}/>
            <div className="w-[80%] flex items-center justify-between py-4">
                <div className="flex gap-4 justify-between">
                    <a href="#"
                       className="block py-2 px-3 text-white text-xl hover:text-blue-600 md:hover:text-blue-600">For
                        employers</a>
                    <a href="#"
                       className="block py-2 px-3 text-white text-xl hover:text-blue-600 md:hover:text-blue-600">Help</a>
                </div>
                <div className='flex gap-4 justify-between'>
                    <button
                        className="px-4 py-1 text-green-400 border-green-900 rounded-full border md:hover:bg-transparent hover:border-green-400 md:hover:border-green-400 md:border md:p-1 md:px-4 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent text-xl">Create
                        Summary
                    </button>
                    <a href='/name'
                       className="px-4 py-1 text-white border-gray-500 rounded-full border hover:border-white md:hover:bg-transparent md:hover:border-white md:border md:p-1 md:px-4 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent text-xl">Log
                        in
                    </a>
                </div>
            </div>
        </nav>
    );
}

export default SecondNavbar;