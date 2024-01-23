import React, {useState} from 'react';
import Card from "./Card.jsx";

const jobs = [
    {id: 1, title: 'Featured jobs', minSalary: '3000000', maxSalary: '8000000', positions: 14, color: '#EB6B6B'},
    {id: 2, title: 'Featured companies',minSalary: '4561534', maxSalary: '800000', positions: 102, color: '#EB6B6B'},
    {id: 3, title: 'Work from home',minSalary: '4789465', maxSalary: '8546951', positions: 276, color: '#EB6B6B'},
    {id: 4, title: 'Volunteering', minSalary: '1300 ', maxSalary: '18333600', positions: 523, color: 'rgba(255,217,191,.4)'},
    {id: 5, title: 'Deliverer', minSalary: '7900', maxSalary: '10234600', positions: 91, color: 'rgba(250,219,125,.4)'},
    {id: 6, title: 'Rider', minSalary: '999900', maxSalary: '25785626', positions: 129, color: 'rgba(207,242,208,.4)'},
    {id: 7, title: 'Seller', minSalary: '452785', maxSalary: '10452685', positions: 275, color: 'rgba(191,226,255,.4)'},
    {id: 8, title: 'Cashier', minSalary: '150785', maxSalary: '7456852', positions: 152, color: 'rgba(227,206,242,.4)'},
    {id: 9, title: 'Administrator', minSalary: '1000', maxSalary: '14585635', positions: 344, color: 'rgba(227,206,242,.4)'},
    {id: 10, title: 'Operator', maxSalary: '15000000', minSalary: '7845844', positions: 422, color: 'rgba(255,217,191,.4)'},
    {id: 11, title: 'Programmer', minSalary: '15000', maxSalary: '50210353', positions: 622, color: 'rgba(250,219,125,.4)'},
    {id: 12, title: 'Manager', maxSalary: '27083200', minSalary: '4864643', positions: 2309, color: 'rgba(207,242,208,.4)'},
]

function Cards() {

    return (
        <div className='flex justify-between flex-wrap px-20 py-10'>
            {jobs && jobs.map(job => (
                <Card
                    key={job.id}
                    title={job.title}
                    minSalary={job.minSalary}
                    maxSalary={job.maxSalary}
                    positions={job.positions}
                    color={job.color}
                />
            ))}
        </div>
    );
}

export default Cards;