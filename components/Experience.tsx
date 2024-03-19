import React from "react";
import Profile from "./Profile";
import Image from "next/image";

type ExperienceProps = {
  status: boolean;
};
function Page({ status }: ExperienceProps) {
  const [statusMsg, src] = status
    ? ["concluído", "ok"]
    : ["Em progresso", "progress"];
  return (
    <div className="py-5 rounded-md px-8 bg-white-950">
      <div className="font-semibold text-2xl text-syne">
        <div className="flex gap-x-2 items-center">
          <Image
            alt=""
            width={200}
            height={200}
            className="h-12 w-12 object-cover"
            src="/icons/estagio.png"
          />
          <p>Bolsista - Desenvolvedor Full Stack</p>
        </div>
      </div>

      <fieldset className="border p-4 border-slate-400">
        <legend className="px-3 font-semibold font-fira_code">
          {`02/2023 <=> 02/2024`}
        </legend>
        <div className="flex gap-x-4 gap-y-2 items-center">
          <Image
            className="h-10 w-6 object-fil"
            src="/img/ufop.jpg"
            alt=""
            width={200}
            height={200}
          />

          <p className="font-syne text-xl text-justify">
            Deperamento da Engenharia Elétrica - Universidade Federal de Ouro
            Preto.
          </p>
        </div>
        <div className="flex gap-x-4 gap-y-4  items-center">
          <Image
            className="h-8 w-8 object-cover"
            src="/icons/Address.png"
            alt=""
            width={200}
            height={200}
          />
          <p className="font-syne text-xl text-justify">Capus João Monlevade</p>
        </div>

        <div className="flex gap-x-4 gap-y-2  items-center">
          <Image
            width={200}
            height={200}
            className="h-8 w-8 object-cover"
            src={`/icons/${src}.png`}
            alt=""
          />
          <p className="font-syne text-xl text-justify">{`Status: ${statusMsg}`}</p>
        </div>
      </fieldset>
    </div>
  );
}

export default Page;
