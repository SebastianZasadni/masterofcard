import { useEffect, useState } from "react";
import CardList from "../CardList/CardList";
import CardComponent from "../CardComponents/CardComponent";
import Player from "../Player/Player";
import css from "./Table.module.css";
import { Card } from "../../types/Card";
import useShuffledCards from "../../hooks/useShuffledCards";
import DiscardPile from "../DiscardPile/DiscardPile";

const Table = () => {
  const [playerOneCards, setPlayerOneCards] = useState<Card[]>([]);
  const [playerTwoCards, setPlayerTwoCards] = useState<Card[]>([]);
  const [discardPileCards, setDiscardPileCards] = useState<Card[]>([]);
  const { firstPileOfCards, secondPileOfCards } = useShuffledCards();

  const handleClick = (card: Card, player: string) => {
    const { id, symbol, letter } = card;

    if (symbol !== "karo" || letter !== "9") {
      const is9Karo = discardPileCards.find(
        (card) => card.symbol === "karo" && card.letter === "9"
      );
      if (!is9Karo) return;
    }

    setDiscardPileCards([...discardPileCards, card]);
    if (player === "one") {
      const filteredCards = playerOneCards.filter((card) => id !== card.id);
      setPlayerOneCards(filteredCards);
    }
    if (player === "two") {
      const filteredCards = playerTwoCards.filter((card) => id !== card.id);
      setPlayerTwoCards(filteredCards);
    }
  };

  useEffect(() => {
    setPlayerOneCards(firstPileOfCards);
    setPlayerTwoCards(secondPileOfCards);
  }, [firstPileOfCards, secondPileOfCards]);

  return (
    <div className={css.tableContainer}>
      <Player>
        <CardList>
          {playerOneCards.map((card) => {
            const { id, symbol, letter } = card;
            return (
              <li key={card.id}>
                <CardComponent
                  symbol={symbol}
                  letter={letter}
                  id={id}
                  handleClick={() => handleClick(card, "one")}
                />
              </li>
            );
          })}
        </CardList>
      </Player>
      <DiscardPile>
        <CardList>
          {discardPileCards.map((card) => {
            const { id, symbol, letter } = card;
            return (
              <li key={card.id}>
                <CardComponent
                  symbol={symbol}
                  letter={letter}
                  id={id}
                  handleClick={undefined}
                />
              </li>
            );
          })}
        </CardList>
      </DiscardPile>
      <Player>
        <CardList>
          {playerTwoCards.map((card) => {
            const { id, symbol, letter } = card;
            return (
              <li key={card.id}>
                <CardComponent
                  symbol={symbol}
                  letter={letter}
                  id={id}
                  handleClick={() => handleClick(card, "two")}
                />
              </li>
            );
          })}
        </CardList>
      </Player>
    </div>
  );
};

export default Table;
