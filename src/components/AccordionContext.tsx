import { createContext, useContext, useState, type ReactNode } from "react";

type AccordionContextType = {
  openSection: string | null;
  toggleSection: (section: string) => void;
};

const AccordionContext = createContext<AccordionContextType | undefined>(
  undefined
);

export function AccordionProvider({ children }: { children: ReactNode }) {
  const [openSection, setOpenSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setOpenSection(prev => (prev === section ? null : section));
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
