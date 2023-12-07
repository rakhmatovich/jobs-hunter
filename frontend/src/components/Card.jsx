import React from 'react';

function Card({title, minSalary, maxSalary, positions, color}) {
    return (
        <div
            className="flex rounded-lg bg-white border dark:bg-neutral-700 md:max-w-xl md:flex-row hover:shadow cursor-pointer mt-[20px] w-[23%] h-[100px]">
            <div className="rounded-l-lg w-4" style={{backgroundColor: color}}/>
            <div className="flex flex-col justify-start p-2">
                <h5
                    className="text-xl font-medium text-neutral-800 dark:text-neutral-50">
                    {title}
                </h5>
                <p className="mb-2 text-base">
                    {minSalary} – {maxSalary} so'm
                </p>
                <p className="text-xs">
                    {positions} openings
                </p>
            </div>
        </div>
    );
}

export default Card;