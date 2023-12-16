import React from "react";
import { Link } from "react-router-dom";

export default function Work({ name }) {
  return (
    <div>
      <Link to='/userdetails'>
        <button className="bg-transparent rounded-2xl p-[5px] border border-gray-400 focus:bg-gray-500">
          {name}
        </button>
      </Link>
    </div>
  );
}
