import React from "react";

function MobbileMonograph() {
  return (
    <div className="p-2 text-white">
      <fieldset className="border py-2 px-3 rounded">
        <legend className="text-2xl font-bold px-2 ml-4 font-fira_code uppercase">
          Monografia
        </legend>
        <div>
          <div className="my-2 gap-x-2 items-center">
            <p className="text-center font-bold text-xl">Título:</p>
            <p className="text-justify font-semibold mb-2">
              A correspondência entre a estrutura da rede de mobilidade e os
              casos de COVID-19 no Brasil.
            </p>
          </div>
          <p className="text-justify mt-3">
            Com o propósito de investigar a relação entre a mobilidade das
            pessoas e os casos de COVID-19 no Brasil, este estudo busca aplicar
            abordagens de redes complexas para modelar e ilustrar a importância
            das redes de mobilidade na propagação de epidemias, como a COVID-19.
            Uma compreensão profunda desse fenômeno é crucial para a tomada de
            decisões no enfrentamento de epidemias similares. Foram utilizados
            dados de mobilidade aérea (referentes a 2019), fluvial e terrestre
            (ambos de 2016) do Instituto Brasileiro de Geografia e Estatística
            (IBGE), juntamente com dados de casos de COVID-19 (de fevereiro de
            2020 a maio de 2021) do Ministério da Saúde do Brasil. Redes foram
            construídas a partir dos dados de mobilidade, tendo as cidades como
            nós e as conexões entre cidades como arestas, representando os
            fluxos de deslocamento entre elas. Métricas de centralidade da rede,
            como grau, betweenness e closeness são computadas a partir da rede
            para se investigar as correspondências entre elas e os dados de
            notificação de casos de COVID-19. Para tanto, compara-se as cidades
            ordenadas a partir das métricas e as cidades ordenadas a partir das
            datas de primeira notificação de casos de COVID-19. Observa-se que a
            métrica strength apresenta as maiores correspondências, seguida por
            grau, closeness sem peso e betweenness sem peso. Observa-se que a
            métrica strength apresenta as maiores correspondências, seguida por
            grau, closeness sem peso e betweenness sem peso. Em todos os casos,
            exceto closeness com peso no modal fluvial, as métricas demonstraram
            bons resultados em capturar as correspondências, sugerindo assim, a
            possibilidade de investigar a previsibilidade do padrão de
            propagação de doenças infecciosas.
          </p>
        </div>
      </fieldset>
    </div>
  );
}

export default MobbileMonograph;
