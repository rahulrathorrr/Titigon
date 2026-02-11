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
import Footer from "./Footer"; 

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
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop" 
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
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2070&auto=format&fit=crop" 
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
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop" 
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
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop" 
  }
];

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const HeroSection = () => {
  return (
    <section className="relative h-[80vh] w-full flex flex-col justify-center items-center bg-white border-b border-slate-200 overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-40" 
           style={{ 
             backgroundImage: 'linear-gradient(#cbd5e1 1px, transparent 1px), linear-gradient(90deg, #cbd5e1 1px, transparent 1px)', 
             backgroundSize: '50px 50px' 
           }}>
      </div>
      
      <div className="z-10 text-center max-w-4xl px-6">
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-6 py-2 bg-slate-900 border border-slate-700 rounded-full mb-8 shadow-lg"
        >
            <span className="text-white text-xs font-black tracking-[0.2em] uppercase">Real Operational Environments</span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-6xl md:text-8xl font-black text-slate-950 mb-6 leading-tight tracking-tighter"
        >
          APPLICATION <br/> <span className="text-blue-600">SCENARIOS</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl text-slate-800 max-w-2xl mx-auto leading-relaxed font-bold"
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
    <section className="py-24 bg-white border-b border-slate-200 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-16 lg:gap-24`}>
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInUp}
            className="flex-1"
          >
             <div className="flex items-center gap-4 mb-6">
                <span className="text-7xl font-black text-slate-100 select-none">{data.id}</span>
                <div className="px-4 py-1 bg-blue-600 text-white text-xs font-black tracking-widest uppercase rounded-full shadow-md">
                    {data.category}
                </div>
             </div>

             <h2 className="text-4xl md:text-5xl font-black text-slate-950 mb-6 tracking-tight">{data.title}</h2>
             
             <p className="text-lg md:text-xl text-slate-900 leading-relaxed mb-8 font-medium">
                {data.description}
             </p>

             <div className="bg-slate-50 border-2 border-slate-200 rounded-2xl p-8 mb-8 shadow-sm">
                <h3 className="text-sm font-black text-slate-950 uppercase tracking-widest mb-6 flex items-center gap-2 border-b border-slate-200 pb-2">
                    <BarChart3 size={20} className="text-blue-600" />
                    Titigon Solution Stack
                </h3>
                <ul className="space-y-4">
                    {data.products.map((prod, i) => (
                        <li key={i} className="flex items-start gap-3">
                            <CheckCircle2 size={22} className="text-green-600 mt-0.5 flex-shrink-0 font-bold" />
                            <span className="text-slate-950 text-base md:text-lg font-bold">
                                <span className="text-blue-700 uppercase tracking-tighter">{prod.name}:</span> {prod.role}
                            </span>
                        </li>
                    ))}
                </ul>
             </div>

             <div className="pl-6 border-l-8 border-blue-600 bg-blue-50/50 py-4 rounded-r-xl">
                <p className="text-slate-950 text-lg font-black italic leading-snug">"{data.outcome}"</p>
             </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex-1 w-full"
          >
             <div className="relative group">
                <div className="absolute -inset-4 bg-blue-100 rounded-2xl transform rotate-2 group-hover:rotate-1 transition-transform duration-500 shadow-sm"></div>
                
                <div className="relative overflow-hidden rounded-xl shadow-2xl border-2 border-slate-200 aspect-[4/3]">
                    <img 
                        src={data.image} 
                        alt={data.title} 
                        className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105" 
                    />
                    
                    <div className="absolute bottom-6 right-6 w-16 h-16 bg-blue-600 backdrop-blur rounded-2xl flex items-center justify-center text-white shadow-xl border-2 border-white/20">
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
    <div className="bg-white min-h-screen font-sans selection:bg-blue-600 selection:text-white">
       <div className="h-20 bg-white border-b border-slate-200"></div>

       <HeroSection />

       <div className="flex flex-col">
          {scenarios.map((item, index) => (
              <ScenarioCard key={index} data={item} index={index} />
          ))}
       </div>

       <section className="py-24 bg-[#0B0F19] text-white text-center">
            <h2 className="text-4xl font-black mb-6 tracking-tight uppercase">Ready to Scale?</h2>
            <p className="text-gray-200 text-xl font-medium max-w-2xl mx-auto leading-relaxed">
                Deploy TITIGON platforms in your operational environment today.
            </p>
       </section>

       <Footer theme="light" />
    </div>
  );
};

export default ApplicationScenarios;