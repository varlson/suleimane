import Image from "next/image";
import Link from "next/link";
import React from "react";

type ClickableIconProps = {
  src: string;
  link: string;
};
function ClickableIcon({ src, link }: ClickableIconProps) {
  return (
    <Link target="blank" href={link}>
      <Image
        alt="icons"
        src={`/icons/${src}.png`}
        width={500}
        height={500}
        className="h-7 w-7"
      />
    </Link>
  );
}

export default ClickableIcon;
