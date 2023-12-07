import React from 'react';
import Layout from "../components/Layout.jsx";

function Account(props) {
    return (
        <Layout>
            <div className='p-[30px] bg-[#FAFAFA] mt-[100px] flex ml-[100px] w-[50%] flex-col'>
                <div className='flex justify-between'>
                    <div>
                        <p>Name</p>
                    </div>
                    <div>
                        <p className=' '>John</p>
                    </div>
                    <div>
                        <p className='text-blue-400 cursor-pointer'>Change</p>
                    </div>
                </div>
                <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"/>
                <div className='flex justify-between'>
                    <div>
                        <p>Password</p>
                    </div>
                    <div>
                        <p className=' '>12345678</p>
                    </div>
                    <div>
                        <p className='text-blue-400 cursor-pointer'>Change a password</p>
                    </div>
                </div>
                <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"/>
                <div className='flex justify-between'>
                    <div>
                        <p>Email</p>
                    </div>
                    <div>
                        <p className=' '>blabla@gmail.com</p>
                    </div>
                    <div>
                        <p className='text-blue-400 cursor-pointer'>Change</p>
                    </div>
                </div>
                <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"/>
                <div className='flex justify-between'>
                    <div>
                        <p>Mobile phone number</p>
                    </div>
                    <div className='w-[33%]'>
                        <p className=''>996325512</p>
                    </div>
                    <div>
                        <p className='text-blue-400 cursor-pointer'>Change</p>
                    </div>
                </div>
                <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"/>
                <div className='flex justify-between'>
                    <div>
                        <p>Job Search area</p>
                    </div>
                    <div className='w-[25%]'>
                        <p className=''>IDK</p>
                    </div>
                    <div>
                        <p className='text-blue-400 cursor-pointer'>Change</p>
                    </div>
                </div>
                <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"/>
                <div className='flex justify-between'>
                    <div>
                        <p>Social networks</p>
                    </div>
                    <div className='w-[33%]'>
                        <p>Insta</p>
                    </div>
                    <div>
                        <p className='text-blue-400 cursor-pointer'>Change</p>
                    </div>
                </div>


            </div>
            <p className='text-blue-400 cursor-pointer ml-[100px] mt-[20px] mb-[50px]'>Delete Account</p>
        </Layout>
    );
}

export default Account;