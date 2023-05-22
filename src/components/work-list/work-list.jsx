import { WorkItem } from "../work-item";

import styles from "./work-list.module.css";

export const WorkList = ({ workArr, onChangeFavorites, workArrSearch }) => {
  return (
    <ul className={styles.list}>
      {workArr &&
        !workArrSearch?.length &&
        workArr?.map((el) => (
          <WorkItem el={el} onChangeFavorites={onChangeFavorites} key={el.id} />
        ))}
      {workArrSearch &&
        workArrSearch.map((el) => (
          <WorkItem el={el} onChangeFavorites={onChangeFavorites} key={el.id} />
        ))}
    </ul>
  );
};
