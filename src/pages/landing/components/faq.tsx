import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "How does the 14-day free trial work?",
    answer:
      "You can start using StartKit immediately with full access to all features. No credit card is required to start. At the end of 14 days, you can choose to upgrade to a paid plan or your account will be downgraded to our limited free tier.",
  },
  {
    question: "Can I change my plan later?",
    answer:
      "Absolutely! You can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate any billing differences.",
  },
  {
    question: "Is my data secure?",
    answer:
      "Security is our top priority. We use bank-grade encryption, regular security audits, and comply with SOC 2 and GDPR requirements. Your data is stored in secure, redundant data centers.",
  },
  {
    question: "Do you offer custom enterprise plans?",
    answer:
      "Yes! For organizations with specific requirements, we offer custom enterprise plans with dedicated support, custom integrations, and SLA guarantees. Contact our sales team for more information.",
  },
  {
    question: "What integrations do you support?",
    answer:
      "We integrate with popular tools like Slack, Salesforce, HubSpot, Stripe, QuickBooks, and many more. We also offer a powerful API and webhooks for custom integrations.",
  },
  {
    question: "How do I get support?",
    answer:
      "All plans include email support with quick response times. Pro and Enterprise plans get priority support with faster SLAs. Enterprise customers also get access to 24/7 dedicated support.",
  },
];

export function FAQ() {
  return (
    <section className="py-20 md:py-32">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground">
            Got questions? We've got answers. If you can't find what you're
            looking for, feel free to contact our support team.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={faq.question} value={`item-${index}`}>
                <AccordionTrigger className="text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
