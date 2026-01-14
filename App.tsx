
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
  Facebook
} from 'lucide-react';
import { SERVICES, FAQS, CONTACT_INFO, TESTIMONIALS } from './constants';
import { getDentalAdvice } from './services/geminiService';

// --- Reusable Components ---

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
            <h1 className="text-xl font-black tracking-tighter leading-none text-slate-900">DR. NEEMZ</h1>
            <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mt-0.5">Premier Dentistry Salem</p>
          </div>
        </div>

        <div className="hidden lg:flex items-center gap-10">
          {['About', 'Services', 'Gallery', 'Testimonials', 'FAQ'].map(item => (
            <a key={item} href={`#${item.toLowerCase()}`} className="text-sm font-bold text-slate-600 hover:text-green-600 transition-colors">
              {item}
            </a>
          ))}
          <a href="#book" className="bg-green-600 text-white px-7 py-3 rounded-full font-extrabold text-sm btn-hover">
            Book Appointment
          </a>
        </div>

        <button className="lg:hidden p-2 text-slate-900" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
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

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-56 md:pb-40 overflow-hidden gradient-hero">
      <div className="absolute top-0 right-0 w-2/3 h-full bg-green-50/50 -skew-x-12 -z-10 translate-x-1/4 rounded-[100px] hidden md:block"></div>
      
      <div className="container mx-auto px-6 relative z-10 flex flex-col lg:flex-row items-center gap-16">
        <div className="flex-1 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-5 py-2 rounded-full text-xs font-black uppercase tracking-widest mb-8 border border-green-200">
            <Award size={14} className="fill-green-700" />
            Voted #1 Dental Clinic in Salem 2024
          </div>
          
          <h1 className="text-4xl md:text-7xl font-black text-slate-900 leading-[1.1] mb-8">
            Expert Dental Care <br />
            <span className="text-green-600 relative">
              For Your Best Smile
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 318 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 10.5C65.5 2.5 252.5 -4.5 317 10.5" stroke="#22C55E" strokeWidth="3" strokeLinecap="round"/>
              </svg>
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-600 mb-12 max-w-xl mx-auto lg:mx-0 font-medium leading-relaxed">
            Pain-free treatments, international hygiene standards, and world-class specialists—all at Salem's premier family dental hub.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start">
            <a href="#book" className="bg-green-600 text-white px-10 py-5 rounded-2xl font-black text-lg flex items-center justify-center gap-3 btn-hover shadow-xl shadow-green-100">
              Get Free Consultation <ArrowRight size={20} />
            </a>
            <div className="bg-white border-2 border-slate-100 px-10 py-5 rounded-2xl font-black text-lg flex items-center justify-center gap-4 text-slate-800 shadow-sm">
              <Phone size={22} className="text-green-600" />
              {CONTACT_INFO.phone}
            </div>
          </div>

          <div className="mt-12 flex flex-wrap justify-center lg:justify-start gap-8 opacity-70">
            <div className="flex items-center gap-2 text-sm font-bold text-slate-500">
              <Check size={18} className="text-green-500" /> Painless RCT
            </div>
            <div className="flex items-center gap-2 text-sm font-bold text-slate-500">
              <Check size={18} className="text-green-500" /> ISO Certified
            </div>
            <div className="flex items-center gap-2 text-sm font-bold text-slate-500">
              <Check size={18} className="text-green-500" /> Easy EMI
            </div>
          </div>
        </div>

        <div className="flex-1 w-full max-w-2xl">
          <div className="relative">
            <div className="relative z-10 rounded-[50px] overflow-hidden border-[12px] border-white shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-700">
              <img 
                src="https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&q=80&w=800" 
                alt="Happy Patient at Dr Neemz Salem" 
                className="w-full h-auto aspect-[4/3] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-green-900/40 to-transparent"></div>
            </div>
            
            {/* Trust Cards */}
            <div className="absolute -bottom-10 -left-10 bg-white p-6 rounded-3xl shadow-2xl border border-slate-50 hidden md:block animate-bounce-slow">
              <div className="flex items-center gap-4 mb-3">
                <div className="flex -space-x-3">
                  {[1,2,3,4].map(i => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-200 overflow-hidden">
                      <img src={`https://i.pravatar.cc/150?u=${i}`} alt="Patient avatar" />
                    </div>
                  ))}
                </div>
                <div className="font-black text-green-600 text-xl">5K+</div>
              </div>
              <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">Smiles Transformed</p>
            </div>

            <div className="absolute -top-10 -right-10 bg-slate-900 text-white p-8 rounded-[40px] shadow-2xl hidden md:block">
              <div className="flex items-center gap-3 mb-2">
                <Star size={20} fill="#EAB308" className="text-yellow-400" />
                <span className="text-2xl font-black">4.9/5</span>
              </div>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Google Rating</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const FreeGuideSection = () => {
  const [email, setEmail] = useState("");
  const [downloading, setDownloading] = useState(false);

  const handleDownload = (e: React.FormEvent) => {
    e.preventDefault();
    setDownloading(true);
    setTimeout(() => {
      setDownloading(false);
      alert("Success! Your guide link has been sent to your email.");
      setEmail("");
    }, 1500);
  };

  return (
    <section className="py-20 bg-slate-900 overflow-hidden relative">
      <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center gap-16">
        <div className="flex-1">
          <span className="text-green-400 font-black text-sm uppercase tracking-widest mb-4 block">Free Resource</span>
          <h2 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight">
            How to Choose the Right <br />Braces in Salem (2025 Guide)
          </h2>
          <p className="text-slate-400 text-lg mb-8 max-w-lg">
            Don't waste money on wrong treatments. Download our expert-vetted guide on costs, types, and hidden facts about orthodontic treatments in Tamil Nadu.
          </p>
          
          <form onSubmit={handleDownload} className="flex flex-col sm:flex-row gap-4">
            <input 
              required
              type="email" 
              placeholder="Enter your email address" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 bg-white/10 border border-white/20 rounded-2xl px-6 py-4 text-white outline-none focus:ring-2 focus:ring-green-500 transition-all"
            />
            <button 
              type="submit" 
              disabled={downloading}
              className="bg-green-500 text-white px-8 py-4 rounded-2xl font-black flex items-center justify-center gap-2 hover:bg-green-400 transition-all"
            >
              {downloading ? 'Sending...' : <><Download size={20} /> Get Free PDF</>}
            </button>
          </form>
          <p className="text-slate-500 text-xs mt-4">We promise not to spam you. Privacy first.</p>
        </div>
        
        <div className="flex-1 relative">
           <div className="w-64 h-80 bg-white rounded-3xl p-6 shadow-2xl rotate-12 relative z-10 mx-auto">
             <div className="h-full border-4 border-slate-100 rounded-2xl flex flex-col p-4">
                <div className="bg-green-100 w-10 h-10 rounded-lg mb-4 flex items-center justify-center text-green-600 font-bold">N</div>
                <div className="h-4 w-32 bg-slate-100 rounded-full mb-2"></div>
                <div className="h-4 w-24 bg-slate-50 rounded-full mb-8"></div>
                <div className="h-32 w-full bg-slate-50 rounded-xl mb-4 flex items-center justify-center overflow-hidden">
                   <img src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=300" alt="Guide Cover" />
                </div>
                <div className="h-4 w-full bg-green-500 rounded-full"></div>
             </div>
           </div>
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-green-500/20 rounded-full blur-[100px]"></div>
        </div>
      </div>
    </section>
  );
};

const AppointmentSection = () => {
  const [formState, setFormState] = useState({ name: '', phone: '', service: 'Braces' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="book" className="py-24 bg-white relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row bg-slate-50 rounded-[60px] overflow-hidden shadow-2xl border border-slate-100">
          <div className="flex-1 p-10 md:p-20 bg-green-600 text-white relative overflow-hidden">
            <div className="relative z-10">
              <span className="bg-white/20 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest mb-6 inline-block">Flash Offer</span>
              <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight">
                Claim Your <br /><span className="text-slate-900">₹5000 OFF</span> Coupon
              </h2>
              <p className="text-green-50 text-lg mb-12 opacity-90 max-w-sm">
                Book your first consultation today and get an instant discount on Braces and Aligners. Limited slots available this week!
              </p>
              
              <div className="space-y-6">
                {[
                  { icon: <Clock />, label: "Appointments within 24 Hours" },
                  { icon: <Shield />, label: "Salem's Safest Dental Protocol" },
                  { icon: <Users />, label: "Over 5,000 Happy Smiles" }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-4 group">
                    <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors">
                      {item.icon}
                    </div>
                    <span className="font-bold">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-slate-900/5 rounded-full -translate-x-1/2 translate-y-1/2"></div>
          </div>

          <div className="flex-1 p-10 md:p-20 bg-white">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="text-sm font-black text-slate-500 uppercase tracking-widest mb-3 block">Patient Name</label>
                  <input 
                    required 
                    type="text" 
                    placeholder="Ex: Arun Kumar" 
                    className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl px-6 py-4 outline-none focus:border-green-500 focus:bg-white transition-all text-lg font-medium"
                    onChange={(e) => setFormState({...formState, name: e.target.value})}
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="text-sm font-black text-slate-500 uppercase tracking-widest mb-3 block">Phone Number</label>
                    <input 
                      required 
                      type="tel" 
                      placeholder="+91 00000 00000" 
                      className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl px-6 py-4 outline-none focus:border-green-500 focus:bg-white transition-all text-lg font-medium"
                      onChange={(e) => setFormState({...formState, phone: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="text-sm font-black text-slate-500 uppercase tracking-widest mb-3 block">Interested Service</label>
                    <select 
                      className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl px-6 py-4 outline-none focus:border-green-500 focus:bg-white transition-all text-lg font-bold text-slate-700"
                      onChange={(e) => setFormState({...formState, service: e.target.value})}
                    >
                      <option>Braces</option>
                      <option>Dental Implants</option>
                      <option>Root Canal</option>
                      <option>Full Smile Design</option>
                      <option>General Checkup</option>
                    </select>
                  </div>
                </div>
                <button type="submit" className="w-full bg-slate-900 text-white py-6 rounded-2xl font-black text-xl btn-hover shadow-2xl">
                  Claim Offer & Book Now
                </button>
                <div className="flex items-center justify-center gap-2 text-slate-400 text-xs font-bold uppercase tracking-widest">
                  <Shield size={14} className="text-green-500" /> Secure & Encrypted
                </div>
              </form>
            ) : (
              <div className="h-full flex flex-col items-center justify-center text-center animate-fade-in">
                <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center text-green-600 mb-8">
                  <Check size={48} />
                </div>
                <h3 className="text-3xl font-black text-slate-900 mb-4">You're All Set!</h3>
                <p className="text-slate-500 text-lg mb-8">
                  We've reserved your slot, {formState.name}. Dr. Neemz's office will call you within 15 minutes to confirm.
                </p>
                <a href={`https://wa.me/${CONTACT_INFO.whatsapp}`} className="flex items-center gap-2 text-green-600 font-bold hover:underline">
                  <MessageCircle size={20} /> Need immediate help? WhatsApp us
                </a>
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
        <div className="max-w-5xl mx-auto">
          <SectionHeading title="Ask Our AI Smile Assistant" subtitle="Instant Advice" />
          
          <div className="bg-white rounded-[40px] shadow-2xl border border-slate-100 overflow-hidden">
            <div className="p-8 md:p-12">
              <div className="flex flex-col md:flex-row gap-4 mb-10">
                <div className="flex-1 relative">
                  <input 
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Example: How much do invisible braces cost in Salem?" 
                    className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl px-8 py-5 outline-none focus:border-green-500 focus:bg-white transition-all text-lg font-medium"
                  />
                </div>
                <button 
                  onClick={handleAsk}
                  disabled={loading}
                  className="bg-green-600 text-white px-10 py-5 rounded-2xl font-black text-lg btn-hover disabled:bg-slate-300"
                >
                  {loading ? 'Consulting AI...' : 'Ask Expert AI'}
                </button>
              </div>

              {response ? (
                <div className="animate-fade-in">
                   <div className="bg-green-50 rounded-3xl p-8 border-l-8 border-green-500">
                     <div className="flex items-center gap-4 mb-4">
                       <div className="w-10 h-10 bg-green-200 rounded-full flex items-center justify-center text-green-700 font-bold">N</div>
                       <span className="font-black text-slate-800 uppercase tracking-widest text-xs">AI Dental Assistant</span>
                     </div>
                     <p className="text-slate-800 text-lg leading-relaxed font-medium mb-6">
                       {response}
                     </p>
                     <div className="flex flex-wrap gap-4">
                        <a href="#book" className="bg-slate-900 text-white px-6 py-3 rounded-xl font-bold text-sm">Book Evaluation</a>
                        <button onClick={() => setResponse("")} className="text-slate-500 font-bold text-sm hover:text-slate-800">Ask another question</button>
                     </div>
                   </div>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {[
                    "Is root canal painful?",
                    "Best braces for adults",
                    "Teeth whitening cost",
                    "How to fix gap in teeth"
                  ].map(q => (
                    <button 
                      key={q} 
                      onClick={() => { setQuery(q); handleAsk(); }}
                      className="p-4 bg-slate-50 border border-slate-100 rounded-2xl text-left text-sm font-bold text-slate-600 hover:border-green-300 hover:bg-green-50 transition-all flex items-center justify-between group"
                    >
                      {q} <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ServicesSection = () => (
  <section id="services" className="py-24 bg-white overflow-hidden">
    <div className="container mx-auto px-6">
      <SectionHeading title="World-Class Dental Tech" subtitle="Our Specializations" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {SERVICES.map((service, idx) => (
          <div key={idx} className="group bg-slate-50 border border-slate-100 p-10 rounded-[40px] hover:bg-green-600 transition-all duration-500 hover:-translate-y-4 shadow-sm hover:shadow-2xl hover:shadow-green-200">
            <div className="text-6xl mb-8 group-hover:scale-125 transition-transform duration-500 inline-block filter grayscale group-hover:grayscale-0">
              {service.icon}
            </div>
            <h3 className="text-2xl font-black text-slate-900 mb-5 group-hover:text-white transition-colors">{service.title}</h3>
            <p className="text-slate-500 leading-relaxed mb-8 group-hover:text-green-50 transition-colors font-medium">
              {service.description}
            </p>
            <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-green-600 shadow-xl opacity-0 group-hover:opacity-100 transition-all translate-y-4 group-hover:translate-y-0">
              <ArrowRight size={24} />
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer id="contact" className="bg-slate-900 text-white pt-24 pb-12">
    <div className="container mx-auto px-6">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-16 mb-20">
        <div className="col-span-1 lg:col-span-2">
          <div className="flex items-center gap-4 mb-8">
            <div className="bg-green-600 p-3 rounded-2xl">
              <span className="text-white font-black text-3xl">N</span>
            </div>
            <h2 className="text-3xl font-black tracking-tighter">DR. NEEMZ DENTISTRY</h2>
          </div>
          <p className="text-slate-400 text-lg max-w-md mb-10 leading-relaxed">
            Your trusted local partner for pain-free dentistry in Salem. Using international technology to bring world-class smiles home.
          </p>
          <div className="flex gap-4">
             {[Facebook, Instagram, MessageCircle].map((Icon, idx) => (
               <a key={idx} href="#" className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center hover:bg-green-600 hover:-translate-y-2 transition-all duration-300">
                 <Icon size={24} />
               </a>
             ))}
          </div>
        </div>

        <div>
          <h3 className="text-xl font-black mb-8 border-b border-white/10 pb-4">Salem Clinic</h3>
          <ul className="space-y-6">
             <li className="flex gap-4 group cursor-pointer">
               <MapPin className="text-green-500 flex-shrink-0 group-hover:scale-125 transition-transform" />
               <span className="text-slate-400 leading-relaxed font-medium group-hover:text-white transition-colors">
                 {CONTACT_INFO.address}
               </span>
             </li>
             <li className="flex gap-4 group cursor-pointer">
               <Phone className="text-green-500 flex-shrink-0 group-hover:scale-125 transition-transform" />
               <span className="text-slate-400 font-black group-hover:text-white transition-colors">{CONTACT_INFO.phone}</span>
             </li>
             <li className="flex gap-4 group cursor-pointer">
               <Clock className="text-green-500 flex-shrink-0 group-hover:scale-125 transition-transform" />
               <div className="text-slate-400 font-medium group-hover:text-white transition-colors">
                 <p>Mon - Sat: 10AM - 9PM</p>
                 <p>Sun: By Appointment</p>
               </div>
             </li>
          </ul>
        </div>

        <div>
           <h3 className="text-xl font-black mb-8 border-b border-white/10 pb-4">Patient Links</h3>
           <ul className="space-y-4">
             {['Patient Education', 'Case Studies', 'Pricing Guide', 'No-Cost EMI', 'Privacy Policy'].map(item => (
               <li key={item}>
                 <a href="#" className="text-slate-400 font-medium hover:text-green-500 transition-colors flex items-center justify-between group">
                   {item} <ChevronRight size={14} className="opacity-0 group-hover:opacity-100 transition-all" />
                 </a>
               </li>
             ))}
           </ul>
        </div>
      </div>
      
      <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-8 text-sm font-bold text-slate-500 tracking-widest uppercase">
        <p>© 2025 Dr. Neemz Dentistry | Built for Salem Patients</p>
        <div className="flex gap-8">
           <a href="#" className="hover:text-white transition-colors">Emergency? Call Now</a>
           <a href="#" className="hover:text-white transition-colors">Reviews</a>
        </div>
      </div>
    </div>

    {/* Sticky Mobile CTA */}
    <div className="lg:hidden fixed bottom-0 left-0 w-full bg-white p-4 flex gap-4 shadow-[0_-10px_40px_rgba(0,0,0,0.1)] z-[99]">
      <a href={`tel:${CONTACT_INFO.phone}`} className="flex-1 bg-slate-900 text-white py-4 rounded-xl flex items-center justify-center gap-2 font-black">
        <Phone size={20} /> Call Now
      </a>
      <a href="#book" className="flex-1 bg-green-600 text-white py-4 rounded-xl flex items-center justify-center gap-2 font-black">
        <Calendar size={20} /> Book Online
      </a>
    </div>

    {/* Floating WhatsApp */}
    <a 
      href={`https://wa.me/${CONTACT_INFO.whatsapp}`} 
      target="_blank" 
      rel="noopener noreferrer"
      className="fixed bottom-24 right-6 lg:bottom-10 lg:right-10 bg-[#25D366] text-white p-5 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all z-50 flex items-center gap-3 group"
    >
      <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-500 font-black px-0 group-hover:pl-2">Ask Dr. Neemz</span>
      <MessageCircle size={32} />
    </a>
  </footer>
);

const TestimonialWall = () => (
  <section id="testimonials" className="py-24 bg-slate-50 relative overflow-hidden">
    <div className="container mx-auto px-6">
      <SectionHeading title="Salem's Most Trusted Team" subtitle="Real Stories" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {TESTIMONIALS.map((t, idx) => (
          <div key={idx} className="bg-white p-10 rounded-[40px] shadow-xl border border-slate-100 relative group hover:-translate-y-2 transition-all duration-500">
            <div className="flex gap-1 mb-6">
              {[1,2,3,4,5].map(i => <Star key={i} size={16} fill="#22C55E" className="text-green-500" />)}
            </div>
            <p className="text-slate-700 italic text-lg leading-relaxed mb-8">"{t.text}"</p>
            <div className="flex items-center gap-4 border-t border-slate-50 pt-8">
              <div className="w-14 h-14 rounded-2xl bg-green-100 flex items-center justify-center text-green-700 font-black text-xl">
                {t.name.charAt(0)}
              </div>
              <div>
                <h4 className="font-black text-slate-900">{t.name}</h4>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">{t.role}</p>
              </div>
            </div>
            <div className="absolute top-10 right-10 text-slate-50 font-black text-8xl -z-1 opacity-10 group-hover:opacity-20 transition-opacity">“</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      
      {/* Logos Strip */}
      <div className="bg-slate-900 py-12">
        <div className="container mx-auto px-6 overflow-hidden">
           <div className="flex flex-wrap justify-center items-center gap-12 lg:gap-24 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
             <div className="flex items-center gap-2 text-white font-black text-xl italic"><Award className="text-green-500" /> Business Iconic</div>
             <div className="flex items-center gap-2 text-white font-black text-xl italic"><Shield className="text-green-500" /> ISO 9001:2015</div>
             <div className="flex items-center gap-2 text-white font-black text-xl italic"><Users className="text-green-500" /> 5000+ Patients</div>
             <div className="flex items-center gap-2 text-white font-black text-xl italic"><Star className="text-green-500" /> Google Top Rated</div>
           </div>
        </div>
      </div>

      <ServicesSection />
      <FreeGuideSection />
      <AppointmentSection />
      <AIChatAssistant />
      <TestimonialWall />

      {/* Local SEO Text Section (Hidden visually but available for crawlers) */}
      <section className="sr-only">
        <h2>Dr. Neemz Dentistry - Best Dentist in Salem</h2>
        <p>If you are looking for dental implants in Salem or the best braces cost in Tamil Nadu, our clinic at Peramanur Main Rd provides advanced invisible aligners, root canal treatments, and pediatric dentistry. We serve patients across Salem with emergency dental care and cosmetic makeovers.</p>
      </section>
      
      <Footer />

      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.5s ease-out forwards;
        }
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 4s ease-in-out infinite;
        }
        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </div>
  );
};

export default App;
