import Star from "../../../../assets/star.svg";
import BlueStar from "../../../../assets/blue.svg";

import styles from "./btn-favorites.module.css";

export const BtnFavorites = ({ el, func }) => (
  <button
    id={el.id}
    className={styles.btn}
    onClick={(e) => {
      func(e.target.id);
    }}
    data-elem={`vacancy-${el.id}-shortlist-button`}
  >
    {!el.isFavorites ? (
      <img id={el.id} src={Star} alt="icon-star" />
    ) : (
      <img id={el.id} src={BlueStar} alt="icon-star" />
    )}
  </button>
);
