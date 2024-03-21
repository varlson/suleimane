export type TitleType = {
  date: string;
  institute: string;
  place: string;
  status: string;
  title: string;
};

export type ExperienceType = TitleType & {
  ocupation: string;
  desc: string;
  institute_log: string;
};
