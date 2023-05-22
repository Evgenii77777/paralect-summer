import { NavLink } from "react-router-dom";

import { Container } from "../container";
import Logo from "./assets/Union.svg";

import styles from "./header.module.css";

export const Header = () => (
  <header className={styles.header}>
    <Container>
      <div className={styles.wrapper}>
        <img src={Logo} alt="logo-icon" />
        <h1 className={styles.title}>Jobored</h1>
      </div>
      <ul className={styles.list}>
        <li className={styles.item}>
          <NavLink
            to="/"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }
          >
            Поиск Вакансий
          </NavLink>
        </li>
        <li className={styles.item}>
          <NavLink to="/favorites">Избранное</NavLink>
        </li>
      </ul>
    </Container>
  </header>
);
