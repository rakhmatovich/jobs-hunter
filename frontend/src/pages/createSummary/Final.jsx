import React, { useState } from "react";
import SummaryLayout from "../../components/SummaryLayout";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { CREATE_EXPERIENCE } from "../../utils/urls";

const Final = ({ jobName }) => {
  const [current, setCurrent] = useState(false);
  const [company, setCompany] = useState("");
  const [work, setWork] = useState("");
  const [workStart, setWorkStart] = useState("");
  const [workEnd, setWorkEnd] = useState("");
  const [workDetail, setWorkDetail] = useState("");

  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    const summaryId = localStorage.getItem("summary-id");

    axios
      .post(CREATE_EXPERIENCE, {
        data: {
          company,
          profession: work,
          details: workDetail,
          start: workStart,
          end: workEnd,
          summary: summaryId,
        },
      })
      .then(() => navigate('/works/skills'))
      .catch((err) => console.log(err));
  };

  return (
    <SummaryLayout title={"Tell US About Your Work Experience"}>
      <div className="flex flex-col">
        <h6 className="text-gray-600 w-full font-normal mt-[20px]">
          Резюме «{jobName}»
        </h6>
        <form className="flex flex-col ml-10 mt-6" onSubmit={handleSubmit}>
          <div>
            <div>
              <h1 className="font-bold text-xl mb-3">
                In What Company Did You Work?
              </h1>
              <input
              required={true}
                type="text"
                className="outline-none px-3 py-1 border border-gray-400 w-full"
                placeholder="Company Name"
                onInput={(e) => setCompany(e.target.value)}
              />
            </div>
            <div className="mt-5">
              <h1 className="font-bold text-xl mb-3">In What Work?</h1>
              <input
              required={true}
                type="text"
                className="outline-none px-3 py-1 border border-gray-400 w-full"
                onInput={(e) => setWork(e.target.value)}
              />
            </div>
            <div className="mt-5">
              <h1 className="font-bold text-xl mb-3">
                Tell Us about Your Work
              </h1>
              <textarea
                type="text"
                required={true}
                className="outline-none px-3 py-1 border border-gray-400 w-full"
                onInput={(e) => setWorkDetail(e.target.value)}
              />
            </div>
          </div>
          <div className="flex">
            <div className="flex flex-col">
              <h1 className="font-bold text-xl mb-3">Work Start</h1>
              <input
                type="date"
                required={true}
                className="outline-none px-3 py-1 border border-gray-400 "
                onInput={(e) => setWorkStart(e.target.value)}
              />
            </div>
            <div className="ml-[50px] flex flex-col">
              <h1 className="font-bold text-xl mb-3">Work End</h1>
              {!current && (
                <input
                  type="date"
                  required={true}
                  className="outline-none px-3 py-1 border border-gray-400"
                  onInput={(e) => setWorkEnd(e.target.value)}
                />
              )}
              <label htmlFor="" className="flex items-center mt-2">
                <input
                  type="checkbox"
                  required={true}
                  className="mr-2 w-4 h-4"
                  value={current}
                  onChange={(e) => setCurrent((p) => !p)}
                />
                To Present Time
              </label>
            </div>
          </div>
          <div className="flex justify-between mt-10 w-full border-t border-gray-400 pt-5">
            <Link
              to="/works/educationinfo"
              className="rounded-lg border border-gray-400 px-3 py-2"
            >
              Go back
            </Link>
            <Link
              to="/works/skills"
              className="rounded-lg border border-gray-400 px-3 py-2"
            >
              No experience
            </Link>
            <button
              type="submit"
              className="rounded-lg border border-gray-400 px-3 py-2"
            >
              Save and Continue
            </button>
          </div>
        </form>
      </div>
    </SummaryLayout>
  );
};

export default Final;
