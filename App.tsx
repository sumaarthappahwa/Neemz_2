
import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  MessageCircle, 
  ChevronRight, 
  Check, 
  Star,
  ArrowRight,
  Shield,
  MapPin,
  Clock,
  Menu,
  X,
  Download,
  Award,
  Users,
  Calendar,
  Instagram,
  Facebook,
  Sparkles
} from 'lucide-react';
import { SERVICES, FAQS, CONTACT_INFO, TESTIMONIALS } from './constants';
import { getDentalAdvice } from './services/geminiService';

// --- Subcomponents ---

const SectionHeading: React.FC<{ title: string; subtitle?: string; centered?: boolean }> = ({ title, subtitle, centered = true }) => (
  <div className={`mb-16 ${centered ? 'text-center' : ''}`}>
    {subtitle && <span className="text-green-600 font-extrabold text-sm uppercase tracking-[0.2em] mb-3 block">{subtitle}</span>}
    <h2 className="text-3xl md:text-5xl font-black text-slate-900 leading-tight">{title}</h2>
    <div className={`h-2 w-24 bg-green-500 rounded-full mt-6 ${centered ? 'mx-auto' : ''}`}></div>
  </div>
);

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-[100] transition-all duration-500 ${isScrolled ? 'bg-white shadow-xl py-3' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="bg-green-600 p-2.5 rounded-xl shadow-lg shadow-green-200">
            <span className="text-white font-black text-2xl">N</span>
          </div>
          <div className="hidden sm:block">
            <h1 className="text-xl font-black tracking-tighter leading-none text-slate-900 uppercase">DR. NEEMZ</h1>
            <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mt-0.5">DENTISTRY SALEM</p>
          </div>
        </div>

        <div className="hidden lg:flex items-center gap-10">
          {['About', 'Services', 'Gallery', 'Testimonials', 'FAQ'].map(item => (
            <a key={item} href={`#${item.toLowerCase()}`} className="text-sm font-bold text-slate-600 hover:text-green-600 transition-colors">
              {item}
            </a>
          ))}
          <a href="#book" className="bg-green-600 text-white px-7 py-3 rounded-full font-extrabold text-sm btn-hover flex items-center gap-2">
            <Calendar size={16} /> Book Slot
          </a>
        </div>

        <button className="lg:hidden p-2 text-slate-900" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white border-t border-slate-100 p-6 flex flex-col gap-6 shadow-2xl animate-fade-in">
          {['About', 'Services', 'Gallery', 'FAQ'].map(item => (
            <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setMobileMenuOpen(false)} className="text-xl font-bold text-slate-800">
              {item}
            </a>
          ))}
          <a href="#book" onClick={() => setMobileMenuOpen(false)} className="bg-green-600 text-white py-4 rounded-2xl text-center font-bold text-lg">
            Book Free Consultation
          </a>
        </div>
      )}
    </nav>
  );
};

const SmileGallery = () => {
  const samples = [
    { title: "Invisible Braces", time: "12 Months", img: "https://images.unsplash.com/photo-1594539829535-dd93462742ed?auto=format&fit=crop&q=80&w=400" },
    { title: "Dental Implants", time: "1 Session", img: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&q=80&w=400" },
    { title: "Teeth Whitening", time: "45 Mins", img: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=400" },
    { title: "Smile Design", time: "2 Weeks", img: "https://images.unsplash.com/photo-1461033864539-556ae8103130?auto=format&fit=crop&q=80&w=400" }
  ];

  return (
    <section id="gallery" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <SectionHeading title="Real Results, Real Smiles" subtitle="The Smile Gallery" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {samples.map((s, idx) => (
            <div key={idx} className="group relative overflow-hidden rounded-[32px] aspect-[4/5] shadow-lg">
              <img src={s.img} alt={s.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-8">
                <h4 className="text-white text-xl font-black mb-1">{s.title}</h4>
                <p className="text-green-400 font-bold text-sm tracking-widest uppercase">{s.time} Transformation</p>
              </div>
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1.5 rounded-full text-[10px] font-black uppercase text-slate-800 tracking-tighter">
                Actual Patient
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Hero = () => (
  <section className="relative pt-32 pb-20 md:pt-56 md:pb-40 overflow-hidden gradient-hero">
    <div className="absolute top-0 right-0 w-2/3 h-full bg-green-50/50 -skew-x-12 -z-10 translate-x-1/4 rounded-[100px] hidden md:block"></div>
    <div className="container mx-auto px-6 relative z-10 flex flex-col lg:flex-row items-center gap-16">
      <div className="flex-1 text-center lg:text-left">
        <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-5 py-2 rounded-full text-xs font-black uppercase tracking-widest mb-8 border border-green-200">
          <Sparkles size={14} className="fill-green-700" />
          Voted #1 Dental Clinic in Salem
        </div>
        <h1 className="text-4xl md:text-7xl font-black text-slate-900 leading-[1.1] mb-8">
          Expert Care For <br />
          <span className="text-green-600 relative inline-block">
            Your Best Smile
            <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 318 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 10.5C65.5 2.5 252.5 -4.5 317 10.5" stroke="#22C55E" strokeWidth="3" strokeLinecap="round"/>
            </svg>
          </span>
        </h1>
        <p className="text-lg md:text-xl text-slate-600 mb-12 max-w-xl mx-auto lg:mx-0 font-medium leading-relaxed">
          From invisible aligners to pain-free root canals, experience world-class dentistry designed for the residents of Salem.
        </p>
        <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start">
          <a href="#book" className="bg-green-600 text-white px-10 py-5 rounded-2xl font-black text-lg flex items-center justify-center gap-3 btn-hover shadow-xl shadow-green-100">
            Book Appointment <ArrowRight size={20} />
          </a>
          <div className="bg-white border-2 border-slate-100 px-10 py-5 rounded-2xl font-black text-lg flex items-center justify-center gap-4 text-slate-800">
            <Phone size={22} className="text-green-600" />
            {CONTACT_INFO.phone}
          </div>
        </div>
      </div>
      <div className="flex-1 w-full max-w-2xl relative">
        <div className="relative z-10 rounded-[50px] overflow-hidden border-[12px] border-white shadow-2xl transition-transform duration-700">
          <img src="https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&q=80&w=800" alt="Doctor" className="w-full h-auto aspect-[4/3] object-cover" />
        </div>
        <div className="absolute -bottom-10 -left-10 bg-white p-6 rounded-3xl shadow-2xl border border-slate-50 hidden md:block animate-bounce-slow">
          <p className="text-3xl font-black text-green-600">5000+</p>
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Happy Patients</p>
        </div>
      </div>
    </div>
  </section>
);

const AppointmentSection = () => {
  const [submitted, setSubmitted] = useState(false);
  return (
    <section id="book" className="py-24 bg-white relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row bg-slate-900 rounded-[60px] overflow-hidden shadow-2xl">
          <div className="flex-1 p-10 md:p-20 bg-green-600 text-white">
            <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight">Claim Your <br />₹5000 OFF</h2>
            <p className="text-green-50 text-lg mb-12 opacity-90 max-w-sm">Special offer for Salem patients. Claim your discount on Braces & Aligners today.</p>
            <ul className="space-y-6">
              {["Painless Procedure", "ISO Certified Hygienic Clinic", "0% Interest EMI Options"].map((item, i) => (
                <li key={i} className="flex items-center gap-4 font-bold"><Check size={20} /> {item}</li>
              ))}
            </ul>
          </div>
          <div className="flex-1 p-10 md:p-20 bg-white">
            {!submitted ? (
              <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="space-y-6">
                <div>
                  <label className="text-xs font-black text-slate-400 uppercase tracking-widest mb-2 block">Name</label>
                  <input required placeholder="Full Name" className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl px-6 py-4 outline-none focus:border-green-500 transition-all font-bold" />
                </div>
                <div>
                  <label className="text-xs font-black text-slate-400 uppercase tracking-widest mb-2 block">Phone</label>
                  <input required type="tel" placeholder="+91" className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl px-6 py-4 outline-none focus:border-green-500 transition-all font-bold" />
                </div>
                <button type="submit" className="w-full bg-slate-900 text-white py-6 rounded-2xl font-black text-xl btn-hover">Book Now</button>
              </form>
            ) : (
              <div className="h-full flex flex-col items-center justify-center text-center">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center text-green-600 mb-6"><Check size={40} /></div>
                <h3 className="text-2xl font-black">Success!</h3>
                <p className="text-slate-500 mt-2">Dr. Neemz's office will call you shortly.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

const AIChatAssistant = () => {
  const [query, setQuery] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const handleAsk = async () => {
    if (!query) return;
    setLoading(true);
    const result = await getDentalAdvice(query);
    setResponse(result);
    setLoading(false);
  };

  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <SectionHeading title="Ask Our AI Expert" subtitle="Instant Advice" />
          <div className="bg-white rounded-[40px] shadow-2xl p-8 md:p-12 border border-slate-100">
            <div className="flex flex-col md:flex-row gap-4 mb-10">
              <input 
                value={query} onChange={(e) => setQuery(e.target.value)}
                placeholder="Ex: How much do aligners cost?" 
                className="flex-1 bg-slate-50 border-2 border-slate-100 rounded-2xl px-8 py-5 outline-none focus:border-green-500 transition-all text-lg font-medium"
              />
              <button 
                onClick={handleAsk} disabled={loading}
                className="bg-green-600 text-white px-10 py-5 rounded-2xl font-black text-lg btn-hover"
              >
                {loading ? 'Thinking...' : 'Consult AI'}
              </button>
            </div>
            {response && (
              <div className="bg-green-50 p-8 rounded-3xl border-l-8 border-green-500 animate-fade-in">
                <p className="text-slate-800 text-lg leading-relaxed font-medium">{response}</p>
                <div className="mt-6 flex gap-4">
                  <a href="#book" className="bg-slate-900 text-white px-6 py-3 rounded-xl font-bold text-sm">Get Diagnosis</a>
                  <button onClick={() => setResponse("")} className="text-slate-500 font-bold text-sm">Clear</button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer id="contact" className="bg-slate-900 text-white pt-24 pb-12">
    <div className="container mx-auto px-6">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-16 mb-20">
        <div className="col-span-1 lg:col-span-2">
          <div className="flex items-center gap-4 mb-8">
            <div className="bg-green-600 p-3 rounded-2xl font-black text-3xl">N</div>
            <h2 className="text-3xl font-black tracking-tighter uppercase">DR. NEEMZ DENTISTRY</h2>
          </div>
          <p className="text-slate-400 text-lg max-w-md mb-10 leading-relaxed">Providing world-class smiles in the heart of Salem with pain-free technology and expert care.</p>
          <div className="flex gap-4">
             {[Facebook, Instagram, MessageCircle].map((Icon, idx) => (
               <a key={idx} href="#" className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center hover:bg-green-600 transition-all"><Icon size={24} /></a>
             ))}
          </div>
        </div>
        <div>
          <h3 className="text-xl font-black mb-8 text-green-500">Contact Salem</h3>
          <ul className="space-y-6 text-slate-400 font-medium">
             <li className="flex gap-4"><MapPin className="text-green-500" /> {CONTACT_INFO.address}</li>
             <li className="flex gap-4"><Phone className="text-green-500" /> {CONTACT_INFO.phone}</li>
             <li className="flex gap-4"><Clock className="text-green-500" /> 10 AM - 9 PM</li>
          </ul>
        </div>
        <div>
           <h3 className="text-xl font-black mb-8 text-green-500">Quick Links</h3>
           <ul className="space-y-4 text-slate-400 font-medium">
             {['Braces Cost', 'Implants Guide', 'Testimonials', 'Book Slot'].map(i => (
               <li key={i}><a href="#" className="hover:text-green-500 transition-colors">{i}</a></li>
             ))}
           </ul>
        </div>
      </div>
      <div className="pt-12 border-t border-white/10 text-center text-sm font-bold text-slate-500">
        <p>© 2025 Dr. Neemz Dentistry | Built for Salem Patients</p>
      </div>
    </div>
    {/* Floating WhatsApp */}
    <a 
      href={`https://wa.me/${CONTACT_INFO.whatsapp}`} target="_blank" rel="noopener noreferrer"
      className="fixed bottom-10 right-10 bg-[#25D366] text-white p-5 rounded-full shadow-2xl hover:scale-110 transition-all z-50 flex items-center gap-3 group"
    >
      <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 font-black whitespace-nowrap">Ask Dr. Neemz</span>
      <MessageCircle size={32} />
    </a>
  </footer>
);

const App: React.FC = () => (
  <div className="min-h-screen">
    <Navbar />
    <Hero />
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <SectionHeading title="World-Class Services" subtitle="Specializations" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {SERVICES.map((s, idx) => (
            <div key={idx} className="bg-slate-50 p-10 rounded-[40px] hover:bg-green-600 group transition-all duration-500 hover:-translate-y-4">
              <div className="text-6xl mb-8 group-hover:scale-110 transition-transform">{s.icon}</div>
              <h3 className="text-2xl font-black mb-4 group-hover:text-white transition-colors">{s.title}</h3>
              <p className="text-slate-500 group-hover:text-green-50 leading-relaxed font-medium">{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
    <SmileGallery />
    <AppointmentSection />
    <AIChatAssistant />
    <section id="faq" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <SectionHeading title="Common Dental Queries" subtitle="FAQ" />
        <div className="max-w-3xl mx-auto space-y-4">
          {FAQS.map((f, i) => (
            <details key={i} className="group border border-slate-100 rounded-3xl overflow-hidden">
              <summary className="p-8 cursor-pointer list-none flex justify-between items-center bg-slate-50 font-black text-slate-800 group-open:bg-green-600 group-open:text-white transition-all">
                {f.question} <ChevronRight className="group-open:rotate-90 transition-transform" />
              </summary>
              <div className="p-8 text-slate-600 leading-relaxed font-medium bg-white">{f.answer}</div>
            </details>
          ))}
        </div>
      </div>
    </section>
    <Footer />
    <style>{`
      @keyframes bounce-slow { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-15px); } }
      .animate-bounce-slow { animation: bounce-slow 4s ease-in-out infinite; }
      @keyframes fade-in { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
      .animate-fade-in { animation: fade-in 0.5s ease-out forwards; }
    `}</style>
  </div>
);

export default App;
