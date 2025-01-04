import React from "react";
import Profile from "./Profile";
import Image from "next/image";
import { ExperienceType } from "@/types/types";

function Page(experience: ExperienceType) {
  const {
    title,
    status,
    desc,
    date,
    place,
    institute,
    ocupation,
    institute_log,
  } = experience;
  const [statusMsg, src] =
    status == "done"
      ? ["concluído", "ok"]
      : status == "progress"
      ? ["Em progresso", "progress"]
      : ["Terminado", "finish"];
  return (
    <div className="py-5 rounded-md px-8 bg-white-950 my-3">
      <div className="font-semibold  text-syne">
        <div className="flex gap-x-2 items-center">
          <Image
            alt=""
            width={200}
            height={200}
            className="h-9 w-9 object-cover"
            src="/icons/estagio.png"
          />
          <p className="text-font-fira_code">{title}</p>
        </div>
      </div>

      <fieldset className="border p-4 border-slate-400">
        <legend className="px-3 font-semibold font-fira_code">{date}</legend>

        <div className="flex gap-x-4 gap-y-2 my-1 items-center ">
          <Image
            className="h-6 w-4 object-fil ml-1"
            src="/icons/detail.png"
            alt=""
            width={200}
            height={200}
          />

          <p className="font-syne  text-justify">{desc}</p>
        </div>

        <div className="flex gap-x-4 gap-y-2 items-center ">
          <Image
            className={`${
              institute_log == "compass" ? "h-6 w-6" : "ml-1 h-6 w-4"
            } object-fil `}
            src={`/img/${institute_log}.png`}
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

export default Page;
