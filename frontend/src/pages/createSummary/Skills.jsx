import React from "react";
import SummaryLayout from "../../components/SummaryLayout";
import { Link } from "react-router-dom";

const Skills = ({ jobName }) => {
  return (
    <SummaryLayout title={"What Skills Do You Have?"}>
      <div className="flex flex-col">
        <h6 className="text-gray-600 w-full font-normal mt-[20px]">
          Резюме «{jobName}»
        </h6>
        <form className="flex flex-col ml-10 mt-6">
          <textarea
          rows={5}
            type="text"
            className="outline-none px-3 py-1 border border-gray-400"
            placeholder="Describe Your work Experience"
          ></textarea>
          
        </form>
        <div className="flex justify-between mt-10 w-full border-t border-gray-400 pt-5">
          <Link
            to="/works/final"
            className="rounded-lg border border-gray-400 px-3 py-2"
          >
            Go back
          </Link>
          <Link
            to="/home"
            className="rounded-lg border border-gray-400 px-3 py-2"
          >
            Save and End
          </Link>
        </div>
      </div>
    </SummaryLayout>
  );
};

export default Skills;
