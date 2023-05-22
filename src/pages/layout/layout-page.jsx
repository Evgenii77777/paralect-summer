import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Filters } from "../../components/filters";
import { Search } from "../../components/search";
import { getAuth } from "../../redux/thunk/async/get-auth";

import {
  getSearchVacancies,
  getVacancies,
} from "../../redux/thunk/async/get-vacancies";
import { getCatalogues } from "../../redux/thunk/async/get-catalogues";
import {
  changeFavorites,
  changeSearchFavorites,
} from "../../redux/thunk/reducers/get-vacancies-reducer";

import styles from "./layout-page.module.css";
import { PaginatedItems } from "../../components/pagination/pagination";

export const LayoutPage = () => {
  const dispatch = useDispatch();
  const workArr = useSelector((state) => state.vacancies.vacancies);
  const workArrSearch = useSelector((state) => state.vacancies.vacanciesSearch);
  const catalogues = useSelector((state) => state.catalogues.catalogues);
  const isAuth = useSelector((state) => state.auth.auth);
  const isCatalogues = useSelector((state) => state.catalogues.catalogues);
  const [value, setValue] = useState("");
  const [selValue, setSelValue] = useState("");
  const [payentMin, setPaymentMin] = useState(null);
  const [payentMax, setPaymentMax] = useState(null);
  const [catKey, setCatKey] = useState(null);

  useEffect(() => {
    if (!isAuth?.access_token) {
      dispatch(getAuth());
    }
    if (!isCatalogues.length) {
      dispatch(getCatalogues());
    }
    if (workArr?.length === 0) {
      dispatch(getVacancies());
    }
  }, [dispatch, isAuth, isCatalogues.length, workArr?.length, workArr.objects]);

  const onChangeInputSearch = (e) => {
    setValue(e);
  };

  const onPlusPayment = (type) => {
    if (type !== "min") {
      setPaymentMax(Number(payentMax) + 100);
    } else {
      setPaymentMin(Number(payentMin) + 100);
    }
  };

  const onMinPayment = (type) => {
    if (payentMax > 0 && type !== "min") {
      setPaymentMax(Number(payentMax) - 100);
    }
    if (payentMin > 0 && type === "min") {
      setPaymentMin(Number(payentMin) - 100);
    }
  };

  const onChangeCategories = (e) => {
    setCatKey(e.target.value.split("/")[1]);
    setSelValue(e.target.value);
  };

  const onChangeFavorites = (e) => {
    dispatch(changeFavorites(e));
    dispatch(changeSearchFavorites(e));
  };

  const onClearAll = () => {
    setPaymentMin("");
    setPaymentMax("");
    setSelValue("");
    setValue("");
  };

  function onGetSearch() {
    dispatch(
      getSearchVacancies({
        keyword: value,
        from: payentMin,
        to: payentMax,
        catalogues: catKey,
      })
    );
  }

  return (
    <div className={styles.container}>
      <Filters
        catalogues={catalogues}
        onChangeCategories={onChangeCategories}
        setPaymentMin={setPaymentMin}
        setPaymentMax={setPaymentMax}
        onClearAll={onClearAll}
        onPlusPayment={onPlusPayment}
        onMinPayment={onMinPayment}
        payentMax={payentMax}
        payentMin={payentMin}
        selValue={selValue}
        catKey={catKey}
        onGetSearch={onGetSearch}
      />
      <div className={styles.wrapper}>
        <Search
          onChangeInputSearch={onChangeInputSearch}
          onGetSearch={onGetSearch}
          value={value}
        />
        <PaginatedItems
          itemsPerPage={4}
          onChangeFavorites={onChangeFavorites}
          workArr={workArr}
          workArrSearch={workArrSearch}
        />
      </div>
    </div>
  );
};
