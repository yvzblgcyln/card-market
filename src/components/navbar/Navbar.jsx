import "./navbar.scss";
import { IoIosFootball } from "react-icons/io";
import { BiWallet } from "react-icons/bi";
import { useContext, useState } from "react";
import DataContext from "../../context/DataContext";

function Navbar() {
  const { wallet } = useContext(DataContext);
  const [selected, setSelected] = useState("myCards");

  return (
    <div className="navbar df-row">
      <div className="left df-row">
        <div className="icon df-row ">
          <IoIosFootball /> FE FC
        </div>
        <a
          href="#myCards"
          className={selected === "myCards" ? "active" : ""}
          onClick={() => setSelected("myCards")}
        >
          MY CARDS
        </a>
        <a
          href="#market"
          className={selected === "market" ? "active" : ""}
          onClick={() => setSelected("market")}
        >
          MARKET
        </a>
      </div>
      <div className="wallet df-row">
        <BiWallet className="wallet-icon" />
        <span className="wallet-text df-row">&euro; {wallet}.00</span>
      </div>
    </div>
  );
}

export default Navbar;
