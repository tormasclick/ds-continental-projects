import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import SectionHeading from "./SectionHeading";

interface FAQItem {
  question: string;
  answer: string;
}

const FAQSection = ({ faqs, title = "Frequently Asked Questions" }: { faqs: FAQItem[]; title?: string }) => (
  <section className="py-16 bg-muted">
    <div className="container mx-auto px-4 max-w-3xl">
      <SectionHeading title={title} />
      <Accordion type="single" collapsible className="space-y-3">
        {faqs.map((faq, i) => (
          <AccordionItem key={i} value={`faq-${i}`} className="bg-card border border-border rounded-lg px-6">
            <AccordionTrigger className="text-left font-subheading text-foreground">{faq.question}</AccordionTrigger>
            <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </section>
);

export default FAQSection;
