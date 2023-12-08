import React from 'react';

function Chart({status, title, date}) {
    return (
        <div className='flex hover:bg-gray-300 h-[70px] cursor-pointer p-[6px]'>
            <div className='flex'>
                <div className='flex gap-[300px]'>
                    <p>{status}</p>
                    <p className='text-blue-600 hover:text-blue-900'>{title}</p>
                    <p>{date}</p>
                </div>
            </div>
        </div>
    );
}

export default Chart;