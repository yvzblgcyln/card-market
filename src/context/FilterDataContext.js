import { createContext, useState } from "react";
const FilterDataContext = createContext();

export const FilterDataContextProvider = ({ children }) => {
  const [max, setMax] = useState(30);
  const [min, setMin] = useState(0);
  const [isPriceFilter, setIsPriceFilter] = useState(0);

  const value = { max, setMax, min, setMin, isPriceFilter, setIsPriceFilter };
  return <FilterDataContext.Provider value={value}>{children}</FilterDataContext.Provider>;
};
export default FilterDataContext;
