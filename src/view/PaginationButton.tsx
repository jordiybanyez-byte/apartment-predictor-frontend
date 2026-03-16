type Props = {
  children: React.ReactNode;
  active?: boolean;
  disabled?: boolean;
  onClick: () => void;
};

export default function PaginationButton({
  children,
  active,
  disabled,
  onClick,
}: Props) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      style={{
        padding: "6px 10px",
        border: "1px solid #ccc",
        background: active ? "#333" : "#fff",
        color: active ? "#fff" : "#000",
        cursor: "pointer",
      }}
    >
      {children}
    </button>
  );
}