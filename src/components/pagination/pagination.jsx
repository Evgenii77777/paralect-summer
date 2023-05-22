import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import { WorkList } from "../work-list";

export const PaginatedItems = ({
  itemsPerPage,
  onChangeFavorites,
  workArr,
  workArrSearch,
}) => {
  let items = workArr;
  if (workArrSearch?.length > 0) {
    items = workArrSearch;
  }
  const [itemOffset, setItemOffset] = useState(0);
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    setItemOffset(newOffset);
  };

  return (
    <>
      <WorkList
        currentItems={currentItems}
        workArr={currentItems}
        workArrSearch={currentItems}
        onChangeFavorites={onChangeFavorites}
      />
      <ReactPaginate
        breakLabel="..."
        nextLabel=" >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< "
        renderOnZeroPageCount={null}
        className="pagination"
        pageClassName="pagination__item"
        activeClassName="pagination__item--active"
        disabledClassName="pagination__item--disabled"
      />
    </>
  );
};
