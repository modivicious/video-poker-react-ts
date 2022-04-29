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

const startBalance: number = 50000;
const bets: number[] = [10000, 20000, 30000, 40000, 50000];

const App = () => {
  const [balance, setBalance] = useState(startBalance);
  const [betIndex, setBetIndex] = useState(0);
  const [isRoundFinished, setIsRoundFinished] = useState(true);
  const [cards, setCards] = useState([]);

  const onPlus = (): void => {
    if (betIndex < bets.length - 1) setBetIndex(betIndex + 1);
  };

  const onMinus = (): void => {
    if (betIndex > 0) setBetIndex(betIndex - 1);
  };

  const onDeal = (): void => {
    if (isRoundFinished) {
      const deck = new Deck();
      deck.shuffle();
      setCards(deck.distribution());
    }
    setIsRoundFinished(!isRoundFinished);
  };

  return (
    <div className="mainContainer">
      <PokerTable>
        <CombinationsTable />
        <Cards cards={cards} isRoundFinished={isRoundFinished} />
      </PokerTable>
      <Controls>
        <Balance balance={balance} />
        <Bets currentBet={bets[betIndex]} onPlus={onPlus} onMinus={onMinus} />
        <MainButton text="Deal" onClick={onDeal} />
      </Controls>
    </div>
  );
};

export default App;
