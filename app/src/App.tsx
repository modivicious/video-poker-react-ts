import * as React from "react";
import { useState } from "react";

import PokerTable from "./containers/PokerTable";
import Controls from "./containers/Controls";

const bets: number[] = [10000, 20000, 30000, 40000, 50000];

const App = () => {
  const [betIndex, setBetIndex] = useState(0);
  const [isRoundFinished, setIsRoundFinished] = useState(true);

  const onPlus = (): void => {
    if (betIndex < bets.length - 1) setBetIndex(betIndex + 1);
  };

  const onMinus = (): void => {
    if (betIndex > 0) setBetIndex(betIndex - 1);
  };

  return (
    <div className="mainContainer">
      <PokerTable />
      <Controls currentBet={bets[betIndex]} onPlus={onPlus} onMinus={onMinus} />
    </div>
  );
};

export default App;
