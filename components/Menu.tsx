"use client";
import React, { useEffect, useState } from "react";
import Icon from "./ui/Icon";

function Menu() {
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
    <div
      id="scroll-anim"
      className={` ${
        showAlert ? "anim" : "anim-ou"
      } grid grid-cols-4 gap-y-10 gap-x-20`}
    >
      <Icon src="Project" />
      <Icon src="Resume" />
      <Icon src="Tuition" />
      <Icon src="Analyze" />
      <Icon src="Justify" />
      <Icon src="Figma" />
    </div>
  );
}

export default Menu;
