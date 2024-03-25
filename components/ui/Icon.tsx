import Image from "next/image";
import React from "react";

function Icon({
  src,
  label,
  size,
}: {
  size?: string;
  src: string;
  label?: string;
}) {
  const style = size || "h-14 w-14";
  return (
    <div className="flex flex-col justify-center items-center">
      {label && (
        <p className="text-white font-fira_code text-center">{label}</p>
      )}
      <Image
        width={500}
        height={500}
        alt="menu icon"
        className={` ${style} hover:h-20 hover:w-20 animation-all duration-200 object-cover cursor-pointer shadow-md border-b border-violet-400 rounded-md`}
        src={`/others/${src}.png`}
      />
    </div>
  );
}

export default Icon;
