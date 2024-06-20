import { FC } from "react";
import { clsx } from "clsx";

interface PaginationItemProps {
  children: React.ReactNode;
  disabled?: boolean;
  active?: boolean;
  onClick: (number: number) => void;
  numberPage: number | null;
}

const PaginationItem: FC<PaginationItemProps> = ({
  children,
  active,
  disabled,
  onClick,
  numberPage,
}) => {
  return (
    <li
      className={clsx("page-item", {
        active,
        disabled: disabled || numberPage === null,
      })}
    >
      <a
        className="page-link"
        href="#"
        onClick={(event) => {
          event.preventDefault();
          numberPage && onClick(numberPage);
        }}
      >
        {children}
      </a>
    </li>
  );
};

export default PaginationItem;
