import {BrowserRouter, Route, Routes} from "react-router-dom";
import {createContext, useState} from "react";
import GetStarted from "./pages/GetStarted.jsx";
import Home from "./pages/Home.jsx";
import Account from "./pages/Account.jsx";
import RepliesPage from "./pages/RepliesPage.jsx";
import ReplyDetail from "./pages/ReplyDetail.jsx";
import Summaries from "./pages/Summaries.jsx";
import SignUp from "./pages/createAccount/SignUp.jsx";
import NamePage from "./pages/createAccount/NamePage.jsx";
import ConfirmEmail from "./pages/createAccount/ConfirmEmail.jsx";
import ChooseWorks from "./pages/createSummary/ChooseWorks.jsx";

export const UserProvider = createContext()

function Router() {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('user') || '[]'))
    const [emailCode, setEmailCode] = useState('')
    const [email, setEmail] = useState('')

    return (
        <UserProvider.Provider value={{
            user,
            setUser,
            emailCode,
            setEmailCode,
            email,
            setEmail
        }}>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<GetStarted/>}/>
                    <Route path='/home' element={<Home/>}/>
                    <Route path='/account' element={<Account/>}/>
                    <Route path='/replies' element={<RepliesPage/>}/>
                    <Route path='/details' element={<ReplyDetail/>}/>
                    <Route path='/summaries' element={<Summaries/>}/>
                    <Route path='/signup' element={<SignUp/>}/>
                    <Route path='/name' element={<NamePage/>}/>
                    <Route path='/confirm' element={<ConfirmEmail/>}/>
                    <Route path='/works' element={<ChooseWorks/>}/>
                </Routes>
            </BrowserRouter>
        </UserProvider.Provider>
    );
}

export default Router;
