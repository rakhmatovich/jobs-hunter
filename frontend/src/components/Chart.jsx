import React from 'react';

function Chart({status, title, date}) {
    return (
        <div className='flex hover:bg-gray-100 min-h-[70px] w-full cursor-pointer p-4 rounded'>
            <div className='flex w-full justify-between'>
                <p>{status}</p>
                <p className='text-blue-600 hover:text-blue-900'>{title}</p>
                <p>{date}</p>
            </div>
        </div>
    );
}

export default Chart;