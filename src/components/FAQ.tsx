import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion'

export function FAQ() {
  const faqs = [
    {
      question: 'We need results immediately. How do you deliver?',
      answer: 'We understand the urgency of business growth. Our team can typically have initial analytics dashboards and insights ready within 2-3 weeks of onboarding. We start with quick wins and immediate optimizations while building out comprehensive long-term strategies.'
    },
    {
      question: 'What\'s your pricing structure?',
      answer: 'Our pricing is based on the scope of services and the size of your sales operation. We offer flexible monthly packages starting from $1,500/month for basic CRM integration up to $3,200/month for comprehensive revenue optimization. All packages include dedicated support and regular strategy sessions.'
    },
    {
      question: 'Can you deliver on our analytics and reporting needs?',
      answer: 'Absolutely. Advanced analytics and custom reporting are core to what we do. We build custom dashboards, automated reports, and predictive models tailored to your specific business needs. Our team includes data scientists and analytics experts who can handle complex requirements.'
    },
    {
      question: 'Do you have experience with businesses in my industry?',
      answer: 'We\'ve worked with companies across various industries including SaaS, e-commerce, manufacturing, professional services, and more. Our data-driven approach is industry-agnostic, and we quickly adapt to understand the unique metrics and challenges of your specific market.'
    },
    {
      question: 'I am a head of sales within my company. Will your team replace my job?',
      answer: 'Not at all. We\'re here to amplify your success, not replace you. We work as an extension of your team, providing you with better data, insights, and tools to make more informed decisions. Our goal is to make you more effective and help you achieve better results.'
    },
    {
      question: 'How do you integrate AI into your analytics workflow?',
      answer: 'We leverage AI and machine learning throughout our analytics process - from automated data cleaning and pattern recognition to predictive modeling and intelligent alerts. Our AI tools help identify trends, predict customer behavior, and recommend optimization strategies, all while maintaining human oversight for strategic decisions.'
    }
  ]

  return (
    <section className="py-24 bg-muted/30">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Frequent questions
          </h2>
          <p className="text-xl text-muted-foreground">
            with specific answers
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="bg-background border border-muted rounded-lg px-6"
            >
              <AccordionTrigger className="text-left text-lg font-medium hover:no-underline py-6">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}