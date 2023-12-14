import React, { useState } from "react";
import Work from './Work'

const defaultWorks = [
  { id: 1, name: "Frontend Dev" },
  { id: 2, name: "Frontend Dev" },
  { id: 3, name: "Frontend Dev" },
  { id: 4, name: "Frontend Dev" },
  { id: 5, name: "Frontend Dev" },
];

const Works = () => {
  const [works, setWorks] = useState(defaultWorks);

  return (
    <div className="flex justify-between flex-wrap px-20 py-10 ">
      {works &&
        works.map((work) => (
          <Work
          name={work.name}
          />
        ))}
    </div>
  );
};

export default Works;
