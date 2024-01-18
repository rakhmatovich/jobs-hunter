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
            </div>
        </nav>
    );
}

export default SecondNavbar;