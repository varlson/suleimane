"use client";
import { useState, useEffect } from "react";
import Menu from "./Menu";

const MyComponent = () => {
  return (
    <div>
      <div className="h-screen bg-red-500">a</div>
      <div
        className={` h-screen bg-slate-500  flex items-center justify-center`}
      >
        <Menu />
      </div>
      <div className="h-screen bg-orange-500">a</div>
    </div>
  );
};

export default MyComponent;
