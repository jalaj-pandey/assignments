const stats = [
  {
    value: "40% Faster",
    label: "to receive payment with Tranch solutions",
  },
  {
    value: "50% Reduction",
    label: "in payments via check",
  },
  {
    value: "£1.5B",
    label: "Average revenue of our partners",
  },
  {
    value: "Zero",
    label: "credit risk for your company",
  },
];

const Stats = () => {
  return (
    <div className="py-10 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="underline decoration-tranch-purple-500 text-3xl font-bold mb-8 text-center">
          Choose Tranch for your B2B invoice to payment solution
        </h2>
        <div className="grid md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.value} className="text-center">
              <div className="text-4xl font-bold mb-2">{stat.value}</div>
              {stat.label && (
                <div className="text-xl mb-2">{stat.label}</div>
              )}
            
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stats;