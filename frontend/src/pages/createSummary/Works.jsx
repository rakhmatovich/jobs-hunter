import React, { useState } from "react";
import Work from "../../components/Work";
import SummaryLayout from "../../components/SummaryLayout";

const defaultWorks = [
  { id: 1, name: "Frontend Developer" },
  { id: 2, name: "Backend Developer" },
  { id: 3, name: "Java Developer" },
  { id: 4, name: "Unity Developer" },
  { id: 5, name: "C++ Developer" },
];

const Works = ({setJobName}) => {
  const [works, setWorks] = useState(defaultWorks);

  return (
    <SummaryLayout title='Кем вы хотите работать? '>
      <div className="flex flex-wrap px-20 py-10 gap-3">
        {works && works.map((work) => <Work name={work.name} setJobName={setJobName} />)}
      </div>
    </SummaryLayout>
  );
};

export default Works;
