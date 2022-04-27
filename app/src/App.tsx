import * as React from "react";

import PokerTable from "./containers/PokerTable";
import Controls from "./containers/Controls";

const App = () => {
  return (
    <div className="mainContainer">
      <PokerTable />
      <Controls />
    </div>
  );
};

export default App;
