import "./pagination.scss";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

function Pagination({ filtered, setActivePage, activePage }) {
  let pageCount = Math.ceil(filtered.length / 10);
  let array = Array(pageCount).fill(0);

  return (
    <div className="pagination df-row">
      {pageCount > 1 && (
        <>
          <FiArrowLeft
            className="arrow"
            onClick={() => setActivePage((prev) => prev - 1)}
            style={{ visibility: activePage < 1 && "hidden" }}
          />
          {array.map((dummy, index) => (
            <div
              className={`number ${activePage === index && "active"}`}
              onClick={() => setActivePage(index)}
              key={index}
            >
              {index + 1}
            </div>
          ))}
          <FiArrowRight
            className="arrow"
            onClick={() => setActivePage((prev) => prev + 1)}
            style={{ visibility: activePage > pageCount - 2 && "hidden" }}
          />
        </>
      )}
    </div>
  );
}

export default Pagination;
