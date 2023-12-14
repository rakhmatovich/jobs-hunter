import React from "react";
import Layout from "../../components/Layout";
import JobLine from "../../components/JobLine";
import Works from "../../components/Works";

const ChooseWorks = () => {
  return (
    <Layout>
      <div className="flex">
        <div className="flex-1 px-24 flex flex-col justify-center">
          <img src="/Logo-removebg-preview.png" alt="" className="w-[50px]" />
          <h1 className="font-bold mt-6 text-xl">Кем вы хотите работать?</h1>
        </div>
        <div className="w-[60%] p-20 shadow-[-7px_-1px_23px_0px_rgba(0,0,15,0.5)]">
            <JobLine page={1} />
            <Works />

        </div>
      </div>
    </Layout>
  );
};

export default ChooseWorks;
