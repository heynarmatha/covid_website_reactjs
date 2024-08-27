import React from "react";
import styles from "./style.module.scss";
import greenCoronaHalfImage from "../../images/green-corona-half.png";

import greenCoronaImage from "../../images/green-corona.png";
import redCoronaImage from "../../images/red-corona.png";
import { Instruction } from "../../utils/types";
import { instructions } from "../../utils/data";

const InstructionCard: React.FC<Instruction> = ({
  id,
  image,
  title,
  description,
  greenCorona,
  redCorona,
}) => (
  <div className={id % 2 === 0 ? styles.intructionTwo : styles.intructionOne}>
    {greenCorona && id === 1 && (
      <div className={styles.greenCorona}>
        <img src={greenCoronaHalfImage} alt="Green Corona Half" />
      </div>
    )}
    <div className={styles.intructionImage}>
      <img src={image} alt={`Intruction Image ${id}`} width="100%" />
    </div>
    <div className={styles.intructionContent}>
      <div className={styles.number}>
        <div className={styles.ruleCount}>
          <h3>{`0${id}`}</h3>
        </div>
      </div>
      <div className={styles.rules}>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
    {greenCorona && id === 4 && (
      <div className={styles.greenCorona2}>
        <img src={greenCoronaImage} alt="Green Corona 2" />
      </div>
    )}
    {redCorona && (
      <div className={styles.redCorona}>
        <img src={redCoronaImage} alt="Red Corona" />
      </div>
    )}
  </div>
);

const IntructionSection: React.FC = () => {
  return (
    <section className={styles.intructionSectionWrapper}>
      <div className={styles.covidContentComman}>
        <h5>Covid-19</h5>
        <h3>What should we do</h3>
        <p>
          Corona viruses are a type of virus. There are many different kinds,
          and some cause disease...
        </p>
      </div>
      {instructions.map((instruction) => (
        <InstructionCard key={instruction.id} {...instruction} />
      ))}
    </section>
  );
};

export default IntructionSection;
