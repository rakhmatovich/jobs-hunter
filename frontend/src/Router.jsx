import {BrowserRouter, Route, Routes} from "react-router-dom";
import GetStarted from "./pages/GetStarted.jsx";
import Home from "./pages/Home.jsx";
import Account from "./pages/Account.jsx";
import RepliesPage from "./pages/RepliesPage.jsx";
import ReplyDetail from "./pages/ReplyDetail.jsx";

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<GetStarted />} />
                <Route path='/home' element={<Home />}/>
                <Route path='/account' element={<Account />}/>
                <Route path='/replies' element={<RepliesPage />}/>
                <Route path='/details' element={<ReplyDetail />}/>
            </Routes>
        </BrowserRouter>
    );
}

export default Router;