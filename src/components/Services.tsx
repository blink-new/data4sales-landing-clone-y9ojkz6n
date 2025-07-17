import { Button } from './ui/button'
import { Card, CardContent } from './ui/card'

export function Services() {
  const services = [
    {
      title: 'Sales Analytics Platform',
      description: 'Comprehensive sales data analysis and insights. Real-time dashboard, performance tracking, and predictive analytics for sales teams.',
      price: '$2,500/mo',
      testimonial: 'The Menteo team transformed our sales process completely. Our conversion rates increased by 300%.',
      author: 'Sarah Johnson',
      company: 'TechCorp',
      link: '/analytics'
    },
    {
      title: 'Lead Intelligence',
      description: 'Advanced lead scoring and qualification system. AI-powered lead analysis, behavioral tracking, and conversion optimization.',
      price: '$1,800/mo',
      testimonial: 'We loved working with the Menteo team. Their insights brought several breakthrough ideas to our sales strategy.',
      author: 'Michael Chen',
      company: 'GrowthLabs',
      link: '/intelligence'
    },
    {
      title: 'Revenue Optimization',
      description: 'End-to-end revenue analysis and optimization. Sales funnel analysis, pricing strategy, and performance forecasting.',
      price: '$3,200/mo',
      testimonial: 'The analytics services have entirely changed our revenue performance. The way they analyze data just makes sense for our business.',
      author: 'Emily Rodriguez',
      company: 'ScaleUp Inc',
      link: '/optimization'
    },
    {
      title: 'CRM Integration',
      description: 'Seamless integration with existing CRM systems. Data synchronization, workflow automation, and custom reporting solutions.',
      price: '$1,500/mo',
      testimonial: 'The Menteo team gave us killer integrations that upped our game and turned our CRM into a revenue powerhouse.',
      author: 'David Park',
      company: 'DataFlow Solutions',
      link: '/integration'
    }
  ]

  return (
    <section id="services" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section heading */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
            Our services extend the entire sales journey.
          </h2>
        </div>

        {/* Services grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="border-2 border-muted hover:border-primary/20 transition-colors duration-300">
              <CardContent className="p-8">
                {/* Service header */}
                <div className="mb-6">
                  <h3 className="text-xl font-bold mb-3 text-primary hover:underline cursor-pointer">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Pricing */}
                <div className="mb-6">
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-sm text-muted-foreground">Starts at</span>
                  </div>
                  <div className="text-2xl font-bold mb-4">{service.price}</div>
                  <Button 
                    variant="outline" 
                    className="border-2 border-foreground hover:bg-foreground hover:text-background"
                  >
                    Learn More
                  </Button>
                </div>

                {/* Testimonial */}
                <div className="border-t border-muted pt-6">
                  <blockquote className="text-sm text-muted-foreground italic mb-3">
                    "{service.testimonial}"
                  </blockquote>
                  <div className="text-sm">
                    <span className="font-medium text-foreground">{service.author}</span>
                    <br />
                    <span className="text-muted-foreground">{service.company}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}