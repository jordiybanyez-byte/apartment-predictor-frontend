import { useState } from "react";

type Props = {
  onSelectView: (view: "list" | "reviews" | "favorites" | "myReviews") => void;
};

export function MenuForm({ onSelectView }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <div className="menu-container">
      <button onClick={() => setOpen(!open)}>
        ☰ Menu
      </button>

      {open && (
        <ul style={{ listStyle: "none", padding: 0, marginTop: "10px" }}>
          <li>
            <button onClick={() => onSelectView("list")}>Reviews</button>
          </li>
          <li>
            <button onClick={() => onSelectView("favorites")}>Favoritos</button>
          </li>
          <li>
            <button onClick={() => onSelectView("myReviews")}>Mis Reviews</button>
          </li>
        </ul>
      )}
    </div>
  );
}
