export function ClientLogos() {
  const clients = [
    { name: "Company 1", logo: "vercel" },
    { name: "Company 2", logo: "stripe" },
    { name: "Company 3", logo: "notion" },
    { name: "Company 4", logo: "linear" },
    { name: "Company 5", logo: "figma" },
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 border-y border-border">
      <div className="max-w-7xl mx-auto">
        <p className="text-center text-sm text-muted-foreground mb-8">
          En los últimos 5 años, he tenido el placer de trabajar con empresas
          como:
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          {clients.map((client, index) => (
            <div
              key={index}
              className="text-muted-foreground hover:text-foreground transition-colors opacity-60 hover:opacity-100"
            >
              <div className="h-8 flex items-center">
                <span className="text-lg font-medium">{client.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
