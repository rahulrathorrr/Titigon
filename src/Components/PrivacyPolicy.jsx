import React from "react";
import { ShieldCheck, Database, Eye, Lock, RefreshCcw } from "lucide-react";
import Footer from "./Footer";

const PrivacyPolicy = () => {
  return (
    <div className="bg-white min-h-screen font-sans text-slate-900 selection:bg-blue-100">
      <div className="h-20 border-b border-slate-100"></div>

      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="flex items-center gap-3 mb-6">
            <ShieldCheck className="text-blue-600" size={32} />
            <h1 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">PRIVACY POLICY</h1>
          </div>
          <p className="text-slate-500 font-mono text-sm mb-12 uppercase tracking-widest border-b border-slate-100 pb-4">
            Effective Date: 10 February 2026
          </p>

          <div className="prose prose-slate max-w-none space-y-12">
            <div>
              <p className="text-lg text-slate-700 leading-relaxed">
                TITIGON PRIVATE LIMITED is committed to protecting personal and business data processed through its platforms.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <section>
                <h3 className="text-xl font-bold flex items-center gap-2 mb-4"><Database size={20} className="text-blue-600"/> Information Collected</h3>
                <ul className="space-y-2 text-slate-600 list-disc pl-5">
                  <li>Account registration details</li>
                  <li>Contact information</li>
                  <li>Platform usage data</li>
                  <li>Uploaded datasets and documents</li>
                  <li>System-generated logs</li>
                </ul>
              </section>

              <section>
                <h3 className="text-xl font-bold flex items-center gap-2 mb-4"><RefreshCcw size={20} className="text-blue-600"/> Purpose of Processing</h3>
                <ul className="space-y-2 text-slate-600 list-disc pl-5">
                  <li>Platform functionality</li>
                  <li>Account administration</li>
                  <li>System performance monitoring</li>
                  <li>Security and fraud prevention</li>
                  <li>Compliance with legal obligations</li>
                </ul>
              </section>
            </div>

            <section className="bg-slate-50 p-8 rounded-2xl border border-slate-200">
              <h3 className="text-xl font-bold flex items-center gap-2 mb-6"><Lock size={20} className="text-blue-600"/> Data Security Measures</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-slate-700 font-medium">
                <div className="p-3 bg-white border border-slate-200 rounded-lg">• Encrypted communication protocols</div>
                <div className="p-3 bg-white border border-slate-200 rounded-lg">• Role-based access controls</div>
                <div className="p-3 bg-white border border-slate-200 rounded-lg">• Authentication management</div>
                <div className="p-3 bg-white border border-slate-200 rounded-lg">• Database security configurations</div>
                <div className="p-3 bg-white border border-slate-200 rounded-lg">• Audit logging and monitoring</div>
              </div>
            </section>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 border-t border-slate-100 pt-10">
              <section>
                <h3 className="text-lg font-bold mb-3">Data Retention</h3>
                <p className="text-slate-600 text-sm leading-relaxed">Data is retained only for operational necessity and contractual obligations.</p>
              </section>
              <section>
                <h3 className="text-lg font-bold mb-3">User Rights</h3>
                <p className="text-slate-600 text-sm leading-relaxed">Users may request data access, correction, or deletion subject to applicable regulations.</p>
              </section>
            </div>

            <section className="border-t border-slate-100 pt-10">
              <h3 className="text-lg font-bold mb-3 flex items-center gap-2"><Eye size={20} className="text-blue-600"/> Third-Party Disclosure</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Data is not sold. Limited sharing may occur with infrastructure providers or when legally required.
              </p>
            </section>
          </div>
        </div>
      </section>

      <Footer theme="light" />
    </div>
  );
};

export default PrivacyPolicy;