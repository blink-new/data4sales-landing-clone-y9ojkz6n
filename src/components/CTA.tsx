import { Button } from './ui/button'

export function CTA() {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <div className="mb-8">
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg font-medium rounded-full"
          >
            Book a demo
          </Button>
        </div>
        
        <div className="mb-8">
          <span className="text-lg text-muted-foreground">👋 Speak to a member of our team</span>
        </div>
        
        <div className="mb-12">
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg font-medium rounded-full"
          >
            Book a demo
          </Button>
        </div>
      </div>
    </section>
  )
}