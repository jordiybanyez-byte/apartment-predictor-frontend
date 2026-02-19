type Category = "hipoteca" | "alquiler" | "temporal" | "venta";

interface TopBarProps {
  selectedCategory: Category | null;
  onSelectCategory: (category: Category | null) => void;
  onShowAll: () => void;
}

export const TopBar = ({
  selectedCategory,
  onSelectCategory,
  onShowAll,
}: TopBarProps) => {
  const categories: Category[] = [
    "hipoteca",
    "alquiler",
    "temporal",
    "venta",
  ];

  return (
    <div className="topbar-container">

      {/* 🔥 NUEVO BOTÓN */}
      <button
        className={`topbar-button ${selectedCategory === null ? "active" : ""}`}
        onClick={onShowAll}
      >
        Apartments
      </button>

      {categories.map((cat) => (
        <button
          key={cat}
          className={`topbar-button ${
            selectedCategory === cat ? "active" : ""
          }`}
          onClick={() => onSelectCategory(cat)}
        >
          {cat === "temporal"
            ? "Alquiler temporal"
            : cat.charAt(0).toUpperCase() + cat.slice(1)}
        </button>
      ))}
    </div>
  );
};
