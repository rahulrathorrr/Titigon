import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { 
  BrainCircuit, 
  Mail, 
  Video, 
  MousePointer2, 
  PieChart, 
  Fingerprint, 
  CheckCircle2,
  ArrowDown
} from "lucide-react";
import Footer from "./Footer"; // Import the Global Footer

// --- Data: Product List ---
const products = [
  {
    id: "01",
    name: "MorphIQ",
    sub: "TITIGON MorphIQ",
    role: "Data Structuring & Processing Engine",
    desc: "MorphIQ transforms unstructured and semi-structured data into organized datasets suitable for operational analysis. It ensures uniform structure before analytics processes begin.",
    features: [
      "Intelligent data cleaning",
      "Duplicate and anomaly detection",
      "Smart categorization & Schema alignment",
      "Business-ready export generation"
    ],
    icon: <BrainCircuit size={32} />,
    image: "https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=2032&auto=format&fit=crop" // Abstract Data/AI
  },
  {
    id: "02",
    name: "MailForge",
    sub: "TITIGON MailForge",
    role: "Structured Communication Automation",
    desc: "Designed for environments requiring tone control and workflow discipline. MailForge supports structured email workflows within business environments.",
    features: [
      "Context-aware message drafting",
      "Segmented personalization logic",
      "Campaign sequencing models",
      "Automated follow-up mapping"
    ],
    icon: <Mail size={32} />,
    image: "https://images.unsplash.com/photo-1557200134-90327ee9fafa?q=80&w=2070&auto=format&fit=crop" // Email/Network
  },
  {
    id: "03",
    name: "MeetLogic",
    sub: "TITIGON MeetLogic",
    role: "Meeting Intelligence & Execution Tracking",
    desc: "Converts discussion into execution clarity. Meetings become structured accountability systems rather than isolated conversations.",
    features: [
      "Automated meeting summaries",
      "Action item extraction & Owner assignment",
      "Timeline tracking",
      "Execution progress dashboards"
    ],
    icon: <Video size={32} />,
    image: "https://images.unsplash.com/photo-1606761568499-6d2451b23c66?q=80&w=1974&auto=format&fit=crop" // Virtual Meeting/Abstract
  },
  {
    id: "04",
    name: "WebTrace",
    sub: "TITIGON WebTrace",
    role: "Behavioral Interaction Intelligence",
    desc: "Analyzes digital interaction behavior to provide structured insights for interface optimization.",
    features: [
      "Heatmap visualization",
      "Journey path mapping",
      "Conversion funnel diagnostics",
      "Behavioral clustering"
    ],
    icon: <MousePointer2 size={32} />,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop" // Analytics/Dashboard
  },
  {
    id: "05",
    name: "FinStruct",
    sub: "TITIGON FinStruct",
    role: "Financial Structuring & Forecast Platform",
    desc: "Organizes financial input into planning intelligence. Designed to reduce manual spreadsheet dependency.",
    features: [
      "Cash-flow projections",
      "Expense classification",
      "Budget variance analysis",
      "Financial health indicators"
    ],
    icon: <PieChart size={32} />,
    // --- IMAGE CHANGED HERE ---
    image: "https://images.unsplash.com/photo-1535320903710-d9cf113d2064?q=80&w=2070&auto=format&fit=crop" 
  },
  {
    id: "06",
    name: "TrustLayer",
    sub: "TITIGON TrustLayer",
    role: "Document & Identity Verification",
    desc: "Strengthens document authenticity evaluation. Supports compliance-driven onboarding systems with audit-ready logs.",
    features: [
      "Pattern-based fraud detection",
      "Identity consistency validation",
      "Risk scoring algorithms",
      "Audit-ready verification logs"
    ],
    icon: <Fingerprint size={32} />,
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=2070&auto=format&fit=crop" // Security/Fingerprint
  }
];

// --- Sub-Components ---

const ProductCard = ({ product, index }) => {
  const isEven = index % 2 === 0;

  return (
    <section className="min-h-[90vh] flex items-center justify-center py-20 relative border-t border-gray-800/50">
      <div className="container mx-auto px-6">
        <div className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-16 lg:gap-24`}>
          
          {/* Text Section */}
          <motion.div 
            initial={{ opacity: 0, x: isEven ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="flex-1"
          >
            <div className="flex items-center gap-4 mb-6">
                <span className="text-blue-500 font-mono text-sm tracking-widest uppercase">{product.sub}</span>
                <div className="h-[1px] w-12 bg-gray-700"></div>
            </div>

            <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-blue-900/20 text-blue-400 rounded-xl border border-blue-500/20 shadow-[0_0_20px_rgba(59,130,246,0.1)]">
                    {product.icon}
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-white">{product.name}</h2>
            </div>
            
            <h3 className="text-xl text-gray-400 font-medium mb-6 italic">{product.role}</h3>
            
            <p className="text-gray-300 text-lg leading-relaxed mb-8 border-l-2 border-gray-700 pl-4">
                {product.desc}
            </p>

            <div className="bg-[#131b2c] p-6 rounded-xl border border-gray-800">
                <h4 className="text-white font-semibold mb-4 flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                    Capabilities
                </h4>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {product.features.map((feat, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-gray-400">
                            <CheckCircle2 size={16} className="text-blue-500 mt-1 flex-shrink-0" />
                            <span>{feat}</span>
                        </li>
                    ))}
                </ul>
            </div>
          </motion.div>

          {/* Image Section */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, rotate: isEven ? -2 : 2 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 relative group w-full"
          >
             {/* Glow Effect */}
             <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500 opacity-20 blur-[60px] rounded-full group-hover:opacity-30 transition-opacity duration-700"></div>
             
             <div className="relative overflow-hidden rounded-2xl border border-gray-700 shadow-2xl bg-gray-900 aspect-video">
                <div className="absolute inset-0 bg-blue-900/20 mix-blend-overlay z-10"></div>
                <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1" 
                />
                
                {/* Overlay UI Element */}
                <div className="absolute bottom-4 left-4 right-4 bg-black/60 backdrop-blur-md p-3 rounded-lg border border-white/10 flex justify-between items-center z-20">
                    <span className="text-xs font-mono text-blue-300 uppercase">System: {product.name}</span>
                    <div className="flex gap-1">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
                    </div>
                </div>
             </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

const Hero = () => {
    const { scrollY } = useScroll();
    const yText = useTransform(scrollY, [0, 300], [0, 150]);

    return (
        <section className="relative h-[80vh] w-full flex flex-col justify-center items-center bg-[#0B0F19] overflow-hidden border-b border-gray-800">
             {/* Hexagon Grid Background */}
             <div className="absolute inset-0 z-0 opacity-10" 
                style={{ 
                    backgroundImage: 'radial-gradient(#3b82f6 1px, transparent 1px)', 
                    backgroundSize: '40px 40px' 
                }}>
            </div>

            <motion.div style={{ y: yText }} className="z-10 text-center px-4">
                <motion.div 
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="inline-block px-4 py-1 mb-6 border border-blue-500/30 rounded-full bg-blue-900/10 backdrop-blur-sm"
                >
                    <span className="text-blue-400 text-xs tracking-[0.3em] font-mono uppercase">Integrated Suite</span>
                </motion.div>
                
                <motion.h1 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-5xl md:text-8xl font-black text-white mb-6"
                >
                    PRODUCT <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">ECOSYSTEM</span>
                </motion.h1>

                <motion.p 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-xl text-gray-400 max-w-2xl mx-auto"
                >
                    A unified constellation of intelligence platforms designed for structural organization.
                </motion.p>
            </motion.div>

            <motion.div 
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="absolute bottom-10 text-gray-600"
            >
                <ArrowDown />
            </motion.div>
        </section>
    )
}

// --- Main Page Component ---
const ProductEcosystem = () => {
  return (
    <div className="bg-[#0B0F19] min-h-screen text-white font-sans selection:bg-blue-500 selection:text-white">
      {/* Header Placeholder */}
      <div className="h-20"></div>

      <Hero />
      
      {/* Map through products to create sections */}
      <div className="flex flex-col">
        {products.map((prod, index) => (
            <ProductCard key={index} product={prod} index={index} />
        ))}
      </div>

      {/* Dark Theme Footer */}
      <Footer theme="dark" />
    </div>
  );
};

export default ProductEcosystem;