import { me } from "@/constants/constants";
import React from "react";

function Report() {
  return (
    <div className="flex flex-col md:col-row md:w-10/12  m-auto min-h-screen font-syne">
      <div className=" md:pb-28 p-4 col-span-6 w-full">
        <p className="text-justify italic font-jura">{me.value}</p>
      </div>
      <div className=" boder-l border-r "></div>
      <div className=" md:pb-28 col-span-6 w-full p-4 text-justify italic font-jura flex items-end">
        <p>{me.ambs}</p>
      </div>
    </div>
  );
}

export default Report;
