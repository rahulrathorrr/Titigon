import React from "react";
import { motion } from "framer-motion";
import { 
  Building2, 
  MapPin, 
  Calendar, 
  User2, 
  ShieldCheck, 
  Binary 
} from "lucide-react";
import Footer from "./Footer"; 

const CompanyLeadership = () => {
  return (
    <div className="bg-white min-h-screen font-sans text-slate-900 selection:bg-blue-100">
      {/* Header Placeholder */}
      <div className="h-20 border-b border-slate-100"></div>

      {/* Hero / Corporate Title Section */}
      <section className="py-24 bg-slate-50 border-b border-slate-200 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-40" 
             style={{ 
               backgroundImage: 'radial-gradient(#cbd5e1 1px, transparent 1px)', 
               backgroundSize: '30px 30px' 
             }}>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <div className="flex items-center gap-3 mb-6">
                <div className="h-[2px] w-12 bg-blue-600"></div>
                <span className="text-blue-600 text-xs font-bold tracking-[0.3em] uppercase">Corporate Profile</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-slate-900 mb-8 leading-tight">
              COMPANY & <br/> <span className="text-slate-400">LEADERSHIP</span>
            </h1>
            <p className="text-xl text-slate-600 font-light leading-relaxed max-w-2xl">
              TITIGON PRIVATE LIMITED is an infrastructure-first technology firm 
              specializing in structured digital intelligence and operational architecture.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            
            {/* Left Column: Company Details */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-5 space-y-12"
            >
              <div>
                <h2 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-10 flex items-center gap-2">
                    <Building2 size={18} /> Administrative Entity
                </h2>
                
                <div className="space-y-8">
                  <div className="group">
                    <p className="text-[10px] text-slate-400 uppercase font-bold mb-1 tracking-tighter">Registered Name</p>
                    <p className="text-2xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">TITIGON PRIVATE LIMITED</p>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-slate-100 rounded-lg">
                        <Calendar className="text-slate-600" size={20} />
                    </div>
                    <div>
                        <p className="text-[10px] text-slate-400 uppercase font-bold mb-1">Incorporated</p>
                        <p className="text-lg font-semibold text-slate-800">10 February 2026</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-slate-100 rounded-lg">
                        <Binary className="text-slate-600" size={20} />
                    </div>
                    <div>
                        <p className="text-[10px] text-slate-400 uppercase font-bold mb-1">Industry Sector</p>
                        <p className="text-lg font-semibold text-slate-800">Information Technology & Structured Software Systems</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 border-t border-slate-100 pt-8">
                    <div className="p-3 bg-blue-50 rounded-lg">
                        <MapPin className="text-blue-600" size={20} />
                    </div>
                    <div>
                        <p className="text-[10px] text-slate-400 uppercase font-bold mb-1">Registered Office</p>
                        <address className="not-italic text-slate-600 leading-relaxed">
                            Floor 8, Office No. 802, Plot No. 30 <br/>
                            Dattaji Salvi, Andheri <br/>
                            Mumbai, Maharashtra – 400053 <br/>
                            <span className="font-bold text-slate-900 mt-2 block">India</span>
                        </address>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Column: Leadership */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-7"
            >
               <h2 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-10 flex items-center gap-2">
                    <ShieldCheck size={18} /> Executive Board
                </h2>

                <div className="space-y-6">
                    <div className="p-10 bg-white border border-slate-200 rounded-2xl shadow-sm hover:shadow-xl hover:border-blue-200 transition-all group">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                            <div>
                                <h3 className="text-3xl font-black text-slate-900 mb-1">Ajay Verma</h3>
                                <p className="text-blue-600 font-mono text-xs uppercase tracking-widest font-bold">Co-Founder</p>
                            </div>
                            <div className="w-12 h-12 bg-slate-900 text-white rounded-full flex items-center justify-center">
                                <User2 size={24} />
                            </div>
                        </div>
                        <div className="mt-8 pt-6 border-t border-slate-100">
                            <p className="text-slate-400 text-[10px] font-bold uppercase mb-2">Core Focus</p>
                            <p className="text-lg text-slate-600 leading-relaxed">
                                Strategic system structuring and operational alignment. Ensuring mathematical 
                                precision in enterprise workflows.
                            </p>
                        </div>
                    </div>

                    <div className="p-10 bg-slate-900 text-white border border-slate-800 rounded-2xl shadow-2xl transition-all">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                            <div>
                                <h3 className="text-3xl font-black mb-1">Vijay Verma</h3>
                                <p className="text-blue-400 font-mono text-xs uppercase tracking-widest font-bold">Co-Founder</p>
                            </div>
                            <div className="w-12 h-12 bg-white text-slate-900 rounded-full flex items-center justify-center">
                                <Binary size={24} />
                            </div>
                        </div>
                        <div className="mt-8 pt-6 border-t border-white/10">
                            <p className="text-white/40 text-[10px] font-bold uppercase mb-2">Technical Focus</p>
                            <p className="text-lg text-slate-300 leading-relaxed">
                                Product architecture and engineering execution oversight. Managing the 
                                integrity of modular scalability layers.
                            </p>
                        </div>
                    </div>
                </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Corporate Seal Section - TEXT MADE DARKER */}
      <section className="py-20 bg-white border-t border-slate-100">
        <div className="container mx-auto px-6 text-center">
            <div className="max-w-md mx-auto p-12 border-4 border-double border-slate-200 rounded-full opacity-100 select-none pointer-events-none">
                <p className="font-mono text-[9px] tracking-[0.4em] text-slate-800 uppercase font-bold">
                    Titigon Private Limited • Structural Intelligence • Mumbai 2026
                </p>
            </div>
        </div>
      </section>

      <Footer theme="light" />
    </div>
  );
};

export default CompanyLeadership;