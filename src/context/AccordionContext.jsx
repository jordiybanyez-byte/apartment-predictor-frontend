import { createContext, useContext, useState } from "react";

const AccordionContext = createContext(undefined);

export function AccordionProvider({ children }) {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection((prev) => (prev === section ? null : section));
  };

  return (
    <AccordionContext.Provider value={{ openSection, toggleSection }}>
      {children}
    </AccordionContext.Provider>
  );
}

export function useAccordion() {
  const context = useContext(AccordionContext);
  if (!context) {
    throw new Error("useAccordion must be used within an AccordionProvider");
  }
  return context;
}