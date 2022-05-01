import * as React from "react";
import { useState, useEffect } from "react";

import CombinationsTable from "./components/CombinationsTable";
import Cards from "./containers/Cards";
import Balance from "./components/Balance";
import Bets from "./components/Bets";
import MainButton from "./components/MainButton";
import PokerTable from "./containers/PokerTable";
import Controls from "./containers/Controls";
import Deck from "./functions/Deck";
import RoundResult from "./portals/RoundResult";

import checkCombination from "./functions/checkCombination";
import setDelay from "./functions/setDelay";

import { tableData } from "./data/tableData";

const startBalance: number = 50000;
const bets: Array<number> = [10000, 20000, 30000, 40000, 50000];

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
  const [resultAmount, setResultAmount] = useState(0);
  const [resultCombination, setResultCombination] = useState(-1);

  const changeCards = (cards) => {
    return cards.map((card) =>
      holdCards.some((holdCard) => holdCard.id === card.id)
        ? card
        : deck.getTopCard()
    );
  };

  const findAvailableBetIndex = (currentBalance: number): number => {
    let index = betIndex;
    while (bets[index] > currentBalance && index > 0) index -= 1;
    return index;
  };

  const calculateResult = (combination: number): void => {
    if (combination === 0) {
      setResultAmount(-bets[betIndex]);
      if (bets[betIndex] > balance) setBetIndex(findAvailableBetIndex(balance));
    } else {
      const coeff = tableData.find((item) => item.id === combination - 1)
        .coeffs[betIndex];
      const win = bets[betIndex] * coeff;
      setResultAmount(win);
      setBalance((prev) => prev + win);
    }
  };

  const onPlus = (): void => {
    if (betIndex < bets.length - 1 && balance >= bets[betIndex + 1])
      setBetIndex(betIndex + 1);
  };

  const onMinus = (): void => {
    if (betIndex > 0) setBetIndex(betIndex - 1);
  };

  const onDeal = async (): Promise<void> => {
    if (isRoundFinished) {
      createDeck();
      deck.shuffle();
      setCards(deck.distribution());
      setBalance((prev) => prev - bets[betIndex]);
    } else {
      let changedCards = changeCards([...cards]);
      setCards(changedCards);
      const combination = checkCombination([...changedCards]);
      calculateResult(combination.id);
      setHoldCards([]);
      setResultCombination(combination.id);
      await setDelay(1500);
      setResultCombination(-1);
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
          <CombinationsTable
            activeCol={betIndex}
            winningCell={resultCombination - 1}
          />
          <Cards
            cards={cards}
            isRoundFinished={isRoundFinished}
            onHold={onHold}
          />
        </PokerTable>
        <Controls>
          <Balance balance={balance} />
          <Bets
            currentBet={bets[betIndex]}
            onPlus={onPlus}
            onMinus={onMinus}
            isDisabled={!isRoundFinished}
          />
          <MainButton text="Deal" onClick={onDeal} />
        </Controls>
      </div>
      <RoundResult
        resultAmount={resultAmount}
        isOpen={resultCombination > -1}
      />
    </>
  );
};

export default App;
