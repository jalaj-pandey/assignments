import { Clock, CreditCard, Banknote, Bitcoin, RefreshCw, LineChart, Mail, Settings, Network } from "lucide-react";

const products = [
  {
    icon: Clock,
    title: "Pay Later",
    description: "Offer flexible payment options to your clients up to $500k, with no credit risk.",
  },
  {
    icon: Banknote,
    title: "Pay Now",
    description: "Free instant payment processing via ACH, Fed Now and Faster Payments.",
  },
  {
    icon: CreditCard,
    title: "Pay by Card",
    description: "PCI-compliant card payments and virtual card terminals for telephone and virtual card acceptance.",
  },
  {
    icon: Bitcoin,
    title: "Pay by Crypto",
    description: "Accept payment via cryptocurrency with live conversion to fiat currency.",
  },
  {
    icon: RefreshCw,
    title: "Recurring Payments",
    description: "Setup and collect recurring payments from your clients for subscriptions or retainers.",
  },
  {
    icon: LineChart,
    title: "Credit Insights",
    description: "Make better decisions with AI-driven credit insights and collaborate internally on your receivables statuses.",
  },
  {
    icon: Mail,
    title: "Invoicing",
    description: "Email invoices and account statements to clients automatically from your ERP or within Tranch.",
  },
  {
    icon: Settings,
    title: "AR Automation",
    description: "Automated workflows to accelerate client payment and faster reconciliation.",
  },
  {
    icon: Network,
    title: "Integrations",
    description: "Integrate Tranch with your ERP system whether you are on the cloud or on-premise.",
  },
];

const Products = () => {
  const borderColors = [
    "border-red-400",
    "border-blue-500",
    "border-green-500",
    "border-yellow-500",
    "border-purple-500",
    "border-pink-500",
    "border-orange-500",
    "border-teal-500",
    "border-indigo-500",
  ];

  return (
    <div className="bg-gray-50 py-0">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12">Tranch Products</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
  {products.map((product, index) => (
    <div
      key={product.title}
      className={`flex items-center gap-3 rounded-2xl border-2 border-black ${borderColors[index % borderColors.length]} bg-white p-4 shadow-[2px_2px_0px_#CBA7FF] hover:shadow-[4px_4px_0px_#] hover:scale-105 transition-all duration-300 cursor-pointer`}
    >
      {/* Icon */}
      <product.icon className="h-10 w-10 text-black" />
      {/* Title and Description */}
      <div className="flex flex-col gap-1">
        <h3 className="text-lg font-semibold">{product.title}</h3>
        <p className="text-gray-600">{product.description}</p>
      </div>
    </div>
  ))}
</div>

      </div>
    </div>
  );
};


export default Products;