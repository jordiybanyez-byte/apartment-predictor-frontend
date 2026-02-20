import { useState } from "react";
import { AccordionProvider } from "./AccordionContext";
import { AccordionItem } from "./AccordionItem";

type Props = {
  onSelectView: (view: "list" | "reviews" | "favorites" | "myReviews" | "apartments" | "favoriteReviews" | "myData" | "myHouses" | "myDocu") => void;
};

export function MenuForm({ onSelectView }: Props) {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <>
      <button
        className="drawer-toggle"
        onClick={() => setDrawerOpen(!drawerOpen)}
      >
        ☰ Menu
      </button>

      <div className={`drawer ${drawerOpen ? "open" : ""}`}> 
        <AccordionProvider>
        

          <AccordionItem title="Reviews" sectionId="reviews">
            <li>
              <button onClick={() => onSelectView("favoriteReviews")}>Reviews Favoritas</button>
            </li>
            <li>
              <button onClick={() => onSelectView("myReviews")}>Mis Reviews</button>
            </li>
          </AccordionItem>
          <AccordionItem title="Favoritos" sectionId="favorites">
            <li>
              <button onClick={() => onSelectView("favorites")}>Ver Favoritos</button>
            </li>
          </AccordionItem>
           <AccordionItem title="Mis Datos" sectionId="data">
            <li>
              <button onClick={() => onSelectView("myData")}>Datos</button>
            </li>
          </AccordionItem>
          <AccordionItem title="Mis Casas" sectionId="houses">
            <li>
              <button onClick={() => onSelectView("myHouses")}>Casas</button>
            </li>
          </AccordionItem>
          <AccordionItem title="Mis Avales" sectionId="aval">
            <li>
              <button onClick={() => onSelectView("myDocu")}>Avalistas</button>
            </li>
          </AccordionItem>
        </AccordionProvider>
      </div>
    </>
  );
}
