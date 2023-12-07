import React, {useState} from 'react';
import Layout from "../components/Layout.jsx";
import HomeCards from "../components/HomeCards.jsx";

const testJobs = [
    {id: 1, title: 'Starter', minSalary: '2 000 000', maxSalary: '5 000 000', location: 'Tashkent', like: true},
    {id: 2, title: 'Starter', minSalary: '2 000 000', maxSalary: '5 000 000', location: 'Tashkent', like: true},
    {id: 3, title: 'Starter', minSalary: '2 000 000', maxSalary: '5 000 000', location: 'Tashkent', like: false},
    {id: 4, title: 'Starter', minSalary: '2 000 000', maxSalary: '5 000 000', location: 'Tashkent', like: false},
    {id: 5, title: 'Starter', minSalary: '2 000 000', maxSalary: '5 000 000', location: 'Tashkent', like: true},
    {id: 6, title: 'Starter', minSalary: '2 000 000', maxSalary: '5 000 000', location: 'Tashkent', like: false},
]

function Home(props) {
    const [jobs, setJobs] = useState(testJobs)

    return (
        <Layout>
            <div className='py-5 px-28'>
                <input
                    type="text"
                    className='border border-[#babdbf] w-[50%] font-[14px] px-4 py-2 rounded'
                    placeholder="Jobs, ..."
                />
                <button className='bg-blue-700 text-white ml-[10px] py-2 px-8 rounded'>Find</button>
            </div>

            <div className='flex w-[100%] mx-auto border-t border-gray-400'>
                <div className="w-[50%] m-1 border-r border-gray-400 pt-10 ml-[100px]">
                    <div className="flex">
                        <p className='text-2xl font-semibold'>My Events</p>
                    </div>
                    <div className="flex">
                        <a href='/replies' className='mt-[10px] hover:text-[#EB6B6B] cursor-pointer'>Replies and invitations</a>
                    </div>
                    <div className="flex">
                        <a href='#' className='mt-[10px] hover:text-[#EB6B6B] cursor-pointer'>Saved vacancies</a>
                    </div>
                    <div className="flex">
                        <a href='#' className='mt-[10px] hover:text-[#EB6B6B] cursor-pointer'>Auto Searches</a></div>
                    <div className="flex">
                        <a href='/' className='mt-[10px] hover:text-[#EB6B6B] cursor-pointer'>Go Back to starter page</a></div>
                </div>




                <HomeCards jobs={jobs} setJobs={setJobs}/>
            </div>
        </Layout>
    );
}

export default Home;
