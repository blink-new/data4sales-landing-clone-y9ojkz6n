export function Reputation() {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4">
        {/* Navigation links */}
        <div className="flex justify-center space-x-12 mb-16">
          <a href="#reputation" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Our Reputation
          </a>
          <a href="#services" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Our Services
          </a>
          <a href="#model" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Our Model
          </a>
        </div>

        {/* Main heading */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            A proven track record in data analytics.
            <br />
            Recent data points.
          </h2>
        </div>

        {/* Statistics grid */}
        <div className="grid md:grid-cols-3 gap-12">
          {/* Stat 1 */}
          <div className="text-center">
            <div className="mb-4">
              <span className="text-6xl md:text-7xl font-bold text-primary">#1</span>
              <span className="text-lg font-medium text-muted-foreground ml-2">in Analytics</span>
            </div>
            <p className="text-base text-muted-foreground leading-relaxed">
              Our strict focus on maximizing ROI for our clients landed us as the #1 
              data analytics platform for sales teams in 2024 according to G2 reviews.
            </p>
          </div>

          {/* Stat 2 */}
          <div className="text-center">
            <div className="mb-4">
              <span className="text-lg font-medium text-muted-foreground">Top </span>
              <span className="text-6xl md:text-7xl font-bold text-primary">1%</span>
              <span className="text-lg font-medium text-muted-foreground"> of platforms.</span>
            </div>
            <p className="text-base text-muted-foreground leading-relaxed">
              Menteo clients consistently ranked in the top 1% of all sales teams 
              on a conversion and efficiency basis in 2024 by SalesForce benchmarking.
            </p>
          </div>

          {/* Stat 3 */}
          <div className="text-center">
            <div className="mb-4">
              <span className="text-6xl md:text-7xl font-bold text-primary">$2bil.</span>
            </div>
            <div className="mb-4">
              <span className="text-lg font-medium text-foreground">$2b in attributable revenue.</span>
            </div>
            <p className="text-base text-muted-foreground leading-relaxed">
              We've collectively driven over $2 billion dollars in trackable revenue 
              for our clients across platforms we've managed, with influenced revenue 
              in the multi-billion dollar range.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}