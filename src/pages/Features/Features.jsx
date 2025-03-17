import React from "react";
import { motion } from "framer-motion"; // For animations
import "./Features.css"; // For styling

// Feature data
const features = [
  { icon: "🚀", title: "Fast Transactions", description: "Experience quick and secure transactions with minimal latency." },
  { icon: "📊", title: "Real-time Data", description: "Get updated market prices and trends instantly." },
  { icon: "🔒", title: "Secure Wallets", description: "Your funds are protected with top-tier security protocols." },
  { icon: "📈", title: "Advanced Analytics", description: "Make informed decisions with in-depth analysis and insights." },
  { icon: "🌎", title: "Global Access", description: "Trade and invest from anywhere in the world." },
  { icon: "🤝", title: "Community Support", description: "Join a thriving community of crypto enthusiasts and experts." }
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Staggered animation for each card
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const Feature = () => {
  return (
    <section className="feature-section">
      <h2 className="feature-heading">Why Choose Us?</h2>
      <p className="feature-subheading">Explore the features that make us the best in the industry.</p>
      <motion.div
        className="feature-container"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }} // Animate when 20% of the component is in view
      >
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="feature-card"
            variants={cardVariants}
            whileHover={{ scale: 1.05 }} // Add hover effect
          >
            <div className="icon">{feature.icon}</div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Feature;