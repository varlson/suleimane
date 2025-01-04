import React from "react";
import Icon from "./Icon";
import ClickableIcon from "./ClickableIcon";

function Footer() {
  return (
    <div className="bg-black min-h-52 text-white font-fira_code flex items-center">
      <div className="gap-x-2 md:gap-x-5 p-5 w-full md:w-10/12 m-auto flex justify-center items-center">
        <div className=" md:px-4 py-5 min-w-64 ">
          <p className="font-semibold  font-jura text-sm my-1">
            Projetado e desenvolvido do zero por min:
          </p>
          <p className="font-thin text-sm font-nunito text-center my-1">
            ducure95@gmail.com
          </p>
          <p className="font-thin text-sm font-nunito text-center my-1">
            suleimane.ducure95@aluno.ufop.edu.br
          </p>

          <p className="font-thin text-sm font-nunito text-center my-1">
            (31) 99420-4345
          </p>
          <p className="font-bold text-center">{`SULEIMANE DUCURE`} </p>
        </div>
        <div className="border-l border-r h-24"></div>
        <div className="flex items-center gap-x-2 justify-center   ">
          <ClickableIcon link="https://github.com/varlson" src="GitHub" />
          <ClickableIcon
            link="https://www.instagram.com/varlson95/"
            src="Instagram"
          />
          <ClickableIcon
            link="https://www.linkedin.com/in/suleimane-ducure"
            src="LinkedIn"
          />
        </div>
      </div>
    </div>
  );
}

export default Footer;
