function FirstNavbar() {
    return (
        <nav className="w-full bg-transparent  flex items-center justify-center">
            <div className="w-[80%] flex items-center justify-between py-8">
                <div className="flex gap-4 justify-between">
                    <a href="#"
                       className="block py-2 px-3 text-white text-xl md:hover:text-blue-600">For employers</a>
                    <a href="#"
                       className="block py-2 px-3 text-white text-xl md:hover:text-blue-600">Help</a>
                </div>
                <div className='flex gap-4 justify-between'>
                    <button
                        className="text-green-400 border-green-900 rounded-full hover:bg-gray-100 md:hover:bg-transparent md:hover:border-green-400 md:border md:p-1 md:px-4 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent text-xl">Create Summary
                    </button>
                    <button
                        className="text-white border-gray-500 rounded-full hover:bg-gray-100 md:hover:bg-transparent md:hover:border-white md:border md:p-1 md:px-4 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent text-xl">Log in
                    </button>
                </div>
            </div>
        </nav>

    );
}

export default FirstNavbar;