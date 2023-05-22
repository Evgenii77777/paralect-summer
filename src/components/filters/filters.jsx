import { BaseBtn } from "../assets/buttons/base";
import Up from "./assets/up.svg";
import Small from "./assets/small.svg";

import Cross from "./assets/cross.svg";

import styles from "./filters.module.css";

export const Filters = ({
  catalogues,
  onPlusPayment,
  onMinPayment,
  payentMax,
  payentMin,
  onChangeCategories,
  onClearAll,
  setPaymentMin,
  setPaymentMax,
  selValue,
  onGetSearch,
}) => {
  return (
    <div className={styles.filters}>
      <div className={styles.wrapper}>
        <h2>Фильтры</h2>
        <BaseBtn
          name="Сбросить все"
          img={Cross}
          isFilter={true}
          func={onClearAll}
        />
      </div>
      <div>
        <h3 className={styles.descr}>Отрасль</h3>
        <select
          onChange={onChangeCategories}
          value={selValue}
          data-elem="industry-select"
        >
          <option value="" hidden disabled selected>
            Выберете отрасль
          </option>
          {catalogues &&
            catalogues.map((el) => (
              <option key={el.key} value={`${el.title}/${el.key}`}>
                {el.title}
              </option>
            ))}
        </select>
      </div>
      <div className={styles.box}>
        <h3 className={styles.descr}>Оклад</h3>
        <div className={styles.wrapperInput}>
          <label>
            <input
              type="number"
              placeholder="От"
              className={styles.input}
              value={payentMin}
              onChange={(e) => setPaymentMin(Number(e.target.value))}
              data-elem="salary-from-input"
            />
          </label>
          <div className={styles.wrapperBtn}>
            <BaseBtn img={Up} func={() => onPlusPayment("min")} />
            <BaseBtn img={Small} func={() => onMinPayment("min")} />
          </div>
        </div>
        <div className={styles.wrapperInput}>
          <label>
            <input
              placeholder="До"
              className={styles.input}
              type="number"
              value={payentMax}
              onChange={(e) => setPaymentMax(Number(e.target.value))}
              data-elem="salary-to-input"
            />
          </label>
          <div className={styles.wrapperBtn}>
            <BaseBtn img={Up} func={onPlusPayment} />
            <BaseBtn img={Small} func={onMinPayment} />
          </div>
        </div>
      </div>
      <BaseBtn name="Применить" isSearch={true} func={onGetSearch} />
    </div>
  );
};
