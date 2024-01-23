import React, { useContext, useState } from "react";
import SecondNavbar from "../components/SecondNavbar.jsx";
import Footer from "../components/Footer.jsx";
import { toast } from "react-toastify";
import { UserProvider } from "../Router.jsx";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { AUTH } from "../utils/urls.js";

function Login() {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post(AUTH, {
        identifier: email,
        password,
      })
      .then((res) => {
        localStorage.setItem("user", JSON.stringify(res.data.user));
        toast.success(
          `Welcome ${res.data.user.username} ${res.data.user.lastname}`
        );
        navigate("/");
      })
      .catch((err) => {
        toast.error(err.response.data.error.message);
        console.log(err);
      });
  };

  return (
    <div>
      <SecondNavbar />
      <div className="flex items-center justify-center w-full h-[80vh]">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 shadow-xl p-5 w-[600px]"
        >
          <h1 className="text-[28px] font-semibold">Поиск работы</h1>

          <input
            type="email"
            className="border-gray-600 border rounded px-3 py-2 outline-none"
            required={true}
            onInput={(event) => setEmail(event.target.value)}
            placeholder="Enter Your Email"
          />
          <input
            type="password"
            className="border-gray-600 border rounded px-3 py-2 outline-none"
            required={true}
            onInput={(event) => setPassword(event.target.value)}
            placeholder="Enter Password"
          />

          <button
            type="submit"
            disabled={loading}
            className="bg-blue-700 px-[60px] py-2 rounded text-white"
          >
            Continue
          </button>
          <a href="/signup" className="text-blue-600 text-center">Do not have an account? Sign up!</a>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default Login;
