import React from "react";

function Interests() {
  return (
    <div className="w-10/12 m-auto h-screen flex flex-col justify-center">
      <p className="py-4 uppercase font-bold font-syne text-xl text-center">
        Áreas de Interesses
      </p>

      <div className="px-10 py-20 rounded-md bg-white-950 shadow-md">
        <p className="text-justify font-nunito">
          Tenho uma grande paixão pela tecnologia em geral e um forte interesse
          pelo desenvolvimento web, mobile e desktop. Além disso, tenho grande
          interesse em áreas acadêmicas, especialmente em pesquisa. Embora até o
          momento minha atuação esteja focada nessas áreas mencionadas, estou
          aberto a novas oportunidades não apenas para aprofundar meu
          conhecimento nelas, mas também para expandir para áreas como segurança
          cibernética, inteligência artificial e campos relacionados.
        </p>
      </div>
    </div>
  );
}

export default Interests;
