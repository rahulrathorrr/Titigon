import React from "react";
import { Link } from "react-router-dom";
import { Mail, ArrowRight } from "lucide-react";
import logo from "../assets/logo.png";

const Footer = ({ theme = "dark" }) => {
  const isDark = theme === "dark";

  return (
    <footer
      className={`py-16 border-t transition-colors duration-300 ${
        isDark
          ? "bg-[#0B0F19] border-gray-800 text-white"
          : "bg-white border-slate-200 text-slate-900"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
          
          {/* LEFT SECTION: Logo & Brand */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <img src={logo} alt="Titigon Logo" className="h-10 w-auto object-contain" />
              <div className="flex flex-col">
                <h3 className={`font-black tracking-[0.2em] text-2xl uppercase leading-none ${isDark ? "text-white" : "text-slate-950"}`}>
                  TITIGON
                </h3>
                <span className={`text-[10px] tracking-[0.3em] uppercase mt-1 font-black ${isDark ? "text-blue-500" : "text-blue-700"}`}>
                  Private Limited
                </span>
              </div>
            </div>
            <p className={`text-sm max-w-[280px] leading-relaxed mt-2 font-bold ${isDark ? "text-gray-100" : "text-slate-800"}`}>
              Engineering structured digital intelligence for modern operational environments.
            </p>
          </div>

          {/* CENTER SECTION: Quick Links */}
          <div className="flex flex-col gap-6 md:items-center">
            <div className="text-left md:text-left">
              <h4 className={`text-xs font-black tracking-widest uppercase mb-6 ${isDark ? "text-white border-l-4 border-blue-600 pl-3" : "text-slate-950 border-l-4 border-blue-700 pl-3"}`}>
                Quick Navigation
              </h4>
              <div className="grid grid-cols-1 gap-4">
                {[
                  { name: "Platform", path: "/platform-architecture" },
                  { name: "Ecosystem", path: "/product-ecosystem" },
                  { name: "Scenarios", path: "/application-scenarios" },
                  { name: "Roadmap", path: "/roadmap" }
                ].map((link) => (
                  <Link 
                    key={link.name} 
                    to={link.path}
                    className={`text-[12px] font-black uppercase tracking-widest flex items-center gap-2 transition-all hover:translate-x-2 ${
                      isDark ? "text-white hover:text-blue-400" : "text-slate-900 hover:text-blue-700"
                    }`}
                  >
                    <ArrowRight size={14} className="text-blue-500" strokeWidth={3} />
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT SECTION: Address & Support */}
          <div className="flex flex-col items-start md:items-end text-left md:text-right gap-6">
            <div>
              <h4 className={`text-xs font-black tracking-widest uppercase mb-4 ${isDark ? "text-white" : "text-slate-950"}`}>
                Global Headquarters
              </h4>
              <div className={`text-sm leading-relaxed space-y-1 font-black ${isDark ? "text-white" : "text-slate-950"}`}>
                <p>Floor 8, Office No. 802, Plot No. 30</p>
                <p>Dattaji Salvi, Andheri</p>
                <p>Mumbai, Maharashtra – 400053, INDIA</p>
              </div>
            </div>

            <div className={`flex flex-col items-start md:items-end gap-3 border-t-2 pt-6 w-full md:w-auto ${isDark ? "border-gray-800" : "border-slate-100"}`}>
               <p className={`text-[11px] font-black uppercase tracking-widest ${isDark ? "text-blue-500" : "text-blue-700"}`}>
                 Direct Support Desk
               </p>
               <a 
                 href="mailto:info@titigon.in" 
                 className={`flex items-center gap-3 font-black transition-all hover:scale-105 text-base ${isDark ? "text-blue-400" : "text-blue-700"}`}
               >
                 <Mail size={18} strokeWidth={2.5} />
                 info@titigon.in
               </a>
            </div>
          </div>

        </div>

        {/* BOTTOM BAR: Legal & Copyright */}
        <div className={`mt-16 pt-10 border-t-2 flex flex-col md:flex-row justify-between items-center gap-6 ${isDark ? "border-gray-800" : "border-slate-100"}`}>
          <div className="flex gap-10">
            <Link
              to="/privacy-policy"
              className={`text-[11px] font-black tracking-widest uppercase transition-colors ${
                isDark ? "text-white hover:text-blue-400" : "text-slate-950 hover:text-blue-700"
              }`}
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms-and-conditions"
              className={`text-[11px] font-black tracking-widest uppercase transition-colors ${
                isDark ? "text-white hover:text-blue-400" : "text-slate-950 hover:text-blue-700"
              }`}
            >
              Terms of Use
            </Link>
          </div>
          
          <div className={`text-[11px] tracking-[0.25em] font-mono font-black ${isDark ? "text-gray-400" : "text-slate-500"}`}>
            © 2026 TITIGON PVT LTD. <span className="text-green-500 ml-2 font-black">● ALL SYSTEMS ONLINE</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;