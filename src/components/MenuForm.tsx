import { useState } from "react";
import { AccordionProvider } from "./AccordionContext";
import { AccordionItem } from "./AccordionItem";

type Props = {
  onSelectView: (view: "list" | "reviews" | "favorites" | "myReviews" | "apartments") => void;
};

export function MenuForm({ onSelectView }: Props) {
  const [drawerOpen, setDrawerOpen] = useState(false);
//IF
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
            <AccordionItem title="Apartments" sectionId="apartments">
                 <li>
              <button onClick={() => onSelectView("apartments")}>Apartamentos</button>
            </li>
            </AccordionItem>
          <AccordionItem title="Reviews" sectionId="reviews">
           
            <li>
              <button onClick={() => onSelectView("list")}>Todas</button>
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
        </AccordionProvider>
      </div>
    </>
  );
}
