import React, {useContext, useEffect, useState} from 'react';
import SecondNavbar from "../../components/SecondNavbar.jsx";
import Footer from "../../components/Footer.jsx";
import {useNavigate} from "react-router-dom";
import {UserProvider} from "../../Router.jsx";
import {toast} from "react-toastify";

function ConfirmEmail() {
    const {emailCode} = useContext(UserProvider);
    const [timeLeft, setTimeLeft] = useState(60);
    const [code, setCode] = useState('')

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTimeLeft(timeLeft => {
                if (timeLeft > 0) {
                    return timeLeft - 1
                }
            });
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);


    const navigate = useNavigate()
    const handleSubmit = event => {
        event.preventDefault()
        if (code === emailCode) {
            toast.success('You successfully confirmed your email')
            navigate('/name')
            return
        }
        toast.error('Wrong passcode')
    }

    const resend = () => {
        setTimeLeft(60)
    }

    return (
        <div>
            <SecondNavbar/>
            <div className="flex items-center justify-center w-full h-[80vh]">
                <form onSubmit={handleSubmit} className='flex flex-col gap-4 shadow-xl p-5 w-[600px]'>
                    <h1 className="text-[28px] font-semibold">Please Confirm Your Email via Code</h1>
                    <input type="text" className='border-gray-600 border rounded px-3 py-2 outline-none'
                           required={true}
                           value={code}
                           onInput={e => setCode(e.target.value)}
                           placeholder='Enter Code'/>
                    {timeLeft ?
                        <p>Resend code after {timeLeft} seconds</p>
                        :
                        <p className="text-blue-600 cursor-pointer" onClick={resend}>Resend code</p>
                    }
                    <button className='bg-blue-700 px-[60px] py-2 rounded text-white'>Continue</button>
                </form>
            </div>

            <Footer/>
        </div>
    );
}

export default ConfirmEmail;
