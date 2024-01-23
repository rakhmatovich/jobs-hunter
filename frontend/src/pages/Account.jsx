import React from "react";
import Layout from "../components/Layout.jsx";

function Account() {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <Layout>
      <div className="p-[30px] bg-[#FAFAFA] mt-[100px] flex ml-[100px] w-[50%] flex-col">
        <div className="flex justify-between">
          <div>
            <p>Name</p>
          </div>
          <div>
            <p className=" ">{user.username}</p>
          </div>
        </div>
        <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
        <div className="flex justify-between">
          <div>
            <p>Email</p>
          </div>
          <div>
            <p className=" ">{user.email}</p>
          </div>
        </div>
        <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
      </div>
    </Layout>
  );
}

export default Account;
