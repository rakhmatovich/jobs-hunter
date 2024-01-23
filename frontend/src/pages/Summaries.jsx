import React, { useEffect, useState } from "react";
import Vacancies from "../components/Vacancies.jsx";
import Layout from "../components/Layout.jsx";
import axios from "axios";
import { JOB, JOBS } from "../utils/urls.js";

function Summaries() {
  // const experience = [
  //   { id: 1, experience: `Doesn't matter` },
  //   { id: 2, experience: `1-3 years` },
  //   { id: 3, experience: `3-6 year` },
  //   { id: 4, experience: `No experience` },
  //   { id: 5, experience: `More than 6 years` },
  // ];

  // const workSchedule = [
  //   { id: 1, schedule: "Full day" },
  //   { id: 2, schedule: "Remote working" },
  //   { id: 3, schedule: "Shift schdule" },
  //   { id: 4, schedule: "Flexible scedules" },
  //   { id: 5, schedule: "Rotation based work" },
  // ];

  // const region = [
  //   { id: 1, region: "Uzbekistan" },
  //   { id: 2, region: "UK, London" },
  //   { id: 3, region: "Finland" },
  //   { id: 4, region: "USA, California" },
  //   { id: 5, region: "Tashkent, Nurabad" },
  //   { id: 6, region: "US, New York" },
  //   { id: 7, region: "US, Washington" },
  //   { id: 8, region: "Bukhara" },
  //   { id: 9, region: "UK, Norwich" },
  //   { id: 10, region: "Russia, Moscow" }
  // ];

  const [vacancies, setVacancies] = useState(null);

  useEffect(() => {
    loadVacancies();
  }, []);

  const loadVacancies = () => {
    axios
      .get(JOBS)
      .then((res) => setVacancies(res.data.data))
      .catch(console.error);
  };

  const search = (value) => {
    axios
      .get(JOBS + `&filters[title][$containsi]=${value}`)
      .then((res) => setVacancies(res.data.data))
      .catch((err) => console.log(err));
  };
  

  // const filter = (value) => {
  //   axios
  //     .get(JOBS + `&filters[title][$containsi]=${value}`)
  //     .then((res) => setVacancies(res.data.data))
  //     .catch((err) => console.log(err));
  // };

  return (
    <Layout>
      <div className="px-20">
        <div className="py-5">
          <input
            className="border border-[#babdbf] w-[50%] font-[14px] px-4 py-2 rounded"
            type="text"
            placeholder="Profession, position or company"
            onInput={(event) => search(event.target.value)}
          />
          <button className="bg-blue-700 text-white ml-[10px] py-2 px-8 rounded">
            Find
          </button>
        </div>
        <div>
          <h1 className="text-2xl font-semibold">
            {vacancies?.length} подходящих вакансий
          </h1>
          <div className="border-t border-gray-600 my-3"></div>
        </div>
        <div className="flex gap-10">
          {/* <div className="py-5 w-[30%] border-r border-gray-500">
            <div className="flex w-[100%]  flex-col">
              <p className="font-bold mt-4 mb-2">Experience</p>
              {experience &&
                experience.map((exp) => (
                  <a
                    className="dropdown-item"
                    onClick={() =>
                      filter({
                        key: "category",
                        value: experience,
                      })
                    }
                    key={exp.id}
                  >
                    <label htmlFor={exp.experience}>
                      <input
                        type="radio"
                        id={exp.experience}
                        name="experience"
                      />
                      {exp.experience}
                    </label>
                  </a>
                ))}
            </div>
            <div className="flex w-[100%]  flex-col">
              <p className="font-bold mt-4 mb-2">Work schedule</p>
              {workSchedule &&
                workSchedule.map((work) => (
                  <a
                    className="dropdown-item"
                    onClick={() =>
                      filter({
                        key: "workSchedule",
                        value: workSchedule,
                      })
                    }
                    key={work.id}
                  >
                    <label htmlFor={work.schedule}>
                      <input
                        type="checkbox"
                        id={work.schedule}
                        name="workSchedule"
                      />
                      {work.schedule}
                    </label>
                  </a>
                ))}
            </div>
            <div className="flex w-[100%]  flex-col">
              <p className="font-bold mt-4 mb-2">Region</p>
              {region &&
                region.map((reg) => (
                  <a
                    className="dropdown-item"
                    onClick={() =>
                      filter({
                        key: "region",
                        value: region,
                      })
                    }
                    key={reg.id}
                  >
                    <label htmlFor={reg.region}>
                      <input
                        type="checkbox"
                        id={reg.region}
                        name="region"
                      />
                      {reg.region}
                    </label>
                  </a>
                ))}
            </div>
          </div> */}
          <Vacancies vacancies={vacancies} />
        </div>
      </div>
    </Layout>
  );
}

export default Summaries;
