import * as React from "react";
import { useState } from "react";

import CombinationsTable from "./components/CombinationsTable";
import Balance from "./components/Balance";
import Bets from "./components/Bets";
import MainButton from "./components/MainButton";
import PokerTable from "./containers/PokerTable";
import Cards from "./containers/Cards";
import Controls from "./containers/Controls";

import RoundResult from "./portals/RoundResult";
import GameIsOver from "./portals/GameIsOver";

import Deck from "./functions/Deck";
import checkCombination from "./functions/checkCombination";
import setDelay from "./functions/setDelay";
import type Card from "./functions/Card";

import { tableData, betsData as bets, startBalance } from "./data/data";

let deck: Deck;
const createDeck = () => (deck = new Deck());

const App = () => {
  const [balance, setBalance] = useState(startBalance);
  const [betIndex, setBetIndex] = useState(0);
  const [isRoundFinished, setIsRoundFinished] = useState(true);
  const [cards, setCards] = useState<Card[]>([]);
  const [holdCards, setHoldCards] = useState<Card[]>([]);
  const [resultAmount, setResultAmount] = useState(0);
  const [resultCombination, setResultCombination] = useState(-1);
  const [gameIsOver, setGameIsOver] = useState(false);

  const changeCards = (cards: Card[]) => {
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

  const checkBankruptcy = async (): Promise<void> => {
    if (balance === 0) {
      await setDelay(1700);
      setGameIsOver(true);
    }
  };

  const calculateResult = (combination: number): void => {
    if (combination === 0) {
      setResultAmount(-bets[betIndex]);
      if (bets[betIndex] > balance) setBetIndex(findAvailableBetIndex(balance));
      checkBankruptcy();
    } else {
      const coeff = tableData.find((item) => item.id === combination - 1)
        .coeffs[betIndex];
      const win = bets[betIndex] * coeff;
      setResultAmount(win);
      setBalance((prev) => prev + win);
    }
  };

  const startRound = (): void => {
    createDeck();
    deck.shuffle();
    setCards(deck.distribution());
    setBalance((prev) => prev - bets[betIndex]);
  };

  const endRound = async (): Promise<void> => {
    const changedCards = changeCards([...cards]);
    setCards(changedCards);
    const combination = checkCombination([...changedCards]);
    await setDelay(600);
    calculateResult(combination.id);
    setResultCombination(combination.id);
    await setDelay(1500);
    setResultCombination(-1);
    setHoldCards([]);
  };

  const onPlus = (): void => {
    if (betIndex < bets.length - 1 && balance >= bets[betIndex + 1])
      setBetIndex(betIndex + 1);
  };

  const onMinus = (): void => {
    if (betIndex > 0) setBetIndex(betIndex - 1);
  };

  const onDeal = (): void => {
    isRoundFinished ? startRound() : endRound();
    setIsRoundFinished(!isRoundFinished);
  };

  const onHold = (card: Card): void => {
    holdCards.find((item) => item.id === card.id)
      ? setHoldCards((prev) => prev.filter((item) => item.id !== card.id))
      : setHoldCards((prev) => [...prev, card]);
  };

  const onRestart = (): void => {
    setBalance(startBalance);
    setBetIndex(0);
    setCards([]);
    setGameIsOver(false);
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
        shouldShow={resultCombination > -1}
        resultAmount={resultAmount}
      />
      <GameIsOver shouldShow={gameIsOver} onClick={onRestart} />
    </>
  );
};

export default App;
