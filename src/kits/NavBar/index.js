import React from "react";
import { Link } from "react-router-dom";

import styles from "./styles.module.scss";

export default function NavBar() {
  return (
    <nav>
      <ul className={styles.navbar}>
        <li>
          <Link to="/">Profile</Link>
        </li>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
      </ul>
    </nav>
  );
}
