import { createContext, useState } from "react";
const ModalDataContext = createContext();

export const ModalDataContextProvider = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [cards, setCards] = useState();
  const [isMarket, setIsMarket] = useState();

  const value = {
    cards,
    setCards,
    isModalOpen,
    setIsModalOpen,
    selectedIndex,
    setSelectedIndex,
    isMarket,
    setIsMarket,
  };
  return <ModalDataContext.Provider value={value}>{children}</ModalDataContext.Provider>;
};
export default ModalDataContext;
