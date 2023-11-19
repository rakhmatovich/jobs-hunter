import {BrowserRouter, Route, Routes} from "react-router-dom";
import GetStarted from "./pages/GetStarted.jsx";

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<GetStarted />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Router;