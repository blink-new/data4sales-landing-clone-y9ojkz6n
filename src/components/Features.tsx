import { Card, CardContent } from './ui/card'
import { 
  BarChart3, 
  Target, 
  Zap, 
  Shield, 
  Users, 
  TrendingUp,
  Brain,
  Clock,
  Globe
} from 'lucide-react'

const features = [
  {
    icon: Brain,
    title: 'AI-Powered Insights',
    description: 'Advanced machine learning algorithms analyze your sales data to provide actionable insights and predictions.',
    color: 'text-primary'
  },
  {
    icon: Target,
    title: 'Lead Scoring',
    description: 'Automatically score and prioritize leads based on behavior, demographics, and engagement patterns.',
    color: 'text-secondary'
  },
  {
    icon: BarChart3,
    title: 'Real-time Analytics',
    description: 'Monitor your sales performance with live dashboards and customizable reporting tools.',
    color: 'text-primary'
  },
  {
    icon: Zap,
    title: 'Sales Automation',
    description: 'Streamline your sales process with automated workflows, follow-ups, and task management.',
    color: 'text-secondary'
  },
  {
    icon: Users,
    title: 'Team Collaboration',
    description: 'Enable seamless collaboration across your sales team with shared insights and communication tools.',
    color: 'text-primary'
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'Bank-level security with end-to-end encryption, SSO, and compliance with industry standards.',
    color: 'text-secondary'
  },
  {
    icon: TrendingUp,
    title: 'Performance Tracking',
    description: 'Track individual and team performance with detailed metrics and goal-setting capabilities.',
    color: 'text-primary'
  },
  {
    icon: Clock,
    title: 'Time Management',
    description: 'Optimize your sales team\'s time with intelligent scheduling and priority management.',
    color: 'text-secondary'
  },
  {
    icon: Globe,
    title: 'Global Integration',
    description: 'Connect with 100+ CRM systems, email platforms, and business tools for seamless workflow.',
    color: 'text-primary'
  }
]

export function Features() {
  return (
    <section id="features" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            <Zap className="w-4 h-4 mr-2" />
            Powerful Features
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Everything You Need to{' '}
            <span className="gradient-text">Accelerate Sales</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our comprehensive suite of tools empowers your sales team with the insights and automation needed to close more deals and drive revenue growth.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-lg transition-all duration-300 border-border hover:border-primary/20 bg-card"
            >
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className={`flex-shrink-0 p-3 rounded-lg bg-muted/50 group-hover:bg-primary/10 transition-colors`}>
                    <feature.icon className={`w-6 h-6 ${feature.color}`} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6">
            Ready to transform your sales process?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg font-medium transition-colors">
              Start Free Trial
            </button>
            <button className="px-8 py-3 border border-border hover:border-primary text-foreground hover:text-primary rounded-lg font-medium transition-colors">
              Schedule Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}