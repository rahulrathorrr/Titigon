import React from "react";
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

const ScenariosPage = () => {
  // Scenarios Data
  const scenarios = [
    {
      id: "01",
      title: "Growing Technology Firm",
      category: "Scale & Operations",
      description: "A scaling technology firm manages client onboarding, weekly meetings, financial tracking, and digital marketing operations.",
      outcome: "The result is operational visibility across departments.",
      products: [
        { name: "MorphIQ", role: "Structures customer datasets" },
        { name: "MeetLogic", role: "Converts weekly calls into tracked execution plans" },
        { name: "MailForge", role: "Standardizes communication flows" },
        { name: "FinStruct", role: "Monitors revenue and expense movement" }
      ],
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: "02",
      title: "Financial Advisory Practice",
      category: "Compliance & Finance",
      description: "A financial advisory firm handles client financial records and compliance documents.",
      outcome: "The firm gains structured financial intelligence and compliance oversight.",
      products: [
        { name: "FinStruct", role: "Models cash-flow projections" },
        { name: "TrustLayer", role: "Verifies identity documentation" },
        { name: "MorphIQ", role: "Organizes historical transaction records" }
      ],
      image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: "03",
      title: "E-commerce Platform",
      category: "Retail & Analytics",
      description: "An online retail business experiences inconsistent conversion rates. WebTrace identifies drop-off points.",
      outcome: "Data-driven optimization replaces guesswork.",
      products: [
        { name: "WebTrace", role: "Identifies drop-off points in checkout" },
        { name: "MailForge", role: "Automates customer engagement follow-ups" },
        { name: "FinStruct", role: "Tracks campaign-level revenue impact" }
      ],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop"
    },
    {
      id: "04",
      title: "Enterprise Operations Department",
      category: "Internal Workflow",
      description: "Internal teams manage multiple project workflows. MeetLogic tracks execution.",
      outcome: "Operational control becomes measurable.",
      products: [
        { name: "MeetLogic", role: "Tracks execution" },
        { name: "MorphIQ", role: "Structures project datasets" },
        { name: "WebTrace", role: "Evaluates digital adoption within internal portals" }
      ],
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop"
    }
  ];

  return (
    <div className="bg-white min-h-screen font-sans text-slate-900">
      
      {/* Header Spacer */}
      <div className="h-20 border-b border-slate-100"></div>

      {/* Hero Section - Simple & Static */}
      <section className="py-24 px-6 text-center border-b border-slate-200 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <div className="inline-block px-4 py-2 bg-white border border-slate-200 rounded-full mb-6 shadow-sm">
            <span className="text-xs font-bold tracking-widest uppercase text-blue-600">Real Operational Environments</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black mb-6 text-slate-900">
            APPLICATION <br/> SCENARIOS
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            TITIGON platforms are designed for real operational environments.
          </p>
        </div>
      </section>

      {/* Scenarios List */}
      <div className="flex flex-col">
        {scenarios.map((item, index) => {
          const isEven = index % 2 === 0;
          return (
            <section key={index} className="py-20 border-b border-slate-100">
              <div className="container mx-auto px-6">
                <div className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12 lg:gap-20`}>
                  
                  {/* Text Side */}
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="text-5xl font-bold text-slate-200">{item.id}</span>
                      <span className="text-xs font-bold uppercase tracking-wider bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
                        {item.category}
                      </span>
                    </div>
                    
                    <h2 className="text-3xl font-bold mb-4 text-slate-900">{item.title}</h2>
                    <p className="text-lg text-slate-600 mb-8 leading-relaxed">{item.description}</p>

                    <div className="bg-slate-50 p-6 rounded-lg border border-slate-200 mb-6">
                      <h4 className="font-bold text-sm uppercase mb-4 text-slate-700 flex items-center gap-2">
                        <Cpu size={18} /> Solution Stack
                      </h4>
                      <ul className="space-y-2">
                        {item.products.map((prod, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                            <CheckCircle2 size={16} className="text-green-500 mt-1 shrink-0" />
                            <span><strong>{prod.name}:</strong> {prod.role}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="pl-4 border-l-4 border-blue-600">
                      <p className="text-slate-800 font-medium italic">"{item.outcome}"</p>
                    </div>
                  </div>

                  {/* Image Side - Simple Img Tag */}
                  <div className="flex-1 w-full">
                    <div className="rounded-xl overflow-hidden shadow-xl border border-slate-200">
                      <img 
                        src={item.image} 
                        alt={item.title} 
                        className="w-full h-auto object-cover aspect-video"
                      />
                    </div>
                  </div>

                </div>
              </div>
            </section>
          );
        })}
      </div>

      {/* CTA */}
      <section className="py-20 bg-slate-900 text-white text-center px-6">
        <h2 className="text-3xl font-bold mb-4">Operational Control Made Measurable</h2>
        <button className="mt-6 px-8 py-3 bg-blue-600 hover:bg-blue-500 font-bold uppercase tracking-widest rounded transition-colors">
          Explore Implementation
        </button>
      </section>

      {/* Footer */}
      <Footer theme="light" />
    </div>
  );
};

export default ScenariosPage;