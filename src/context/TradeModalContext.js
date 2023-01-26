import { createContext, useState } from "react";
const TradeModalContext = createContext();

export const TradeModalContextProvider = ({ children }) => {
  const [isTradeOpen, setIsTradeOpen] = useState(false);

  const value = { isTradeOpen, setIsTradeOpen };
  return <TradeModalContext.Provider value={value}>{children}</TradeModalContext.Provider>;
};
export default TradeModalContext;
