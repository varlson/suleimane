import { researchs } from "@/constants/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import ResearchItem from "./ui/ResearchItem";

function Search() {
  return (
    <div className="p-1 md:p-3 md:w-10/12 m-auto font-syne">
      <p className="font-bold text-violet-600 rounded text-center text-xl font-syne uppercase p-3 bg-white-950">
        Pesquisas de iniciação científica
      </p>
      <ResearchItem {...researchs[0]} />
      <ResearchItem {...researchs[1]} />
    </div>
  );
}

export default Search;
