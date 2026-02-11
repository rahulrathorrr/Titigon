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
      <div className="absolute inset-0 z-0 opacity-30" 
           style={{ 
             backgroundImage: 'linear-gradient(#1e293b 1.5px, transparent 1.5px), linear-gradient(90deg, #1e293b 1.5px, transparent 1.5px)', 
             backgroundSize: '40px 40px' 
           }}>
      </div>
      
      <div className="z-10 text-center px-4">
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-6 py-2 border-2 border-blue-500 rounded-full mb-8 bg-blue-900/30 backdrop-blur-md shadow-[0_0_15px_rgba(59,130,246,0.2)]"
        >
            <span className="text-white text-xs font-black tracking-[0.3em] uppercase">Strategic Vision 2026</span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-8xl font-black text-white mb-6 tracking-tighter"
        >
          ROADMAP & <br/> <span className="text-blue-500">COMMERCIAL MODEL</span>
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
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4 uppercase tracking-tight">Development Roadmap</h2>
            <p className="text-gray-100 text-lg font-medium">Roadmap adjustments are based on system validation benchmarks.</p>
        </div>

        <div className="relative">
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[2px] bg-blue-500/30 -translate-x-1/2"></div>

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
                            className={`flex flex-col md:flex-row items-center justify-between gap-8 md:gap-0 ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'} mb-16`}
                        >
                            <div className="w-full md:w-[45%]">
                                <div className="bg-[#1a2333] p-8 rounded-2xl border-2 border-gray-700 hover:border-blue-500 transition-all duration-300 group shadow-xl">
                                    <div className="flex justify-between items-start mb-6">
                                        <div>
                                            <span className="text-5xl font-black text-gray-500 group-hover:text-blue-400 transition-colors uppercase">{item.quarter}</span>
                                            <span className="block text-sm text-white font-bold font-mono tracking-widest mt-1">{item.year}</span>
                                        </div>
                                        <div className="p-4 bg-blue-600 text-white rounded-xl shadow-lg group-hover:bg-blue-500 transition-all">
                                            {item.icon}
                                        </div>
                                    </div>
                                    <h3 className="text-2xl font-black text-white mb-4 tracking-tight uppercase">{item.title}</h3>
                                    <ul className="space-y-3">
                                        {item.items.map((feat, i) => (
                                            <li key={i} className="flex items-center gap-3 text-gray-100 text-base font-bold">
                                                <div className="w-2 h-2 bg-blue-400 rounded-full shadow-[0_0_8px_rgba(96,165,250,0.6)]"></div>
                                                {feat}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            <div className="relative z-10 w-10 h-10 bg-[#0B0F19] border-4 border-blue-500 rounded-full hidden md:block shadow-[0_0_20px_rgba(59,130,246,0.6)]"></div>
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
        
        <div className="flex flex-col lg:flex-row items-center justify-between mb-16 gap-10">
            <div className="max-w-2xl">
                <h2 className="text-4xl md:text-6xl font-black text-white mb-6 uppercase tracking-tight">Commercial Model</h2>
                <p className="text-xl md:text-2xl text-gray-100 font-bold leading-relaxed">
                    TITIGON follows a modular SaaS licensing structure. Pricing depends on user volume and data processing scale.
                </p>
            </div>
            <div className="w-full lg:w-1/3 rounded-2xl overflow-hidden border-2 border-gray-700 shadow-2xl">
                <img 
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop" 
                    alt="Analytics" 
                    className="w-full h-52 object-cover grayscale opacity-80 hover:grayscale-0 transition-all duration-500"
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
                    className={`relative p-10 rounded-3xl border-2 flex flex-col h-full transition-all duration-300 ${
                        plan.highlight 
                        ? "bg-[#1a2333] border-blue-500 shadow-[0_0_50px_rgba(37,99,235,0.2)]" 
                        : "bg-[#0B0F19] border-gray-700 hover:border-blue-500/50"
                    }`}
                >
                    {plan.highlight && (
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white text-xs font-black px-6 py-2 rounded-full uppercase tracking-[0.2em] shadow-xl border border-white/20">
                            Most Popular
                        </div>
                    )}

                    <div className={`mb-8 p-5 rounded-2xl w-fit shadow-lg ${plan.highlight ? 'bg-blue-600 text-white' : 'bg-gray-800 text-blue-400'}`}>
                        {plan.icon}
                    </div>

                    <h3 className="text-3xl font-black text-white mb-2 uppercase tracking-tight">{plan.plan}</h3>
                    <p className="text-gray-200 text-base font-bold mb-10">{plan.desc}</p>

                    <ul className="space-y-5 mb-2 flex-grow">
                        {plan.features.map((feature, i) => (
                            <li key={i} className="flex items-start gap-3 text-white text-base font-bold">
                                <Check size={22} className="text-blue-400 mt-0.5 shrink-0 font-bold" />
                                <span>{feature}</span>
                            </li>
                        ))}
                    </ul>
                </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
};

const Roadmap = () => {
  return (
    <div className="bg-[#0B0F19] min-h-screen text-white font-sans selection:bg-blue-600 selection:text-white overflow-hidden">
      <div className="h-20 border-b border-gray-800"></div>

      <HeroSection />
      <RoadmapSection />
      <PricingSection />

      <Footer theme="dark" />
    </div>
  );
};

export default Roadmap;