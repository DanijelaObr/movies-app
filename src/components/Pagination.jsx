import {
  FaChevronLeft,
  FaChevronRight,
  FaAngleDoubleLeft,
  FaAngleDoubleRight,
} from "react-icons/fa";

function Pagination({ currentPage, totalPages, onPageChange }) {
  const getPageNumbers = () => {
    const pages = [];
    const showAround = 2;

    for (
      let i = Math.max(1, currentPage - showAround);
      i <= Math.min(totalPages, currentPage + showAround);
      i++
    ) {
      pages.push(i);
    }

    if (pages[0] > 1) {
      pages.unshift("...");
      pages.unshift(1);
    }

    if (pages[pages.length - 1] < totalPages) {
      pages.push("...");
      pages.push(totalPages);
    }

    return pages;
  };

  return (
    <div className="pagination">
      <button
        className="pagination-btn"
        onClick={() => onPageChange(1)}
        disabled={currentPage === 1}
      >
        <FaAngleDoubleLeft />
      </button>

      <button
        className="pagination-btn"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <FaChevronLeft />
      </button>

      {getPageNumbers().map((page, index) => (
        <button
          key={index}
          className={`pagination-btn ${page === currentPage ? "active" : ""} ${page === "..." ? "dots" : ""}`}
          onClick={() => page !== "..." && onPageChange(page)}
          disabled={page === "..."}
        >
          {page}
        </button>
      ))}

      <button
        className="pagination-btn"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        <FaChevronRight />
      </button>

      <button
        className="pagination-btn"
        onClick={() => onPageChange(totalPages)}
        disabled={currentPage === totalPages}
      >
        <FaAngleDoubleRight />
      </button>
    </div>
  );
}

export default Pagination;
