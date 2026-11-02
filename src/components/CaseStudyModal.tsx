import React, { useEffect } from 'react';
import { CaseStudy } from '../types/consulting';
import { X, CheckCircle2, TrendingUp, Target, ArrowRight, Layers, Quote } from 'lucide-react';

interface CaseStudyModalProps {
  study: CaseStudy;
  onClose: () => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({ study, onClose }) => {
  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto animate-fadeIn">
      <div
        className="relative w-full max-w-4xl bg-[#0e0e11] border border-white/10 rounded-2xl shadow-2xl overflow-hidden my-8 max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="p-6 sm:p-8 border-b border-white/[0.08] flex items-start justify-between gap-6 shrink-0 bg-zinc-950/70">
          <div>
            <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-sky-400 tracking-wider uppercase mb-2">
              {study.initiativeCode && (
                <>
                  <span className="font-mono text-sky-300">{study.initiativeCode}</span>
                  <span aria-hidden="true" className="text-zinc-600">·</span>
                </>
              )}
              <span>{study.organization}</span>
              <span aria-hidden="true" className="text-zinc-600">·</span>
              <span>{study.clientVertical}</span>
              <span aria-hidden="true" className="text-zinc-600">·</span>
              <span className="text-zinc-400">{study.timeframe}</span>
            </div>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight">
              {study.title}
            </h2>
            {study.focusArea && (
              <div className="text-xs text-sky-300/90 font-mono mt-1.5">
                Strategic Focus: {study.focusArea}
              </div>
            )}
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-white transition-colors border border-white/10 shrink-0"
            aria-label="Close case study dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-10 text-zinc-300">
          {/* Executive Summary & Image banner */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            <div className="md:col-span-7">
              <div className="text-xs font-mono uppercase tracking-wider text-sky-400 mb-2">
                Executive Engagement Summary
              </div>
              <p className="text-sm sm:text-base text-zinc-300 leading-relaxed font-normal">
                {study.summary}
              </p>
            </div>
            <div className="md:col-span-5 h-40 sm:h-48 rounded-xl overflow-hidden border border-white/10">
              <img
                src={study.image}
                alt={study.title}
                className="w-full h-full object-cover filter brightness-90"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          {/* 1. The Client / Context */}
          <div className="p-6 rounded-xl bg-zinc-900/40 border border-white/[0.06] space-y-4">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-sky-400">
              <span className="font-mono">01.</span>
              <span>The Client & Macro Context</span>
            </div>
            <p className="text-sm text-zinc-300 leading-relaxed">
              {study.context.macroChallenge}
            </p>
            <div className="pt-3 border-t border-white/[0.06] text-xs text-zinc-400 space-y-2">
              <div>
                <strong className="text-zinc-300">Baseline Operating State: </strong>
                {study.context.baselineState}
              </div>
              <div className="flex flex-wrap items-center gap-2 pt-1">
                <strong className="text-zinc-300">Core Governance Stakeholders: </strong>
                {study.context.stakeholders.map((s, idx) => (
                  <span key={idx} className="text-zinc-400">
                    {s}{idx < study.context.stakeholders.length - 1 ? ' ·' : ''}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* 2. The Hypothesis & Approach */}
          <div className="p-6 rounded-xl bg-zinc-900/40 border border-white/[0.06] space-y-4">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-sky-400">
              <span className="font-mono">02.</span>
              <span>The Hypothesis & Structured Methodology</span>
            </div>
            <div className="text-xs font-mono text-zinc-400">
              <span className="text-zinc-300 font-semibold">Analytical Framework: </span>
              {study.hypothesis.frameworkUsed}
            </div>
            <p className="text-sm text-zinc-300 leading-relaxed">
              {study.hypothesis.coreHypothesis}
            </p>

            <div className="pt-3 border-t border-white/[0.06]">
              <div className="text-xs font-semibold text-zinc-300 mb-2">
                Empirical Diagnostic Findings:
              </div>
              <ul className="space-y-2">
                {study.hypothesis.diagnosticFindings.map((finding, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs text-zinc-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-400 mt-1.5 shrink-0" />
                    <span>{finding}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* 3. The Execution & Recommendations */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-sky-400">
              <span className="font-mono">03.</span>
              <span>The Execution Roadmap & Workstreams</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {study.execution.phases.map((phase, idx) => (
                <div key={idx} className="p-5 rounded-xl bg-zinc-900/50 border border-white/[0.06] flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between text-[11px] font-mono text-sky-400 mb-1">
                      <span>{phase.phase}</span>
                      <span className="text-zinc-500">{phase.timeline}</span>
                    </div>
                    <h4 className="text-sm font-semibold text-white mb-3">
                      {phase.title}
                    </h4>
                    <ul className="space-y-2">
                      {phase.initiatives.map((init, iIdx) => (
                        <li key={iIdx} className="text-xs text-zinc-400 flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{init}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 4. The Measurable Impact */}
          <div className="space-y-6">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-sky-400">
              <span className="font-mono">04.</span>
              <span>The Measurable Impact & Quantifiable Returns</span>
            </div>

            {/* KPI Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {study.impact.primaryKpis.map((kpi, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-zinc-950/80 border border-white/[0.08]">
                  <div className="text-2xl font-bold font-mono text-emerald-400 tabular-nums mb-1">
                    {kpi.metric}
                  </div>
                  <div className="text-xs font-semibold text-white mb-1">
                    {kpi.label}
                  </div>
                  <div className="text-[11px] text-zinc-400 leading-tight">
                    {kpi.context}
                  </div>
                </div>
              ))}
            </div>

            {/* Value Creation Waterfall Breakdown */}
            <div className="p-5 rounded-xl bg-zinc-900/40 border border-white/[0.06]">
              <div className="text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-3">
                Synergy & Value Creation Attribution Breakdown
              </div>
              <div className="space-y-2.5">
                {study.impact.waterfallDrivers.map((driver, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between text-xs py-2 px-3 rounded-md bg-zinc-900/60 border border-white/[0.04]"
                  >
                    <span className="text-zinc-300 font-medium">{driver.lever}</span>
                    <span className="font-mono font-bold text-emerald-400 tabular-nums">
                      {driver.contribution}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Attributable Client Testimonial */}
          <div className="p-6 rounded-xl bg-zinc-950/90 border border-white/[0.08] relative">
            <Quote className="w-8 h-8 text-sky-500/20 absolute top-4 right-4" />
            <p className="text-sm italic text-zinc-300 leading-relaxed mb-4">
              "{study.quote.text}"
            </p>
            <div className="text-xs font-medium text-white">
              {study.quote.author}{' '}
              <span className="text-zinc-500">·</span>{' '}
              <span className="text-zinc-400">{study.quote.role}, {study.quote.company}</span>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-6 border-t border-white/[0.08] flex items-center justify-between bg-zinc-950/70 shrink-0">
          <span className="text-xs text-zinc-500">
            Advisory Engagement Record · Vance Advisory
          </span>
          <button
            onClick={onClose}
            className="px-5 py-2 text-xs font-semibold text-zinc-950 bg-white hover:bg-zinc-200 rounded-md transition-colors"
          >
            Close Engagement Brief
          </button>
        </div>
      </div>
    </div>
  );
};
