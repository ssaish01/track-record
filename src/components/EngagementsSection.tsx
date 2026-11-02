import React, { useState } from 'react';
import { CASE_STUDIES } from '../data/consultingData';
import { CaseStudy } from '../types/consulting';
import { ArrowUpRight, ChevronRight, Landmark, Building2, Sparkles, Filter, Calendar } from 'lucide-react';
import { CaseStudyModal } from './CaseStudyModal';

export const EngagementsSection: React.FC = () => {
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<CaseStudy | null>(null);
  const [activeOrgFilter, setActiveOrgFilter] = useState<string>('All');

  const filterTabs = [
    { id: 'All', label: 'All Engagements', count: CASE_STUDIES.length },
    { id: 'Cabinet Secretariat', label: 'Cabinet Secretariat (Govt. of India)', count: 7 },
    { id: 'Tata Consultancy Services', label: 'TCS Enterprise IT', count: 1 },
    { id: 'DevRev Cloud', label: 'DevRev Cloud Product UX', count: 1 },
  ];

  const filteredStudies =
    activeOrgFilter === 'All'
      ? CASE_STUDIES
      : CASE_STUDIES.filter((study) => study.organization === activeOrgFilter);

  return (
    <section id="engagements" className="py-20 md:py-28 border-t border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-sky-400 mb-3">
              <span>Career Engagements & Impact</span>
              <span aria-hidden="true" className="text-zinc-600">·</span>
              <span className="text-zinc-400">MECE Problem-Solving in Practice</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight leading-tight [text-wrap:balance]">
              Engagements & Experience
            </h2>
          </div>
          <p className="text-sm text-zinc-400 max-w-sm">
            Track record spanning 7 inter-ministerial modernization workstreams at the Cabinet Secretariat, global enterprise IT consulting at TCSanddeveloper experience optimization at DevRev Cloud.
          </p>
        </div>

        {/* Filter Tabs (Interactive Segmented Control compliant with Anti-Pill §1.A) */}
        <div className="flex flex-wrap items-center gap-2 p-1.5 bg-zinc-900/80 rounded-xl border border-white/[0.08] mb-12 self-start">
          {filterTabs.map((tab) => {
            const isActive = activeOrgFilter === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveOrgFilter(tab.id)}
                className={`flex items-center gap-2 px-4 py-2 text-xs font-medium rounded-lg transition-all whitespace-nowrap ${
                  isActive
                    ? 'bg-zinc-800 text-white shadow-sm border border-white/10'
                    : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/40'
                }`}
              >
                <span>{tab.label}</span>
                <span
                  className={`text-[11px] font-mono px-1.5 py-0.2 rounded ${
                    isActive ? 'bg-sky-400/20 text-sky-300' : 'bg-zinc-800 text-zinc-500'
                  }`}
                >
                  {tab.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Engagements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredStudies.map((study) => (
            <div
              key={study.id}
              className="group flex flex-col bg-zinc-900/40 rounded-2xl border border-white/[0.08] hover:border-sky-500/30 overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-sky-500/5 hover:-translate-y-1"
            >
              {/* Media Container */}
              <div className="relative h-52 w-full overflow-hidden bg-zinc-950">
                <img
                  src={study.image}
                  alt={study.title}
                  className="w-full h-full object-cover filter brightness-[0.85] contrast-[1.05] group-hover:scale-105 transition-transform duration-500 ease-out"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent" />

                {/* Hero KPI Overlay */}
                <div className="absolute bottom-3 left-4 right-4 flex items-end justify-between">
                  <div>
                    <div className="text-xl sm:text-2xl font-bold font-mono text-white tracking-tight tabular-nums">
                      {study.heroStat}
                    </div>
                    <div className="text-[11px] font-medium text-sky-300 leading-tight">
                      {study.heroStatLabel}
                    </div>
                  </div>
                </div>

                {/* Initiative Code Badge */}
                {study.initiativeCode && (
                  <div className="absolute top-3 right-3 px-2 py-0.5 rounded bg-zinc-950/80 backdrop-blur-sm border border-white/10 text-[10px] font-mono text-zinc-300">
                    {study.initiativeCode}
                  </div>
                )}
              </div>

              {/* Card Body */}
              <div className="p-6 flex flex-col flex-grow justify-between">
                <div>
                  {/* Clean unboxed metadata (anti-pill compliance) */}
                  <div className="flex items-center gap-2 text-xs text-zinc-400 mb-2 font-medium">
                    <span className="text-sky-400 font-semibold">{study.organization}</span>
                    <span aria-hidden="true" className="text-zinc-600">·</span>
                    <span className="truncate">{study.timeframe}</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-base sm:text-lg font-bold text-white tracking-tight mb-2.5 leading-snug group-hover:text-sky-200 transition-colors">
                    {study.title}
                  </h3>

                  {/* Focus Area Subtitle */}
                  {study.focusArea && (
                    <div className="text-xs text-zinc-400 font-mono mb-3 line-clamp-1 text-sky-300/80">
                      {study.focusArea}
                    </div>
                  )}

                  {/* Summary */}
                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mb-6 line-clamp-3">
                    {study.summary}
                  </p>

                  {/* Consulting Framework Snapshot */}
                  <div className="space-y-2 pt-4 border-t border-white/[0.06] mb-6">
                    <div className="text-[11px] font-mono text-zinc-400">
                      <span className="text-zinc-300 font-semibold">Key Methodology: </span>
                      {study.hypothesis.frameworkUsed}
                    </div>
                    <div className="text-[11px] font-mono text-zinc-400">
                      <span className="text-zinc-300 font-semibold">Primary Metric: </span>
                      {study.impact.primaryKpis[0].metric} {study.impact.primaryKpis[0].label}
                    </div>
                  </div>
                </div>

                {/* Interactive Trigger Button */}
                <button
                  onClick={() => setSelectedCaseStudy(study)}
                  className="w-full flex items-center justify-between px-4 py-2.5 text-xs font-semibold text-white bg-zinc-800/80 hover:bg-zinc-700/80 border border-white/10 rounded-lg transition-all group/btn"
                >
                  <span>Deconstruct Engagement & Framework</span>
                  <ArrowUpRight className="w-4 h-4 text-sky-400 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Deep-Dive Modal */}
      {selectedCaseStudy && (
        <CaseStudyModal
          study={selectedCaseStudy}
          onClose={() => setSelectedCaseStudy(null)}
        />
      )}
    </section>
  );
};
