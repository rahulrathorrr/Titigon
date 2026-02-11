import React from "react";
import { Link } from "react-router-dom";
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
        <div className="flex flex-col md:flex-row justify-between items-start gap-12">
          
          {/* LEFT SECTION: Logo & Name */}
          <div className="flex items-center gap-4 order-1">
            <img src={logo} alt="Titigon Logo" className="h-10 w-auto object-contain" />
            <div className="flex flex-col">
              <h3 className="font-black tracking-[0.2em] text-2xl uppercase leading-none">
                TITIGON
              </h3>
              <span className={`text-[9px] tracking-[0.3em] uppercase mt-1 ${isDark ? "text-gray-500" : "text-slate-400"}`}>
                Private Limited
              </span>
            </div>
          </div>

          {/* RIGHT SECTION: Address & Legal Links */}
          <div className="flex flex-col items-start md:items-end text-left md:text-right order-2 gap-8 ml-auto">
            
            {/* Address */}
            <div className={`text-xs leading-relaxed space-y-1 font-medium ${isDark ? "text-gray-400" : "text-slate-500"}`}>
              <p>Floor 8, Office No. 802, Plot No. 30</p>
              <p>Dattaji Salvi, Andheri</p>
              <p>Mumbai, Maharashtra – 400053, INDIA</p>
            </div>

            {/* Legal Links & Copyright */}
            <div className="flex flex-col items-start md:items-end gap-4">
              <div className="flex gap-6">
                <Link
                  to="/privacy-policy"
                  className={`text-[11px] font-bold tracking-widest uppercase transition-colors ${
                    isDark ? "text-gray-500 hover:text-white" : "text-slate-500 hover:text-blue-600"
                  }`}
                >
                  Privacy Policy
                </Link>
                <Link
                  to="/terms-and-conditions"
                  className={`text-[11px] font-bold tracking-widest uppercase transition-colors ${
                    isDark ? "text-gray-500 hover:text-white" : "text-slate-500 hover:text-blue-600"
                  }`}
                >
                  Terms of Use
                </Link>
              </div>
              
              <div className={`text-[10px] tracking-widest font-mono ${isDark ? "text-gray-700" : "text-slate-400"}`}>
                © 2026 TITIGON PVT LTD. ALL SYSTEMS OPERATIONAL.
              </div>
            </div>

          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;