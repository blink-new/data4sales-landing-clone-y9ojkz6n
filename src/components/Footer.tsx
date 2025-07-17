import { Button } from './ui/button'
import { 
  Twitter, 
  Linkedin, 
  Youtube,
  Instagram
} from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-background border-t border-border">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Left Column - CTA */}
          <div>
            <h3 className="text-lg font-medium text-foreground mb-4">
              Schedule a meeting with us
            </h3>
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-6 mb-8">
              Book a Demo
            </Button>
            
            <div className="space-y-4">
              <div>
                <h4 className="text-sm font-medium text-foreground mb-2">Learn about Menteo Analytics</h4>
              </div>
              <div>
                <h4 className="text-sm font-medium text-foreground mb-2">Learn about joining the team</h4>
              </div>
              <div>
                <h4 className="text-sm font-medium text-foreground mb-2">Learn about our Resources</h4>
              </div>
            </div>
          </div>

          {/* Middle Column - Locations */}
          <div className="space-y-8">
            <div>
              <h4 className="font-semibold text-foreground mb-2">New York</h4>
              <p className="text-sm text-muted-foreground">
                Headquarters located in<br />
                Manhattan, New York
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold text-foreground mb-2">San Francisco</h4>
              <p className="text-sm text-muted-foreground">
                West Coast office located in<br />
                SOMA, San Francisco
              </p>
            </div>
          </div>

          {/* Right Column - Legal & Social */}
          <div className="space-y-8">
            <div className="space-y-3">
              <a href="#" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Terms & Conditions
              </a>
              <a href="#" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Cookies
              </a>
              <a href="#" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Sitemap
              </a>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              <Button variant="ghost" size="sm" className="p-2">
                <Instagram className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm" className="p-2">
                <Linkedin className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm" className="p-2">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm" className="p-2">
                <Youtube className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="border-t border-border bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center">
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 py-3">
            Book a Demo
          </Button>
        </div>
      </div>
    </footer>
  )
}