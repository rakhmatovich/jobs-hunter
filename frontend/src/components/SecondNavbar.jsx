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
            </div>
        </nav>
    );
}

export default SecondNavbar;