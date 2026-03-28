"use client";

import { SectionWrapper } from '@/components/SectionWrapper';
import { GlowCard } from '@/components/GlowCard';
import { NeonButton } from '@/components/NeonButton';

export default function Contact() {
  return (
    <div className="flex flex-col w-full bg-[#010410] pt-20">
      
      <SectionWrapper className="min-h-screen flex items-center justify-center">
         <div className="w-full max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-40 items-center">
               
               {/* Left Content */}
               <div className="space-y-16">
                  <div className="space-y-10">
                    <h2 className="text-cyan-400 font-black tracking-[0.5em] uppercase text-[10px] italic animate-pulse underline underline-offset-8">Global Node Support</h2>
                    <h1 className="text-7xl md:text-[11rem] font-black text-white tracking-[-0.05em] uppercase italic leading-[0.8] mix-blend-plus-lighter drop-shadow-[0_0_50px_rgba(255,255,255,0.3)]">
                      Join <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-white to-pink-500">Us</span>
                    </h1>
                    <p className="text-2xl text-white/40 font-light leading-relaxed max-w-md tracking-tight italic">
                      Institutional inquiries, clinical node setup, or sovereign data support. Our network is open for transmission.
                    </p>
                  </div>
                  
                  <div className="space-y-8 pt-16 border-t border-white/[0.03]">
                     <div className="flex gap-10 items-center group">
                        <div className="w-16 h-16 rounded-2xl bg-white/[0.02] border border-white/5 flex items-center justify-center text-3xl group-hover:scale-110 transition-transform">📧</div>
                        <div>
                           <div className="text-white font-black tracking-[0.4em] uppercase text-[10px] italic mb-1">Company Email</div>
                           <p className="text-white/40 text-lg font-bold">memorymarblesapp@gmail.com</p>
                        </div>
                     </div>
                     <div className="flex gap-10 items-center group">
                        <div className="w-16 h-16 rounded-2xl bg-white/[0.02] border border-white/5 flex items-center justify-center text-3xl group-hover:scale-110 transition-transform">🌐</div>
                        <div>
                           <div className="text-white font-black tracking-[0.4em] uppercase text-[10px] italic mb-1">Institutional Hubs</div>
                           <p className="text-white/40 text-lg font-bold italic uppercase tracking-tighter">SF • TOKYO • LONDON</p>
                        </div>
                     </div>
                  </div>
               </div>

               {/* Right Card / Form */}
               <GlowCard color="purple" className="p-16 bg-white/[0.01] border-white/5 shadow-[0_0_120px_rgba(147,51,234,0.08)]">
                  <h3 className="text-4xl font-black text-white uppercase italic tracking-tighter mb-12 mix-blend-plus-lighter">Contact Us</h3>
                  <form className="space-y-8">
                     <div className="space-y-6">
                        <input type="text" placeholder="Full Name" className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-8 py-6 text-white focus:border-cyan-400 outline-none transition-all font-bold placeholder:text-white/20 uppercase text-xs tracking-widest" />
                        <input type="email" placeholder="Email Address" className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-8 py-6 text-white focus:border-cyan-400 outline-none transition-all font-bold placeholder:text-white/20 uppercase text-xs tracking-widest" />
                        <div className="relative group/select">
                           <select className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-8 py-6 text-white-600 font-bold uppercase text-[10px] tracking-widest outline-none appearance-none cursor-pointer">
                              <option className="bg-[#010410]">Institutional Inquiry</option>
                              <option className="bg-[#010410]">Clinical Partnership</option>
                              <option className="bg-[#010410]">Technical Support</option>
                              <option className="bg-[#010410]">Investment Relations</option>
                           </select>
                           <div className="absolute right-8 top-1/2 -translate-y-1/2 pointer-events-none text-white/20 group-hover/select:text-white transition-colors">▼</div>
                        </div>
                        <textarea placeholder="Your Message..." className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-8 py-6 text-white h-48 focus:border-cyan-400 outline-none transition-all font-bold placeholder:text-white/20 uppercase text-xs tracking-widest resize-none" />
                     </div>
                     <NeonButton color="gradient" className="w-full !py-7 !text-2xl shadow-[0_30px_60px_-15px_rgba(147,51,234,0.3)]">Send Message</NeonButton>
                  </form>
               </GlowCard>

            </div>
         </div>
      </SectionWrapper>
      
    </div>
  );
}
