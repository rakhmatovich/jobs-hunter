import axios from "axios";
import React, { useEffect, useState } from "react";
import { JOBS } from "../utils/urls";
import Vacancies from "./Vacancies";
import Cardsinfo from "./Cardsinfo";
import { Link } from "react-router-dom";

function HomeCards() {
  const [vacancies, setVacancies] = useState(null);

  useEffect(() => {
    loadVacancies();
  }, []);

  function chooseRandomObjects(array) {
    const shuffledArray = array.slice();

    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [
        shuffledArray[j],
        shuffledArray[i],
      ];
    }
    setVacancies(shuffledArray.slice(0, 6));
  }

  const loadVacancies = () => {
    axios
      .get(JOBS)
      .then((res) => chooseRandomObjects(res.data.data))
      .catch(console.error);
  };

  console.log(vacancies);

  return (
    <div className=" mt-[20px] ml-[30px]">
      <p className="font-bold text-xl">We recommend you</p>

      {/* key={key} */}

      <div className="flex flex-wrap gap-5 mb-10">
        {vacancies &&
          vacancies.map((vac) => (
            <div className="flex rounded-lg bg-white border dark:bg-neutral-700 md:max-w-xl md:flex-row mt-[20px] w-[40%] p-3">
              <div className="flex flex-col justify-start p-2 w-full">
                <div className="flex justify-between">
                  <h5 className="text-xl font-medium text-neutral-800 dark:text-neutral-50">
                    {vac.attributes.title}
                  </h5>
                </div>
                <p className="text-xs text-gray-600">
                  {vac.attributes.company.data.attributes.location}
                </p>

                <Link
                  to={`/summaries/${vac.id}`}
                  className="cursor-pointer text-blue-500 mt-[5px]"
                >
                  Reply
                </Link>
              </div>
            </div>
          ))}
      </div>
      {/* <HomeCards vacancies={vacancies}/> */}
    </div>
  );
}

export default HomeCards;
