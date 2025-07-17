import { Button } from './ui/button'

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-background px-4">
      <div className="max-w-7xl mx-auto text-center">
        {/* Small tagline */}
        <div className="mb-8">
          <span className="text-sm font-medium text-muted-foreground tracking-wider uppercase">
            Unlock the next stage of growth
          </span>
        </div>
        
        {/* Large headline */}
        <div className="mb-12">
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold leading-none tracking-tight">
            <span className="block">Menteo provides</span>
            <span className="block">world-class data</span>
            <span className="block">analytics services</span>
            <span className="block">that extend across</span>
            <span className="block">the entire sales</span>
            <span className="block">journey.</span>
          </h1>
        </div>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg font-medium rounded-full"
          >
            Book a demo
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="border-2 border-foreground text-foreground hover:bg-foreground hover:text-background px-8 py-6 text-lg font-medium rounded-full"
          >
            Read More
          </Button>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center">
          <div className="w-1 h-3 bg-muted-foreground rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  )
}