import React, { useState } from "react";
import SummaryLayout from "../../components/SummaryLayout";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { CREATE_SUMMARY } from "../../utils/urls";
import { toast } from "react-toastify";

export default function SummaryDetails({ jobName }) {
  const [phone, setPhone] = useState("+998");
  const [isMan, setIsMan] = useState(true);
  const [date, setDate] = useState("");
  const [region, setRegion] = useState("");
  const user = JSON.parse(localStorage.getItem("user") || "{}");
  
  const navigate = useNavigate()

  

  const createSummary = () => {
    axios
      .post(CREATE_SUMMARY, {
        data: {
          job_title: jobName,
          gender: isMan ? "male" : "female",
          birthday: date,
          region,
          phone,
          user: user.id,
        },
      })
      .then((res) => {
        console.log(res);
        localStorage.setItem("summary-id", JSON.stringify(res.data.data.id));
        navigate('/works/education')      
      })
      .catch((err) => console.log(err));
  };

  return (
    <SummaryLayout title="Заполните основную информацию">
      <div className="ml-[50px] flex flex-col items-center">
        <h6 className="text-gray-600 w-full font-normal mt-[20px]">
          Резюме «{jobName}»
        </h6>
        <form className="w-[90%] mt-5 pr-28">
          <div className="mt-[10px]">
            <h1 className="font-bold">Second Name</h1>
            <input
            required={true}
              type="text"
              value={user.lastname}
              className="outline-none px-3 py-1 mt-2 border border-gray-400 w-full"
            />
          </div>
          <div className="mt-[10px]">
            <h1 className="font-bold">First Name</h1>
            <input
            required={true}
              type="text"
              value={user.username}
              className="outline-none px-3 py-1 mt-2 border border-gray-400 w-full"
            />
          </div>
          <div className="mt-[10px]">
            <h1 className="font-bold mb-2">Gender</h1>
            <label
              htmlFor="man"
              className={`border-gray-600 rounded-2xl px-3 py-1 border mr-2 mt-3 ${
                isMan ? "bg-gray-400" : "bg-white"
              }`}
            >
              <input
              required={true}
                type="radio"
                id="man"
                name="gender"
                onChange={() => setIsMan(true)}
              />
              Male
            </label>
            <label
              htmlFor="woman"
              className={`border-gray-600 rounded-2xl px-3 py-1 border mt-3 ${
                !isMan ? "bg-gray-400" : "bg-white"
              }`}
            >
              <input
              required={true}
                type="radio"
                id="woman"
                name="gender"
                onChange={() => setIsMan(false)}
              />
              Female
            </label>
          </div>
          <div className="mt-[10px]">
            <h1 className="font-bold">Your Region</h1>
            <input
            required={true}
              type="text"
              value={region}
              onInput={(e) => setRegion(e.target.value)}
              className="outline-none px-3 py-1 mt-2 border border-gray-400 w-full"
            />
          </div>
          <div className="mt-[10px]">
            <h1 className="font-bold">Your Birthday</h1>
            <input
            required={true}
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="outline-none px-3 py-1 mt-2 border border-gray-400 w-full"
            />
          </div>
          <div className="mt-[10px]">
            <h1 className="font-bold">Telephone Number</h1>
            <input
            required={true}
              type="text"
              placeholder="+998"
              value={phone}
              onInput={(e) => setPhone(e.target.value)}
              className="outline-none px-3 py-1 mt-2 border border-gray-400 w-full"
            />
          </div>
        </form>
        <div className="flex justify-between mt-10 w-full border-t border-gray-400 pt-5">
          <Link
            to="/works/choose-job"
            className="rounded-lg border border-gray-400 px-3 py-2"
          >
            Go back
          </Link>
          <button
            onClick={createSummary}
            className="rounded-lg border border-gray-400 px-3 py-2"
          >
            Save and Continue
          </button>
        </div>
      </div>
    </SummaryLayout>
  );
}
