import { useAccordion } from "./AccordionContext";

type AccordionItemProps = {
  title: string;
  children: React.ReactNode;
  sectionId: string;
};

export function AccordionItem({ title, children, sectionId }: AccordionItemProps) {
  const { openSection, toggleSection } = useAccordion();
  const isOpen = openSection === sectionId;

  return (
    <div className="accordion-item">
      <button
        className="accordion-button"
        onClick={() => toggleSection(sectionId)}
      >
        {title}
      </button>
      <ul
        className="accordion-content"
        style={{
          maxHeight: isOpen ? "500px" : "0px",
        }}
      >
        {children}
      </ul>
    </div>
  );
}
