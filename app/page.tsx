import Image from "next/image";
import PDF from "@/components/Experience";
import Title from "@/components/Title";
import Experience from "@/components/Experience";
import Side from "@/components/Side";
import { experiences, formation } from "@/constants/constants";
import Menu from "@/components/Menu";
export default function Home() {
  return (
    <main className="bg-white-900 min-h-screen w-full pt-1">
      <div className="w-10/12 grid grid-cols-12 m-auto gap-x-4 ">
        <div className="border shadow-md p-3 bg-violet-00 border-violet-600 rounded col-span-3 flex justify-center items-center">
          <div className=" ">
            <Image
              alt=""
              width={500}
              height={500}
              className="h-44 w-full  object-contain bg-white rounded-full"
              src="/img/me_.png"
            />
          </div>
        </div>
        <div className="bg-violet-600	text-white col-span-9 rounded-md">
          <div>
            <p className="font-bold text-3xl pt-3 text-center font-jura">
              SULEIMANE DUCURE
            </p>
            <p className="border-t-2 my-2  mx-36"></p>
            <p className="text-2xl font-semibold font-jura text-center">
              {"< Manito />"}
            </p>
            <p className=" font-nunito px-20 py-2 font- mt-3 mb-1 text-justify">
              Atualmente, estou cursando Ciência da Computação na Universidade
              Federal de Ouro Preto, com previsão de conclusão em agosto de
              2024. Sou um entusiasta das tecnologias, dedicando-me
              continuamente à aprendizagem, com foco especial nas ferramentas
              React.js/Next.js, MongoDB, Node.js, React Native, Figma, Python,
              C/C++, entre outras.
            </p>
          </div>
        </div>

        <div className="col-span-3 mt-20">
          {/* <div className="bg-blue-400 "> */}
          <Side />
          {/* </div> */}
        </div>
        <div className="col-span-9">
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
                <p className="mb-4 font-semibold text-xl font-nunito">
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
    </main>
  );
}
