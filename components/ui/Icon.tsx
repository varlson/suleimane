import Image from "next/image";
import React from "react";

function Icon({ src }: { src: string }) {
  return (
    <Image
      width={500}
      height={500}
      alt="menu icon"
      className="h-20 w-20 object-cover cursor-pointer shadow-md border-b border-violet-400 rounded-md"
      src={`/others/${src}.png`}
    />
  );
}

export default Icon;
