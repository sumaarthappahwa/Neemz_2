
import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  MessageCircle, 
  ChevronRight, 
  CheckCircle2, 
  Star,
  ArrowRight,
  ShieldCheck,
  MapPin,
  Clock,
  Menu,
  X,
  Download,
  Award,
  Users,
  Calendar,
  Sparkles,
  ChevronDown
} from 'lucide-react';
import { SERVICES, FAQS, CONTACT_INFO, TESTIMONIALS } from './constants.tsx';
import { getDentalAdvice } from './services/geminiService.ts';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handle = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handle);
    return () => window.removeEventListener('scroll', handle);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-lg py-3' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="bg-emerald-600 p-2 rounded-lg">
            <Sparkles className="text-white" size={20} />
          </div>
          <div>
            <h1 className="text-xl font-extrabold tracking-tight text-slate-900 leading-none">DR. NEEMZ</h1>
            <p className="text-[10px] font-bold text-emerald-600 uppercase tracking-widest mt-0.5">Premier Dentistry</p>
          </div>
        </div>
        
        <div className="hidden lg:flex items-center gap-8">
          {['Services', 'Gallery', 'Testimonials', 'FAQ'].map(item => (
            <a key={item} href={`#${item.toLowerCase()}`} className="text-sm font-bold text-slate-600 hover:text-emerald-600 transition-colors">
              {item}
            </a>
          ))}
          <a href="#book" className="bg-slate-900 text-white px-6 py-2.5 rounded-full font-bold text-sm hover:bg-emerald-600 transition-all">
            Book Free Visit
          </a>
        </div>
        
        <button className="lg:hidden p-2"><Menu size={24} /></button>
      </div>
    </nav>
  );
};

const Hero = () => (
  <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden gradient-bg">
    <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center gap-12">
      <div className="flex-1 text-center lg:text-left z-10">
        <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-700 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-6 border border-emerald-100">
          <Award size={14} /> Voted Salem's #1 Dental Clinic 2024
        </div>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-slate-900 leading-[1.1] mb-6">
          A World-Class Smile <br />
          <span className="text-emerald-600">Right Here in Salem</span>
        </h1>
        <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-medium">
          Experience pain-free dentistry with international standards. Specializing in Braces, Implants, and Total Smile Makeovers.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
          <a href="#book" className="bg-emerald-600 text-white px-8 py-4 rounded-2xl font-black text-lg flex items-center justify-center gap-2 btn-primary shadow-xl shadow-emerald-200">
            Get Free Consultation <ArrowRight size={20} />
          </a>
          <div className="flex items-center justify-center gap-4 px-8 py-4 bg-white rounded-2xl border border-slate-100 shadow-sm">
            <div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center">
              <Phone size={20} className="text-emerald-600" />
            </div>
            <span className="font-bold text-slate-800">{CONTACT_INFO.phone}</span>
          </div>
        </div>
        
        <div className="mt-12 flex items-center justify-center lg:justify-start gap-8">
          <div className="flex flex-col">
            <span className="text-2xl font-black text-slate-900">5k+</span>
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Happy Patients</span>
          </div>
          <div className="h-8 w-px bg-slate-200"></div>
          <div className="flex flex-col">
            <div className="flex items-center gap-1">
              <span className="text-2xl font-black text-slate-900">4.9</span>
              <Star size={16} fill="#fbbf24" className="text-yellow-400" />
            </div>
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Google Rating</span>
          </div>
        </div>
      </div>
      
      <div className="flex-1 relative">
        <div className="relative rounded-[40px] overflow-hidden border-[10px] border-white shadow-2xl rotate-2">
          <img 
            src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=1200" 
            alt="Modern Dental Clinic" 
            className="w-full h-auto aspect-square object-cover"
          />
        </div>
        <div className="absolute -bottom-6 -right-6 bg-slate-900 text-white p-6 rounded-3xl shadow-2xl hidden md:block">
          <p className="text-emerald-400 font-black text-2xl">Flat ₹5000 OFF</p>
          <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-1">On Braces & Aligners</p>
        </div>
      </div>
    </div>
  </section>
);

const FeaturesStrip = () => (
  <div className="bg-slate-900 py-10 overflow-hidden">
    <div className="container mx-auto px-6">
      <div className="flex flex-wrap justify-center items-center gap-8 md:gap-20 opacity-60">
        {['ISO Certified', 'International Tech', 'Painless Procedures', 'EMI Options'].map((f, i) => (
          <div key={i} className="flex items-center gap-3 text-white font-black text-sm uppercase tracking-widest italic">
            <CheckCircle2 size={18} className="text-emerald-500" /> {f}
          </div>
        ))}
      </div>
    </div>
  </div>
);

const LeadMagnet = () => (
  <section className="py-24 bg-white relative">
    <div className="container mx-auto px-6">
      <div className="max-w-6xl mx-auto bg-emerald-600 rounded-[50px] p-10 md:p-20 flex flex-col lg:flex-row items-center gap-12 relative overflow-hidden">
        <div className="relative z-10 flex-1">
          <span className="bg-white/20 text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6 inline-block">Free Gift</span>
          <h2 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight">
            How to Choose the <br />Perfect Braces in 2025
          </h2>
          <p className="text-emerald-50 text-lg mb-8 max-w-md opacity-90">
            Don't overpay for dental work. Download our exclusive guide to costs, types, and the secret to a pain-free journey in Salem.
          </p>
          <form className="flex flex-col sm:flex-row gap-4" onSubmit={e => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-1 bg-white/10 border border-white/20 rounded-2xl px-6 py-4 text-white placeholder:text-emerald-100 outline-none focus:ring-2 focus:ring-white transition-all"
            />
            <button className="bg-white text-emerald-600 px-8 py-4 rounded-2xl font-black flex items-center justify-center gap-2 hover:bg-slate-900 hover:text-white transition-all">
              <Download size={20} /> Get Free Guide
            </button>
          </form>
          <p className="text-emerald-100/60 text-xs mt-4">Privacy first. We hate spam as much as you do.</p>
        </div>
        <div className="flex-1 hidden lg:block">
          <div className="w-64 h-80 bg-white rounded-3xl p-6 shadow-2xl rotate-6 mx-auto">
             <div className="h-full border-4 border-slate-50 rounded-2xl flex flex-col items-center justify-center p-4 text-center">
                <div className="w-12 h-12 bg-emerald-100 rounded-full mb-4 flex items-center justify-center">
                   <Download className="text-emerald-600" />
                </div>
                <div className="h-2 w-20 bg-slate-100 rounded-full mb-2"></div>
                <div className="h-2 w-16 bg-slate-50 rounded-full mb-8"></div>
                <div className="font-black text-slate-800 text-sm">THE COMPLETE SMILE GUIDE</div>
             </div>
          </div>
        </div>
        {/* Abstract BG Decor */}
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
      </div>
    </div>
  </section>
);

const AppointmentForm = () => {
  const [sent, setSent] = useState(false);
  return (
    <section id="book" className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto flex flex-col lg:flex-row bg-white rounded-[40px] shadow-2xl overflow-hidden">
          <div className="flex-1 bg-slate-900 p-12 text-white flex flex-col justify-center">
            <h2 className="text-3xl md:text-4xl font-black mb-6">Book Your <br /><span className="text-emerald-500">Free Assessment</span></h2>
            <p className="text-slate-400 mb-10 leading-relaxed font-medium">Get a detailed diagnosis from Salem's top specialists. No hidden costs, just expert advice.</p>
            <div className="space-y-6">
              {[
                { label: "Painless RCT Specialist", icon: <CheckCircle2 className="text-emerald-500" /> },
                { label: "Digital Smile Design", icon: <CheckCircle2 className="text-emerald-500" /> },
                { label: "Easy Monthly EMIs", icon: <CheckCircle2 className="text-emerald-500" /> }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 font-bold">
                  {item.icon} {item.label}
                </div>
              ))}
            </div>
          </div>
          <div className="flex-1 p-12">
            {!sent ? (
              <form className="space-y-6" onSubmit={e => { e.preventDefault(); setSent(true); }}>
                <div>
                  <label className="text-xs font-black text-slate-400 uppercase tracking-widest mb-2 block">Your Full Name</label>
                  <input required className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl px-6 py-4 outline-none focus:border-emerald-500 transition-all font-bold" placeholder="Ex: Arun Kumar" />
                </div>
                <div>
                  <label className="text-xs font-black text-slate-400 uppercase tracking-widest mb-2 block">Phone Number</label>
                  <input required type="tel" className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl px-6 py-4 outline-none focus:border-emerald-500 transition-all font-bold" placeholder="+91" />
                </div>
                <div>
                  <label className="text-xs font-black text-slate-400 uppercase tracking-widest mb-2 block">Interest Service</label>
                  <select className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl px-6 py-4 outline-none focus:border-emerald-500 transition-all font-black text-slate-700">
                    <option>Braces & Aligners</option>
                    <option>Dental Implants</option>
                    <option>Painless Root Canal</option>
                    <option>Smile Makeover</option>
                  </select>
                </div>
                <button type="submit" className="w-full bg-emerald-600 text-white py-6 rounded-2xl font-black text-xl hover:bg-emerald-700 transition-all shadow-xl shadow-emerald-100">
                  Claim Offer & Book Now
                </button>
              </form>
            ) : (
              <div className="h-full flex flex-col items-center justify-center text-center animate-fade-in">
                 <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 mb-6">
                    <CheckCircle2 size={40} />
                 </div>
                 <h3 className="text-2xl font-black mb-2">Offer Claimed!</h3>
                 <p className="text-slate-500">We'll call you in 15 mins to confirm your slot.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

const AIChat = () => {
  const [q, setQ] = useState("");
  const [ans, setAns] = useState("");
  const [loading, setLoading] = useState(false);

  const ask = async () => {
    if (!q) return;
    setLoading(true);
    const res = await getDentalAdvice(q);
    setAns(res || "I'm sorry, I'm having a technical glitch. Please call us!");
    setLoading(false);
  };

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-emerald-600 font-black text-sm uppercase tracking-widest mb-3 block">Expert AI Assistant</span>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900">Instant Dental Advice</h2>
        </div>
        <div className="max-w-4xl mx-auto bg-slate-50 rounded-[40px] p-8 md:p-12 border border-slate-200 shadow-sm">
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <input 
              value={q} onChange={e => setQ(e.target.value)}
              placeholder="Ex: Do invisible braces hurt?" 
              className="flex-1 bg-white border-2 border-slate-100 rounded-2xl px-8 py-5 outline-none focus:border-emerald-500 transition-all text-lg font-medium shadow-inner"
            />
            <button 
              onClick={ask} disabled={loading}
              className="bg-slate-900 text-white px-10 py-5 rounded-2xl font-black text-lg hover:bg-emerald-600 transition-all disabled:opacity-50"
            >
              {loading ? 'Consulting...' : 'Ask AI'}
            </button>
          </div>
          {ans && (
            <div className="bg-white p-8 rounded-3xl border border-emerald-100 shadow-xl animate-fade-in">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center text-white font-bold text-xs italic">N</div>
                <span className="font-black text-xs text-slate-400 uppercase tracking-widest">Neemz AI Expert</span>
              </div>
              <p className="text-slate-800 text-lg leading-relaxed font-medium">{ans}</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="bg-slate-950 text-white pt-24 pb-12">
    <div className="container mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
        <div className="col-span-1 md:col-span-2">
          <div className="flex items-center gap-3 mb-8">
            <div className="bg-emerald-600 p-2 rounded-lg"><Sparkles size={24} /></div>
            <h2 className="text-3xl font-black tracking-tighter">DR. NEEMZ</h2>
          </div>
          <p className="text-slate-400 text-lg max-w-md leading-relaxed mb-10">
            Pioneering digital dentistry in Salem. Our mission is to provide premium dental care that is accessible, painless, and world-class.
          </p>
          <div className="flex gap-4">
            <a href={`tel:${CONTACT_INFO.phone}`} className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center hover:bg-emerald-600 transition-all">
              <Phone size={24} />
            </a>
            <a href={`https://wa.me/${CONTACT_INFO.whatsapp}`} className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center hover:bg-emerald-600 transition-all">
              <MessageCircle size={24} />
            </a>
          </div>
        </div>
        <div>
          <h3 className="text-xl font-black mb-8 border-b border-white/10 pb-4">Our Clinic</h3>
          <ul className="space-y-6 text-slate-400 font-medium">
            <li className="flex gap-4"><MapPin className="text-emerald-500 shrink-0" /> {CONTACT_INFO.address}</li>
            <li className="flex gap-4"><Clock className="text-emerald-500 shrink-0" /> 10:00 AM - 9:00 PM</li>
          </ul>
        </div>
        <div>
           <h3 className="text-xl font-black mb-8 border-b border-white/10 pb-4">Quick Links</h3>
           <ul className="space-y-4 text-slate-400 font-bold">
             <li><a href="#services" className="hover:text-emerald-500">Service Guide</a></li>
             <li><a href="#book" className="hover:text-emerald-500">Book Appointment</a></li>
             <li><a href="#" className="hover:text-emerald-500">Google Reviews</a></li>
           </ul>
        </div>
      </div>
      <div className="pt-12 border-t border-white/5 text-center text-slate-500 font-bold text-xs uppercase tracking-[0.3em]">
        © 2025 Dr. Neemz Dentistry Salem | Patient First Care
      </div>
    </div>

    {/* Mobile CTA Strip */}
    <div className="lg:hidden fixed bottom-0 left-0 w-full bg-white p-4 flex gap-4 shadow-[0_-10px_40px_rgba(0,0,0,0.1)] z-50">
      <a href={`tel:${CONTACT_INFO.phone}`} className="flex-1 bg-slate-900 text-white py-4 rounded-xl flex items-center justify-center gap-2 font-black text-sm">
        <Phone size={18} /> CALL
      </a>
      <a href={`https://wa.me/${CONTACT_INFO.whatsapp}`} className="flex-1 bg-[#25D366] text-white py-4 rounded-xl flex items-center justify-center gap-2 font-black text-sm">
        <MessageCircle size={18} /> WHATSAPP
      </a>
    </div>
  </footer>
);

const App = () => (
  <div className="min-h-screen">
    <Navbar />
    <Hero />
    <FeaturesStrip />
    
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-emerald-600 font-black text-sm uppercase tracking-widest mb-3 block">Expert Care</span>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900">What We Do Best</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((s, i) => (
            <div key={i} className="group p-10 rounded-[40px] bg-slate-50 border border-slate-100 hover:bg-emerald-600 transition-all duration-500 hover:-translate-y-2">
              <div className="text-5xl mb-8 transition-transform duration-500 group-hover:scale-110 inline-block">{s.icon}</div>
              <h3 className="text-2xl font-black mb-4 group-hover:text-white transition-colors">{s.title}</h3>
              <p className="text-slate-500 font-medium leading-relaxed group-hover:text-emerald-50 transition-colors">{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <LeadMagnet />
    <AppointmentForm />
    <AIChat />
    
    <section id="faq" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-emerald-600 font-black text-sm uppercase tracking-widest mb-3 block">Common Questions</span>
            <h2 className="text-3xl font-black text-slate-900">Everything You Need to Know</h2>
          </div>
          <div className="space-y-4">
            {FAQS.map((f, i) => (
              <details key={i} className="group glass-card rounded-3xl overflow-hidden border border-slate-100">
                <summary className="flex justify-between items-center p-8 font-black text-lg cursor-pointer list-none text-slate-800">
                  {f.question} <ChevronDown size={20} className="text-slate-400 transition-transform duration-300" />
                </summary>
                <div className="px-8 pb-8 text-slate-500 font-medium leading-relaxed">{f.answer}</div>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
    
    <Footer />
  </div>
);

export default App;
