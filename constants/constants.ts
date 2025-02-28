import { CrtificationType, ExperienceType, TitleType } from "@/types/types";

export const formation: TitleType[] = [
  {
    title:
      "Mestrado em Ciência da Computação (Inteligência Artificial e Ciência de Dados)",
    date: "03/2025 <=> 03/2027",
    institute: "Universidade Federal de Ouro Preto",
    place: "Ouro Preto - MG - Brasil",
    status: "progress",
    course: "Ciência da Computação",
  },

  {
    title: "Graduação em Ciência da Computação",
    date: "08/2019 <=> 08/2024",
    institute: "Universidade Federal de Ouro Preto",
    place: "Ouro Preto - MG - Brasil",
    status: "done",
    course: "Ciência da Computação",
  },
  {
    title: "Ensino Secundário / Ensino Médio",
    date: "10/2012 <=> 06/2015",
    institute: "Liceu Setorial de São Domingos",
    place: "São Domingos - Cacheu - Guiné-Bissau",
    status: "done",
  },
];

export const experiences: ExperienceType[] = [
  {
    title: "Desenvolvedor Mobile",
    ocupation: "Desenvolvedor - Desenvolvedor Mobile na COMPASSUOL",
    date: "22/2024 <=> 02/2025",
    institute: "Desenvolvedor mobile (React Native) na Compassuol.",
    place: "Home Office",
    status: "terminated",
    desc: "Desenvolvedor mobile (React Native) na Compassuol.",
    institute_log: "compass",
  },
  {
    title: "Bolsista",
    ocupation: "Bolsista - Desenvolvedor Full Stack",
    date: "02/2024 <=> 12/2024",
    institute:
      "Deperamento da Engenharia Elétrica - Universidade Federal de Ouro Preto.",
    place: "Campus João Monlevade",
    status: "done",
    desc: "Continuação da reconstrução completa do site do departamento.",
    institute_log: "ufop",
  },
  {
    title: "Bolsista",
    ocupation: "Bolsista - Desenvolvedor Full Stack",
    date: "02/2023 <=> 02/2024",
    institute:
      "Deperamento da Engenharia Elétrica - Universidade Federal de Ouro Preto.",
    place: "Campus João Monlevade",
    status: "done",
    desc: "A tarefa envolve a reconstrução completa do site do departamento a partir do zero.",
    institute_log: "ufop",
  },
  {
    institute_log: "compass",
    title: "Estagiário/Trainne",
    ocupation: "Estagiário/Trainne - Desenvolvimento Mobile",
    date: "03/2024 <=> 08/2024",
    institute: "COMPASS UOL",
    place: "Remoto",
    status: "done",
    desc: "Realizei um estágio/trainee remoto no COMPASS UOL, onde estive envolvido com desenvolvimento mobile utilizando React Native.",
  },

  {
    institute_log: "ufop",
    title: "Bolsista - Iniciação Científica",
    ocupation: "Bolsista - Iniciação Científica ",
    date: "01/2021 <=> 12/2022",
    institute:
      "Departamento da Computação - Universidade Federal de Ouro Preto",
    place: "Ouro Preto",
    status: "done",
    desc: "Desenvolvi atividades como aluno pesquisador no âmbito do projeto de iniciação científica, focado no tema de Redes Complexas com Múltiplas Camadas.",
  },
  {
    institute_log: "ufop",
    title: "Bolsista - Iniciação Científica",
    ocupation: "Bolsista - Iniciação Científica ",
    date: "01/2020 <=> 12/2021",
    institute:
      "Departamento da Computação - Universidade Federal de Ouro Preto",
    place: "Ouro Preto",
    status: "done",
    desc: "Desenvolvi o projeto de pesquisa sobre redes complexas, abordando especificamente a análise de robustez em redes de mobilidade.",
  },
];

export const figmaProject = [
  {
    embLink:
      "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FHyXBQNqUDqb5bGzRJSbY2X%2FMercaline%3Ftype%3Ddesign%26node-id%3D107-2%26t%3D9gm7mW3nB3ycrMSC-1%26scaling%3Dmin-zoom%26page-id%3D0%253A1%26mode%3Ddesign",
  },
  {
    embLink:
      "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FaRS51zYQPhTcpkUYMI7ANs%2Fcoe-novo%3Ftype%3Ddesign%26node-id%3D1-2%26t%3Dfs4vcdhqzuK2hz4R-1%26scaling%3Dmin-zoom%26page-id%3D0%253A1%26starting-point-node-id%3D1%253A103%26mode%3Ddesign",
  },
  {
    embLink:
      "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2Frd8FmqSdTzmekKDgQQ0hkB%2FSTF%3Fnode-id%3D8-8%26mode%3Ddesign%26t%3D9k5F4exbYzB69RBS-1",
  },
];

export const researchs = [
  {
    title: "Análise de Robustez em Redes Complexas",
    resume:
      " Este projeto tem por objetivo investigar a robustez de redes de mobilidade, a fim de se obter estratégias que causem maior dano na rede, a partir da remoção de nós que mais contribuem em sua eficiência. Esse tipo de estudo pode servir de base para a identificação de áreas topologicamente mais vulneráveis, subsidiando políticas públicas para melhora na infraestrutura de mobilidade das pessoas. Por outro lado, motivado pela pandemia do novo Coronavírus, a identificação destes nós faz-se necessária para a compreensão de como se dá a propagação de doenças, podendo auxiliar na tomada de decisão sobre quais áreas devem ter maior ou menor nível de isolamento social. Empreendeu-se uma análise com dados de mobilidade terrestre, fluvial e aérea, e verificou-se que atacar os nós a partir de seus graus e força apresenta maiores danos na maioria dos casos. Os efeitos dos ataques foram monitorados a partir do tamanho do componente gigante, fluxo total e eficiência.",
    link: "https://drive.google.com/file/d/1nnncuxCwpefz3PdV2FRtZZw1sNLOY40L/view?usp=drive_link",
    label: "Analise de robustez",
  },
  {
    title: "Redes complexas com Múltiplas Camadas",
    resume:
      "Redes complexas são grafos compostos por vértices, representando entidades que compõem o sistema complexo em estudo, e arestas, que capturam as interações entre eles. Exemplos incluem redes de mobilidade, a Internet e redes sociais. Uma categoria muito relevante é a das redes com múltiplas camadas, onde os nós podem corresponder às mesmas entidades, mas as conexões podem ser diferentes em cada camada. Em uma rede de mobilidade urbana, por exemplo, os nós representam localidades e as conexões são fluxos de pessoas. Pode existir uma camada com os fluxos mediados por transporte público outra por transporte individual e uma terceira por pessoas se movendo a pé ou por bicicleta. Neste contexto, estas camadas podem ser analisadas individualmente ou em conjunto. O objetivo deste projeto foi de investigar formas de se representar e analisar redes com múltiplas camadas.&Foi levado em conta aspectos teóricos, como as notações utilizadas e a adaptação de métricas tradicionais, e também aspectos práticos, com a análise de redes reais. Neste projeto, foram estudadas as redes de mobilidade do país, em que, os três modais (terrestre, aérea e fluvial) foram consideradas como as camadas, e estes foram analisados individualmente assim como em conjunto.",
    link: "https://drive.google.com/file/d/1uFFlXwLtmCQc2awSGI16sj2eBm1Uj0fJ/view?usp=drive_link",
    label: "Redes com múltiplas camadas",
  },
];

export const me = {
  value: ` " Nasci numa cidadezinha do interior, distante da capital Bissau, durante a metade da década de 90, e tive minha infância nos anos 2000. Mesmo sendo anos 2000, os valores e costumes que permeavam minha cidade remontavam a tempos anteriores, remontavam a épocas em que o respeito, a responsabilidade e o compromisso eram colocados acima de tudo. Esses valores moldaram minha personalidade desde cedo. Cresci com um profundo senso de responsabilidade, um compromisso e, principalmente, um respeito por tudo e por todos ao meu redor. São esses valores que carrego comigo ao longo da vida, lembrando-me constantemente da importância de honrar e preservar tais princípios em todas as minhas ações. "`,

  ambs: ` " Desde muito jovem, minha mãe me incutiu a ideia de que um dos atos
  mais nobres que alguém pode realizar é buscar algo que ofereça
  possibilidades de contribuir para o bem coletivo. Acredito firmemente
  que o conhecimento é a chave para isso. Não é à toa que decidi
  atravessar o oceano Atlântico, partindo da costa ocidental africana
  rumo à América do Sul. Essa jornada representa meu compromisso com o
  autodesenvolvimento e a busca por oportunidades que me permitam
  impactar positivamente a comunidade. Investir em minha própria
  educação não apenas enriquece minha vida pessoal, mas também me
  capacita a oferecer contribuições significativas para o bem comum. "`,
};

export const resume =
  "Graduando em Ciência da Computação pela Universidade Federal de Ouro Preto, com previsão de conclusão do curso para agosto de 2024. Sou um entusiasta das tecnologias, dedicando-me continuamente à aprendizagem, com foco especial nas tecnologias React.js/Next.js, MongoDB, Node.js, React Native, Figma, Python, C/C++, Git/GitHub, entre outras. Tenho também forte interesse em áreas acadêmicas, como pesquisas. Meus interesses de aprendizagem não se limitam apenas às áreas mencionadas acima, mas também incluem inteligência artificial, cibersegurança e áreas afins.";

export const Certifications: CrtificationType[] = [
  {
    title: "AWS Cloud Practitioner Certification",
    icon: "Diploma",
  },
  {
    title: "Typescript",
    icon: "Diploma",
  },
  {
    title: "EF SET Certificate",
    icon: "Diploma",
  },
];
