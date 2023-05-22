import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { BtnFavorites } from "../../components/assets/buttons/btn-favorites";

import {
  changeFavorites,
  changeSearchFavorites,
} from "../../redux/thunk/reducers/get-vacancies-reducer";

import styles from "./vacanci-page.module.css";

export const VacanciPage = () => {
  const dispatch = useDispatch();
  const vacanciId = useParams();
  const workArr = useSelector((state) => state.vacancies.vacancies);
  const workSearchArr = useSelector((state) => state.vacancies.vacanciesSearch);
  const vacanci = workArr?.find((el) => el.id === Number(vacanciId.id));
  const markup = { __html: vacanci?.vacancyRichText };
  const vacanciSearch = workSearchArr?.find(
    (el) => el.id === Number(vacanciId.id)
  );
  const markupSearch = { __html: vacanciSearch?.vacancyRichText };

  const onChangeFavorites = (e) => {
    dispatch(changeFavorites(e));
    dispatch(changeSearchFavorites(e));
  };

  return (
    <section>
      {vacanci && !vacanciSearch && (
        <>
          <div className={styles.container} data-elem={`vacancy-${vacanci.id}`}>
            <h3 className={styles.title}>{vacanci.profession}</h3>
            <BtnFavorites el={vacanci} func={onChangeFavorites} />
            <span className={styles.price}>з/п </span>
            {vacanci.payment_from > 0 && (
              <span className={styles.price}> {vacanci.payment_from} </span>
            )}
            {vacanci.payment_to > 0 && (
              <span className={styles.price}>- {vacanci.payment_to} </span>
            )}
            <span className={styles.price}>{vacanci.currency}</span>
            <span className={styles.point}>•</span>
            <span className={styles.day}>{vacanci.type_of_work.title}</span>
            <p className={styles.city}>{vacanci.town.title}</p>
          </div>
          <div className={styles.wrapper} dangerouslySetInnerHTML={markup} />
        </>
      )}
      {vacanciSearch && (
        <>
          <div className={styles.container}>
            <h3 className={styles.title}>{vacanciSearch.profession}</h3>
            <BtnFavorites el={vacanciSearch} func={onChangeFavorites} />
            <span className={styles.price}>з/п </span>
            {vacanciSearch.payment_from > 0 && (
              <span className={styles.price}>{vacanciSearch.payment_from}</span>
            )}
            {vacanciSearch.payment_to > 0 && (
              <span className={styles.price}>- {vacanciSearch.payment_to}</span>
            )}
            <span className={styles.price}>{vacanciSearch.currency}</span>
            <span className={styles.point}>•</span>
            <span className={styles.day}>
              {vacanciSearch.type_of_work.title}
            </span>
            <p className={styles.city}>{vacanciSearch.town.title}</p>
          </div>
          <div
            className={styles.wrapper}
            dangerouslySetInnerHTML={markupSearch}
          />
        </>
      )}
    </section>
  );
};
