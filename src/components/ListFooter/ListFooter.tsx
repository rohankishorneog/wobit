import { useState } from "react";
import ArrowLeft from "../../assets/icons/ArrowLeft";
import ArrowLeftLeft from "../../assets/icons/ArrowLeftLeft";
import ArrowRight from "../../assets/icons/ArrowRight";
import ArrowRightRight from "../../assets/icons/ArrowRightRight";
import "./ListFooter.css";

// Interface for ListFooter props
interface ListFooterProps {
  totalItems: number;
  itemsPerPage: number;
  onPageChange: (page: number) => void;
  onItemsPerPageChange: (itemsPerPage: number) => void;
}

const ListFooter = ({
  totalItems,
  itemsPerPage,
  onPageChange,
  onItemsPerPageChange,
}: ListFooterProps) => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handlePageChange = (page: number) => {
    if (page < 1) return;
    if (page > totalPages) return;
    setCurrentPage(page);
    onPageChange(page);
  };

  // Handle items per page change
  const handleItemsPerPageChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const selectedValue = parseInt(event.target.value);
    onItemsPerPageChange(selectedValue);
    setCurrentPage(1);
  };

  return (
    <div className="list-footer">
      <select
        className="list-footer__items-per-page"
        value={itemsPerPage}
        onChange={handleItemsPerPageChange}
      >
        <option value={5}>5</option>
        <option value={10}>10</option>
        <option value={20}>20</option>
      </select>

      <p></p>

      {/* Pagination buttons */}
      <button
        onClick={() => handlePageChange(1)}
        disabled={currentPage === 1}
        className="list-footer__pagination-btn"
      >
        <ArrowLeftLeft />
      </button>
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="list-footer__pagination-btn"
      >
        <ArrowLeft />
      </button>
      <button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="list-footer__pagination-btn"
      >
        <ArrowRight />
      </button>
      <button
        onClick={() => handlePageChange(totalPages)}
        disabled={currentPage === totalPages}
        className="list-footer__pagination-btn"
      >
        <ArrowRightRight />
      </button>
    </div>
  );
};

export default ListFooter;
