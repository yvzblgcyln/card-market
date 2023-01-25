import "./navbar.scss";
import { IoIosFootball } from "react-icons/io";
import { BiWallet } from "react-icons/bi";
import { useContext, useState } from "react";
import DataContext from "../../context/DataContext";
import { Link as SmoothScroll } from "react-scroll";

function Navbar() {
  const { wallet } = useContext(DataContext);
  //const [selected, setSelected] = useState("myCards");

  return (
    <div className="navbar df-row">
      <div className="left df-row">
        <div className="icon df-row ">
          <IoIosFootball /> FE FC
        </div>
        <SmoothScroll
          to="myCards"
          //className={selected === "myCards" ? "active" : ""}
          spy={true}
          smooth={true}
          offset={-150}
          duration={500}
          style={{ cursor: "pointer" }}
          //onClick={() => setSelected("myCards")}
        >
          MY CARDS
        </SmoothScroll>
        <SmoothScroll
          to="market"
          //className={selected === "market" ? "active" : ""}
          spy={true}
          smooth={true}
          offset={-150}
          duration={500}
          style={{ cursor: "pointer" }}
          //onClick={() => setSelected("market")}
        >
          MARKET
        </SmoothScroll>
      </div>
      <div className="wallet df-row">
        <BiWallet className="wallet-icon" />
        <span className="wallet-text df-row">&euro; {wallet}.00</span>
      </div>
    </div>
  );
}

export default Navbar;
