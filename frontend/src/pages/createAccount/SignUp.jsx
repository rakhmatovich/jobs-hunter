import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";
import SecondNavbar from "../../components/SecondNavbar.jsx";
import Footer from "../../components/Footer.jsx";

function SignUp() {
    const [email, setEmail] = useState('')
    const navigate = useNavigate()
    const handleSubmit = event => {
        event.preventDefault()
        if (email) navigate('/confirm')
    }

    return (
        <div>
            <SecondNavbar/>
            <div className="flex items-center justify-center w-full h-[80vh]">
                <form onSubmit={handleSubmit} className='flex flex-col gap-4 shadow-xl p-5 w-[600px]'>
                    <h1 className="text-[28px] font-semibold">Поиск работы</h1>
                    <input type="email" className='border-gray-600 border rounded px-3 py-2 outline-none'
                           required={true} value={email} onInput={e => setEmail(e.target.value)}
                           placeholder='Enter Your Email'/>
                    <button className='bg-blue-700 px-[60px] py-2 rounded text-white'>Continue</button>
                </form>
            </div>
            <Footer/>
        </div>
    );
}

export default SignUp;