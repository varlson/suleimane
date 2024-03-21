import Image from "next/image";
import React from "react";

function Side() {
  return (
    <div className="">
      <p className=" font-fira_code border-b border-slate-400 text-xl  font-semibold uppercase pl-5">
        Contato
      </p>
      <ul className=" my-3 pl-5 font-jura">
        <li className="my-2">
          <div className="flex gap-x-5">
            <Image
              width={200}
              height={200}
              className="h-6 w-6 object-cover"
              src="/icons/email.png"
              alt=""
            />
            <p className="">ducure@gmail.com</p>
          </div>
        </li>

        <li className="my-2">
          <div className="flex gap-x-5">
            <Image
              width={200}
              height={200}
              className="h-6 w-6 object-cover"
              src="/icons/Phone.png"
              alt=""
            />
            <p className="">(31) 99420-4345</p>
          </div>
        </li>
        <li className="my-2">
          <div className="flex gap-x-5">
            <Image
              width={200}
              height={200}
              className="h-6 w-6 object-cover"
              src="/icons/nascimento.png"
              alt=""
            />
            <p className="">26-01-1995</p>
          </div>
        </li>
        <li className="my-2">
          <div className="flex gap-x-5">
            <Image
              width={200}
              height={200}
              className="h-6 w-6 object-cover"
              src="/icons/Flag.png"
              alt=""
            />
            <p className="">Guiné-Bissau</p>
          </div>
        </li>

        <li className="my-2">
          <div className="flex gap-x-5">
            <Image
              width={200}
              height={200}
              className="h-6 w-6 object-cover"
              src="/icons/marriage.png"
              alt=""
            />
            <p className="">Solteiro</p>
          </div>
        </li>

        <li className="my-2">
          <div className="flex gap-x-5">
            <Image
              width={200}
              height={200}
              className="h-6 w-6 object-cover"
              src="/icons/Address.png"
              alt=""
            />
            <p className="">Rua dezesseis, Nº 15, Bauxita, Ouro Preto - MG</p>
          </div>
        </li>
      </ul>

      <p className=" border-b border-slate-400 mt-5 text-xl font-fira_code font-semibold uppercase pl-5">
        HABILIDADES E COMPETÊNCIAS
      </p>
      <ul className="list-disc  my-3 pl-5 font-jura">
        <li className="my-2">Desenvolvimento full-stack MERN</li>
        <li className="my-2">NodeJS/Express</li>
        <li className="my-2">MongoDB</li>
        <li className="my-2 text-justify">
          Conhecimento intermediário de ferramenta de controle de versão GITHUB
        </li>
        <li className="my-2">React Native</li>
        <li className="my-2">ReactJS / NextJS</li>
        <li className="my-2">Python</li>
        <li className="my-2">C/C++</li>
        <li className="my-2 text-justify">
          Conhecimento intermediário de ferramenta de prototipagem FIGMA
        </li>
        <li className="my-2">HTML, CSS, Tailwindcss, javascript</li>
      </ul>
      <p className=" border-b border-slate-400 mt-5 text-xl font-fira_code font-semibold uppercase pl-5">
        CERTIFICAÇÕES
      </p>
      <ul className=" my-3 pl-5 font-jura">
        <li className="my-2">
          <div className="flex gap-x-2 items-center">
            <Image
              width={200}
              height={200}
              className="h-6 w-6 object-cover"
              src="/icons/Diploma.png"
              alt=""
            />
            <p>AWS Practitioner Certification</p>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Side;
