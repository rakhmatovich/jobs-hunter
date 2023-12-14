import React from 'react';
import Vacancies from "../components/Vacancies.jsx";
import Layout from "../components/Layout.jsx";
import HomeCards from "../components/HomeCards.jsx";

function Summaries() {
    return (
        <Layout>
            <div className="px-20">
                <div className='py-5'>
                    <input
                        type="text"
                        className='border border-[#babdbf] w-[50%] font-[14px] px-4 py-2 rounded'
                        placeholder="Profession, position or company"
                    />
                    <button className='bg-blue-700 text-white ml-[10px] py-2 px-8 rounded'>Find</button>
                </div>
                <div>
                    <h1 className='text-2xl font-semibold'>436 подходящих вакансий</h1>
                    <div className="border-t border-gray-600 my-3"></div>
                </div>
                <div className='flex gap-10'>
                    <div className='py-5 w-[30%]'>
                        <div className='flex w-[100%]  flex-col'>
                            <p className='font-bold mt-4 mb-2'>Salary level</p>
                            <div className="flex items-center mb-2">
                                <input id="default-radio-1" type="radio" value="" name="default-radio"
                                       className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                <label htmlFor="default-radio-1"
                                       className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Doesn't
                                    Matter</label>
                            </div>
                            <div className="flex items-center mb-2">
                                <input id="default-radio-1" type="radio" value="" name="default-radio"
                                       className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                <label htmlFor="default-radio-1"
                                       className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">1-3
                                    years</label>
                            </div>
                            <div className="flex items-center mb-2">
                                <input id="default-radio-1" type="radio" value="" name="default-radio"
                                       className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                <label htmlFor="default-radio-1"
                                       className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">3-6
                                    years</label>
                            </div>
                            <div className="flex items-center mb-2">
                                <input id="default-radio-1" type="radio" value="" name="default-radio"
                                       className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                <label htmlFor="default-radio-1"
                                       className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">No
                                    experience</label>
                            </div>
                            <div className="flex items-center mb-2">
                                <input id="default-radio-1" type="radio" value="" name="default-radio"
                                       className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                <label htmlFor="default-radio-1"
                                       className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">More than 6
                                    years</label>
                            </div>
                        </div>
                        <div>
                            <p className='font-bold mt-4 mb-2'>Work schedule</p>
                            <div className="flex items-center mb-2">
                                <input id="default-checkbox" type="checkbox" value=""
                                       className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                <label htmlFor="default-checkbox"
                                       className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Full
                                    day</label>
                            </div>
                            <div className="flex items-center mb-2">
                                <input id="default-checkbox" type="checkbox" value=""
                                       className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                <label htmlFor="default-checkbox"
                                       className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remote
                                    working</label>
                            </div>
                            <div className="flex items-center mb-2">
                                <input id="default-checkbox" type="checkbox" value=""
                                       className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                <label htmlFor="default-checkbox"
                                       className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Shift
                                    schedule</label>
                            </div>
                            <div className="flex items-center mb-2">
                                <input id="default-checkbox" type="checkbox" value=""
                                       className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                <label htmlFor="default-checkbox"
                                       className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Flexible
                                    schedule</label>
                            </div>
                            <div className="flex items-center mb-2">
                                <input id="default-checkbox" type="checkbox" value=""
                                       className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                <label htmlFor="default-checkbox"
                                       className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Rotation
                                    based
                                    work</label>
                            </div>
                        </div>
                        <div>
                            <p className='font-bold mt-4 mb-2'>Region</p>
                            <div className="flex items-center mb-2">
                                <input id="default-checkbox" type="checkbox" value=""
                                       className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                <label htmlFor="default-checkbox"
                                       className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Tashkent</label>
                            </div>
                            <div className="flex items-center mb-2">
                                <input id="default-checkbox" type="checkbox" value=""
                                       className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                <label htmlFor="default-checkbox"
                                       className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Uzbekistan</label>
                            </div>
                            <div className="flex items-center mb-2">
                                <input id="default-checkbox" type="checkbox" value=""
                                       className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                <label htmlFor="default-checkbox"
                                       className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Bukhara</label>
                            </div>
                            <div className="flex items-center mb-2">
                                <input id="default-checkbox" type="checkbox" value=""
                                       className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                <label htmlFor="default-checkbox"
                                       className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Samarqand</label>
                            </div>
                            <div className="flex items-center mb-2">
                                <input id="default-checkbox" type="checkbox" value=""
                                       className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                <label htmlFor="default-checkbox"
                                       className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Fergana</label>
                            </div>
                        </div>
                    </div>
                    <Vacancies/>
                </div>
            </div>
        </Layout>

    );
}

export default Summaries;