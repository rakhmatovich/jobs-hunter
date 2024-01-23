import React, { useState } from "react";
import Layout from "../components/Layout.jsx";
import HomeCards from "../components/HomeCards.jsx";
import { Link, Navigate } from "react-router-dom";
import { toast } from "react-toastify";

const testJobs = [
  { id: 1, title: "Starter", location: "Tashkent", like: true },
  { id: 2, title: "Starter", location: "Tashkent", like: true },
  { id: 3, title: "Starter", location: "Tashkent", like: false },
  { id: 4, title: "Starter", location: "Tashkent", like: false },
  { id: 5, title: "Starter", location: "Tashkent", like: true },
  { id: 6, title: "Starter", location: "Tashkent", like: false },
];

function Home() {
  const [jobs, setJobs] = useState(testJobs);
  const user = localStorage.getItem("user");

  if (!user) {
    toast.error("You have to authorize");
    return <Navigate to="/" />;
  }

  return (
    <Layout>
      <div className="py-5 px-28">
        <input
          type="text"
          className="border border-[#babdbf] w-[50%] font-[14px] px-4 py-2 rounded"
          placeholder="Jobs, ..."
        />
        <Link
          to="/summaries"
          className="bg-blue-700 text-white ml-[10px] py-2 px-8 rounded"
        >
          Find
        </Link>
      </div>

      <div className="flex w-[100%] mx-auto border-t border-gray-400">
        <div className="w-[30%] m-1 border-r border-gray-400 pt-10 ml-[100px]">
          <div className="flex">
            <a
              href="/summaries"
              className="mt-[10px] hover:text-[#EB6B6B] cursor-pointer"
            >
              Auto Searches
            </a>
          </div>
        </div>

        <HomeCards jobs={jobs} setJobs={setJobs} />
      </div>
    </Layout>
  );
}

export default Home;
