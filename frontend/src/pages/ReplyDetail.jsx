import React from 'react';
import Reply from "../components/Reply.jsx";
import Replies from "../components/Replies.jsx";

function ReplyDetail() {
    return (
        <div
            className="flex rounded-lg bg-white border dark:bg-neutral-700 md:max-w-xl mt-[20px] w-full h-max]">
            <div className="flex flex-col rounded-l-lg w-4"/>
            <div className="justify-start p-2">
                <a
                    className="text-blue-600 hover:text-red-600 text-xl font-medium dark:text-neutral-50" href='/details'>
                    abc
                </a>
                <p className="mb-2 text-base">
                    1200000
                </p>
                <p className="text-xs">
                    1-5 years
                </p>

                <p className="text-xs">
                </p>
                <p className='bg-[#4BB24E] w-[75px] cursor-pointer text-white p-[7px] rounded'>Respond</p>
            </div>
        </div>
    );
}

export default ReplyDetail;