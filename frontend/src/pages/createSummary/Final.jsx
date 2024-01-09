import React, { useState } from "react";
import SummaryLayout from "../../components/SummaryLayout";
import { Link } from "react-router-dom";

const Final = ({ jobName }) => {
  const [current, setCurrent] = useState(false);

  return (
    <SummaryLayout title={"Tell US About Your Work Experience"}>
      <div className="flex flex-col">
        <h6 className="text-gray-600 w-full font-normal mt-[20px]">
          Резюме «{jobName}»
        </h6>
        <form className="flex flex-col ml-10 mt-6">
          <div>
            <div>
              <h1 className="font-bold text-xl mb-3">
                In What Company Did You Work?
              </h1>
              <input
                type="text"
                className="outline-none px-3 py-1 border border-gray-400 w-full"
                placeholder="Company Name"
              />
            </div>
            <div className="mt-5">
              <h1 className="font-bold text-xl mb-3">In What Work?</h1>
              <input
                type="text"
                className="outline-none px-3 py-1 border border-gray-400 w-full"
              />
            </div>
            <div className="mt-5">
              <h1 className="font-bold text-xl mb-3">
                Tell Us about Your Work
              </h1>
              <textarea
                type="text"
                className="outline-none px-3 py-1 border border-gray-400 w-full"
              />
            </div>
          </div>
          <div className="flex">
            <div className="flex flex-col">
              <h1 className="font-bold text-xl mb-3">Work Start</h1>
              <input
                type="date"
                className="outline-none px-3 py-1 border border-gray-400 "
              />
            </div>
            <div className="ml-[50px] flex flex-col">
              <h1 className="font-bold text-xl mb-3">Work End</h1>
              {!current && (
                <input
                  type="date"
                  className="outline-none px-3 py-1 border border-gray-400"
                />
              )}
              <label htmlFor="" className="flex items-center mt-2">
                <input
                  type="checkbox"
                  className="mr-2 w-4 h-4"
                  value={current}
                  onChange={(e) => setCurrent(p => !p)}
                />
                To Present Time
              </label>
            </div>
          </div>
        </form>
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
            Save and Continue
          </Link>
        </div>
      </div>
    </SummaryLayout>
  );
};

export default Final;
