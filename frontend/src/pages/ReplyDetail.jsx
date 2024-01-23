import React, { useEffect, useState } from "react";
import Layout from "../components/Layout.jsx";
import axios from "axios";
import { CREATE_REPLY, DOMAIN, JOB } from "../utils/urls.js";
import { useNavigate, useParams } from "react-router-dom";
import { convertDateFormat } from "../utils/convertDate.js";
import { toast } from "react-toastify";

function ReplyDetail() {
  const [vacancy, setVacancy] = useState(null);

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    loadInformation();
  }, []);

  const loadInformation = () => {
    axios
      .get(JOB.replace("id", id))
      .then((res) => setVacancy(res.data.data))
      .catch(console.error);
  };

  async function useReply(vacancy) {
    const { id } = JSON.parse(localStorage.getItem("user"));

    await axios
      .post(CREATE_REPLY, {
        data: {
          status: "waiting",
          user: id,
          vacancy,
        },
      })
      .then(() => {
        toast.success("You applied for this job successfully");
        navigate("/summaries");
      })
      .catch((err) => {
        console.log(err);
        toast.error("Something went wrong");
      });
  }

  return (
    <Layout>
      <div className="flex p-10">
        <div className="w-[70%] flex flex-col">
          <div className="w-full p-8 shadow-xl">
            <div>
              <p className="font-bold text-xl">{vacancy?.attributes.title}</p>
            </div>
            <div className="flex flex-col gap-2 my-5">
              <p>
                Required experience:{" "}
                {vacancy?.attributes.experience.split("-").join(" ")}
              </p>
              <p>{vacancy?.attributes.time?.split("-").join(" ")}</p>
              <p>{vacancy?.attributes.description}</p>
            </div>
            <button
              className="rounded mt-2 py-2 px-10 bg-[#4bb24e] text-white"
              onClick={() => useReply(vacancy?.id)}
            >
              Respond
            </button>
          </div>
          <div className="mt-4 ml-[50px] flex flex-col">
            <h1 className="font-bold">Responsibilities:</h1>
            {vacancy?.attributes.responsibilities
              .split(",")
              .map((item, index) => (
                <p key={index}>-{index === 0 ? " " + item : item}</p>
              ))}
            <br />
            <h1 className="font-bold">Requirements:</h1>
            {vacancy?.attributes.requirements.split(",").map((item, index) => (
              <p key={index}>-{index === 0 ? " " + item : item}</p>
            ))}
            <br />
            <h1 className="font-bold">Conditions:</h1>
            {vacancy?.attributes.conditions.split(",").map((item, index) => (
              <p key={index}>-{index === 0 ? " " + item : item}</p>
            ))}

            <div className="mt-4">
              <h1 className="font-bold">Key skills:</h1>
              <div className="flex flex-wrap gap-2 mt-3">
                {vacancy?.attributes.skills.split(",").map((skill, index) => (
                  <p
                    key={index}
                    className="py-1 px-2 text-[14px] rounded bg-gray-300"
                  >
                    {skill}
                  </p>
                ))}
              </div>
            </div>
            <h1 className="text-gray-400 mt-10">
              The vacancy was published on{" "}
              {convertDateFormat(vacancy?.attributes.createdAt)} in{" "}
              {vacancy?.attributes.company.data.attributes.location}
            </h1>
            <button className="rounded w-fit mt-4 py-2 px-32 bg-[#4bb24e] text-white" onClick={() => useReply(vacancy?.id)}>
              Respond
            </button>
          </div>
        </div>
        <div className="w-[25%] m-4 border-l border-b-gray-400 p-4">
          <img
            className="h-[100px] mb-6"
            src={`${DOMAIN}${vacancy?.attributes.company.data.attributes.logo.data.attributes.url}`}
            alt="company"
          />
          <h1 className="text-[24px]">
            {vacancy?.attributes.company.data.attributes.name}
          </h1>
          <p className="text-[16px]">
            {vacancy?.attributes.company.data.attributes.location}
          </p>
        </div>
      </div>
    </Layout>
  );
}

export default ReplyDetail;
