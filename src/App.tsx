/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from "motion/react";
import { 
  Monitor, 
  Palette, 
  Printer, 
  ShieldCheck, 
  MessageCircle, 
  Clock, 
  Globe, 
  Cpu, 
  ChevronRight,
  Menu,
  X,
  Smartphone,
  Layout,
  FileText,
  Zap
} from "lucide-react";
import { useState, useEffect } from "react";

const WHATSAPP_URL = "https://wa.me/254116335366?text=Hello%20Brainwave%20Cybertech,%20I%20am%20interested%20in%20your%20services.";
const PHONE_NUMBER = "+254 116 335 366";
const DOMAIN = "WWW.BRAINWAVECYBERTECH.COM";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-navy/90 backdrop-blur-md border-b border-cyan-glow/20 py-3" : "bg-transparent py-6"}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-copper rounded-lg flex items-center justify-center shadow-[0_0_15px_rgba(184,115,51,0.4)]">
            <Cpu className="text-navy w-6 h-6" />
          </div>
          <span className="text-xl font-display font-bold tracking-tighter text-white">
            BRAINWAVE <span className="text-cyan-glow">CYBERTECH</span>
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {["Services", "About", "Contact"].map((item) => (
            <a key={item} href={`#${item.toLowerCase().replace(" ", "-")}`} className="text-sm font-medium text-white/70 hover:text-cyan-glow transition-colors uppercase tracking-widest">
              {item}
            </a>
          ))}
          <a 
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-copper hover:bg-copper/80 text-navy font-bold px-6 py-2 rounded-full transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(184,115,51,0.3)] text-sm uppercase"
          >
            Order Now
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-navy border-b border-cyan-glow/20 py-8 px-6 md:hidden"
          >
            <div className="flex flex-col gap-6 items-center">
              {["Services", "About", "Contact"].map((item) => (
                <a key={item} href={`#${item.toLowerCase().replace(" ", "-")}`} onClick={() => setIsOpen(false)} className="text-lg font-medium text-white/70 hover:text-cyan-glow uppercase tracking-widest">
                  {item}
                </a>
              ))}
              <a 
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center bg-copper text-navy font-bold py-4 rounded-xl text-lg uppercase"
              >
                Order Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-glow/5 rounded-full blur-[120px]" />
      <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-emerald-glow/5 rounded-full blur-[100px]" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-4 py-1 rounded-full border border-cyan-glow/30 bg-cyan-glow/5 text-cyan-glow text-xs font-bold uppercase tracking-[0.3em] mb-6">
            Future-Ready Digital Solutions
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold leading-[1.1] mb-8 tracking-tight">
            Your Gateway to <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-glow via-emerald-glow to-copper glow-cyan">
              Premium Digital
            </span> <br />
            & Printing Services
          </h1>
          <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto mb-12 leading-relaxed">
            Expert Web Design, Graphics, and High-Quality Printing serving the vibrant communities of <span className="text-white font-semibold">Kiambu & Thika</span>.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative px-8 py-4 bg-copper text-navy font-bold rounded-xl overflow-hidden transition-all hover:scale-105 w-full sm:w-auto text-center"
            >
              <span className="relative z-10 flex items-center justify-center gap-2 uppercase tracking-wider">
                Get Started <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </a>
            <a 
              href="#services"
              className="px-8 py-4 border border-white/20 hover:border-cyan-glow/50 text-white font-bold rounded-xl transition-all w-full sm:w-auto text-center uppercase tracking-wider"
            >
              Explore Services
            </a>
          </div>
        </motion.div>
      </div>

      {/* Animated Digital Globe Placeholder/Nebula Feel */}
      <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-navy to-transparent z-20" />
    </section>
  );
};

const ServiceCard = ({ icon: Icon, title, items, colorClass }: { icon: any, title: string, items: string[], colorClass: string }) => (
  <motion.div 
    whileHover={{ y: -10 }}
    className="bg-charcoal/50 border border-white/10 p-8 rounded-3xl backdrop-blur-sm relative overflow-hidden group"
  >
    <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${colorClass} opacity-0 group-hover:opacity-10 transition-opacity blur-2xl`} />
    <div className="mb-6 w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center group-hover:bg-cyan-glow/10 transition-colors">
      <Icon className={`w-8 h-8 ${colorClass.includes('cyan') ? 'text-cyan-glow' : colorClass.includes('emerald') ? 'text-emerald-glow' : 'text-copper'}`} />
    </div>
    <h3 className="text-2xl font-display font-bold mb-4">{title}</h3>
    <ul className="space-y-3">
      {items.map((item, idx) => (
        <li key={idx} className="flex items-center gap-3 text-white/60 group-hover:text-white/80 transition-colors">
          <div className="w-1.5 h-1.5 rounded-full bg-cyan-glow/40" />
          {item}
        </li>
      ))}
    </ul>
  </motion.div>
);

const Services = () => {
  return (
    <section id="services" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">Our Tech <span className="text-cyan-glow">Arsenal</span></h2>
          <p className="text-white/50 max-w-xl mx-auto">Cutting-edge digital solutions tailored for your business growth.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <ServiceCard 
            icon={Monitor}
            title="Computer & IT"
            items={["Web Design & Development", "Reliable Web Hosting", "KRA Registration Services"]}
            colorClass="from-cyan-glow/20 to-transparent"
          />
          <ServiceCard 
            icon={Palette}
            title="Graphics & Animation"
            items={["2D Stick-figure Animation", "Corporate Branding", "Professional Logo Design"]}
            colorClass="from-emerald-glow/20 to-transparent"
          />
          <ServiceCard 
            icon={Printer}
            title="Printing Hub"
            items={["Banners & Posters", "Flyers & Brochures", "Eulogies & Programs"]}
            colorClass="from-copper/20 to-transparent"
          />
        </div>
      </div>
    </section>
  );
};

const FileSafe = () => {
  return (
    <section id="file-safe" className="py-24 bg-charcoal/30 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-10" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-emerald-glow/10 border border-emerald-glow/20 text-emerald-glow text-sm font-bold mb-6">
              <ShieldCheck className="w-4 h-4" /> Secure Storage
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-8">The <span className="text-emerald-glow">File Safe</span> Feature</h2>
            <p className="text-lg text-white/60 mb-8 leading-relaxed">
              Never lose your digital assets again. Our dedicated File Safe system provides secure storage for all your digital files and print-ready materials. Access your designs anytime, anywhere.
            </p>
            <div className="space-y-6 mb-10">
              {[
                { icon: Zap, text: "Instant Retrieval for Re-printing" },
                { icon: ShieldCheck, text: "Encrypted Digital Archiving" },
                { icon: Layout, text: "Organized Project Management" }
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-emerald-glow/10 flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-emerald-glow" />
                  </div>
                  <span className="text-white/80 font-medium">{item.text}</span>
                </div>
              ))}
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square rounded-3xl bg-gradient-to-br from-emerald-glow/20 to-transparent border border-emerald-glow/30 flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center opacity-20">
                <Cpu className="w-64 h-64 text-emerald-glow animate-pulse" />
              </div>
              <div className="relative z-10 grid grid-cols-2 gap-4 p-8">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="bg-navy/80 border border-white/10 p-6 rounded-2xl backdrop-blur-md">
                    <FileText className="w-8 h-8 text-emerald-glow mb-4" />
                    <div className="h-2 w-full bg-white/10 rounded-full mb-2" />
                    <div className="h-2 w-2/3 bg-white/10 rounded-full" />
                  </div>
                ))}
              </div>
            </div>
            {/* Floating UI Elements */}
            <div className="absolute -top-6 -right-6 bg-copper p-4 rounded-2xl shadow-xl animate-bounce">
              <ShieldCheck className="text-navy w-6 h-6" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer id="contact" className="pt-24 pb-12 border-t border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-copper rounded flex items-center justify-center">
                <Cpu className="text-navy w-5 h-5" />
              </div>
              <span className="text-xl font-display font-bold text-white tracking-tighter">
                BRAINWAVE <span className="text-cyan-glow">CYBERTECH</span>
              </span>
            </div>
            <p className="text-white/50 max-w-sm mb-8 leading-relaxed">
              Elevating digital standards in Kiambu and Thika. From web architecture to high-precision printing, we are your tech partners.
            </p>
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-cyan-glow/20 transition-colors cursor-pointer">
                <Globe className="w-5 h-5 text-white/70" />
              </div>
              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-cyan-glow/20 transition-colors cursor-pointer">
                <Smartphone className="w-5 h-5 text-white/70" />
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-sm">Operation Hub</h4>
            <ul className="space-y-4 text-white/50">
              <li className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-copper" /> 8 AM - 8 PM (Mon - Sat)
              </li>
              <li className="flex items-center gap-3">
                <Globe className="w-4 h-4 text-copper" /> Kiambu & Thika Region
              </li>
              <li className="flex items-center gap-3">
                <MessageCircle className="w-4 h-4 text-copper" /> {PHONE_NUMBER}
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-sm">Quick Connect</h4>
            <a 
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white/5 border border-white/10 hover:border-cyan-glow/50 px-6 py-3 rounded-xl text-white font-bold transition-all uppercase tracking-wider text-sm"
            >
              Connect Now
            </a>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-white/30 text-sm">
          <p>© {new Date().getFullYear()} Brainwave Cybertech. All Rights Reserved.</p>
          <p className="font-mono">{DOMAIN}</p>
        </div>
      </div>
    </footer>
  );
};

const WhatsAppWidget = () => (
  <motion.a
    href={WHATSAPP_URL}
    target="_blank"
    rel="noopener noreferrer"
    initial={{ scale: 0, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    whileHover={{ scale: 1.1 }}
    className="fixed bottom-8 right-8 z-50 bg-[#25D366] p-4 rounded-full shadow-[0_0_20px_rgba(37,211,102,0.4)] flex items-center justify-center group"
  >
    <MessageCircle className="w-8 h-8 text-white" />
    <span className="absolute right-full mr-4 bg-navy border border-white/10 px-4 py-2 rounded-lg text-white text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
      Chat with us!
    </span>
  </motion.a>
);

export default function App() {
  return (
    <div className="relative selection:bg-cyan-glow selection:text-navy">
      <Nav />
      <Hero />
      <Services />
      <FileSafe />
      
      {/* About/Local SEO Section */}
      <section id="about" className="py-24 bg-navy relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-8">Serving <span className="text-copper">Kiambu & Thika</span></h2>
          <p className="text-white/60 max-w-3xl mx-auto text-lg leading-relaxed mb-12">
            Located strategically to serve the growing digital needs of Kiambu and Thika, Brainwave Cybertech is committed to providing world-class IT and printing services to local businesses and individuals. We combine local expertise with futuristic technology to ensure your projects stand out in the digital age.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: "Projects Completed", value: "500+" },
              { label: "Happy Clients", value: "200+" },
              { label: "Years Experience", value: "5+" },
              { label: "Service Areas", value: "10+" }
            ].map((stat, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-white/5 border border-white/10">
                <div className="text-3xl font-display font-bold text-cyan-glow mb-2">{stat.value}</div>
                <div className="text-xs text-white/40 uppercase tracking-widest">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppWidget />
    </div>
  );
}
