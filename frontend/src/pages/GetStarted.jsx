import FirstNavbar from "../components/FirstNavbar.jsx";
import Footer from "../components/Footer.jsx";
import Cards from "../components/Cards.jsx";
import {Navigate} from 'react-router-dom'


function GetStarted() {
    const user = localStorage.getItem('user')

    if(user) {
        return <Navigate to='/home'/>
    }

    return (
        <div className="w-full h-screen bg-[url(/hero.jpg)] bg-center bg-cover">
            <div className="w-full h-screen bg-black/60">
                <FirstNavbar/>
                <div className="w-full h-[60vh] flex justify-center items-center">
                    <a className='bg-green-500 rounded text-white px-10 py-5' href="/signup">GET STARTED</a>
                </div>
                <div className='flex'>
                    <h1 className='text-white text-2xl ml-[100px] font-semibold'>
                        150 000 <br/> Summaries
                    </h1>
                    <h1 className='text-white text-2xl ml-[50px] font-semibold'>
                        600 000 <br/> Vacancies
                    </h1>

                </div>
            </div>
            <Cards />
            <Footer/>
        </div>

    );
}

export default GetStarted;