import { createContext, useContext, useState } from "react";
import DataContext from "./DataContext";
const FilterDataContext = createContext();

export const FilterDataContextProvider = ({ children }) => {
  const { market, myCards } = useContext(DataContext);

  const [filterType, setFilterType] = useState();
  const [filteredMarket, setFilteredMarket] = useState(market);
  const [filteredMyCards, setFilteredMyCards] = useState(myCards);

  // const [pagedMarket, setPagedMarket] = useState(filteredMarket.slice(0, 10));
  // const [pagedMyCards, setPagedMyCards] = useState(filteredMyCards.slice(0, 10));

  const value = { filterType, setFilterType, filteredMarket, filteredMyCards };
  return <FilterDataContext.Provider value={value}>{children}</FilterDataContext.Provider>;
};
export default FilterDataContext;
