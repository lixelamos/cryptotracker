import React from "react";
import PRCard from "../../components/Card/PRCard.jsx";
const plans = [
  {
    name: "Free",
    price: "KES 0",
    features: ["Track 5 Coins", "Basic Price Alerts", "Crypto News"],
    buttonText: "Get Started",
  },
  {
    name: "Pro",
    price: "KES 1,200/month",
    features: [
      "Track 20+ Coins",
      "Advanced Analytics",
      "Portfolio Tracking",
      "Unlimited Alerts",
    ],
    buttonText: "Upgrade to Pro",
  },
  {
    name: "Premium",
    price: "KES 2,500/month",
    features: [
      "Unlimited Coins",
      "AI Predictions",
      "Exclusive Insights",
      "Priority Support",
    ],
    buttonText: "Go Premium",
  },
];

const PricingPage = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center", gap: "20px", padding: "20px" }}>
      {plans.map((plan, index) => (
        <PRCard
          key={index}
          title={plan.name}
          price={plan.price}
          features={plan.features}
          buttonText={plan.buttonText}
        />
      ))}
    </div>
  );
};

export default PricingPage;
