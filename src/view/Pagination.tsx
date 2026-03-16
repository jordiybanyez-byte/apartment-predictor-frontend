import usePagination from "../hooks/usePagination";
import PaginationButton from "./PaginationButton";

type Props = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};

export default function Pagination({ currentPage, totalPages, onPageChange }: Props) {
  const pages = usePagination(currentPage, totalPages);

  return (
    <div style={{ display: "flex", gap: 6, marginTop: 10 }}>
      <PaginationButton
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
      >
        ←
      </PaginationButton>

      {pages.map((p, i) =>
        p === "..." ? (
          <span key={`ellipsis-${i}`} style={{ padding: "6px 10px" }}>...</span>
        ) : (
          <PaginationButton
            key={`page-${p}`}
            active={p === currentPage}
            onClick={() => onPageChange(p)}
          >
            {p}
          </PaginationButton>
        )
      )}

      <PaginationButton
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
      >
        →
      </PaginationButton>
    </div>
  );
}