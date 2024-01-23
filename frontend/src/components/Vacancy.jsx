import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaBriefcase } from "react-icons/fa";
import { CREATE_REPLY } from "../utils/urls";
import axios from "axios";
import { toast } from "react-toastify";

function Vacancy({ title, experience, location, description, company, id }) {

  const navigate = useNavigate()

  async function useReply() {
    const { id: user } = JSON.parse(localStorage.getItem("user"));

    await axios
      .post(CREATE_REPLY, {
        data: {
          status: "waiting",
          user,
          vacancy: id,
        },
      })
      .then(() => {
        toast.success("You applied for this job successfully");
        navigate("/summaries");
      })
      .catch((err) => {
        console.log(err);
        toast.error("Something went wrong");
      });
  }
  return (
    <div className="flex flex-col rounded-lg bg-white mt-[20px] w-full shadow-xl px-5 py-4">
      <Link
        to={`/summaries/${id}`}
        className="text-[#3c9df2] text-[22px] hover:text-red-500 font-semibold"
      >
        {title}
      </Link>
      <p className="font-medium">{company}</p>
      <p className="font-normal">{location}</p>
      <div className="flex items-center gap-2 my-2">
        <FaBriefcase />
        <p>{experience.split("-").join(" ")}</p>
      </div>
      <p className="mb-2">{description}</p>
      <button
        className="px-8 py-1 bg-green-500 hover:bg-green-600 w-fit rounded text-white"
        onClick={() => useReply()}
      >
        Reply
      </button>
    </div>
  );
}

export default Vacancy;
