import cn from "classnames";

import styles from "./base.module.css";

export const BaseBtn = ({ img, name, func, isFilter, isSearch, search }) => (
  <button
    type="button"
    onClick={func}
    className={cn(
      isFilter && styles.filterBtn,
      isSearch && styles.searchBtn,
      search && styles.search
    )}
  >
    {name}
    {img && <img src={img} alt={`icon-${name}`} className={styles.img} />}
  </button>
);
