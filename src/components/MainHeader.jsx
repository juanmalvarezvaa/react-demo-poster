import { Link } from "react-router-dom";

import { MdMessage, MdPostAdd } from "react-icons/md";
import styles from "./MainHeader.module.css";

const MainHeader = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.logo}>
        <MdMessage />
        Demo Poster
      </h1>
      <p>
        <Link to="/add-post" className={styles.button}>
          <MdPostAdd size={18} />
          New Post
        </Link>
      </p>
    </header>
  );
};

export default MainHeader;
