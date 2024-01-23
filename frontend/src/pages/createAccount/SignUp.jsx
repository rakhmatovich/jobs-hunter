import React, {useContext, useState} from 'react';
import {useNavigate} from "react-router-dom";
import emailjs from "@emailjs/browser";
import SecondNavbar from "../../components/SecondNavbar.jsx";
import Footer from "../../components/Footer.jsx";
import {UserProvider} from "../../Router.jsx";
import {generateRandomCode} from "../../utils/generateRandomCode.js";
import {toast} from "react-toastify";

function SignUp() {
    const {email, setEmail, setEmailCode} = useContext(UserProvider);
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false)


    const handleSubmit = event => {
        event.preventDefault()
        if (email) {
            const serviceId = 'service_lqnba2b'
            const templateId = 'template_9pfcl1h'
            const publicKey = 'iJcajhgHuSGAuh2vv'
            const generatedCode = generateRandomCode()

            const templateParams = {
                from_name: 'Jobs hunter',
                to_name: email.split('@')[0],
                to_email: email,
                message: generatedCode
            }

            setLoading(true)
            emailjs.send(serviceId, templateId, templateParams, publicKey)
                .then((response) => {
                    console.log('Email sent Successfully!', response)
                    setEmailCode(generatedCode)
                    navigate('/confirm')
                    toast.success("Email sent Successfully!");})
                .catch((error) => {
                    toast.error("Error Sending Mail!");
                    console.error('Error Sending Mail!', error);
                })
                .finally(() => {
                    setLoading(false)
                })
        }
    }

    return (
        <div>
            <SecondNavbar/>
            <div className="flex items-center justify-center w-full h-[80vh]">
                <form onSubmit={handleSubmit} className='flex flex-col gap-4 shadow-xl p-5 w-[600px]'>
                    <h1 className="text-[28px] font-semibold">Поиск работы</h1>

                    <input
                        type="email"
                        className='border-gray-600 border rounded px-3 py-2 outline-none'
                        required={true}
                        onInput={e => setEmail(e.target.value)}
                        placeholder='Enter Your Email'
                    />

                    <button
                        type="submit"
                        disabled={loading}
                        className='bg-blue-700 px-[60px] py-2 rounded text-white'
                    >
                        Continue
                    </button>

                    <a href='/login' className='text-blue-600 text-center'>Already have an account? Log in!</a>
                </form>
            </div>
            <Footer/>
        </div>
    );
}

export default SignUp;


