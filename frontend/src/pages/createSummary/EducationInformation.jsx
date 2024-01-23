import React, { useState } from "react";
import SummaryLayout from "../../components/SummaryLayout";
import { Link, useNavigate } from "react-router-dom";
import { CREATE_EDUCATION } from "../../utils/urls";
import axios from "axios";

const EducationInformation = ({ jobName }) => {
  const [facility, setFacility] = useState("");
  const [faculity, setFaculity] = useState("");
  const [specialization, setSpecialization] = useState("");
  const [year, setYear] = useState("");

  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    const level = localStorage.getItem("education");
    const summaryId = localStorage.getItem('summary-id')
    axios
      .post(CREATE_EDUCATION, {
        data: {
          ending_year: year,
          level,
          facility,
          faculity,
          specialization,
          summary: summaryId,
        },
      })
      .then(() => navigate('/works/final'))
      .catch((err) => console.log(err));
  };

  return (
    <SummaryLayout title={"What Education Did You End ?"}>
      <div className="flex flex-col">
        <h6 className="text-gray-600 w-full font-normal mt-[20px]">
          Резюме «{jobName}»
        </h6>
        <form className="flex flex-col ml-10 mt-7" onSubmit={handleSubmit}>
          <div className="mt-6">
            <h1 className="text-xl font-bold mb-4">
              Name of Your Learning Facility
            </h1>
            <input
            required={true}
              type="text"
              onInput={(e) => setFacility(e.target.value)}
              value={facility}
              placeholder="Learning Facility Name"
              className="outline-none px-3 py-1 border border-gray-400 w-full"
            />
          </div>
          <div className="mt-6">
            <h1 className="text-xl font-bold mb-4">Faculity</h1>
            <input
            required={true}
              type="text"
              onInput={(e) => setFaculity(e.target.value)}
              value={faculity}
              className="outline-none px-3 py-1 border border-gray-400 w-full"
            />
          </div>
          <div className="mt-6">
            <h1 className="text-xl font-bold mb-4">Specialization</h1>
            <input
            required={true}
              type="text"
              onInput={(e) => setSpecialization(e.target.value)}
              value={specialization}
              className="outline-none px-3 py-1 border border-gray-400 w-full"
            />
          </div>
          <div className="mt-6">
            <h1 className="text-xl font-bold mb-4">Year of Ending</h1>
            <input
            required={true}
              type="text"
              onInput={(e) => setYear(e.target.value)}
              value={year}
              className="outline-none px-3 py-1 border border-gray-400 "
            />
          </div>
          <div className="flex justify-between mt-10 w-full border-t border-gray-400 pt-5">
            <Link
              to="/works/education"
              className="rounded-lg border border-gray-400 px-3 py-2"
            >
              Go back
            </Link>
            <Link
              to="/works/final"
              className="rounded-lg border border-gray-400 px-3 py-2"
            >
              No education
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

export default EducationInformation;
