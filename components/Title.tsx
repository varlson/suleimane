import Image from "next/image";
import React from "react";

type TitleProps = {
  status: boolean;
};
function Title({ status }: TitleProps) {
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
            src="/icons/Mortarboard.png"
          />
          <p>Ensino Médio</p>
        </div>
      </div>

      <fieldset className="border p-4 border-slate-400">
        <legend className="px-3 font-semibold font-fira_code">
          11/12/2004
        </legend>
        <div className="flex gap-x-4 gap-y-2 items-center">
          <Image
            className="h-8 w-8 object-cover"
            src="/icons/University.png"
            alt=""
            width={200}
            height={200}
          />

          <p className="font-syne text-xl text-justify">
            Liceu Setorial de São Domingo
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
          <p className="font-syne text-xl text-justify">
            São Domingos - Guiné-Bissau
          </p>
          <Image
            width={200}
            height={200}
            className="h-6 w-10 object-cover"
            src="/icons/gb.png"
            alt=""
          />
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

export default Title;
