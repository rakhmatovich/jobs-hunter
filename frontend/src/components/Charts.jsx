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
             <div className='flex gap-[450px] mb-5'>
                    <p className='text-gray-600'>Status</p>
                    <p className='text-gray-600'>Vacancy</p>
                    <p className='text-gray-600'>Date</p>
                </div>
            {charts && charts.map(chart => (
                <Chart
                    status={chart.status}
                    title={chart.title}
                    date={chart.date}
                />
            ))}
        </div>
    );
}

export default Charts;