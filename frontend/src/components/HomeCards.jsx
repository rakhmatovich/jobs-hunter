import React from 'react';

function HomeCards({jobs, setJobs}) {
    const handleLike = (id) => {
        setJobs(jobs.map(item => {
            if (item.id === id) item.like = !item.like
            return item
        }))
    }
    return (

        <div className=' mt-[20px] ml-[30px]'>
            <p className='font-bold text-xl'>We recommend you</p>
            <p className=''>Picked up for the summary "Web-programmer"</p>



            <div className="flex flex-wrap gap-5 ">


                {jobs && jobs.map((job) => (
                    <div
                        key={job.id}
                        className="flex rounded-lg bg-white border dark:bg-neutral-700 md:max-w-xl md:flex-row mt-[20px] w-[40%] p-3">
                        <div className="flex flex-col justify-start p-2 w-full">
                            <div className='flex justify-between'>
                                <h5
                                    className="text-xl font-medium text-neutral-800 dark:text-neutral-50">
                                    {job.title}
                                </h5>
                                <img
                                    onClick={() => handleLike(job.id)}
                                    className='w-[30px] cursor-pointer'
                                    src={job.like ? '/Heartfull.png' : '/Heartempty.png'}
                                    alt="like"
                                />
                            </div>

                            <p className="mb-2 text-base">
                                from {job.minSalary} to {job.maxSalary} so'm
                            </p>

                            <p className="text-xs text-gray-600">
                                {job.location}
                            </p>

                            <p className='cursor-pointer text-blue-500 mt-[5px]'>
                                Reply
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>

    );
}

export default HomeCards;