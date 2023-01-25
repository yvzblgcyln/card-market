import { createContext, useEffect, useState } from "react";
const FilterDataContext = createContext();

export const FilterDataContextProvider = ({ children }) => {
  const [max, setMax] = useState(30);
  const [min, setMin] = useState(0);

  const value = { max, setMax, min, setMin };
  return <FilterDataContext.Provider value={value}>{children}</FilterDataContext.Provider>;
};
export default FilterDataContext;
