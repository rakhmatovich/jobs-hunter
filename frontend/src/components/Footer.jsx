function Footer() {
    return (
        <div className='bg-[#222324] text-white py-[80px] px-[100px]'>
            <div className="flex">
                <div>
                    <h1 className='font-bold text-2xl mb-4'>Jobs Hunter</h1>
                    <div className='text-gray-400 flex cursor-pointer'>
                        <div className="flex flex-col">
                            <a className='hover:text-white'>
                                Our Vacancies
                            </a>
                            <a className='hover:text-white'>
                                Advert on website
                            </a>
                            <a className='hover:text-white'>
                                Software requirements
                            </a>
                            <a className='hover:text-white'>
                                Private data security
                            </a>
                            <a className='hover:text-white'>
                                Ethics and compliance
                            </a>
                            <a className='hover:text-white'>
                                Investors
                            </a>
                            <a className='hover:text-white'>
                                Terms of service
                            </a>
                            <a className='hover:text-white'>
                                Website Terms of Use
                            </a>
                        </div>
                        <div className='flex flex-col bg-[#222324] ml-[200px] cursor-pointer'>
                            <a className='hover:text-white'>
                                Help
                            </a>
                            <a className='hover:text-white'>
                                Terms of use
                            </a>
                            <a className='hover:text-white'>
                                Catalogue of companies
                            </a>
                            <a className='hover:text-white'>
                                Work by profession
                            </a>
                        </div>

                    </div>
                </div>
                <div className="flex-1 flex justify-end">
                    <img src="/Small-removebg-preview.png" alt="" className='mr-40 w-[120px] h-[90px]'/>
                </div>
            </div>
            <div className='border-b border-gray-500 my-[50px]'></div>
            <div className='flex flex-col mt-[50px]'>
                <h3>© 2023 JobHunter Company Group</h3>

                <h3 className='mt-[10px]'>Today on the site there are 9523 vacancies, 676156 summaries, 14620
                    companies and 4627601 invitations</h3>
            </div>
        </div>
    );
}

export default Footer;