import React from 'react';
import {Link} from "react-router-dom";

function Navbar() {
    return (
        <nav className="w-full bg-[#222324] flex items-center justify-center">
            <Link to='/home' >
                <img src="/Small-removebg-preview.png" alt="" className='w-[110px]'/>
            </Link>

            <div className="w-[80%] flex items-center justify-between py-5">
                <div className="flex gap-4 justify-between">
                    <Link to="/summaries"
                       className="block py-2 px-3 text-white text-xl hover:text-blue-600 md:hover:text-blue-600">My
                        Summaries</Link>
                    <Link to="/replies"
                       className="block py-2 px-3 text-white text-xl hover:text-blue-600 md:hover:text-blue-600">Replies</Link>
                    <Link to="#"
                       className="block py-2 px-3 text-white text-xl hover:text-blue-600 md:hover:text-blue-600">Help</Link>
                       <Link to="/works"
                       className="block py-2 px-3 text-white text-xl hover:text-blue-600 md:hover:text-blue-600">Work</Link>
                </div>
                <div className='flex gap-4 justify-between'>
                    <button
                        className="px-4 py-1 text-white rounded-full bordermd:hover:bg-transparent hover:text-blue-600 md:p-1 md:px-4 dark:text-white dark:hover:bg-gray-700 md:dark:hover:bg-transparent text-xl">Search
                    </button>
                    <button
                        className="px-4 py-1 text-green-400 border-green-900 rounded-full border md:hover:bg-transparent hover:border-green-400 md:hover:border-green-400 md:border md:p-1 md:px-4 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent text-xl">Create
                        Summary
                    </button>
                    <a className='text-white mt-[8px]' href="/account">Account Settings</a>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;