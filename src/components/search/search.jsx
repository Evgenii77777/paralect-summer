import { BaseBtn } from "../assets/buttons/base";

import styles from "./search.module.css";

export const Search = ({ onChangeInputSearch, onGetSearch, value }) => (
  <div className={styles.container}>
    <label className={styles.label}>
      <input
        value={value}
        className={styles.input}
        type="text"
        placeholder="Введите название вакансии"
        onChange={(e) => onChangeInputSearch(e.target.value)}
        data-elem="search-input"
      />
      <BaseBtn name="Поиск" search={true} func={onGetSearch} />
    </label>
  </div>
);
