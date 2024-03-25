"use client";
import Image from "next/image";
import React, { useState } from "react";
import Modal from "./ui/Modal";
type ProjCardProps = {
  title: string;
  desc: string;
  embLink: string;
  img: string;
};

function ProjCard({ title, desc, embLink, img }: ProjCardProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const setOpen = () => {
    setIsOpen(false);
  };

  return (
    <>
      <Modal embLink={embLink} setIsOpen={setOpen} isOpen={isOpen} />
      <div
        onClick={() => {
          setIsOpen(true);
        }}
        className="project-card text-white rounded-md flex flex-col bg-violet-600 hover:scale-105 transition-all duration-100 cursor-pointer"
      >
        <div className="relative">
          <div className="absolute top-0 left-0 right-0 bottom-0 bg-black  opacity-0 flex items-center justify-center">
            <Image
              src="/img/Zoom.png"
              className="h-12 w-12 object-cover "
              height={500}
              width={500}
              alt=""
            />
          </div>
          <Image
            src={`/img/${img}`}
            className="h-36 w-full object-cover object-top"
            height={500}
            width={500}
            alt=""
          />
          <p className="underline underline-offset-4  my-2 text-center font-semibold">
            {title}
          </p>
          <p className="text-justify font-syne text-md px-3">{desc}</p>
        </div>
      </div>
    </>
  );
}

export default ProjCard;
