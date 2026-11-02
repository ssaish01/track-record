import React, { useState } from 'react';
import { PILLARS } from '../data/consultingData';
import { Pillar } from '../types/consulting';
import { CheckCircle2, ChevronRight, Sparkles, Target, TrendingUp, Layers, Award } from 'lucide-react';

export const PillarsSection: React.FC = () => {
  const [activePillarId, setActivePillarId] = useState<string>(PILLARS[0].id);

  const activePillar: Pillar = PILLARS.find((p) => p.id === activePillarId) || PILLARS[0];

  return (
    <section id="expertise" className="py-20 md:py-28 border-t border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-14 md:mb-18">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-sky-400 mb-3">
            <span>Capabilities & Focus Areas</span>
            <span aria-hidden="true" className="text-zinc-600">·</span>
            <span className="text-zinc-400">Strategic Advisory</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight leading-tight mb-4 [text-wrap:balance]">
            Core advisory capabilities built across sovereign government and enterprise frontiers.
          </h2>
          <p className="text-base text-zinc-400 leading-relaxed font-normal">
            Moving beyond abstract slides. I partner directly with institutional leaders and engineering teams to untangle operational gridlock, harden mission-critical architectures, and make complex enterprise workflows fast and dependable.
          </p>
        </div>

        {/* 2-Column Interactive Pillar Display */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Numbered Service Navigation */}
          <div className="lg:col-span-5 flex flex-col gap-3">
            {PILLARS.map((pillar) => {
              const isSelected = pillar.id === activePillarId;
              return (
                <button
                  key={pillar.id}
                  onClick={() => setActivePillarId(pillar.id)}
                  className={`text-left p-5 rounded-xl transition-all duration-200 border ${
                    isSelected
                      ? 'bg-zinc-900 border-white/20 shadow-lg text-white'
                      : 'bg-zinc-900/30 hover:bg-zinc-900/60 border-white/[0.05] text-zinc-400 hover:text-zinc-200'
                  }`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-3 mb-1.5">
                        <span className="font-mono text-xs font-semibold text-sky-400 tabular-nums">
                          {pillar.number}.
                        </span>
                        <h3 className="text-base font-semibold text-white tracking-tight">
                          {pillar.title}
                        </h3>
                      </div>
                      <p className="text-xs text-zinc-400 line-clamp-2 leading-relaxed">
                        {pillar.tagline}
                      </p>
                    </div>
                    <ChevronRight
                      className={`w-4 h-4 shrink-0 transition-transform ${
                        isSelected ? 'text-sky-400 translate-x-1' : 'text-zinc-600'
                      }`}
                    />
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Column: Deep-Dive Panel */}
          <div className="lg:col-span-7 bg-zinc-900/50 rounded-2xl border border-white/[0.08] p-6 sm:p-8 backdrop-blur-sm">
            <div className="flex items-center justify-between gap-4 pb-6 border-b border-white/[0.08] mb-6">
              <div>
                <span className="text-xs font-mono font-semibold text-sky-400 uppercase tracking-wider block mb-1">
                  Pillar {activePillar.number}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  {activePillar.title}
                </h3>
              </div>
              <div className="hidden sm:flex flex-col items-end">
                <span className="text-xs text-zinc-400">Benchmark Metric</span>
                <span className="text-sm font-semibold font-mono text-white text-right">
                  {activePillar.impactMetric}
                </span>
              </div>
            </div>

            <p className="text-sm sm:text-base text-zinc-300 leading-relaxed mb-8">
              {activePillar.description}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              {/* Core Levers */}
              <div>
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-4">
                  <Target className="w-3.5 h-3.5 text-sky-400" />
                  <span>Analytical Levers Tested</span>
                </div>
                <ul className="space-y-2.5">
                  {activePillar.coreLevers.map((lever, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-sky-400/80 mt-2 shrink-0" />
                      <span className="leading-snug">{lever}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Board Deliverables */}
              <div>
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-4">
                  <Layers className="w-3.5 h-3.5 text-sky-400" />
                  <span>Board Deliverables</span>
                </div>
                <ul className="space-y-2.5">
                  {activePillar.deliverables.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span className="leading-snug">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Bottom summary bar inside card */}
            <div className="pt-5 border-t border-white/[0.06] flex items-center justify-between text-xs text-zinc-400">
              <span>Standard Engagement Cadence: 8–16 Weeks</span>
              <a
                href="#engagements"
                className="text-sky-400 hover:text-sky-300 font-medium inline-flex items-center gap-1"
              >
                <span>View Related Case Studies</span>
                <ChevronRight className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
