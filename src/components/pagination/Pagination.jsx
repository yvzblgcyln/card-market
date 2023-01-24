import "./pagination.scss";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { useState } from "react";

function Pagination() {
  const [activePage, setActivePage] = useState(1);
  return (
    <div className="pagination df-row">
      <FiArrowLeft
        className="arrow"
        onClick={() => setActivePage((prev) => prev - 1)}
        style={{ visibility: activePage < 2 && "hidden" }}
      />
      <div className={`number ${activePage === 1 && "active"}`} onClick={() => setActivePage(1)}>
        1
      </div>
      <div className={`number ${activePage === 2 && "active"}`} onClick={() => setActivePage(2)}>
        2
      </div>
      <div className={`number ${activePage === 3 && "active"}`} onClick={() => setActivePage(3)}>
        3
      </div>
      <div className={`number ${activePage === 4 && "active"}`} onClick={() => setActivePage(4)}>
        4
      </div>
      <FiArrowRight
        className="arrow"
        onClick={() => setActivePage((prev) => prev + 1)}
        style={{ visibility: activePage > 3 && "hidden" }}
      />
    </div>
  );
}

export default Pagination;
