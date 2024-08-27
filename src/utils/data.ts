import do1Image from "../images/do-1.png";
import do2Image from "../images/do-2.png";
import do3Image from "../images/do-3.png";
import do4Image from "../images/do-4.png";
import contagionCardImage1 from "../images/contagion-card-image-1.png";
import contagionCardImage2 from "../images/contagion-card-image-2.png";
import contagionCardImage3 from "../images/contagion-card-image-3.png";
import usaImage from "../images/USA.png";
import italyImage from "../images/ITALY.png";
import chinaImage from "../images/CHINA.png";
import spainImage from "../images/SPAIN.png";
import germanyImage from "../images/GERMANY.png";
import iranImage from "../images/IRAN.png";
import { ContagionCard, CountryReport, Instruction } from "./types";

export const instructions: Instruction[] = [
  {
    id: 1,
    image: do1Image,
    title: "Wear Masks",
    description: `Continually seize impactful vortals rather than future-proof supply chains. Uniquely exploit emerging niches via fully tested meta-services. Competently pursue standards compliant leadership skills vis-a-vis pandemic "outside the box" thinking. Objectively`,
    greenCorona: true,
  },
  {
    id: 2,
    image: do2Image,
    title: "Wash Your Hands",
    description: `Continually seize impactful vortals rather than future-proof supply chains. Uniquely exploit emerging niches via fully tested meta-services. Competently pursue standards compliant leadership skills vis-a-vis pandemic "outside the box" thinking. Objectively Continually seize impactful vortals`,
  },
  {
    id: 3,
    image: do3Image,
    title: "Use Nose-Rag",
    description: `Continually seize impactful vortals rather than future-proof supply chains. Uniquely exploit emerging niches via fully tested meta-services. Competently pursue standards compliant leadership skills vis-a-vis pandemic "outside the box" thinking. Objectively`,
  },
  {
    id: 4,
    image: do4Image,
    title: "Avoid Contacts",
    description: `Continually seize impactful vortals rather than future-proof supply chains. Uniquely exploit emerging niches via fully tested meta-services. Competently pursue standards compliant leadership skills vis-a-vis pandemic "outside the box" thinking. Objectively Continually seize impactful vortals`,
    greenCorona: true,
    redCorona: true,
  },
];

export const contagionCards: ContagionCard[] = [
  {
    image: contagionCardImage1,
    title: "Air Transmission",
    description:
      "Objectively evolve tactical expertise before extensible initiatives. Efficiently simplify",
  },
  {
    image: contagionCardImage2,
    title: "Human Contacts",
    description:
      "Washing your hands is one of the simplest ways you can protect",
  },
  {
    image: contagionCardImage3,
    title: "Containted Objects",
    description:
      "Use the tissue while sneezing, In this way, you can protect your droplets.",
  },
];

export const countryReports: CountryReport[] = [
  { name: "USA", image: usaImage, count: "100,392", arrow: "up" },
  { name: "Italy", image: italyImage, count: "86,498", arrow: "up" },
  {
    name: "China",
    image: chinaImage,
    count: "81,340",
    arrow: "down",
    color: "green",
  },
  { name: "Spain", image: spainImage, count: "64,059", arrow: "up" },
  { name: "Germany", image: germanyImage, count: "50,871", arrow: "up" },
  { name: "Iran", image: iranImage, count: "32,332", arrow: "up" },
];
