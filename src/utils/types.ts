export type Instruction = {
  id: number;
  image: string;
  title: string;
  description: string;
  greenCorona?: boolean;
  redCorona?: boolean;
};

export type ContagionCard = {
  image: string;
  title: string;
  description: string;
};
export type CountryReport = {
  name: string;
  image: string;
  count: string;
  arrow: "up" | "down";
  color?: string;
};
