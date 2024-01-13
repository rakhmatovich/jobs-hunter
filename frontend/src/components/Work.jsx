import React from "react";
import { useNavigate } from "react-router-dom";

export default function Work({ name, setJobName }) {
  const navigate = useNavigate();

  const handleClick = () => {
    setJobName(name);
    navigate("/works/detail");
  };

  return (
    <button
      onClick={handleClick}
      className="bg-transparent rounded-2xl p-[5px] border border-gray-400 focus:bg-gray-500"
    >
      {name}
    </button>
  );
}
