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
    <div className="bg-white min-h-screen font-sans text-slate-950 selection:bg-blue-100">
      {/* Header Placeholder */}
      <div className="h-20 border-b border-slate-200"></div>

      {/* Hero / Corporate Title Section */}
      <section className="py-24 bg-slate-50 border-b border-slate-300 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-40" 
             style={{ 
               backgroundImage: 'radial-gradient(#94a3b8 1.5px, transparent 1.5px)', 
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
                <div className="h-[3px] w-14 bg-blue-700"></div>
                <span className="text-blue-700 text-sm font-black tracking-[0.3em] uppercase">Corporate Profile</span>
            </div>
            <h1 className="text-5xl md:text-8xl font-black text-slate-950 mb-8 leading-tight tracking-tighter">
              COMPANY & <br/> <span className="text-blue-600">LEADERSHIP</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-900 font-bold leading-relaxed max-w-2xl">
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
                <h2 className="text-base font-black text-slate-950 uppercase tracking-widest mb-10 flex items-center gap-2 border-b-2 border-blue-600 w-fit pb-1">
                    <Building2 size={20} className="text-blue-700" /> Administrative Entity
                </h2>
                
                <div className="space-y-10">
                  <div className="group border-l-4 border-slate-200 pl-6 hover:border-blue-600 transition-colors">
                    <p className="text-xs text-blue-700 uppercase font-black mb-1 tracking-widest">Registered Name</p>
                    <p className="text-3xl font-black text-slate-950">TITIGON PRIVATE LIMITED</p>
                  </div>

                  <div className="flex items-start gap-5">
                    <div className="p-4 bg-slate-900 text-white rounded-xl shadow-lg">
                        <Calendar size={24} />
                    </div>
                    <div>
                        <p className="text-xs text-blue-700 uppercase font-black mb-1 tracking-widest">Incorporated</p>
                        <p className="text-xl font-bold text-slate-950">10 February 2026</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-5">
                    <div className="p-4 bg-slate-900 text-white rounded-xl shadow-lg">
                        <Binary size={24} />
                    </div>
                    <div>
                        <p className="text-xs text-blue-700 uppercase font-black mb-1 tracking-widest">Industry Sector</p>
                        <p className="text-xl font-bold text-slate-950 leading-tight">Information Technology & Structured Software Systems</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-5 border-t-2 border-slate-100 pt-10">
                    <div className="p-4 bg-blue-600 text-white rounded-xl shadow-lg">
                        <MapPin size={24} />
                    </div>
                    <div>
                        <p className="text-xs text-blue-700 uppercase font-black mb-1 tracking-widest">Registered Office</p>
                        <address className="not-italic text-slate-900 text-lg font-bold leading-relaxed">
                            Floor 8, Office No. 802, Plot No. 30 <br/>
                            Dattaji Salvi, Andheri <br/>
                            Mumbai, Maharashtra – 400053 <br/>
                            <span className="text-2xl font-black text-blue-700 mt-2 block uppercase tracking-tighter">India</span>
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
               <h2 className="text-base font-black text-slate-950 uppercase tracking-widest mb-10 flex items-center gap-2 border-b-2 border-blue-600 w-fit pb-1">
                    <ShieldCheck size={20} className="text-blue-700" /> Executive Board
                </h2>

                <div className="space-y-8">
                    {/* Ajay Verma */}
                    <div className="p-10 bg-white border-2 border-slate-200 rounded-3xl shadow-md hover:shadow-2xl hover:border-blue-500 transition-all group relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-24 h-24 bg-blue-50 rounded-bl-full -mr-10 -mt-10 group-hover:bg-blue-100 transition-colors"></div>
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
                            <div>
                                <h3 className="text-4xl font-black text-slate-950 mb-1">Ajay Verma</h3>
                                <p className="text-blue-700 font-mono text-sm uppercase tracking-[0.2em] font-black">Co-Founder</p>
                            </div>
                            <div className="w-16 h-16 bg-slate-950 text-white rounded-2xl flex items-center justify-center shadow-xl group-hover:bg-blue-700 transition-all rotate-3 group-hover:rotate-0">
                                <User2 size={32} />
                            </div>
                        </div>
                        <div className="mt-8 pt-6 border-t-2 border-slate-100 relative z-10">
                            <p className="text-blue-700 text-xs font-black uppercase mb-3 tracking-widest">Core Focus</p>
                            <p className="text-xl text-slate-900 leading-relaxed font-bold">
                                Strategic system structuring and operational alignment. Ensuring mathematical 
                                precision in enterprise workflows.
                            </p>
                        </div>
                    </div>

                    {/* Vijay Verma */}
                    <div className="p-10 bg-slate-950 text-white border-2 border-slate-800 rounded-3xl shadow-2xl transition-all hover:scale-[1.01]">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                            <div>
                                <h3 className="text-4xl font-black mb-1">Vijay Verma</h3>
                                <p className="text-blue-400 font-mono text-sm uppercase tracking-[0.2em] font-black">Co-Founder</p>
                            </div>
                            <div className="w-16 h-16 bg-white text-slate-950 rounded-2xl flex items-center justify-center shadow-white/10 shadow-2xl -rotate-3 hover:rotate-0 transition-transform">
                                <Binary size={32} />
                            </div>
                        </div>
                        <div className="mt-8 pt-6 border-t-2 border-white/10">
                            <p className="text-blue-400 text-xs font-black uppercase mb-3 tracking-widest">Technical Focus</p>
                            <p className="text-xl text-slate-100 leading-relaxed font-bold">
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

      {/* Corporate Seal Section */}
      <section className="py-24 bg-slate-50 border-t-2 border-slate-200">
        <div className="container mx-auto px-6 text-center">
            <div className="max-w-2xl mx-auto p-14 border-8 border-double border-slate-300 rounded-full shadow-inner bg-white">
                <p className="font-mono text-xs md:text-sm tracking-[0.4em] text-slate-950 uppercase font-black">
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