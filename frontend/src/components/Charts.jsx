import React, {useState} from 'react';
import Chart from "./Chart.jsx";

const defaultCharts = [
    {id: 1, status: 'Active', title: 'Учитель по Front-End (программирование)', date: '21 August'},
    {id: 2, status: 'Active', title: 'Учитель по Front-End (программирование)', date: '21 August'},
    {id: 3, status: 'Active', title: 'Учитель по Front-End (программирование)', date: '21 August'},
    {id: 4, status: 'Active', title: 'Учитель по Front-End (программирование)', date: '21 August'},
    {id: 5, status: 'Active', title: 'Учитель по Front-End (программирование)', date: '21 August'}
]
function Charts() {

    const [charts, setCharts] = useState(defaultCharts)
    return (
        <div className='flex flex-col'>
             <div className='flex text-center justify-between p-4 font-semibold text-[22px]'>
                    <p className='text-gray-600'>Status</p>
                    <p className='text-gray-600'>Vacancy</p>
                    <p className='text-gray-600'>Date</p>
                </div>
            {charts && charts.map((chart, index) => (
                <Chart
                    status={chart.status}
                    title={chart.title}
                    date={chart.date}
                    index={index}
                />
            ))}
        </div>
    );
}

export default Charts;
