import React, {useState} from 'react';
import Vacancy from "./Vacancy.jsx";


const defaultVacancies = [
    {id: 1, title: 'Frontend разработчик (React)', company: 'ООО Свик', location:'Барнаул', salary: '3000000-45000000 som', experience:'1-4 years', description:'blablabla'},
    {id: 2, title: 'Frontend разработчик (React)', company: 'ООО Свик', location:'Барнаул', salary: '3000000-45000000 som', experience:'1-4 years', description:'blablabla'},
    {id: 3, title: 'Frontend разработчик (React)', company: 'ООО Свик', location:'Барнаул', salary: '3000000-45000000 som', experience:'1-4 years', description:'blablabla'},
    {id: 4, title: 'Frontend разработчик (React)', company: 'ООО Свик', location:'Барнаул', salary: '3000000-45000000 som', experience:'1-4 years', description:'blablabla'},
    {id: 5, title: 'Frontend разработчик (React)', company: 'ООО Свик', location:'Барнаул', salary: '3000000-45000000 som', experience:'1-4 years', description:'blablabla'},
    {id: 6, title: 'Frontend разработчик (React)', company: 'ООО Свик', location:'Барнаул', salary: '3000000-45000000 som', experience:'1-4 years', description:'blablabla'},

]
function Vacancies() {
    const [vacancies, setVacancies] = useState(defaultVacancies)
    return (
        <div className='flex flex-col pb-10 w-full'>
            {vacancies && vacancies.map(vacancy => (
                <Vacancy
                title={vacancy.title}
                company={vacancy.company}
                location={vacancy.location}
                experience={vacancy.experience}
                description={vacancy.description}/>
            ))}
        </div>
    );
}

export default Vacancies;
