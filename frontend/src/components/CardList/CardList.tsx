import { Card } from "../../types/Card";
import CardComponent from "../CardComponents/CardComponent";
import css from "./CardList.module.css";

const CardList = ({ cards }: { cards: Card[] }) => {
  return (
    <ul className={css.cardList}>
      {cards.map((card) => {
        const { id, symbol, letter } = card;
        return (
          <li key={card.id}>
            <CardComponent symbol={symbol} letter={letter} id={id} />
          </li>
        );
      })}
    </ul>
  );
};

export default CardList;
