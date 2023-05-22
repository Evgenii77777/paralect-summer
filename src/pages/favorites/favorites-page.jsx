import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { PaginatedItems } from "../../components/pagination/pagination";
import {
  changeFavorites,
  changeSearchFavorites,
} from "../../redux/thunk/reducers/get-vacancies-reducer";

import Man from "./assets/Frame.png";

import styles from "./favorites.module.css";

export const FavoritesPage = () => {
  const dispatch = useDispatch();
  const favoritesArr = useSelector((state) => state.vacancies.vacancies).filter(
    (el) => el.isFavorites
  );
  const favoritesSearchArr = useSelector(
    (state) => state.vacancies.vacanciesSearch
  ).filter((el) => el.isFavorites);
  const allFavoritesArr = [...favoritesArr, ...favoritesSearchArr];
  const favorites = localStorage.setItem(
    "allFavoritesArr",
    JSON.stringify(allFavoritesArr)
  );
  const favoritesLocaleArr = JSON.parse(
    localStorage.getItem("allFavoritesArr")
  );

  const onChangeFavorites = (e) => {
    dispatch(changeFavorites(e));
    dispatch(changeSearchFavorites(e));
  };

  return (
    <section className={styles.section}>
      <div className={styles.wrapper}>
        {favoritesLocaleArr && favoritesLocaleArr.length > 0 && (
          <PaginatedItems
            itemsPerPage={4}
            onChangeFavorites={onChangeFavorites}
            workArr={favoritesLocaleArr}
            workArrSearch={favoritesLocaleArr}
          />
        )}
      </div>
      {!favoritesArr?.length && !favoritesSearchArr?.length && (
        <>
          <img className={styles.img} src={Man} alt="icon-man" />
          <h2 className={styles.title}>Упс, здесь еще ничего нет!</h2>
          <Link to="/">Поиск Вакансий</Link>
        </>
      )}
    </section>
  );
};
