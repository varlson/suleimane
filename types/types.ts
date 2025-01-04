export type TitleType = {
  date: string;
  institute: string;
  place: string;
  status: "progress" | "terminated" | "done";
  title: string;
  course?: string;
};

export type ExperienceType = TitleType & {
  ocupation: string;
  desc: string;
  institute_log: string;
};

export type CrtificationType = {
  title: string;
  icon: string;
};
