import React from "react";
import { motion } from "framer-motion";
import { 
  Map, 
  Check, 
  Shield, 
  Zap, 
  BarChart, 
  Server,
  Rocket
} from "lucide-react";
import Footer from "./Footer"; 

// --- Data: Roadmap ---
const roadmapData = [
  {
    quarter: "Q1",
    year: "2026",
    title: "Foundation & Security",
    items: [
      "Core architecture stabilization",
      "MorphIQ and MailForge optimization",
      "Security testing cycles"
    ],
    icon: <Shield size={24} />
  },
  {
    quarter: "Q2",
    year: "2026",
    title: "Deployment & Analytics",
    items: [
      "MeetLogic controlled deployments",
      "WebTrace analytics expansion",
      "API performance testing"
    ],
    icon: <Rocket size={24} />
  },
  {
    quarter: "Q3",
    year: "2026",
    title: "Integration & Prediction",
    items: [
      "FinStruct predictive enhancement",
      "TrustLayer fraud signal refinement",
      "Cross-platform data integration layer"
    ],
    icon: <Zap size={24} />
  },
  {
    quarter: "Q4",
    year: "2026",
    title: "Unified Intelligence",
    items: [
      "Unified intelligence dashboard",
      "Enterprise scaling enhancements",
      "Advanced analytics module introduction"
    ],
    icon: <BarChart size={24} />
  }
];

// --- Data: Commercial Model ---
const pricingData = [
  {
    plan: "Starter Plan",
    icon: <Map size={32} />,
    desc: "Essential modules for small teams.",
    features: [
      "Limited users",
      "Core functionality modules",
      "Standard support"
    ],
    highlight: false
  },
  {
    plan: "Professional Plan",
    icon: <Zap size={32} />,
    desc: "Expanded capacity for growing firms.",
    features: [
      "Expanded automation",
      "Advanced analytics",
      "Integration capabilities",
      "Higher usage capacity"
    ],
    highlight: true 
  },
  {
    plan: "Enterprise Plan",
    icon: <Server size={32} />,
    desc: "Full-scale structural control.",
    features: [
      "Full module access",
      "Custom deployment configuration",
      "Advanced security layers",
      "Dedicated support"
    ],
    highlight: false
  }
];

// --- Sub-Components ---

const HeroSection = () => {
  return (
    <section className="relative h-[60vh] w-full flex flex-col justify-center items-center bg-[#0B0F19] overflow-hidden border-b border-gray-800">
      <div className="absolute inset-0 z-0 opacity-20" 
           style={{ 
             backgroundImage: 'linear-gradient(#1e293b 1px, transparent 1px), linear-gradient(90deg, #1e293b 1px, transparent 1px)', 
             backgroundSize: '40px 40px' 
           }}>
      </div>
      
      <div className="z-10 text-center px-4">
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 border border-blue-500/30 rounded-full mb-6 bg-blue-900/10 backdrop-blur-sm"
        >
            <span className="text-blue-400 text-xs font-mono tracking-widest uppercase">Strategic Vision 2026</span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl md:text-7xl font-black text-white mb-6"
        >
          ROADMAP & <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">COMMERCIAL MODEL</span>
        </motion.h1>
      </div>
    </section>
  );
};

const RoadmapSection = () => {
  return (
    <section className="py-24 bg-[#0B0F19] relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Development Roadmap</h2>
            <p className="text-gray-400">Roadmap adjustments are based on system validation benchmarks.</p>
        </div>

        <div className="relative">
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[2px] bg-gray-800 -translate-x-1/2"></div>

            <div className="space-y-12 md:space-y-0">
                {roadmapData.map((item, index) => {
                    const isLeft = index % 2 === 0;
                    return (
                        <motion.div 
                            key={index}
                            initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className={`flex flex-col md:flex-row items-center justify-between gap-8 md:gap-0 ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'} mb-12`}
                        >
                            <div className="w-full md:w-[45%]">
                                <div className="bg-[#131b2c] p-8 rounded-2xl border border-gray-800 hover:border-blue-500/50 transition-colors duration-300 group">
                                    <div className="flex justify-between items-start mb-4">
                                        <div>
                                            <span className="text-4xl font-black text-gray-700 group-hover:text-blue-500 transition-colors">{item.quarter}</span>
                                            <span className="block text-xs text-gray-500 font-mono tracking-widest">{item.year}</span>
                                        </div>
                                        <div className="p-3 bg-gray-900 rounded-lg text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-all">
                                            {item.icon}
                                        </div>
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
                                    <ul className="space-y-2">
                                        {item.items.map((feat, i) => (
                                            <li key={i} className="flex items-center gap-2 text-gray-400 text-sm">
                                                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                                                {feat}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            <div className="relative z-10 w-8 h-8 bg-[#0B0F19] border-4 border-blue-600 rounded-full hidden md:block shadow-[0_0_15px_rgba(37,99,235,0.5)]"></div>
                            <div className="w-full md:w-[45%]"></div>
                        </motion.div>
                    );
                })}
            </div>
        </div>
      </div>
    </section>
  );
};

const PricingSection = () => {
  return (
    <section className="py-24 bg-[#0d121f] relative border-t border-gray-800">
      <div className="container mx-auto px-6 relative z-10">
        
        <div className="flex flex-col lg:flex-row items-center justify-between mb-16 gap-8">
            <div className="max-w-2xl">
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Commercial Model</h2>
                <p className="text-xl text-gray-400">
                    TITIGON follows a modular SaaS licensing structure. Pricing depends on user volume and data processing scale.
                </p>
            </div>
            <div className="w-full lg:w-1/3 rounded-xl overflow-hidden border border-gray-700 opacity-80">
                <img 
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop" 
                    alt="Analytics" 
                    className="w-full h-40 object-cover"
                />
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingData.map((plan, index) => (
                <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className={`relative p-8 rounded-2xl border flex flex-col h-full ${
                        plan.highlight 
                        ? "bg-[#131b2c] border-blue-500 shadow-[0_0_40px_rgba(37,99,235,0.15)]" 
                        : "bg-[#0B0F19] border-gray-800 hover:border-gray-600"
                    }`}
                >
                    {plan.highlight && (
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white text-xs font-bold px-4 py-1 rounded-full uppercase tracking-widest shadow-lg">
                            Most Popular
                        </div>
                    )}

                    <div className={`mb-6 p-4 rounded-xl w-fit ${plan.highlight ? 'bg-blue-600 text-white' : 'bg-gray-800 text-gray-400'}`}>
                        {plan.icon}
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-2">{plan.plan}</h3>
                    <p className="text-gray-400 text-sm mb-8">{plan.desc}</p>

                    <ul className="space-y-4 mb-2 flex-grow">
                        {plan.features.map((feature, i) => (
                            <li key={i} className="flex items-start gap-3 text-gray-300 text-sm">
                                <Check size={18} className="text-blue-500 mt-0.5 shrink-0" />
                                <span>{feature}</span>
                            </li>
                        ))}
                    </ul>
                    {/* Select Plan Button Removed */}
                </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
};

const Roadmap = () => {
  return (
    <div className="bg-[#0B0F19] min-h-screen text-white font-sans selection:bg-blue-500 selection:text-white">
      <div className="h-20 border-b border-gray-800"></div>

      <HeroSection />
      <RoadmapSection />
      <PricingSection />

      <Footer theme="dark" />
    </div>
  );
};

export default Roadmap;