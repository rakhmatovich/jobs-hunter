import {Link, useNavigate} from "react-router-dom";
import GetStarted from "../pages/GetStarted.jsx";

function FirstNavbar() {

    return (
        <nav className="w-full bg-transparent  flex items-center justify-center">
            <Link to="/" className="w-[100px] cursor-pointer">
                <img src="/Small-removebg-preview.png" alt=""/>
            </Link>
            <div className="w-[80%] flex items-center justify-end py-8">
                <div className='flex gap-4 justify-between '>
                    <Link to='/signup'
                          className="px-4 py-1 text-white border-gray-500 rounded-full border hover:border-white md:hover:bg-transparent md:hover:border-white md:border md:p-1 md:px-4 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent text-xl">
                        Sign Up
                    </Link>
                    <Link to='/login'
                          className="px-4 py-1 text-white border-gray-500 rounded-full border hover:border-white md:hover:bg-transparent md:hover:border-white md:border md:p-1 md:px-4 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent text-xl">
                        Log in
                    </Link>
                </div>
            </div>
        </nav>);
}

export default FirstNavbar;