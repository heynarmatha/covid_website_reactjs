import React from "react";
import { Link } from "react-router-dom";
import styles from "./style.module.scss";

const NotFound: React.FC = () => {
  return (
    <div className={styles.notFoundWrapper}>
      <div className={styles.notFoundContainer}>
        <h4>Page Not Found</h4>
        <h4>Sorry, the page you are looking for does not exist.</h4>
      </div>
      <Link to="/" className={styles.homeLink}>
        Go back to the homepage
      </Link>
    </div>
  );
};

export default NotFound;
