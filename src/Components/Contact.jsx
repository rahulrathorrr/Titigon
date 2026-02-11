import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, MapPin, Send, CheckCircle2, Building2 } from "lucide-react";
import Footer from "./Footer";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulating API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSent(true);
      // Reset form or stay in success state
    }, 2000);
  };

  return (
    <div className="bg-white min-h-screen font-sans text-slate-900 selection:bg-blue-100">
      {/* Header Placeholder */}
      <div className="h-20 border-b border-slate-100"></div>

      <section className="py-24 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col lg:flex-row gap-20">
            
            {/* LEFT SECTION: Company Details */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:w-1/2 space-y-12"
            >
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-[2px] w-12 bg-blue-600"></div>
                  <span className="text-blue-600 text-xs font-black tracking-[0.3em] uppercase">Connect With Us</span>
                </div>
                <h1 className="text-5xl md:text-7xl font-black text-slate-950 mb-8 tracking-tighter">
                  LET'S <span className="text-blue-600">TALK.</span>
                </h1>
                <p className="text-xl text-slate-700 font-medium leading-relaxed max-w-md">
                  Have a specific structural requirement? Reach out to our technical team for deployment queries.
                </p>
              </div>

              <div className="space-y-10">
                {/* Brand Name */}
                <div className="group border-l-4 border-blue-600 pl-6">
                  <p className="text-[10px] text-blue-600 uppercase font-black mb-1 tracking-widest">Administrative Entity</p>
                  <p className="text-3xl font-black text-slate-950 uppercase tracking-tighter">TITIGON PRIVATE LIMITED</p>
                </div>

                {/* Mail Support */}
                <div className="flex items-start gap-5 group">
                  <div className="p-4 bg-blue-600 text-white rounded-2xl shadow-lg group-hover:bg-blue-500 transition-colors">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-400 uppercase font-black mb-1 tracking-widest">Mail Support</p>
                    <a href="mailto:info@titigon.in" className="text-2xl font-black text-slate-950 hover:text-blue-600 transition-colors">
                      info@titigon.in
                    </a>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-5">
                  <div className="p-4 bg-slate-950 text-white rounded-2xl shadow-lg">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-400 uppercase font-black mb-1 tracking-widest">Global Headquarters</p>
                    <address className="not-italic text-xl font-bold text-slate-800 leading-relaxed">
                      Floor 8, Office No. 802, Plot No. 30 <br/>
                      Dattaji Salvi, Andheri, Mumbai <br/>
                      Maharashtra – 400053, INDIA
                    </address>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* RIGHT SECTION: Contact Form */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:w-1/2 bg-slate-50 p-8 md:p-12 rounded-3xl border border-slate-200 shadow-2xl relative overflow-hidden"
            >
              <AnimatePresence mode="wait">
                {!isSent ? (
                  <motion.form 
                    key="form"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    onSubmit={handleSubmit} 
                    className="space-y-6"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-xs font-black uppercase text-slate-500 tracking-widest">Full Name</label>
                        <input required type="text" placeholder="John Doe" className="w-full bg-white border border-slate-200 p-4 rounded-xl focus:outline-none focus:border-blue-600 font-medium transition-all" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-black uppercase text-slate-500 tracking-widest">Work Email</label>
                        <input required type="email" placeholder="john@company.com" className="w-full bg-white border border-slate-200 p-4 rounded-xl focus:outline-none focus:border-blue-600 font-medium transition-all" />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-xs font-black uppercase text-slate-500 tracking-widest">Subject</label>
                      <input required type="text" placeholder="Implementation Query" className="w-full bg-white border border-slate-200 p-4 rounded-xl focus:outline-none focus:border-blue-600 font-medium transition-all" />
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-black uppercase text-slate-500 tracking-widest">Message</label>
                      <textarea required rows="5" placeholder="Tell us about your structural needs..." className="w-full bg-white border border-slate-200 p-4 rounded-xl focus:outline-none focus:border-blue-600 font-medium transition-all resize-none"></textarea>
                    </div>

                    <button 
                      disabled={isSubmitting}
                      type="submit" 
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white font-black py-5 rounded-xl uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-3 shadow-xl shadow-blue-200 disabled:bg-blue-300"
                    >
                      {isSubmitting ? (
                        <div className="w-6 h-6 border-4 border-white/30 border-t-white rounded-full animate-spin"></div>
                      ) : (
                        <>
                          Send Message <Send size={18} />
                        </>
                      )}
                    </button>
                  </motion.form>
                ) : (
                  <motion.div 
                    key="success"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="h-full flex flex-col items-center justify-center text-center py-20"
                  >
                    <div className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-8 shadow-inner">
                      <CheckCircle2 size={48} />
                    </div>
                    <h3 className="text-3xl font-black text-slate-900 mb-4 uppercase">Message Sent!</h3>
                    <p className="text-slate-600 font-medium max-w-xs mx-auto">
                      Thank you for reaching out. Our technical desk will contact you within 24 hours.
                    </p>
                    <button 
                      onClick={() => setIsSent(false)} 
                      className="mt-8 text-blue-600 font-black uppercase text-xs tracking-widest hover:underline"
                    >
                      Send another message
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>

          </div>
        </div>
      </section>

      <Footer theme="light" />
    </div>
  );
};

export default Contact;