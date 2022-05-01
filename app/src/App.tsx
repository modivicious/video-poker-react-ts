import * as React from "react";
import { useState } from "react";

import CombinationsTable from "./components/CombinationsTable";
import Cards from "./containers/Cards";
import Balance from "./components/Balance";
import Bets from "./components/Bets";
import MainButton from "./components/MainButton";
import PokerTable from "./containers/PokerTable";
import Controls from "./containers/Controls";
import Deck from "./functions/Deck";
import RoundResult from "./portals/RoundResult";

import checkCombination from "./functions/checkCombinations";
import setDelay from "./functions/setDelay";

const startBalance: number = 50000;
const bets: number[] = [10000, 20000, 30000, 40000, 50000];

let deck: Deck;
const createDeck = () => {
  deck = new Deck();
};

const App = () => {
  const [balance, setBalance] = useState(startBalance);
  const [betIndex, setBetIndex] = useState(0);
  const [isRoundFinished, setIsRoundFinished] = useState(true);
  const [cards, setCards] = useState([]);
  const [holdCards, setHoldCards] = useState([]);
  const [result, setResult] = useState(-1);

  const changeCards = (cards) => {
    return cards.map((card) =>
      holdCards.some((holdCard) => holdCard.id === card.id)
        ? card
        : deck.getTopCard()
    );
  };

  const onPlus = (): void => {
    if (betIndex < bets.length - 1) setBetIndex(betIndex + 1);
  };

  const onMinus = (): void => {
    if (betIndex > 0) setBetIndex(betIndex - 1);
  };

  const onDeal = async (): Promise<void> => {
    if (isRoundFinished) {
      createDeck();
      deck.shuffle();
      setCards(deck.distribution());
    } else {
      let changedCards = changeCards([...cards]);
      setCards(changedCards);
      const combination = checkCombination([...changedCards]);
      console.log(combination);
      setHoldCards([]);
      setResult(combination.id);
      await setDelay(1500);
      setResult(-1);
    }
    setIsRoundFinished(!isRoundFinished);
  };

  const onHold = (card): void => {
    if (holdCards.find((item) => item.id === card.id)) {
      setHoldCards((prev) => prev.filter((item) => item.id !== card.id));
    } else {
      setHoldCards((prev) => [...prev, card]);
    }
  };

  return (
    <>
      <div className="mainContainer">
        <PokerTable>
          <CombinationsTable />
          <Cards
            cards={cards}
            isRoundFinished={isRoundFinished}
            onHold={onHold}
          />
        </PokerTable>
        <Controls>
          <Balance balance={balance} />
          <Bets currentBet={bets[betIndex]} onPlus={onPlus} onMinus={onMinus} />
          <MainButton text="Deal" onClick={onDeal} />
        </Controls>
      </div>
      <RoundResult result={result} isOpen={result > -1} />
    </>
  );
};

export default App;
