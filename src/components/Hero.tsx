import React from 'react';
import { ArrowRight, FileText, ChevronRight, ShieldCheck, TrendingUp, Globe2, Layers, Landmark } from 'lucide-react';
import { HERO_IMAGE } from '../data/consultingData';

interface HeroProps {
  onOpenCv: () => void;
  onOpenSchedule: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenCv, onOpenSchedule }) => {
  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
      {/* Soft architectural radial glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-sky-500/[0.04] blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute top-10 right-10 w-[450px] h-[300px] bg-indigo-500/[0.03] blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        {/* Split Screen Hero Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center mb-16 md:mb-20">
          {/* Left Column: Typographic Hierarchy */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Unboxed metadata kicker */}
            <div className="flex flex-wrap items-center gap-2 text-xs font-semibold tracking-widest uppercase text-zinc-400 mb-5">
              <span className="text-sky-400">Cabinet Secretariat (Govt. of India)</span>
              <span aria-hidden="true" className="text-zinc-600">·</span>
              <span>TCS Enterprise IT</span>
              <span aria-hidden="true" className="text-zinc-600">·</span>
              <span>DevRev Cloud Product Design</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-bold text-white tracking-tight leading-[1.12] mb-6 [text-wrap:balance]">
              Solving complex operational bottlenecks across sovereign infrastructure, enterprise ITanddigital products.
            </h1>

            {/* Lead Copy */}
            <p className="text-base sm:text-lg text-zinc-400 leading-relaxed font-normal mb-8 max-w-2xl">
              Technology specialist with experience contributing to public sector digital initiatives, enterprise IT delivery workflowsandSaaS product optimization. Focused on structured problem-solving, data pipelinesandimproving system efficiency."
            </p>

            {/* Dual CTAs & Advisory Focus */}
            <div className="flex flex-wrap items-center gap-4 mb-8">
              <a
                href="#engagements"
                className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-zinc-950 bg-white hover:bg-zinc-200 active:bg-zinc-300 rounded-lg transition-all shadow-md shadow-white/5 group"
              >
                <span>Explore Engagements & Experience</span>
                <ArrowRight className="w-4 h-4 text-zinc-900 group-hover:translate-x-0.5 transition-transform" />
              </a>

              <button
                onClick={onOpenCv}
                className="inline-flex items-center gap-2 px-5 py-3.5 text-sm font-medium text-zinc-300 hover:text-white bg-zinc-900/80 hover:bg-zinc-800 border border-white/10 rounded-lg transition-all"
              >
                <FileText className="w-4 h-4 text-sky-400" />
                <span>Executive CV & Track Record</span>
              </button>
            </div>

            {/* Trust markers / Engagement verticals */}
            <div className="pt-6 border-t border-white/[0.08] flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-zinc-500">
              <span className="text-zinc-400 font-medium">Core Practice Domains:</span>
              <span>Public Sector Strategy & Policy</span>
              <span aria-hidden="true">·</span>
              <span>IT Operational Restructuring</span>
              <span aria-hidden="true">·</span>
              <span>Customer Journey Mapping</span>
            </div>
          </div>

          {/* Right Column: High-Impact Visual Container */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-white/[0.1] bg-zinc-900/60 shadow-2xl group">
              <img
                src={HERO_IMAGE}
                alt="Executive Strategy Advisory Boardroom"
                className="w-full h-[360px] sm:h-[420px] lg:h-[480px] object-cover filter brightness-[0.92] contrast-[1.05] group-hover:scale-[1.02] transition-transform duration-700 ease-out"
                referrerPolicy="no-referrer"
                loading="eager"
              />
              {/* Subtle gradient scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-transparent to-transparent opacity-80" />
              
              {/* Overlay Briefing Card */}
              <div className="absolute bottom-5 left-5 right-5 p-4 rounded-xl bg-zinc-950/80 backdrop-blur-md border border-white/10">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="text-[11px] font-semibold text-sky-400 uppercase tracking-wider mb-0.5">
                      Advisory Focus
                    </div>
                    <div className="text-sm font-semibold text-white">
                      Digital Transformation & Institutional Execution
                    </div>
                    <div className="text-xs text-zinc-400 mt-0.5">
                      Apex Government · Enterprise Systems · Product Architecture
                    </div>
                  </div>
                  <button
                    onClick={onOpenSchedule}
                    className="shrink-0 p-2 text-xs font-medium text-white bg-white/10 hover:bg-white/20 rounded-md transition-colors"
                    title="Request Executive Briefing"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Full-width KPI / Metrics Strip (Placed below the split as per Portfolio §2.B) */}
        <div className="w-full rounded-2xl bg-zinc-900/40 border border-white/[0.08] backdrop-blur-sm p-6 sm:p-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-white/[0.06]">
            {/* Metric 1 */}
            <div className="pt-4 sm:pt-0 sm:px-4 first:pt-0 first:px-0">
              <div className="flex items-center gap-2 text-zinc-400 text-xs font-medium mb-1.5">
                <Landmark className="w-3.5 h-3.5 text-sky-400" />
                <span>Cabinet Secretariat (3 Yrs)</span>
              </div>
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold font-mono text-white tracking-tight tabular-nums mb-1">
                7 Programs
              </div>
              <div className="text-xs text-zinc-400 leading-snug">
                Sovereign AI (GovAI-RAG), ZK-cryptography, edge mesh & national APIs
              </div>
            </div>

            {/* Metric 2 */}
            <div className="pt-4 sm:pt-0 sm:px-4">
              <div className="flex items-center gap-2 text-zinc-400 text-xs font-medium mb-1.5">
                <TrendingUp className="w-3.5 h-3.5 text-sky-400" />
                <span>Enterprise Delivery (TCS)</span>
              </div>
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold font-mono text-white tracking-tight tabular-nums mb-1">
                +32%
              </div>
              <div className="text-xs text-zinc-400 leading-snug">
                Service delivery throughput & SLA operational restructuring
              </div>
            </div>

            {/* Metric 3 */}
            <div className="pt-4 sm:pt-0 sm:px-4">
              <div className="flex items-center gap-2 text-zinc-400 text-xs font-medium mb-1.5">
                <Layers className="w-3.5 h-3.5 text-sky-400" />
                <span>Product Optimization (DevRev Cloud)</span>
              </div>
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold font-mono text-white tracking-tight tabular-nums mb-1">
                -55%
              </div>
              <div className="text-xs text-zinc-400 leading-snug">
                Journey click path reduction & friction elimination
              </div>
            </div>

            {/* Metric 4 */}
            <div className="pt-4 sm:pt-0 sm:px-4">
              <div className="flex items-center gap-2 text-zinc-400 text-xs font-medium mb-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-sky-400" />
                <span>Operational Rigor</span>
              </div>
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold font-mono text-white tracking-tight tabular-nums mb-1">
                MECE
              </div>
              <div className="text-xs text-zinc-400 leading-snug">
                End-to-end problem decomposition from policy to UI adoption
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
