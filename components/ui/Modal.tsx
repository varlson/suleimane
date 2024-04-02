"use client";
import Image from "next/image";
import React, { useState } from "react";
import Spinner from "./Spinner";

type ModalProps = {
  isOpen: boolean;
  setIsOpen: () => void;
  embLink: string;
};
function Modal({ isOpen, setIsOpen, embLink }: ModalProps) {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  if (!isOpen) return null;
  const fullScreenHandle = () => {
    const iframe = document.getElementById("iframe") as HTMLIFrameElement;
    iframe.requestFullscreen();
  };

  const loadingHandle = () => {
    setIsLoading(false);
  };

  const closeHandle = () => {
    setIsOpen();
    setIsLoading(true);
  };

  return (
    <div className="z-50 fixed inset-0 flex items-center justify-around bg-slate-500">
      <div className="absolute bg-black opacity-20"></div>
      <div className="w-full md:w-10/12 h-5/6 relative bg-white">
        <div className="gap-y-2 gap-x-5 mb-2 flex justify-end p-2 bg-violet-600">
          <Image
            onClick={fullScreenHandle}
            src="/icons/full_screen.png"
            alt="close icon"
            height={200}
            width={200}
            className="cursor-pointer h-8 w-8"
          />
          <Image
            onClick={closeHandle}
            src="/icons/close.png"
            alt="close icon"
            height={200}
            width={200}
            className="cursor-pointer h-8 w-8 "
          />
        </div>
        {isLoading && (
          <div className="justify-center items-center flex h-full">
            <Spinner />
          </div>
        )}
        <iframe
          onLoad={loadingHandle}
          id="iframe"
          className={` ${isLoading ? "hidden" : ""} iframe`}
          src={embLink}
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}

export default Modal;
