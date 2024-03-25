"use client";
import React, { useEffect, useState } from "react";
import Icon from "./ui/Icon";

function Menu() {
  const navigateTo = (id: string) => {
    const section = document.getElementById(id) as HTMLElement;
    if (section) {
      const yOffset = -50; // Deslocamento opcional para ajustar a posição final
      const y =
        section.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  const [showAlert, setShowAlert] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const divElement = document.getElementById("scroll-anim");
      if (divElement) {
        const divTop = divElement.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        const middleOfScreen = windowHeight * 0.8;

        if (divTop <= middleOfScreen) {
          if (!showAlert) {
            setShowAlert(true);
          }
        } else {
          setShowAlert(false);
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="flex flex-col">
      <p className="uppercase font-syne text-white menu-title font-bold text-center text-3xl mb-10">
        Menu
      </p>
      <div
        id="scroll-anim"
        className={` ${
          showAlert ? "anim" : "anim-ou"
        } grid grid-cols-4 gap-y-10 gap-x-20`}
      >
        <div
          onClick={() => {
            navigateTo("projects");
          }}
        >
          <Icon label="Projetos" src="Project" />
        </div>
        <div
          onClick={() => {
            navigateTo("monograph");
          }}
        >
          <Icon label="Monografia" src="Justify" />
        </div>

        <div
          onClick={() => {
            navigateTo("search");
          }}
        >
          <Icon label="Pesquisas" src="Analyze" />
        </div>

        <div
          onClick={() => {
            navigateTo("report");
          }}
        >
          <Icon label="Sobre Mim" src="Resume" />
        </div>
        <div
          onClick={() => {
            navigateTo("interest");
          }}
        >
          <Icon label="Interesses" src="Tuition" />
        </div>
      </div>
    </div>
  );
}

export default Menu;
