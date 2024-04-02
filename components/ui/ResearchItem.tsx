import { researchs } from "@/constants/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type ResearchItem = {
  title: string;
  resume: string;
  link: string;
  label: string;
};
function ResearchItem({ title, resume, link, label }: ResearchItem) {
  const resumesText = resume.split("&");
  return (
    <div className="bg-white-950 p-3 rounded mt-10 ">
      <div className="flex md:gap-x-10 text-xl items-center ">
        <p className="px-2 rounded md:px-5 py-2   bg-violet-600 text-white justify-self-start">
          Tema
        </p>
        <p className="px-2  md:px-5 py-2 flex-1 text-violet-600 font-semibold text-center ">
          {title}
        </p>
      </div>
      <div>
        <div className="bg-violet-600 text-white shadow-md p-3 my-3 text-justify rounded">
          {resumesText.map((text, index) => (
            <p key={index} className="py-4">
              {text}
            </p>
          ))}
        </div>
        <div className="flex">
          <Link
            target="blank"
            className="underline flex items-center"
            href={link}
          >
            <Image
              src="/icons/PDF_violete.png"
              alt="pdf icon"
              height={200}
              width={200}
              className="h-8 w-8 object-fill"
            />
            <p className="">{label}</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ResearchItem;
