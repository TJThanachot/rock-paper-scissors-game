import React, { useState } from "react";

const storeContext = React.createContext();
function StoreProvider(props) {
  const [rules, setRules] = useState(false);
  const [playAgain, setPlayAgain] = useState(true);

  return (
    <storeContext.Provider
      value={{
        rules,
        setRules,
        playAgain,
        setPlayAgain,
      }}
    >
      {props.children}
    </storeContext.Provider>
  );
}

const useStore = () => React.useContext(storeContext);
export { StoreProvider, useStore };
