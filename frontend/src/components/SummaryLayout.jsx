import React from "react";
import JobLine from "./JobLine";
import SecondNavbar from "./SecondNavbar";
import Footer from "./Footer";
import { useLocation } from "react-router-dom";

const pageNames = {
  "/works/choose-job": 1,
  "/works/detail": 2,
  "/works/education": 3,
  "/works/educationinfo": 4,
  "/works/final": 5,
  "/works/skills": 6,
};

const SummaryLayout = ({ children, title }) => {
  const { pathname } = useLocation();
  return (
    <>
      <SecondNavbar />
      <div className="flex">
        <div className="flex-1 px-24 flex flex-col justify-center">
          <img src="/Logo-removebg-preview.png" alt="" className="w-[50px]" />
          <h1 className="font-bold mt-6 text-xl">{title}</h1>
        </div>
        <div className="w-[60%] min-h-[80vh] p-20 shadow-[-7px_-1px_23px_0px_rgba(0,0,15,0.5)]">
          <JobLine page={pageNames[pathname]} />
          {children}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SummaryLayout;
