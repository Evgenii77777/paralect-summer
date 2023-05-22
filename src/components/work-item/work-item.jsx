import { Link } from "react-router-dom";

import { BtnFavorites } from "../assets/buttons/btn-favorites";

import styles from "./work-item.module.css";

export const WorkItem = ({ el, onChangeFavorites }) => {
  return (
    <li className={styles.item} data-elem={`vacancy-${el.id}`}>
      <Link to={`/vacancies/${el.id}`}>
        <h3 className={styles.title}>{el.profession}</h3>
        <span className={styles.price}>з/п </span>
        {el.payment_from > 0 && (
          <span className={styles.price}> {el.payment_from} </span>
        )}
        {el.payment_to > 0 && (
          <span className={styles.price}>- {el.payment_to} </span>
        )}
        <span className={styles.price}>{el.currency}</span>
        <span className={styles.point}>•</span>
        <span className={styles.day}>{el.type_of_work.title}</span>
        <p className={styles.city}>{el.town.title}</p>
      </Link>
      <BtnFavorites el={el} func={onChangeFavorites} />
    </li>
  );
};
