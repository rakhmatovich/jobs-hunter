import React, { useState } from "react";
import SummaryLayout from "../../components/SummaryLayout";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { UPDATE_SUMMARY } from "../../utils/urls";
import { toast } from "react-toastify";

const Skills = ({ jobName }) => {
  const [description, setDescription] = useState("");

  const navigate = useNavigate();
  const handeSubmit = (e) => {
    e.preventDefault();
    const summaryId = localStorage.getItem("summary-id");

    axios
      .put(UPDATE_SUMMARY.replace("id", summaryId), {
        data: {
          description,
        },
      })
      .then(() => {
        toast.success('You have successfully created summary')
        navigate('/home')
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <SummaryLayout title={"What Skills Do You Have?"}>
      <div className="flex flex-col">
        <h6 className="text-gray-600 w-full font-normal mt-[20px]">
          Резюме «{jobName}»
        </h6>
        <form className="flex flex-col ml-10 mt-6" onSubmit={handeSubmit}>
          <textarea
          required={true}
            rows={5}
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="outline-none px-3 py-1 border border-gray-400"
            placeholder="Describe Your work Experience"
          ></textarea>

          <div className="flex justify-between mt-10 w-full border-t border-gray-400 pt-5">
            <Link
              to="/works/final"
              className="rounded-lg border border-gray-400 px-3 py-2"
            >
              Go back
            </Link>
            <button
              type="submit"
              to="/home"
              className="rounded-lg border border-gray-400 px-3 py-2"
            >
              Save and End
            </button>
          </div>
        </form>
      </div>
    </SummaryLayout>
  );
};

export default Skills;
