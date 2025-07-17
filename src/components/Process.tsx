export function Process() {
  const steps = [
    {
      number: '1',
      title: 'Data analytics services that span the entire sales journey.',
      description: 'The sales journey is more interconnected than ever. Forget about relying solely on basic reporting that inevitably becomes outdated after 6 months. We\'ve developed analytics services that can impact the entire sales process—from your lead generation to your conversion optimization, and all your major revenue channels. Unlock innovative data strategies that connect customer acquisition, retention analytics and sales performance. Elevate your entire sales experience all at once.'
    },
    {
      number: '2',
      title: 'Elevate your entire sales intelligence. Not just your CRM.',
      description: 'Data intelligence is the most important lever for growth, yet everyone\'s using the same basic tools today. Chances are your competitor\'s sales process looks pretty similar to yours. Most analytics platforms don\'t have the capabilities to pay attention to the sales intelligence like they should. Advanced analytics, AI insights, and predictive modeling is in our DNA. We inject those capabilities into our client\'s sales processes and come up with data strategies that reinvigorate sales performance.'
    },
    {
      number: '3',
      title: 'Build with a flight plan for profitability.',
      description: 'Your sales analytics needs to not only drive revenue, but actual contribution profit back to your business. Many founders and sales leaders don\'t know how to measure this, especially as sales processes become more complex — which could be destroying your business. Our toolkit considers all relevant data points from a company\'s P&L and sales metrics to track the right business outcomes.'
    },
    {
      number: '4',
      title: 'Data infrastructure and attribution for how customers buy today.',
      description: 'Customers today discover products through peers, marketplaces, social media, and other channels where they spend time. Don\'t leave those opportunities up to chance — we equip you with sales analytics services and data infrastructure to capitalize on these important moments for your business.'
    }
  ]

  return (
    <section id="model" className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section heading */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Sales analytics defined by intelligence,
            <br />
            insights and performance.
            <br />
            Go beyond simple reporting.
          </h2>
        </div>

        {/* Steps */}
        <div className="space-y-16">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col lg:flex-row gap-8 items-start">
              {/* Step number */}
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold">
                  {step.number}
                </div>
              </div>
              
              {/* Step content */}
              <div className="flex-1">
                <h3 className="text-2xl md:text-3xl font-bold mb-6 leading-tight">
                  {step.title}
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20">
          <p className="text-lg text-muted-foreground mb-8">
            Menteo is trusted by the world's leading companies to drive growth and bring innovative solutions to market. 
            Together we can build and scale your business.
          </p>
        </div>
      </div>
    </section>
  )
}