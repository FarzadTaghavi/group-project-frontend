export type Graduate = {
  id: number;
  fullName: string;
  email: string;
  password: string;
  education: string;
  language: string;
  monthsToJob: number;
  interviews: string;
  jobType: string;
  companyLang: string;
  companySize: string;
  industry: string;
  techStack: string;
  answer1: string;
  answer2: string;
  answer3: string;
  answer4: string;
  answer5: string;
  answer6: string;
  answer7: string;
};

export type OnClick = React.MouseEvent<HTMLButtonElement>;

export type OnChange = React.ChangeEvent<HTMLInputElement>;
