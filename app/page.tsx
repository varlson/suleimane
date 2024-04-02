import Image from "next/image";
import Title from "@/components/Title";
import Experience from "@/components/Experience";
import Side from "@/components/Side";
import { experiences, formation, resume } from "@/constants/constants";
import Menu from "@/components/Menu";
import Project from "@/components/Project";
import Monograph from "@/components/Monograph";
import Search from "@/components/Search";
import Report from "@/components/Report";
import Interests from "@/components/Interests";
import Head from "@/components/mobile/Head";
import MobbileMonograph from "@/components/mobile/MobbileMonograph";
export default function Home() {
  return (
    <main className="bg-white-900 min-h-screen w-ful md:pt-1">
      <div className="md:w-10/12 grid grid-cols-12 m-auto gap-x-4 ">
        <div className="md:hidden bg-violet-600 col-span-12">
          <Head />
        </div>

        <div className="border shadow-md p-3 bg-violet-00 border-violet-600 rounded col-span-3  hidden md:flex justify-center items-center">
          <div className=" ">
            <Image
              alt=""
              width={500}
              height={500}
              className="h-36 w-36  object-contain bg-white rounded-full"
              src="/img/me_.png"
            />
          </div>
        </div>
        <div className="bg-violet-600	text-white hidden md:flex flex-col col-span-9 rounded-md">
          <div>
            <p className="font-bold text-3xl pt-3 text-center font-jura">
              SULEIMANE DUCURE
            </p>
            <p className="border-t-2 my-2  mx-36"></p>
            <p className="text-2xl font-semibold font-jura text-center">
              {"< Manito />"}
            </p>
            <p className=" font-nunito px-20 py-2 font- mt-3 mb-1 text-justify">
              {resume}
            </p>
          </div>
        </div>

        <div className="mb-2 mt-12 md:hidden col-span-12 ">
          <p className=" bg-white shadow font-nunito px-2 py-2 mx-3 rounded mt-3 mb-1 text-justify">
            {resume}
          </p>
        </div>

        <div className=" md:flex flex-col col-span-12 md:col-span-3 mt-20">
          <Side />
        </div>
        <div className="col-span-12 md:col-span-9">
          <div className="mt-16">
            <div className="my-2 pt-4 border-l p-4 border-slate-400">
              <div className="">
                <p className="mb-4 font-semibold text-xl font-nunito">
                  FORMAÇÃO ACADÊMICA
                </p>
              </div>
              {/* {<Title {...formation[0]} />} */}

              {formation.map((item, index) => (
                <Title key={index} {...item} />
              ))}
            </div>

            <div className="my-2 pt-4 border-l p-4 border-slate-400">
              <div className="">
                <p className=" mb-4 font-semibold text-xl font-nunito">
                  HISTÓRICO PROFISSIONAL
                </p>
              </div>
              {experiences.map((item, index) => (
                <Experience key={index} {...item} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div
        id="menu"
        className="col-span-12 mt-10 py-4 bg-violet-600 flex justify-center items-center h-screen"
      >
        <Menu />
      </div>

      <div
        id="projects"
        className="px-3 md:px-0 md:md:w-10/12 m-auto min-h-screen flex md:mt-1 mt-10 items-center justify-center "
      >
        <Project />
      </div>

      <div
        id="monograph"
        className="py-5 px-2 my-10 min-h-screen bg-violet-600 "
      >
        <div className="md:flex hidden">
          <Monograph />
        </div>

        <div className="md:hidden">
          <MobbileMonograph />
        </div>
      </div>

      <div id="search" className="py-5 px-2 my-10 min-h-screen bg-white-900 ">
        <Search />
      </div>

      <div id="report" className="py-5 px-2 my-10  bg-violet-600 text-white">
        <div className="font-bold text-center uppercase py-4 font-syne md:w-10/12 m-auto">
          <p>Sobre Mim</p>
        </div>
        <Report />
      </div>

      <div id="interest" className="mt-10 bg-white-900">
        <Interests />
      </div>
    </main>
  );
}
