import React from "react";
import { FileText, Scale, Gavel, AlertTriangle, Copyright } from "lucide-react";
import Footer from "./Footer";

const TermsOfUse = () => {
  return (
    <div className="bg-white min-h-screen font-sans text-slate-900 selection:bg-blue-100">
      <div className="h-20 border-b border-slate-100"></div>

      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="flex items-center gap-3 mb-10">
            <FileText className="text-blue-600" size={32} />
            <h1 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">TERMS OF USE</h1>
          </div>

          <div className="space-y-12">
            <section>
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">User Responsibilities</h3>
              <p className="mb-6 text-slate-600">By accessing TITIGON platforms, users agree to:</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "Lawful and appropriate usage",
                  "Non-interference with system integrity",
                  "Protection of account credentials",
                  "Compliance with applicable regulations"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 p-4 bg-slate-50 rounded-xl border border-slate-200 text-sm font-semibold">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                    {item}
                  </div>
                ))}
              </div>
            </section>

            <section className="border-l-4 border-blue-600 pl-8 py-2">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2"><Copyright size={20} /> Intellectual Property</h3>
              <p className="text-slate-600 leading-relaxed">
                All system architecture, algorithms, platform materials, and proprietary content remain owned by <span className="font-bold text-slate-900">TITIGON PRIVATE LIMITED</span>.
              </p>
            </section>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <section className="p-6 bg-amber-50 rounded-2xl border border-amber-100">
                <h3 className="text-lg font-bold mb-3 flex items-center gap-2 text-amber-900"><AlertTriangle size={20} /> Limitation of Liability</h3>
                <p className="text-amber-800 text-sm leading-relaxed italic">
                  TITIGON shall not be liable for indirect or consequential damages arising from platform usage.
                </p>
              </section>

              <section className="p-6 bg-red-50 rounded-2xl border border-red-100">
                <h3 className="text-lg font-bold mb-3 flex items-center gap-2 text-red-900">Termination</h3>
                <p className="text-red-800 text-sm leading-relaxed">
                  Accounts may be suspended or terminated for policy violations.
                </p>
              </section>
            </div>

            <section className="pt-10 border-t border-slate-100">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2"><Gavel size={20} className="text-blue-600" /> Governing Law</h3>
              <p className="text-slate-600">
                All disputes are governed by the laws of <span className="font-bold text-slate-900">India</span>.
              </p>
            </section>
          </div>
        </div>
      </section>

      <Footer theme="light" />
    </div>
  );
};

export default TermsOfUse;