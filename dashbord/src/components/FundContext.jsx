import { createContext, useState } from "react";
import FundWindow from "./FundWindow";

export const FundContext = createContext({
  openFundWindow: () => {},
  closeFundWindow: () => {},
});

import React from "react";

export const FundContextProvider = (props) => {
  const [fundWindow, setFundWindow] = useState(false);

  const openFundWindow = () => {
    console.log("Opening");
    setFundWindow(true);
  };

  const closeFundWindow = () => {
    setFundWindow(false);
  };

  return (
    <FundContext.Provider value={{ openFundWindow, closeFundWindow }}>
      {props.children}

      {fundWindow && <FundWindow />}
    </FundContext.Provider>
  );
};
