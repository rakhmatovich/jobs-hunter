import Navbar from "./Navbar.jsx";

function Layout({children}) {
    return (
        <div className="w-full h-screen">
            <Navbar/>
            {children}
        </div>
    );
}

export default Layout;