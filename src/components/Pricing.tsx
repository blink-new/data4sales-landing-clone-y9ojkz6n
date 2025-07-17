import { Button } from './ui/button'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { Badge } from './ui/badge'
import { Check, Star, Zap } from 'lucide-react'

const plans = [
  {
    name: 'Starter',
    price: 29,
    period: 'per user/month',
    description: 'Perfect for small sales teams getting started',
    features: [
      'Up to 5 users',
      'Basic analytics dashboard',
      'Lead scoring',
      'Email integration',
      'Standard support',
      '1,000 leads/month',
      'Basic reporting'
    ],
    popular: false,
    cta: 'Start Free Trial'
  },
  {
    name: 'Professional',
    price: 79,
    period: 'per user/month',
    description: 'Advanced features for growing sales teams',
    features: [
      'Up to 25 users',
      'Advanced analytics & AI insights',
      'Advanced lead scoring',
      'CRM integrations',
      'Priority support',
      '10,000 leads/month',
      'Custom reporting',
      'Sales automation',
      'Team collaboration tools'
    ],
    popular: true,
    cta: 'Start Free Trial'
  },
  {
    name: 'Enterprise',
    price: 149,
    period: 'per user/month',
    description: 'Complete solution for large organizations',
    features: [
      'Unlimited users',
      'Full AI-powered insights',
      'Custom lead scoring models',
      'All integrations',
      'Dedicated support',
      'Unlimited leads',
      'Advanced reporting & analytics',
      'Full sales automation suite',
      'Advanced team management',
      'Custom onboarding',
      'SLA guarantee'
    ],
    popular: false,
    cta: 'Contact Sales'
  }
]

export function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-6">
            <Zap className="w-4 h-4 mr-2" />
            Simple Pricing
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Choose Your{' '}
            <span className="gradient-text">Perfect Plan</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Start with a 14-day free trial. No credit card required. Cancel anytime.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`relative border-border hover:shadow-xl transition-all duration-300 ${
                plan.popular 
                  ? 'border-primary shadow-lg scale-105' 
                  : 'hover:border-primary/20'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-primary text-primary-foreground px-4 py-1">
                    <Star className="w-3 h-3 mr-1" />
                    Most Popular
                  </Badge>
                </div>
              )}

              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl font-bold text-foreground mb-2">
                  {plan.name}
                </CardTitle>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-foreground">${plan.price}</span>
                  <span className="text-muted-foreground ml-2">{plan.period}</span>
                </div>
                <p className="text-muted-foreground">{plan.description}</p>
              </CardHeader>

              <CardContent className="space-y-6">
                {/* Features */}
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Button 
                  className={`w-full py-3 ${
                    plan.popular 
                      ? 'bg-primary hover:bg-primary/90 text-primary-foreground' 
                      : 'bg-secondary hover:bg-secondary/90 text-secondary-foreground'
                  }`}
                  size="lg"
                >
                  {plan.cta}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom Info */}
        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-8">
            All plans include 14-day free trial • No setup fees • Cancel anytime
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="flex items-center justify-center space-x-2">
              <Check className="w-5 h-5 text-green-600" />
              <span className="text-foreground">99.9% Uptime SLA</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <Check className="w-5 h-5 text-green-600" />
              <span className="text-foreground">Enterprise Security</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <Check className="w-5 h-5 text-green-600" />
              <span className="text-foreground">24/7 Support</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}