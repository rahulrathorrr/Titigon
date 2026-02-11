import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { 
  Layers, 
  ArrowRight, 
  FileInput, 
  Cpu, 
  LayoutDashboard, 
  Shield, 
  Lock, 
  Eye, 
  Key, 
  FileCheck 
} from "lucide-react";
import Footer from "./Footer"; 

// --- Animation Variants ---
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

// --- Sub-Components ---

const HeroSection = () => {
  const { scrollY } = useScroll();
  const yText = useTransform(scrollY, [0, 300], [0, 100]);
  
  return (
    <section className="relative h-[90vh] w-full flex flex-col justify-center items-center bg-white overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-[0.4]" 
           style={{ 
             backgroundImage: 'linear-gradient(#cbd5e1 1px, transparent 1px), linear-gradient(90deg, #cbd5e1 1px, transparent 1px)', 
             backgroundSize: '60px 60px' 
           }}>
      </div>

      <motion.div 
        animate={{ rotate: 360 }}
        transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
        className="absolute right-[-10%] top-[-10%] w-[600px] h-[600px] border-[1px] border-slate-300 border-dashed rounded-full opacity-50"
      />
      
      <motion.div style={{ y: yText }} className="z-10 text-center max-w-5xl px-6">
        <motion.div 
            initial={{ opacity: 0, scale: 0.9 }} 
            animate={{ opacity: 1, scale: 1 }} 
            transition={{ duration: 0.6 }}
            className="inline-block mb-6 px-4 py-1 bg-slate-900 border border-slate-700 rounded-full"
        >
            <span className="text-white font-mono text-xs tracking-widest uppercase font-bold">System Framework v1.0</span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-6xl md:text-8xl font-black text-slate-950 mb-6 tracking-tight"
        >
          PLATFORM <br/> <span className="text-blue-600">ARCHITECTURE</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl text-slate-800 font-medium max-w-2xl mx-auto leading-relaxed"
        >
          Structural Intelligence Framework. <br/>
          Designed for precision, built for scale.
        </motion.p>
      </motion.div>

      <motion.div 
        initial={{ height: 0 }}
        animate={{ height: 100 }}
        transition={{ duration: 1.5, delay: 1 }}
        className="absolute bottom-0 w-[1px] bg-slate-400"
      />
    </section>
  );
};

const Introduction = () => {
    return (
        <section className="py-24 bg-slate-50 border-y border-slate-200">
            <div className="container mx-auto px-6 text-center">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                    className="max-w-3xl mx-auto"
                >
                    <Layers size={48} className="mx-auto text-blue-600 mb-6" />
                    <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-6 uppercase tracking-tight">The Three-Layer Model</h2>
                    <p className="text-xl text-slate-800 leading-relaxed font-medium">
                        All TITIGON platforms operate within a unified structural framework. 
                        We don't just process data; we engineer it into intelligence through three distinct phases.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

const LayerSection = ({ number, title, subtitle, points, icon, image, isReversed }) => {
    return (
        <section className="py-32 bg-white overflow-hidden relative border-b border-slate-50">
            <div className="container mx-auto px-6">
                <div className={`flex flex-col ${isReversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-16 md:gap-24`}>
                    
                    <motion.div 
                        initial={{ opacity: 0, x: isReversed ? 50 : -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                        className="flex-1"
                    >
                        <div className="flex items-center gap-4 mb-6">
                            <span className="text-6xl font-black text-slate-200 select-none">{number}</span>
                            <div className="h-[2px] w-20 bg-blue-600"></div>
                        </div>
                        
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 bg-blue-600 text-white rounded-lg">
                                {icon}
                            </div>
                            <h3 className="text-3xl font-black text-slate-950 uppercase tracking-wide">{title}</h3>
                        </div>

                        <p className="text-xl text-slate-800 mb-8 font-bold leading-tight">
                            {subtitle}
                        </p>

                        <ul className="space-y-4">
                            {points.map((point, index) => (
                                <li key={index} className="flex items-start gap-3 text-slate-900 font-medium">
                                    <ArrowRight size={20} className="mt-1 text-blue-600 flex-shrink-0 font-bold" />
                                    <span className="leading-relaxed">{point}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    <motion.div 
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="flex-1 relative group"
                    >
                        <div className="relative overflow-hidden rounded-xl shadow-2xl border border-slate-200 aspect-[4/3]">
                            <div className="absolute inset-0 bg-blue-900/5 mix-blend-multiply z-10"></div>
                            <img 
                                src={image} 
                                alt={title} 
                                className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105" 
                            />
                        </div>
                        <div className="absolute -z-10 top-6 -right-6 w-full h-full border-2 border-slate-200 rounded-xl"></div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

const SecuritySection = () => {
    const features = [
        { icon: <Key size={24} />, title: "Access Control", desc: "Role-based access control (RBAC) ensuring strict hierarchy." },
        { icon: <Lock size={24} />, title: "Encryption", desc: "End-to-end encrypted data transmission protocols." },
        { icon: <Shield size={24} />, title: "Authentication", desc: "Multi-factor layers preventing unauthorized entry." },
        { icon: <Eye size={24} />, title: "Audit Logging", desc: "Every action is traceable and logged for accountability." },
        { icon: <FileCheck size={24} />, title: "API Control", desc: "Strictly governed API architecture to prevent leaks." },
    ];

    return (
        <section className="py-32 bg-[#0B0F19] text-white relative overflow-hidden">
             <div className="absolute inset-0 opacity-10" 
                style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }}>
             </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-3xl mb-16">
                    <h2 className="text-4xl font-black mb-4 uppercase tracking-tight">Security & Governance</h2>
                    <p className="text-gray-200 text-xl font-medium leading-relaxed">
                        Our architecture emphasizes predictability and auditability. Security is not an add-on; 
                        it is woven into the fabric of the code.
                    </p>
                </div>

                <motion.div 
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {features.map((item, index) => (
                        <motion.div 
                            key={index} 
                            variants={fadeInUp}
                            className="p-8 border border-slate-800 bg-slate-900/50 hover:bg-slate-900 transition-colors rounded-lg group"
                        >
                            <div className="w-12 h-12 bg-blue-600 text-white rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-500 transition-all">
                                {item.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-2 text-white uppercase tracking-wide">{item.title}</h3>
                            <p className="text-gray-300 text-sm leading-relaxed font-medium">{item.desc}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

const PlatformArchitecture = () => {
  return (
    <div className="bg-white min-h-screen font-sans selection:bg-blue-100 selection:text-slate-900">
        <div className="h-20 bg-white border-b border-slate-100"></div> 

        <HeroSection />
        <Introduction />
        
        <LayerSection 
            number="01"
            title="Input Standardization"
            subtitle="Raw data enters the system through controlled channels."
            icon={<FileInput />}
            image="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop"
            isReversed={false}
            points={[
                "Ingestion of textual input, uploaded files, and behavioral logs.",
                "Processing financial entries and communication transcripts.",
                "Each dataset is parsed, validated, categorized, and normalized."
            ]}
        />

        <LayerSection 
            number="02"
            title="Logical Workflow Processing"
            subtitle="Operational rules are defined within the system. Every action triggers a mapped pathway."
            icon={<Cpu />}
            image="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop" 
            isReversed={true}
            points={[
                "Validation checkpoints ensure structural consistency.",
                "Uses rule-based models combined with adaptive logic layers.",
                "Eliminates reliance on solely automated responses."
            ]}
        />

        <LayerSection 
            number="03"
            title="Structured Output & Monitoring"
            subtitle="Producing traceable, organized data for clear decision making."
            icon={<LayoutDashboard />}
            image="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop"
            isReversed={false}
            points={[
                "Outputs delivered as Structured dashboards and Export-ready datasets.",
                "Integrated Task tracking systems and Predictive reports.",
                "Complete verification logs for every system event."
            ]}
        />

        <SecuritySection />
        
        <Footer theme="light" />
    </div>
  );
};

export default PlatformArchitecture;