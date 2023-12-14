import React from "react";
import SecondNavbar from "../../components/SecondNavbar.jsx";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../../components/Footer.jsx";

function NamePage() {
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    navigate("/works");
  };


  return (
    <div>
      <SecondNavbar />
      <div className="flex items-center justify-center w-full h-[80vh]">
        <form
          className="flex flex-col gap-4 shadow-xl p-5 w-[600px]"
          onSubmit={handleSubmit}
        >
          <h1 className="text-xl text-center">Lets Get Acquainted</h1>
          <input
            type="text"
            required={true}
            placeholder="First Name"
          />
          <input
            type="text"
            required={true}
            placeholder="Last Name"
          />
          <button className="bg-blue-700 px-[60px] py-[5px] rounded text-white mt-[5px]">
            Continue
          </button>
        </form>
      </div>

      <Footer />
    </div>
  );
}

export default NamePage;
