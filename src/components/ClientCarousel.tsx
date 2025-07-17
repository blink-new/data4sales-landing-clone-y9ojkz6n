export function ClientCarousel() {
  const clients = [
    'Salesforce', 'HubSpot', 'Pipedrive', 'Zendesk', 'Slack', 
    'Microsoft', 'Google', 'Amazon', 'Oracle', 'Adobe',
    'Shopify', 'Stripe', 'PayPal', 'Square', 'Zoom'
  ]

  return (
    <section className="py-16 bg-background border-t border-b border-muted">
      <div className="max-w-7xl mx-auto px-4">
        <div className="overflow-hidden">
          <div className="flex animate-scroll">
            {/* First set of logos */}
            {clients.map((client, index) => (
              <div
                key={`first-${index}`}
                className="flex-shrink-0 mx-8 flex items-center justify-center"
              >
                <div className="w-32 h-16 bg-muted rounded-lg flex items-center justify-center">
                  <span className="text-sm font-medium text-muted-foreground">
                    {client}
                  </span>
                </div>
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {clients.map((client, index) => (
              <div
                key={`second-${index}`}
                className="flex-shrink-0 mx-8 flex items-center justify-center"
              >
                <div className="w-32 h-16 bg-muted rounded-lg flex items-center justify-center">
                  <span className="text-sm font-medium text-muted-foreground">
                    {client}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}