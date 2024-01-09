import React, { useState } from "react";
import SummaryLayout from "../../components/SummaryLayout";
import { Link } from "react-router-dom";

export default function SummaryDetails({ jobName }) {
  const [phone, setPhone] = useState("+998");
  const [isMan, setIsMan] = useState(true);
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
              type="text"
              className="outline-none px-3 py-1 mt-2 border border-gray-400 w-full"
            />
          </div>
          <div className="mt-[10px]">
            <h1 className="font-bold">First Name</h1>
            <input
              type="text"
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
              type="text"
              className="outline-none px-3 py-1 mt-2 border border-gray-400 w-full"
            />
          </div>
          <div className="mt-[10px]">
            <h1 className="font-bold">Your Birthday</h1>
            <input
              type="date"
              className="outline-none px-3 py-1 mt-2 border border-gray-400 w-full"
            />
          </div>
          <div className="mt-[10px]">
            <h1 className="font-bold">Telephone Number</h1>
            <input
              type="text"
              placeholder="+998"
              value={phone}
              onInput={(e) => setPhone(e.target.value)}
              className="outline-none px-3 py-1 mt-2 border border-gray-400 w-full"
            />
          </div>
        </form>
        <div className="flex justify-between mt-10 w-full border-t border-gray-400 pt-5">
          <Link to="/works/choose-job" className="rounded-lg border border-gray-400 px-3 py-2">
            Go back
          </Link>
          <Link to="/works/education" className="rounded-lg border border-gray-400 px-3 py-2">
            Save and Continue
          </Link>
        </div>
      </div>
    </SummaryLayout>
  );
}
