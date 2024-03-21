"use client";
import React from "react";

function Menu() {
  const anim = () => {
    const itens = document.getElementById("scroll-anim") as HTMLDivElement;
    itens.classList.toggle("anim");
  };

  const eventHandle = () => {
    window.addEventListener("scroll", function () {
      var divParaAtingir = document.getElementById(
        "scroll-anim"
      ) as HTMLDivElement;
      var distanciaDoTopo = divParaAtingir.getBoundingClientRect().top;
      var alturaDaJanela = window.innerHeight;

      if (distanciaDoTopo < alturaDaJanela) {
        // Se a parte superior da div estiver visível na janela
        // ou seja, a distância do topo for menor que a altura da janela
        // você pode executar a ação desejada aqui
        alert("Ola");
        // Execute sua ação aqui, por exemplo:
        // minhaAcao();
      }
    });
  };

  return (
    <>
      <button
        onClick={anim}
        className="rounded-md px-4 py-2 bg-slate-300 mx-10"
      >
        anim
      </button>
      <div
        id="scroll-anim"
        className="opacity-0 grid grid-cols-4 gap-y-4 gap-x-10"
      >
        <div className=" h-20 w-20 bg-white"></div>
        <div className=" h-20 w-20 bg-white"></div>
        <div className=" h-20 w-20 bg-white"></div>
        <div className=" h-20 w-20 bg-white"></div>
        <div className=" h-20 w-20 bg-white"></div>
        <div className=" h-20 w-20 bg-white"></div>
        <div className=" h-20 w-20 bg-white"></div>
        <div className=" h-20 w-20 bg-white"></div>
        <div className=" h-20 w-20 bg-white"></div>
        <div className=" h-20 w-20 bg-white"></div>
        <div className=" h-20 w-20 bg-white"></div>
        <div className=" h-20 w-20 bg-white"></div>
      </div>
    </>
  );
}

export default Menu;
