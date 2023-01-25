import App from "./App";
import React from "react";
import ReactDOM from "react-dom/client";
import { DataContextProvider } from "./context/DataContext";
import { FilterDataContextProvider } from "./context/FilterDataContext";
import { ModalDataContextProvider } from "./context/ModalDataContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <DataContextProvider>
      <FilterDataContextProvider>
        <ModalDataContextProvider>
          <App />
        </ModalDataContextProvider>
      </FilterDataContextProvider>
    </DataContextProvider>
  </React.StrictMode>
);
