import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

import { data } from "@/app/data/impressive-community-data"

export function AppAccordion() {
  return (
    <Accordion
      type="single"
      collapsible
      defaultValue="item-1"
      className="w-full max-w-lg"
    >
      {data.map((item) => (
        <AccordionItem key={item.value} value={item.value}>
          <AccordionTrigger>{item.question}</AccordionTrigger>
          <AccordionContent>{item.answer}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}
