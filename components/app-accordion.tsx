import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { data } from "@/app/data/impressive-community-data";

type AppAccordionProps = {
  page?: number;
  perPage?: number;
};

export function AppAccordion({ page = 1, perPage = 10 }: AppAccordionProps) {
  const start = (page - 1) * perPage;
  const end = start + perPage;
  const pageItems = data.slice(start, end);

  return (
    <Accordion
      type="single"
      collapsible
      defaultValue={pageItems[0]?.value}
      className="w-full max-w-lg"
    >
      {pageItems.map((item) => (
        <AccordionItem key={item.value} value={item.value}>
          <AccordionTrigger>{item.question}</AccordionTrigger>
          <AccordionContent>{item.answer}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
