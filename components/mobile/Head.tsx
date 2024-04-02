import Image from "next/image";
import React from "react";

function Head() {
  return (
    <div className="bg-violete-600 p-2 relative top-0 h-20">
      <div className="text-white absolute flex flex-col justify-center items-center right-0 top-0 bottom-0 w-9/12 ">
        <p className="font-bold font-jura text-xl">SULEIMANE DUCURE</p>
        <p>{`< Manito />`} </p>
      </div>
      <div className="absolute bg-white h-28 w-28 rounded-full shadow">
        <Image
          alt=""
          width={500}
          height={500}
          className="h-28 w-28  object-contain bg-white rounded-full"
          src="/img/me_.png"
        />
      </div>
    </div>
  );
}

export default Head;
