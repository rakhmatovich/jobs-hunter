import { BrowserRouter, Route, Routes } from "react-router-dom";
import { createContext, useState } from "react";
import GetStarted from "./pages/GetStarted.jsx";
import Home from "./pages/Home.jsx";
import Account from "./pages/Account.jsx";
import RepliesPage from "./pages/RepliesPage.jsx";
import ReplyDetail from "./pages/ReplyDetail.jsx";
import Summaries from "./pages/Summaries.jsx";
import SignUp from "./pages/createAccount/SignUp.jsx";
import NamePage from "./pages/createAccount/NamePage.jsx";
import ConfirmEmail from "./pages/createAccount/ConfirmEmail.jsx";
import SummaryRoutes from "./pages/createSummary/SummaryRoutes.jsx";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Login from "./pages/Login.jsx";

export const UserProvider = createContext();
export const SummaryProvider = createContext();

function Router() {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user") || "[]")
  );
  const [emailCode, setEmailCode] = useState("");
  const [email, setEmail] = useState("");
  const [summaryJob, setSummaryJob] = useState("");

  return (
    <UserProvider.Provider
      value={{
        user,
        setUser,
        emailCode,
        setEmailCode,
        email,
        setEmail,
      }}
    >
      <SummaryProvider.Provider
        value={{
          user,
          summaryJob,
          setSummaryJob
        }}
      >
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<GetStarted />} />
            <Route path="/home" element={<Home />} />
            <Route path="/account" element={<Account />} />
            {/* <Route path="/replies" element={<RepliesPage />} /> */}
            <Route path="/summaries" element={<Summaries />} />
            <Route path="/summaries/:id" element={<ReplyDetail />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/name" element={<NamePage />} />
            <Route path="/confirm" element={<ConfirmEmail />} />
            <Route path="/login" element={<Login />} />
            <Route path="/works/*" element={<SummaryRoutes />} />
          </Routes>
        </BrowserRouter>
        <ToastContainer />
      </SummaryProvider.Provider>
    </UserProvider.Provider>
  );
}

export default Router;
