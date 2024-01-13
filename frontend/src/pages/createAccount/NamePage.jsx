import React, {useContext, useState} from "react";
import SecondNavbar from "../../components/SecondNavbar.jsx";
import {useNavigate} from "react-router-dom";
import Footer from "../../components/Footer.jsx";
import axios from "axios";
import {USERS} from "../../utils/urls.js";
import {toast} from "react-toastify";
import {UserProvider} from "../../Router.jsx";

function NamePage() {
    const {email} = useContext(UserProvider);

    const navigate = useNavigate();

    const [firstname, setFirstname] = useState('')
    const [secondname, setSecondname] = useState('')
    const [password, setPassword] = useState('')
    const [password2, setPassword2] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault();
        if (password !== password2) {
            toast.error(`Password doesn't match`)
            return
        }
        axios
            .post(USERS, {
                username: firstname,
                lastname: secondname,
                email,
                confirmed: true,
                role: 1,
                password
            })
            .then((res) => {
                navigate("/home")
                localStorage.setItem('user', JSON.stringify(res.data))
                toast.success(`Welcome ${firstname} ${secondname}`)
            })
            .catch(err => {
                toast.error(err.response.data.error.message)
                console.error(err)
            });
    };

    return (
        <div>
            <SecondNavbar/>
            <div className="flex items-center justify-center w-full h-[80vh]">
                <form
                    className="flex flex-col gap-4 shadow-xl p-5 w-[600px]"
                    onSubmit={handleSubmit}
                >
                    <h1 className="text-xl text-center">Lets Get Acquainted</h1>
                    <input
                        className="border-gray-600 border rounded px-3 py-2 outline-none"
                        type="text"
                        onInput={event => {
                            setFirstname(event.target.value)
                        }}
                        required={true}
                        placeholder="First Name"
                    />
                    <input
                        className="border-gray-600 border rounded px-3 py-2 outline-none"
                        type="text"
                        required={true}
                        onInput={event => {
                            setSecondname(event.target.value)
                        }}
                        placeholder="Last Name"
                    />
                    <input
                        className="border-gray-600 border rounded px-3 py-2 outline-none"
                        type="password"
                        required={true}
                        onInput={event => {
                            setPassword(event.target.value)
                        }}
                        placeholder="Password"
                    />
                    <input
                        className="border-gray-600 border rounded px-3 py-2 outline-none"
                        type="password"
                        required={true}
                        onInput={event => {
                            setPassword2(event.target.value)
                        }}
                        placeholder="Confirm password"
                    />
                    <button className="bg-blue-700 px-[60px] py-[5px] rounded text-white mt-[5px]">
                        Continue
                    </button>
                </form>
            </div>

            <Footer/>
        </div>
    );
}

export default NamePage;
