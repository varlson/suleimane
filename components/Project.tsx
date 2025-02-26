"use client";
import Image from "next/image";
import React, { useState } from "react";
import Modal from "./ui/Modal";
import ProjCard from "./ProjCard";
import { figmaProject } from "@/constants/constants";

function Project() {
  return (
    <>
      <div className=" font-fira_code  w-full">
        <fieldset className="border-slate-500 border ">
          <legend className=" ml-4 md:ml-10 text-xl font-bold px-5  uppercase text-violet-600">
            Projetos
          </legend>

          <div className="grid grid-col-1 md:grid-cols-3 p-5 w-full gap-x-8 gap-y-4  justify-items-center">
            <div className="my-5 md:my-0">
              <ProjCard
                title="Merc-Line"
                desc="Protótipo de uma plataforma de venda online"
                img="merc-line.svg"
                embLink={figmaProject[0].embLink}
              />
            </div>
            <div className="my-5 md:my-0">
              <ProjCard
                title="Site do COEE"
                desc="Protótipo do site do do colegiado do departamento da Engenhria Engenharia Elétrica - UFOP "
                img="coe.svg"
                embLink={figmaProject[1].embLink}
              />
            </div>

            <div className="my-5 md:my-0">
              <ProjCard
                title="Andeme"
                desc="Protótipo de uma plataforma online de de venda de artigos feminino. Projeto em andamento"
                img="stf.svg"
                embLink={figmaProject[2].embLink}
              />
            </div>
          </div>
        </fieldset>
      </div>
    </>
  );
}

export default Project;
