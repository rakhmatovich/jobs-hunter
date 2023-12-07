import Layout from "../components/Layout.jsx";
import FirstNavbar from "../components/FirstNavbar.jsx";
import Footer from "../components/Footer.jsx";
import Cards from "../components/Cards.jsx";

function GetStarted() {
    return (
        <div className="w-full h-screen bg-[url(/hero.jpg)] bg-center bg-cover">
            <div className="w-full h-screen bg-black/60">
                <FirstNavbar/>
                <div className="w-full h-[60vh] flex justify-center items-center">
                    <a className='bg-green-500 rounded text-white px-10 py-5' href="/home">GET STARTED</a>
                </div>
                <div className='flex'>
                    <h1 className='text-white text-2xl ml-[100px] font-semibold'>
                        676 156 <br/> Summaries
                    </h1>
                    <h1 className='text-white text-2xl ml-[50px] font-semibold'>
                        781 354 <br/> Vacancies
                    </h1>

                </div>
            </div>
            <Cards />
            <Footer/>
        </div>

    );
}

export default GetStarted;