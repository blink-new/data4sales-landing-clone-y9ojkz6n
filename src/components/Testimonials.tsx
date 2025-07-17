import { Card, CardContent } from './ui/card'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Sarah Chen',
    role: 'VP of Sales',
    company: 'TechFlow Inc',
    avatar: '/api/placeholder/64/64',
    content: 'Menteo transformed our sales process completely. We saw a 45% increase in qualified leads within the first quarter. The AI insights are incredibly accurate.',
    rating: 5
  },
  {
    name: 'Michael Rodriguez',
    role: 'Sales Director',
    company: 'Growth Dynamics',
    avatar: '/api/placeholder/64/64',
    content: 'The real-time analytics dashboard gives us the visibility we never had before. Our team can now make data-driven decisions instantly.',
    rating: 5
  },
  {
    name: 'Emily Watson',
    role: 'Head of Revenue',
    company: 'Scale Ventures',
    avatar: '/api/placeholder/64/64',
    content: 'Implementation was seamless and the ROI was immediate. Menteo helped us identify our highest-value prospects and close deals 30% faster.',
    rating: 5
  },
  {
    name: 'David Kim',
    role: 'Sales Manager',
    company: 'InnovateCorp',
    avatar: '/api/placeholder/64/64',
    content: 'The lead scoring feature is a game-changer. We no longer waste time on low-quality leads and can focus on prospects that actually convert.',
    rating: 5
  },
  {
    name: 'Lisa Thompson',
    role: 'Chief Revenue Officer',
    company: 'NextGen Solutions',
    avatar: '/api/placeholder/64/64',
    content: 'Menteo\'s integration capabilities are outstanding. It connected seamlessly with our existing CRM and enhanced our entire sales workflow.',
    rating: 5
  },
  {
    name: 'James Wilson',
    role: 'Sales Operations',
    company: 'Apex Technologies',
    avatar: '/api/placeholder/64/64',
    content: 'The automation features saved our team countless hours. We can now focus on building relationships instead of manual data entry.',
    rating: 5
  }
]

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            <Star className="w-4 h-4 mr-2" />
            Customer Success Stories
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Trusted by{' '}
            <span className="gradient-text">Sales Leaders</span>{' '}
            Worldwide
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join thousands of sales professionals who have transformed their performance with Menteo's powerful analytics and insights.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-lg transition-all duration-300 border-border hover:border-primary/20 bg-card relative"
            >
              <CardContent className="p-6">
                {/* Quote Icon */}
                <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Quote className="w-8 h-8 text-primary" />
                </div>

                {/* Rating */}
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="flex items-center space-x-3">
                  <Avatar className="w-12 h-12">
                    <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                    <AvatarFallback className="bg-primary/10 text-primary font-medium">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.role} at {testimonial.company}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom Stats */}
        <div className="mt-16 text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div>
              <div className="text-3xl font-bold text-foreground mb-2">10,000+</div>
              <div className="text-muted-foreground">Happy Customers</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-foreground mb-2">4.9/5</div>
              <div className="text-muted-foreground">Average Rating</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-foreground mb-2">99.9%</div>
              <div className="text-muted-foreground">Customer Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}