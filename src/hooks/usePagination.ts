export default function usePagination(currentPage: number, totalPages: number) {
  const pages: (number | "...")[] = [];

  pages.push(1);

  const start = Math.max(2, currentPage - 2);
  const end = Math.min(totalPages - 1, currentPage + 2);

  if (start > 2) pages.push("...");

  for (let i = start; i <= end; i++) {
    pages.push(i);
  }

  if (end < totalPages - 1) pages.push("...");

  pages.push(totalPages);

  return pages;
}