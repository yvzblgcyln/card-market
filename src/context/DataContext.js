import { createContext, useState } from "react";
import axios from "axios";
const DataContext = createContext();

export const DataContextProvider = ({ children }) => {
  const [market, setMarket] = useState();
  const [myCards, setMyCards] = useState();
  const [wallet, setWallet] = useState();

  const getData = async () => {
    try {
      const { data: walletData } = await axios("http://challenge.vole.io/budget");
      setWallet(walletData.budget);
      const { data: market } = await axios("http://challenge.vole.io/cards/market");
      setMarket(market);
      const { data: myCards } = await axios("http://challenge.vole.io/cards/myCards");
      setMyCards(myCards);
    } catch (error) {
      console.log("error", error);
    }
  };

  const value = { market, myCards, wallet, setWallet, getData };
  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};
export default DataContext;
