import Layout from "../components/Layout.jsx";
import FirstNavbar from "../components/FirstNavbar.jsx";

function GetStarted() {
    return (
        <div className="w-full h-screen bg-[url(/hero.jpg)] bg-center bg-cover">
            <div className="w-full h-screen bg-black/60">
                <FirstNavbar/>
                <div className="w-full h-[60vh] flex justify-center items-center">
                    <button className='bg-green-500 rounded text-white px-10 py-5'>GET STARTED</button>
                </div>
                <div>
                    <h1 className='text-white'>
                        676156 <br/> Summaries
                    </h1>
                </div>
            </div>
        </div>
    );
}

export default GetStarted;