import React from "react";
import { motion } from "framer-motion";
import { 
  Building2, 
  TrendingUp, 
  ShoppingCart, 
  Briefcase, 
  CheckCircle2,
  Cpu,
  BarChart3
} from "lucide-react";
import Footer from "./Footer"; // Make sure Footer.jsx exists

// --- Data: Scenarios ---
const scenarios = [
  {
    id: "01",
    title: "Growing Technology Firm",
    category: "Scale & Operations",
    description: "A scaling technology firm manages client onboarding, weekly meetings, financial tracking, and digital marketing operations. They face the challenge of fragmented data across multiple SaaS tools.",
    outcome: "The result is operational visibility across departments.",
    products: [
      { name: "MorphIQ", role: "Structures customer datasets" },
      { name: "MeetLogic", role: "Converts weekly calls into tracked execution plans" },
      { name: "MailForge", role: "Standardizes communication flows" },
      { name: "FinStruct", role: "Monitors revenue and expense movement" }
    ],
    icon: <Cpu size={32} />,
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop" // Tech Team
  },
  {
    id: "02",
    title: "Financial Advisory Practice",
    category: "Compliance & Finance",
    description: "A financial advisory firm handles sensitive client financial records and strict compliance documents. Accuracy and auditability are non-negotiable requirements.",
    outcome: "The firm gains structured financial intelligence and compliance oversight.",
    products: [
      { name: "FinStruct", role: "Models cash-flow projections" },
      { name: "TrustLayer", role: "Verifies identity documentation" },
      { name: "MorphIQ", role: "Organizes historical transaction records" }
    ],
    icon: <TrendingUp size={32} />,
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2070&auto=format&fit=crop" // Finance
  },
  {
    id: "03",
    title: "E-commerce Platform",
    category: "Retail & Analytics",
    description: "An online retail business experiences inconsistent conversion rates and cart abandonment. They need to understand user behavior beyond just sales numbers.",
    outcome: "Data-driven optimization replaces guesswork.",
    products: [
      { name: "WebTrace", role: "Identifies drop-off points in checkout" },
      { name: "MailForge", role: "Automates customer engagement follow-ups" },
      { name: "FinStruct", role: "Tracks campaign-level revenue impact" }
    ],
    icon: <ShoppingCart size={32} />,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop" // Analytics
  },
  {
    id: "04",
    title: "Enterprise Operations Department",
    category: "Internal Workflow",
    description: "Internal teams manage multiple project workflows across vast departments. Without structure, accountability is lost in email chains and disparate files.",
    outcome: "Operational control becomes measurable.",
    products: [
      { name: "MeetLogic", role: "Tracks execution and ownership" },
      { name: "MorphIQ", role: "Structures complex project datasets" },
      { name: "WebTrace", role: "Evaluates digital adoption within internal portals" }
    ],
    icon: <Briefcase size={32} />,
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop" // Enterprise
  }
];

// --- Simple Animation Variants (Lightweight) ---
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const HeroSection = () => {
  return (
    <section className="relative h-[80vh] w-full flex flex-col justify-center items-center bg-white border-b border-slate-200 overflow-hidden">
      {/* Light Grid Background */}
      <div className="absolute inset-0 z-0 opacity-40" 
           style={{ 
             backgroundImage: 'linear-gradient(#e2e8f0 1px, transparent 1px), linear-gradient(90deg, #e2e8f0 1px, transparent 1px)', 
             backgroundSize: '50px 50px' 
           }}>
      </div>
      
      <div className="z-10 text-center max-w-4xl px-6">
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-100 rounded-full mb-6"
        >
            <span className="text-blue-600 text-xs font-bold tracking-widest uppercase">Real Operational Environments</span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl font-black text-slate-900 mb-6 leading-tight"
        >
          APPLICATION <br/> <span className="text-blue-600">SCENARIOS</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed"
        >
          TITIGON platforms are designed for real operational environments.
        </motion.p>
      </div>
    </section>
  );
};

const ScenarioCard = ({ data, index }) => {
  const isEven = index % 2 === 0;

  return (
    <section className="py-24 bg-white border-b border-slate-100 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-16 lg:gap-24`}>
          
          {/* Content Side */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }} // Optimized: Animates only once
            variants={fadeInUp}
            className="flex-1"
          >
             <div className="flex items-center gap-3 mb-6">
                <span className="text-6xl font-bold text-slate-200 select-none">{data.id}</span>
                <div className="px-3 py-1 bg-slate-100 text-slate-600 text-xs font-bold tracking-widest uppercase rounded-full">
                    {data.category}
                </div>
             </div>

             <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">{data.title}</h2>
             
             <p className="text-lg text-slate-600 leading-relaxed mb-8">
                {data.description}
             </p>

             <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 mb-8 hover:border-blue-200 transition-colors duration-300">
                <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wide mb-4 flex items-center gap-2">
                    <BarChart3 size={18} className="text-blue-600" />
                    Titigon Solution Stack
                </h3>
                <ul className="space-y-3">
                    {data.products.map((prod, i) => (
                        <li key={i} className="flex items-start gap-3">
                            <CheckCircle2 size={18} className="text-green-500 mt-1 flex-shrink-0" />
                            <span className="text-slate-600 text-sm">
                                <strong className="text-slate-900">{prod.name}:</strong> {prod.role}
                            </span>
                        </li>
                    ))}
                </ul>
             </div>

             <div className="pl-4 border-l-4 border-blue-600">
                <p className="text-slate-800 font-medium italic">"{data.outcome}"</p>
             </div>
          </motion.div>

          {/* Visual Side */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex-1 w-full"
          >
             <div className="relative group">
                <div className="absolute -inset-4 bg-slate-100 rounded-2xl transform rotate-2 group-hover:rotate-1 transition-transform duration-500"></div>
                
                <div className="relative overflow-hidden rounded-xl shadow-xl border border-slate-200 aspect-[4/3]">
                    <img 
                        src={data.image} 
                        alt={data.title} 
                        className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105" 
                    />
                    
                    {/* Floating Icon */}
                    <div className="absolute bottom-6 right-6 w-16 h-16 bg-white/95 backdrop-blur rounded-2xl flex items-center justify-center text-blue-600 shadow-lg border border-slate-100">
                        {data.icon}
                    </div>
                </div>
             </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

const ApplicationScenarios = () => {
  return (
    <div className="bg-white min-h-screen font-sans selection:bg-blue-100 selection:text-blue-900">
       {/* Header Placeholder */}
       <div className="h-20 bg-white border-b border-slate-100"></div>

       <HeroSection />

       <div className="flex flex-col">
          {scenarios.map((item, index) => (
              <ScenarioCard key={index} data={item} index={index} />
          ))}
       </div>

       {/* Simple Text Section (Button Removed) */}
       <section className="py-24 bg-slate-900 text-white text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Scale?</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
                Deploy TITIGON platforms in your operational environment today.
            </p>
       </section>

       <Footer theme="light" />
    </div>
  );
};

export default ApplicationScenarios;