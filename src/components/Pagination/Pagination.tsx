import { Pagination as PaginationType } from "@/types/product";
import { FC } from "react";
import PaginationItem from "@/components/Pagination/components/PaginationItem";
import { createArrayRange } from "@/tools";

interface PagintionProps {
  pagination: PaginationType;
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}

const Pagination: FC<PagintionProps> = (props) => {
  const {
    pagination: { next, pages, prev },
    currentPage,
    setCurrentPage,
  } = props;

  const handleClick = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <nav aria-label="...">
      <ul className="pagination">
        <PaginationItem onClick={handleClick} numberPage={prev}>
          Назад
        </PaginationItem>
        {createArrayRange(pages).map((page) => (
          <PaginationItem
            key={page}
            active={page === currentPage}
            onClick={handleClick}
            numberPage={page}
          >
            {page}
          </PaginationItem>
        ))}
        <PaginationItem onClick={handleClick} numberPage={next}>
          Вперед
        </PaginationItem>
      </ul>
    </nav>
  );
};

export default Pagination;
