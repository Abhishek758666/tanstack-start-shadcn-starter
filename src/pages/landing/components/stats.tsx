interface Stat {
  value: string;
  label: string;
}

const stats: Stat[] = [
  { value: "10K+", label: "Active Users" },
  { value: "$50M+", label: "Revenue Tracked" },
  { value: "99.9%", label: "Uptime" },
  { value: "24/7", label: "Support" },
];

export function Stats() {
  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
