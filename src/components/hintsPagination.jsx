import React from 'react';

export default function HintsPagination ({ totalItems, itemsPerPage, currentPage, onPageChange }) {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handleClick = (page) => {
    onPageChange(page);
  };

  return (
    <div className="pagination">
      {[...Array(totalPages)].map((_, index) => (
        <button
          key={index}
          className={`page-item ${index + 1 === currentPage ? 'active' : ''}`}
          onClick={() => handleClick(index + 1)}
        >
          {index + 1}
        </button>
      ))}
    </div>
  );
};