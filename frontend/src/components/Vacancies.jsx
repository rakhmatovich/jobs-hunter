import React, { useEffect, useState } from "react";
import Vacancy from "./Vacancy.jsx";
import axios from "axios";
import { JOBS } from "../utils/urls.js";

function Vacancies() {
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

  console.log(vacancies && vacancies[0].attributes.location);

  return (
    <div className="flex flex-col pb-10 w-full">
      {vacancies &&
        vacancies.map((vacancy) => (
          <Vacancy
            key={vacancy.id}
            id={vacancy.id}
            title={vacancy.attributes.title}
            company={vacancy.attributes.company.data.attributes.name}
            location={vacancy.attributes.company.data.attributes.location}
            experience={vacancy.attributes.experience}
            description={vacancy.attributes.description}
          />
        ))}
    </div>
  );
}

export default Vacancies;
