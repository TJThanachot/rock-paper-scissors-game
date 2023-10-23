import React, { useState } from "react";

const storeContext: any = React.createContext(undefined);
function StoreProvider(props: any) {
  const [rules, setRules] = useState(false);
  const [playAgain, setPlayAgain] = useState(true);
  const [classIcon, setClassIcon] = useState(["paper", "rock", "scissors"]);
  const [winnerAndLoser, setWinnerAndLoser] = useState({});
  const [score, setScore] = useState(0);

  return (
    <storeContext.Provider
      value={{
        rules,
        setRules,
        playAgain,
        setPlayAgain,
        setClassIcon,
        winnerAndLoser,
        setWinnerAndLoser,
        classIcon,
        score,
        setScore,
      }}
    >
      {props.children}
    </storeContext.Provider>
  );
}

const useStore = () => React.useContext(storeContext);
export { StoreProvider, useStore };
