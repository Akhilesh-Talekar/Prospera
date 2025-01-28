import React from "react";
import { useState } from "react";
import BuyActionWindow from "./BuyActionWindow";
import SellActionWindow from "./SellActionWindow";

export const GeneralContext = React.createContext({
  openSellWindow: (uid, rate) => {},
  closeSellWindow: () => {},
  openBuyWindow: (uid, rate) => {},
  closeBuyWindow: () => {},
});



export const GeneralContextProvider = (props) => {
  const [sellWindow, setSellWindow] = useState(false);
  const [buyWindow, setBuyWindow] = useState(false);
  const [optns, setOptns] = useState({
    uId: "",
    price: 0.0,
  });

  const handelOpenSellWindow = (uid, rate) => {
    setBuyWindow(false);
    setSellWindow(true);
    setOptns((prev) => {
      return{...prev, uId: uid, price: rate}
    });
  };

  const handleOpenBuyWindow = (uid, rate) => {
    setSellWindow(false);
    setBuyWindow(true);
    setOptns((prev) => {
      return{...prev, uId: uid, price: rate}
    });
  };

  const handleCloseSellWindow = () => {
    setSellWindow(false);
    setOptns((prev) => {
      return {...prev, uId: "", price: 0.0}
    });
  }

  const handleCloseBuyWindow = () => {
    setBuyWindow(false);
    setOptns((prev) => {
      return {...prev, uId: "", price: 0.0}
    });
  };

  return (
    <GeneralContext.Provider
      value={{
        openBuyWindow: handleOpenBuyWindow,
        closeBuyWindow: handleCloseBuyWindow,
        openSellWindow: handelOpenSellWindow,
        closeSellWindow: handleCloseSellWindow,
      }}
    >
      {props.children}
      {buyWindow && <BuyActionWindow options={optns}/>}
      {sellWindow && <SellActionWindow options={optns}/>}
    </GeneralContext.Provider>
  );
};


