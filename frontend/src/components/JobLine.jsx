import React from "react";

export default function JobLine({ page }) {
  return (
    <div className="w-full rounded-full bg-gray-300 h-3 overflow-hidden">
      <div
        className="rounded-full h-3 bg-red-500"
        style={{ width: `${page * 20}%` }}
      ></div>
    </div>
  );
}
