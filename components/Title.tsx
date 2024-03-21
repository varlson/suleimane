import { TitleType } from "@/types/types";
import Image from "next/image";
import React from "react";

type TitleProps = {
  status: boolean;
};
function Title(title_item: TitleType) {
  const { status, date, place, institute, title } = title_item;
  const city = place.split("-")[2].trim().toLocaleLowerCase();

  const [statusMsg, src] =
    status.toLocaleLowerCase() == "concluído"
      ? ["concluído", "ok"]
      : ["Em progresso", "progress"];
  return (
    <div className="py-5 rounded-md px-8 font-fira_code bg-white-950 my-3">
      <div className="font-semibold text-syne">
        <div className="flex gap-x-2 items-center">
          <Image
            alt=""
            width={200}
            height={200}
            className="h-9 w-9 object-cover"
            src="/icons/Mortarboard.png"
          />
          <p className="">{title}</p>
        </div>
      </div>

      <fieldset className="border p-4 border-slate-400">
        <legend className="px-3 font-semibold font-fira_code">{date}</legend>
        <div className="flex gap-x-4 gap-y-2 items-center">
          <Image
            className="h-6 w-6 object-cover"
            src="/icons/University.png"
            alt=""
            width={200}
            height={200}
          />

          <p className="font-syne  text-justify">{institute}</p>
        </div>
        <div className="flex gap-x-4 gap-y-4  items-center">
          <Image
            className="h-6 w-6 object-cover"
            src="/icons/Address.png"
            alt=""
            width={200}
            height={200}
          />
          <p className="font-syne  text-justify">{place}</p>
          <Image
            width={200}
            height={200}
            className="h-4 w-6 object-cover"
            src={`/icons/${city == "brasil" ? "br" : "gb"}.png`}
            alt=""
          />
        </div>

        <div className="flex gap-x-4 gap-y-2  items-center">
          <Image
            width={200}
            height={200}
            className="h-6 w-6 object-cover"
            src={`/icons/${src}.png`}
            alt=""
          />
          <p className="font-syne  text-justify">{`Status: ${statusMsg}`}</p>
        </div>
      </fieldset>
    </div>
  );
}

export default Title;
