import React, { useEffect, useState } from "react";
import SummaryLayout from "../../components/SummaryLayout";
import { Link } from "react-router-dom";

const educations = [
  { id: 1, name: "Middle" },
  { id: 2, name: "Middle Special" },
  { id: 3, name: "Not ended Upper" },
  { id: 4, name: "Upper" },
  { id: 5, name: "Bachelor" },
  { id: 6, name: "Magister" },
  { id: 7, name: "PhD" },
  { id: 8, name: "DS" },
];

const Education = ({ jobName }) => {
  const [education, setEducation] = useState("");

  useEffect(() => {
    localStorage.setItem("education", education);
  }, [education]);

  return (
    <SummaryLayout title={"What Education Do YOU Have?"}>
      <div className="flex flex-col">
        <h6 className="text-gray-600 w-full font-normal mt-[20px]">
          Резюме «{jobName}»
        </h6>
        <div className="ml-[100px] mt-[30px]">
          <h1 className="font-bold text-xl">Education Level</h1>
          <form className="flex flex-col">
            {educations.map((edu) => (
              <label
                htmlFor={edu.name}
                key={edu.id}
                className="text-[20px] my-1 flex items-center gap-2"
              >
                <input
                required={true}
                  type="radio"
                  id={edu.name}
                  name="educaition"
                  className="w-5 h-5"
                  onClick={() => setEducation(edu.name)}
                />
                <span>{edu.name}</span>
              </label>
            ))}
          </form>
          <div className="flex justify-between mt-10 w-full border-t border-gray-400 pt-5">
            <Link
              to="/works/detail"
              className="rounded-lg border border-gray-400 px-3 py-2"
            >
              Go back
            </Link>
            <Link
              to="/works/educationinfo"
              className="rounded-lg border border-gray-400 px-3 py-2"
            >
              Save and Continue
            </Link>
          </div>
        </div>
      </div>
    </SummaryLayout>
  );
};

export default Education;
