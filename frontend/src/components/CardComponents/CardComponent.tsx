import { Card } from "../../types/Card";
import css from "./CardComponents.module.css";

const CardComponent = ({ letter = "9", symbol = "trefl" }: Card) => {
  return (
    <div className={css.cardComponent__container}>
      <div className={css.cardLetterAndSymbol__box}>
        <p className={`${css.cardLetter} ${css[symbol]}`}>{letter}</p>
        <svg className={`${css.cardIcon}`}>
          <use href={`/assets/icons.svg#${symbol}`} />
        </svg>
      </div>
      <svg className={`${css.cardIconMiddle}`}>
        <use href={`/assets/icons.svg#${symbol}`} />
      </svg>
    </div>
  );
};

export default CardComponent;
