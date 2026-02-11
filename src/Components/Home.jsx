import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { 
  Database, 
  Workflow, 
  ShieldCheck, 
  Calendar, 
  FileJson,
  ArrowDown,
  MapPin
} from "lucide-react";
import Footer from "./Footer"; // Import Footer

// --- Components ---

const HeroSection = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 150]);
  
  return (
    <section className="relative h-screen w-full overflow-hidden flex flex-col items-center justify-center bg-[#0B0F19] border-b border-gray-800">
      <div className="absolute inset-0 z-0 opacity-20" 
           style={{ 
             backgroundImage: 'linear-gradient(#1e293b 1px, transparent 1px), linear-gradient(90deg, #1e293b 1px, transparent 1px)', 
             backgroundSize: '40px 40px' 
           }}>
      </div>
      
      <motion.div 
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-900/20 rounded-full blur-[100px]"
      />

      <motion.div style={{ y: y1 }} className="z-10 text-center px-4 max-w-5xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 border border-blue-500/30 rounded-full px-4 py-1 mb-8 bg-blue-900/10 backdrop-blur-sm"
        >
          <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
          <span className="text-blue-400 text-xs tracking-[0.2em] font-mono uppercase">System Operational</span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, letterSpacing: "-0.05em" }}
          animate={{ opacity: 1, letterSpacing: "0em" }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-6xl md:text-9xl font-black text-white leading-none mb-6"
        >
          TITIGON
        </motion.h1>
        
        <motion.h2
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           transition={{ duration: 1, delay: 0.4 }}
           className="text-xl md:text-3xl text-gray-400 font-light tracking-wide"
        >
          Structured Digital Intelligence Systems
        </motion.h2>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ delay: 1, duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-500 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] tracking-widest uppercase">Initiate Protocol</span>
        <ArrowDown size={20} />
      </motion.div>
    </section>
  );
};

const NarrativeSection = () => {
  return (
    <section className="py-32 md:py-48 bg-[#0B0F19] px-6">
      <div className="max-w-4xl mx-auto">
        <motion.p 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-5xl font-medium text-gray-300 leading-snug"
        >
          <span className="text-blue-500 block text-sm font-mono tracking-widest uppercase mb-4">The Current State</span>
          Modern organizations generate significant volumes of operational data. 
          <span className="text-white"> Emails. Meetings. Financial records. Verification documents.</span>
        </motion.p>
        
        <motion.p 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mt-12 text-2xl md:text-4xl text-gray-500 font-light leading-snug border-l-4 border-gray-700 pl-8"
        >
            However, without defined structure, these inputs remain fragmented and difficult to govern.
        </motion.p>
      </div>
    </section>
  );
};

const CoreProcessSection = () => {
  const processes = [
    {
      id: "01",
      title: "Normalize Inputs",
      desc: "We standardize inconsistent data streams into a unified language, ensuring every input is readable.",
      icon: <Database className="w-8 h-8" />
    },
    {
      id: "02",
      title: "Map Operational Logic",
      desc: "Converting abstract business processes into defined digital workflows that follow strict architectural rules.",
      icon: <Workflow className="w-8 h-8" />
    },
    {
      id: "03",
      title: "Structured Outputs",
      desc: "Producing traceable, organized data outputs that enable clearer decision making and reduce noise.",
      icon: <FileJson className="w-8 h-8" />
    },
    {
      id: "04",
      title: "Measurable Accountability",
      desc: "Enabling total governance. Every action is logged, every outcome is measurable.",
      icon: <ShieldCheck className="w-8 h-8" />
    }
  ];

  return (
    <section className="py-20 bg-[#0d121f] relative overflow-hidden">
      <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-blue-500/50 to-transparent"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-24">
          <span className="text-blue-400 font-mono text-sm tracking-widest uppercase">System Architecture</span>
          <h2 className="text-4xl font-bold text-white mt-2">Modular System Design</h2>
        </div>

        <div className="flex flex-col gap-24 md:gap-40">
          {processes.map((proc, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20%" }}
              transition={{ duration: 0.8 }}
              className={`flex flex-col md:flex-row items-center gap-10 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
            >
              <div className="flex-1 text-left md:text-right">
                <div className={`flex flex-col ${index % 2 === 0 ? 'md:items-start md:text-left' : 'md:items-end md:text-right'}`}>
                  <span className="text-6xl font-black text-gray-800 mb-2 select-none">{proc.id}</span>
                  <h3 className="text-3xl font-bold text-white mb-4">{proc.title}</h3>
                  <p className="text-gray-400 text-lg leading-relaxed max-w-md">
                    {proc.desc}
                  </p>
                </div>
              </div>

              <div className="relative flex-shrink-0">
                <div className="w-16 h-16 bg-[#0B0F19] border border-blue-500 rounded-full flex items-center justify-center text-blue-400 shadow-[0_0_30px_rgba(59,130,246,0.2)] z-20 relative">
                  {proc.icon}
                </div>
              </div>

              <div className="flex-1 hidden md:block"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const IdentityDataSection = () => {
  return (
    <section className="py-32 bg-[#0B0F19] border-t border-gray-800">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-10 border border-gray-800 bg-gray-900/30 rounded-xl"
          >
             <h3 className="text-sm font-mono text-gray-500 mb-8 uppercase tracking-widest border-b border-gray-800 pb-4">
                Entity Metadata
             </h3>
             <div className="space-y-8">
                <div className="group">
                    <p className="text-xs text-gray-500 uppercase mb-1">Company Name</p>
                    <p className="text-2xl text-white font-semibold">TITIGON PRIVATE LIMITED</p>
                </div>
                <div className="group">
                    <p className="text-xs text-gray-500 uppercase mb-1">Incorporation Date</p>
                    <div className="flex items-center gap-3">
                        <Calendar size={20} className="text-blue-500" />
                        <p className="text-xl text-white">10 February 2026</p>
                    </div>
                </div>
                <div className="group">
                    <p className="text-xs text-gray-500 uppercase mb-1">Headquarters</p>
                    <div className="flex items-center gap-3">
                        <MapPin size={20} className="text-blue-500" />
                        <p className="text-xl text-white">Mumbai, Maharashtra, India</p>
                    </div>
                </div>
             </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center"
          >
             <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Structured Environments, <br/>
                <span className="text-gray-600">Not Just Tools.</span>
             </h3>
             <p className="text-xl text-gray-400 leading-relaxed mb-8">
                We develop structured intelligence platforms designed to convert operational complexity 
                into organized systems.
             </p>
             <div className="h-64 bg-slate-800 rounded-lg overflow-hidden relative group">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center grayscale opacity-30 group-hover:scale-105 transition-transform duration-700"></div>
                <div className="absolute bottom-4 left-4 bg-black/80 px-4 py-2 rounded text-xs text-white font-mono">
                    COORD: MUMBAI_HQ
                </div>
             </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const PhilosophySection = () => {
    return (
        <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 z-0">
                <img 
                    src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop" 
                    alt="Network" 
                    className="w-full h-full object-cover grayscale opacity-20"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19] via-transparent to-[#0B0F19]"></div>
            </div>

            <div className="relative z-10 text-center max-w-4xl px-6">
                <motion.h2 
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="text-4xl md:text-6xl font-bold text-white mb-8"
                >
                    "We prioritize engineering discipline over rapid feature expansion."
                </motion.h2>
                <p className="text-blue-400 text-lg tracking-widest uppercase font-mono">
                    Architectural Clarity • Security Control • Modular Scalability
                </p>
            </div>
        </section>
    );
};

const Home = () => {
  return (
    <div className="bg-[#0B0F19] min-h-screen text-white font-sans selection:bg-blue-500 selection:text-white overflow-hidden">
      <div className="h-20"></div>
      
      <HeroSection />
      <NarrativeSection />
      <CoreProcessSection />
      <IdentityDataSection />
      <PhilosophySection />
      
      {/* Footer Included with Dark Theme */}
      <Footer theme="dark" />
    </div>
  );
};

export default Home;