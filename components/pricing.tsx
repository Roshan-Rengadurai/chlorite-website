export function Pricing() {
    const plans = [
        {
            name: "Free",
            price: "$0",
            description: "Perfect for getting started",
            features: ["Unlimited basic notes", "Markdown support", "Web access", "1 device sync", "Community support"],
            cta: "Get Started",
            popular: false,
        },
        {
            name: "Pro",
            price: "$5",
            description: "For serious note-takers",
            features: [
                "Everything in Free",
                "Unlimited linked notes",
                "Full-text search",
                "Unlimited device sync",
                "Priority support",
                "Custom themes",
            ],
            cta: "Start Free Trial",
            popular: true,
        },
        {
            name: "Team",
            price: "$12",
            description: "For collaborative teams",
            features: [
                "Everything in Pro",
                "Team workspaces",
                "Collaborative editing",
                "Version history",
                "Admin controls",
                "API access",
            ],
            cta: "Contact Sales",
            popular: false,
        },
    ]

    return (
        <div id="pricing" className="container px-6 md:px-12 pt-12 pb-12 mx-auto">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Simple, Transparent Pricing</h2>
                <p className="text-xl text-gray-400 max-w-2xl mx-auto">Choose the plan that works best for you.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                {plans.map((plan) => (
                    <div
                        key={plan.name}
                        className={`bg-gray-900 rounded-xl p-8 border ${plan.popular ? "border-purple-500" : "border-gray-800"
                            } relative flex flex-col`}
                    >
                        {plan.popular && (
                            <div className="absolute top-0 right-0 bg-purple-600 text-white text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg">
                                Most Popular
                            </div>
                        )}
                        <div className="mb-6">
                            <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                            <div className="text-3xl font-bold mb-2">
                                {plan.price}
                                <span className="text-gray-400 text-base font-normal ml-1">{plan.price !== "$0" && "/mo"}</span>
                            </div>
                            <p className="text-gray-400">{plan.description}</p>
                        </div>

                        <ul className="space-y-3 mb-8 flex-grow">
                            {plan.features.map((feature) => (
                                <li key={feature} className="flex items-start">
                                    <span className="text-purple-400 mr-2">✓</span>
                                    <span>{feature}</span>
                                </li>
                            ))}
                        </ul>

                        <button
                            className={`w-full py-2 px-4 rounded-md ${plan.popular
                                    ? "bg-purple-600 hover:bg-purple-700 text-white"
                                    : "bg-gray-800 hover:bg-gray-700 text-white"
                                }`}
                        >
                            {plan.cta}
                        </button>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default Pricing;