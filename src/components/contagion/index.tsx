import React from "react";
import styles from "./style.module.scss";
import coronaSmallImage from "../../images/corona-small.png";
import coronaContagionImage from "../../images/corona-contagion.png";
import IntructionSection from "./intructionSection";
import { ContagionCard } from "../../utils/types";
import { contagionCards } from "../../utils/data";

const Card: React.FC<ContagionCard> = ({ image, title, description }) => (
  <div className={styles.card}>
    <div className={styles.imageContagion}>
      <img src={image} alt={title} width="100%" />
    </div>
    <div className={styles.cardContent}>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  </div>
);

const ContagionScreen: React.FC = () => {
  return (
    <div>
      <section className={styles.contagionSectionWrapper}>
        <div className={styles.covidContentComman}>
          <p>
            Corona viruses are a type of virus. There are many different kinds,
            and some cause disease. A newly identified type
          </p>
        </div>
        <div className={styles.positionContagion}>
          <img src={coronaSmallImage} alt="details" />
        </div>
        <div className={styles.contagionOverallCard}>
          {contagionCards.map((card, index) => (
            <Card key={index} {...card} />
          ))}
        </div>
        <div className={styles.position3}>
          <img src={coronaContagionImage} alt="details" />
        </div>
      </section>
      <IntructionSection />
    </div>
  );
};

export default ContagionScreen;
