"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

function Monograph() {
  const [apply, setApply] = useState(false);
  useEffect(() => {
    const mono_div = document.getElementById("mono-div") as HTMLElement;
    const scrollHandle = () => {
      const top = mono_div.getBoundingClientRect().top;
      const bottom = mono_div.getBoundingClientRect().bottom;
      const wind = window.innerHeight;

      if (top <= wind && bottom >= 0) {
        console.log(`dentro\n`);
        setApply(true);
      } else {
        setApply(false);
      }
    };

    window.addEventListener("scroll", scrollHandle);
  }, []);

  return (
    <div
      id="mono-div"
      className={`md:w-10/12 m-auto ${apply ? `in_views` : "out_views"}`}
    >
      <p className="text-center font-bold font-syne uppercase text-white">
        Monografia
      </p>

      <div className="py-10 grid gap-x-5  grid-cols-12 text-white ">
        <div className="border- p-3 col-span-5 font-syne ">
          <div className="flex flex-col gap-x-5 gap-y-2 items-center">
            <fieldset className=" my-3 border p-3 ">
              <legend className=" px-2 ml-5 font-semibold text-xl">
                Título:
              </legend>
              <p className="text-justify">
                A correspondência entre a estrutura da rede de mobilidade e os
                casos de COVID-19 no Brasil.
              </p>
            </fieldset>

            <fieldset className=" my-3 border p-3 ">
              <legend className=" px-2 ml-5 font-semibold text-xl">
                Objetivo:
              </legend>
              <p className="text-justify">
                Objetivo desta monografia é estudar a relação entre dados de
                mobilidade e dados de casos de COVID-19 nas cidades brasileiras,
                traçando-se um paralelo entre a ordem de notificação dos
                primeiros casos e a centralidade das cidades nas respectivas
                redes de mobilidade
              </p>
            </fieldset>

            <fieldset className=" my-3 border p-3 w-full">
              <legend className=" px-2 ml-5 font-semibold text-xl">
                Palavras chaves:
              </legend>
              <p className="text-justify">
                Redes complexas, Mobilidade, COVID-19, Epidemia
              </p>
            </fieldset>
            <fieldset className=" my-3 border p-3 w-full">
              <legend className=" px-2 ml-5 font-semibold text-xl px-2">
                Link:
              </legend>
              <div className="flex items-center justify-center">
                <Link
                  target="blank"
                  href="http://www.monografias.ufop.br/handle/35400000/6476"
                >
                  <Image
                    className="h-10 w-10"
                    src="/icons/PDF.png"
                    alt=""
                    height={500}
                    width={500}
                  />
                </Link>
              </div>
            </fieldset>
          </div>
        </div>
        <div className="order-l flex flex-col  col-span-7 gap-x-5 gap-y-2 items-center">
          <div className="flex border-l px-10 flex-col gap-x-5 gap-y-2 items-center">
            <fieldset className=" my-3 border-t  p-3 ">
              <legend className=" px-2 text-center ml-5 font-semibold text-xl">
                Resumo:
              </legend>
              <p className="font-syne text-justify">
                Com o propósito de investigar a relação entre a mobilidade das
                pessoas e os casos de COVID-19 no Brasil, este estudo busca
                aplicar abordagens de redes complexas para modelar e ilustrar a
                importância das redes de mobilidade na propagação de epidemias,
                como a COVID-19. Uma compreensão profunda desse fenômeno é
                crucial para a tomada de decisões no enfrentamento de epidemias
                similares. Foram utilizados dados de mobilidade aérea
                (referentes a 2019), fluvial e terrestre (ambos de 2016) do
                Instituto Brasileiro de Geografia e Estatística (IBGE),
                juntamente com dados de casos de COVID-19 (de fevereiro de 2020
                a maio de 2021) do Ministério da Saúde do Brasil. Redes foram
                construídas a partir dos dados de mobilidade, tendo as cidades
                como nós e as conexões entre cidades como arestas, representando
                os fluxos de deslocamento entre elas. Métricas de centralidade
                da rede, como grau, betweenness e closeness são computadas a
                partir da rede para se investigar as correspondências entre elas
                e os dados de notificação de casos de COVID-19. Para tanto,
                compara-se as cidades ordenadas a partir das métricas e as
                cidades ordenadas a partir das datas de primeira notificação de
                casos de COVID-19. Observa-se que a métrica strength apresenta
                as maiores correspondências, seguida por grau, closeness sem
                peso e betweenness sem peso. Observa-se que a métrica strength
                apresenta as maiores correspondências, seguida por grau,
                closeness sem peso e betweenness sem peso. Em todos os casos,
                exceto closeness com peso no modal fluvial, as métricas
                demonstraram bons resultados em capturar as correspondências,
                sugerindo assim, a possibilidade de investigar a previsibilidade
                do padrão de propagação de doenças infecciosas.
              </p>
            </fieldset>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Monograph;
