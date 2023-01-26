import { createContext, useState } from "react";
const TradeModalContext = createContext();

export const TradeModalContextProvider = ({ children }) => {
  const [isTradeOpen, setIsTradeOpen] = useState(false);
  const [tradeType, setTradeType] = useState();

  const setTrade = (type) => {
    setTradeType(type);
    setIsTradeOpen(true);
  };
  const value = { isTradeOpen, setIsTradeOpen, tradeType, setTradeType, setTrade };
  return <TradeModalContext.Provider value={value}>{children}</TradeModalContext.Provider>;
};
export default TradeModalContext;
