import Image from "next/image";
import PDF from "@/components/Experience";
import Title from "@/components/Title";
import Experience from "@/components/Experience";
export default function Home() {
  return (
    <main className="bg-white-900 min-h-screen w-full p-2">
      <div className="w-10/12 grid grid-cols-12 m-auto gap-x-4 ">
        <div className="border-r shadow-md p-3 border-slate-400 rounded col-span-3 flex justify-center items-center">
          <div className=" ">
            <Image
              alt=""
              width={500}
              height={500}
              className="h-60 w-60 object-cover bg-white rounded-full"
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
            <p className=" font-nunito px-20 py-2 text-xl font- mt-3 mb-1 text-justify">
              Atualmente, estou cursando Ciência da Computação na Universidade
              Federal de Ouro Preto, com previsão de conclusão em agosto de
              2024. Sou um entusiasta das tecnologias, dedicando-me
              continuamente à aprendizagem, com foco especial nas ferramentas
              React.js/Next.js, MongoDB, Node.js, React Native, Figma, Python,
              C/C++, entre outras.
            </p>
          </div>
        </div>

        <div className="col-span-3 mt-20 ">
          <div className="f">
            <p className=" font-fira_code border-b border-slate-400 text-2xl  font-semibold uppercase pl-5">
              Contato
            </p>
            <ul className="text-xl my-3 pl-5 font-jura">
              <li className="my-2">
                <div className="flex gap-x-5">
                  <Image
                    width={200}
                    height={200}
                    className="h-8 w-8 object-cover"
                    src="/icons/email.png"
                    alt=""
                  />
                  <p className="text-xl">ducure@gmail.com</p>
                </div>
              </li>

              <li className="my-2">
                <div className="flex gap-x-5">
                  <Image
                    width={200}
                    height={200}
                    className="h-8 w-8 object-cover"
                    src="/icons/Phone.png"
                    alt=""
                  />
                  <p className="text-xl">(31) 99420-4345</p>
                </div>
              </li>
              <li className="my-2">
                <div className="flex gap-x-5">
                  <Image
                    width={200}
                    height={200}
                    className="h-8 w-8 object-cover"
                    src="/icons/nascimento.png"
                    alt=""
                  />
                  <p className="text-xl">26-01-1995</p>
                </div>
              </li>
              <li className="my-2">
                <div className="flex gap-x-5">
                  <Image
                    width={200}
                    height={200}
                    className="h-8 w-8 object-cover"
                    src="/icons/Flag.png"
                    alt=""
                  />
                  <p className="text-xl">Guiné-Bissau</p>
                </div>
              </li>

              <li className="my-2">
                <div className="flex gap-x-5">
                  <Image
                    width={200}
                    height={200}
                    className="h-8 w-8 object-cover"
                    src="/icons/marriage.png"
                    alt=""
                  />
                  <p className="text-xl">Solteiro</p>
                </div>
              </li>

              <li className="my-2">
                <div className="flex gap-x-5">
                  <Image
                    width={200}
                    height={200}
                    className="h-8 w-8 object-cover"
                    src="/icons/Address.png"
                    alt=""
                  />
                  <p className="text-xl">
                    Rua dezesseis, Nº 15, Bauxita, Ouro Preto - MG
                  </p>
                </div>
              </li>
            </ul>

            <p className=" border-b border-slate-400 mt-5 text-2xl font-fira_code font-semibold uppercase pl-5">
              HABILIDADES E COMPETÊNCIAS
            </p>
            <ul className="list-disc text-xl my-3 pl-5 font-jura">
              <li className="my-2">Desenvolvimento full-stack (MERN)</li>
              <li className="my-2">
                Conhecimento intermediário de ferramenta de controle de versão
                GITHUB
              </li>
              <li className="my-2">React Native</li>
              <li className="my-2">ReactJS / NextJS</li>
              <li className="my-2">Python</li>
              <li className="my-2">C/C++</li>
              <li className="my-2">
                Conhecimento intermediário de ferramenta de prototipagem FIGMA
              </li>
              <li className="my-2">HTML, CSS, Tailwindcss, javascript</li>
            </ul>
            <p className=" border-b border-slate-400 mt-5 text-2xl font-fira_code font-semibold uppercase pl-5">
              CERTIFICAÇÕES
            </p>
            <ul className="text-xl my-3 pl-5 font-jura">
              <li className="my-2">
                <div className="flex gap-x-2 items-center">
                  <Image
                    width={200}
                    height={200}
                    className="h-8 w-8 object-cover"
                    src="/icons/Diploma.png"
                    alt=""
                  />
                  <p>AWS Practitioner Certification</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-span-9">
          <div className="mt-16">
            <div className="my-2 pt-4 border-l p-4 border-slate-400">
              <div className="">
                <p className="mb-4 font-semibold text-2xl font-nunito">
                  FORMAÇÃO ACADÊMICA
                </p>
              </div>
              <Title status={false} />
            </div>

            <div className="my-2 pt-4 border-l p-4 border-slate-400">
              <div className="">
                <p className="mb-4 font-semibold text-2xl font-nunito">
                  HISTÓRICO PROFISSIONAL
                </p>
              </div>
              <Experience status={true} />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
