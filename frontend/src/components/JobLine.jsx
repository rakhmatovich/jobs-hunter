import React from "react";
const colors = {
  1: "#D92121",
  2: "#FF8533",
  3: "#FF8533",
  4: "#FF8533",
  5: "#4BB233",
  6: "#4BB24E",
};

export default function JobLine({ page }) {
  return (
    <div className="w-full rounded-full bg-gray-300 h-3 overflow-hidden">
      <div
        className="rounded-full h-3"
        style={{ width: `${page * (100 / 6)}%`, backgroundColor: colors[page] }}
      ></div>
    </div>
  );
}
