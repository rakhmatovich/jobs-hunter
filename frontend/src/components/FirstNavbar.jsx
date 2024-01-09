import {Link, useNavigate} from "react-router-dom";
import GetStarted from "../pages/GetStarted.jsx";

function FirstNavbar() {

    return (
        <nav className="w-full bg-transparent  flex items-center justify-center">
            <Link to="/" className="w-[100px] cursor-pointer">
                <img src="/Small-removebg-preview.png" alt=""/>
            </Link>
            <div className="w-[80%] flex items-center justify-between py-8">
                <div className="flex gap-4 justify-between">
                    <a href="#"
                       className="block py-2 px-3 text-white text-xl hover:text-blue-600 md:hover:text-blue-600">For
                        employers</a>
                    <a href="#"
                       className="block py-2 px-3 text-white text-xl hover:text-blue-600 md:hover:text-blue-600">Help</a>
                </div>
                <div className='flex gap-4 justify-between'>
                    <Link
                        to='/works/choose-job'
                        className="px-4 py-1 text-green-400 border-green-900 rounded-full border md:hover:bg-transparent hover:border-green-400 md:hover:border-green-400 md:border md:p-1 md:px-4 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent text-xl"
                    >
                        Create
                        Summary
                    </Link>
                    <Link to='/signup'
                          className="px-4 py-1 text-white border-gray-500 rounded-full border hover:border-white md:hover:bg-transparent md:hover:border-white md:border md:p-1 md:px-4 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent text-xl">
                        Log
                        in
                    </Link>
                </div>
            </div>
        </nav>);
}

export default FirstNavbar;