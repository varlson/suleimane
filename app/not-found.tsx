"use client";
import Link from "next/link";
import React from "react";
import UseAnimations from "react-useanimations";
import alertTriangle from "react-useanimations/lib/alertTriangle";

function Page() {
  return (
    <div className=" font-syne text-xl font-bold text-violet-600 h-screen flex flex-col items-center justify-center">
      <p className="">Página nao existe</p>
      <UseAnimations
        strokeColor="#7c3aed"
        animation={alertTriangle}
        size={100}
      />

      <Link className="underline" href="/">
        <p className="my-2">Voltar para início</p>
      </Link>
    </div>
  );
}

export default Page;
