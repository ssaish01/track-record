import React, { useEffect, useState } from 'react';
import { Publication } from '../types/consulting';
import { X, Download, FileText, Check, Clock, Calendar, CheckCircle2, BookOpen, ChevronLeft, ChevronRight, Layers } from 'lucide-react';
import { generateBriefingPdf } from '../utils/generateBriefingPdf';

interface PublicationModalProps {
  pub: Publication;
  onClose: () => void;
}

export const PublicationModal: React.FC<PublicationModalProps> = ({ pub, onClose }) => {
  const [downloaded, setDownloaded] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);
  const [viewMode, setViewMode] = useState<'summary' | 'reader'>('summary');
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  const handleDownload = () => {
    setIsGenerating(true);
    setTimeout(() => {
      try {
        const doc = generateBriefingPdf(pub);
        doc.save(`${pub.id}-executive-briefing-${pub.pages}p.pdf`);
        setDownloaded(true);
      } catch (err) {
        console.error('Failed to generate PDF:', err);
      } finally {
        setIsGenerating(false);
      }
    }, 300);
  };

  const handlePrevPage = () => {
    setCurrentPage((prev) => Math.max(1, prev - 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prev) => Math.min(pub.pages, prev + 1));
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto animate-fadeIn">
      <div
        className="relative w-full max-w-3xl bg-[#0e0e11] border border-white/10 rounded-2xl shadow-2xl overflow-hidden my-8 max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-6 sm:p-8 border-b border-white/[0.08] flex items-start justify-between gap-6 bg-zinc-950/80 shrink-0">
          <div>
            <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-sky-400 tracking-wider uppercase mb-2">
              <span>{pub.category}</span>
              <span aria-hidden="true" className="text-zinc-600">·</span>
              <span>{pub.year}</span>
              <span aria-hidden="true" className="text-zinc-600">·</span>
              <span>{pub.readTime}</span>
              <span aria-hidden="true" className="text-zinc-600">·</span>
              <span className="font-mono text-zinc-300">{pub.pages} Pages (PDF)</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              {pub.title}
            </h2>
            <div className="text-xs text-zinc-400 mt-1">
              Author: Aishwarya Sriram Srinivasachary · Technology Strategy & Systems Architecture
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-white transition-colors border border-white/10 shrink-0"
            aria-label="Close publication modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* View Mode Switcher */}
        <div className="px-6 sm:px-8 py-3 bg-zinc-950/60 border-b border-white/[0.06] flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setViewMode('summary')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
                viewMode === 'summary'
                  ? 'bg-zinc-800 text-white shadow-sm'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              Executive Summary
            </button>
            <button
              onClick={() => setViewMode('reader')}
              className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
                viewMode === 'reader'
                  ? 'bg-zinc-800 text-white shadow-sm'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              <BookOpen className="w-3.5 h-3.5 text-sky-400" />
              <span>Full Document Reader ({pub.pages} Pages)</span>
            </button>
          </div>

          {viewMode === 'reader' && (
            <div className="flex items-center gap-2 text-xs font-mono text-zinc-400">
              <button
                onClick={handlePrevPage}
                disabled={currentPage === 1}
                className="p-1 rounded bg-zinc-900 hover:bg-zinc-800 disabled:opacity-40 disabled:cursor-not-allowed border border-white/5"
                title="Previous Page"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <span className="text-white">
                Page {currentPage} of {pub.pages}
              </span>
              <button
                onClick={handleNextPage}
                disabled={currentPage === pub.pages}
                className="p-1 rounded bg-zinc-900 hover:bg-zinc-800 disabled:opacity-40 disabled:cursor-not-allowed border border-white/5"
                title="Next Page"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-zinc-300 max-h-[65vh]">
          {viewMode === 'summary' ? (
            /* Summary View */
            <>
              <div>
                <div className="text-xs font-semibold uppercase tracking-wider text-sky-400 mb-2">
                  Executive Abstract & Context
                </div>
                <p className="text-sm text-zinc-300 leading-relaxed font-normal">
                  {pub.abstract}
                </p>
              </div>

              <div className="p-5 rounded-xl bg-zinc-900/50 border border-white/[0.06] space-y-4">
                <div className="text-xs font-semibold uppercase tracking-wider text-zinc-200">
                  Key Institutional Findings & Strategic Takeaways
                </div>
                <div className="space-y-3">
                  {pub.takeaways.map((takeaway, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-zinc-400">
                      <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{takeaway}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Publication Structure Breakdown */}
              <div className="p-5 rounded-xl bg-zinc-950/70 border border-white/[0.06] space-y-3">
                <div className="text-xs font-semibold uppercase tracking-wider text-zinc-300">
                  Document Architecture ({pub.pages} Pages Total)
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-zinc-400">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
                    <span>Page 1: Formal Executive Cover & TOC</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
                    <span>Pages 2–4: Executive Summary & Hypotheses</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
                    <span>Pages 5–8: MECE Problem Decomposition</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
                    <span>Pages 9–14: Technical System Protocols</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
                    <span>Pages 15–20: Implementation & Audit Matrices</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
                    <span>Pages 21–{pub.pages}: Policy Standards & Appendix</span>
                  </div>
                </div>
              </div>
            </>
          ) : (
            /* Multi-Page Document Reader */
            <div className="space-y-6">
              {currentPage === 1 ? (
                /* Cover Page Preview */
                <div className="p-8 rounded-xl bg-zinc-950 border border-white/15 space-y-6 shadow-2xl relative">
                  <div className="h-2 w-full bg-sky-600 rounded-t" />
                  <div className="text-[11px] font-mono tracking-widest uppercase text-sky-400">
                    AISHWARYA SRIRAM SRINIVASACHARY · TECHNOLOGY STRATEGY & OPERATIONS
                  </div>
                  <div className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">
                    {pub.category} · Strategic Working Paper · Year {pub.year}
                  </div>
                  <h3 className="text-2xl font-bold text-white tracking-tight leading-tight">
                    {pub.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed italic border-l-2 border-sky-400 pl-4 py-1">
                    "{pub.abstract}"
                  </p>
                  <div className="p-4 rounded-lg bg-zinc-900/80 border border-white/10 grid grid-cols-2 gap-4 text-xs">
                    <div>
                      <span className="text-zinc-500 block">Total Scope</span>
                      <span className="font-mono text-white font-semibold">{pub.pages} Printed Pages</span>
                    </div>
                    <div>
                      <span className="text-zinc-500 block">Classification</span>
                      <span className="text-emerald-400 font-semibold">Independent Research</span>
                    </div>
                  </div>
                  <div className="text-[11px] text-zinc-500 pt-4 border-t border-white/10 flex justify-between">
                    <span>Strategic Working Paper · Page 1 of {pub.pages}</span>
                    <span>Use Page Navigator to flip through all {pub.pages} pages</span>
                  </div>
                </div>
              ) : (
                /* Inside Page Preview */
                <div className="p-8 rounded-xl bg-zinc-950 border border-white/15 space-y-6 shadow-2xl">
                  {/* Running Header */}
                  <div className="flex items-center justify-between text-[11px] font-mono text-zinc-400 border-b border-white/10 pb-3">
                    <span>STRATEGIC WORKING PAPER · AISHWARYA SRIRAM SRINIVASACHARY</span>
                    <span className="text-sky-400 font-semibold">{pub.category.toUpperCase()} · SECTION {currentPage - 1}</span>
                  </div>

                  {/* Chapter Title */}
                  <div>
                    <span className="text-xs font-mono text-sky-400 uppercase tracking-wider">
                      Chapter {currentPage - 1} of {pub.pages - 1}
                    </span>
                    <h3 className="text-xl font-bold text-white mt-1">
                      {currentPage === 2
                        ? 'Executive Summary & Board Mandate'
                        : currentPage === 3
                        ? 'Institutional Context & Security Architecture'
                        : currentPage === 4
                        ? 'MECE Root Cause Decomposition'
                        : currentPage === 5
                        ? 'Technical Protocol & Architecture'
                        : currentPage === 6
                        ? 'Zero-Knowledge & Verification Circuits'
                        : currentPage === 7
                        ? 'Hardware Security Module Governance'
                        : currentPage === 8
                        ? 'Operational Implementation Workstreams'
                        : currentPage === 9
                        ? 'Change Management & Inter-Agency Alignment'
                        : currentPage === 10
                        ? 'Quantitative Impact & Telemetry Benchmarks'
                        : currentPage === 11
                        ? 'Adversarial Stress Testing & Audits'
                        : currentPage === 12
                        ? 'Statutory Policy & Open Standards Directive'
                        : currentPage === 13
                        ? 'Vendor Lock-In Mitigation Playbook'
                        : currentPage === 14
                        ? 'Edge Infrastructure & Resilience'
                        : currentPage === 15
                        ? 'Risk Management & Continuity Protocols'
                        : `Module ${currentPage - 1}: Technical Specifications & Empirical Findings`}
                    </h3>
                  </div>

                  {/* Body Paragraphs */}
                  <div className="space-y-4 text-xs sm:text-sm text-zinc-300 leading-relaxed font-normal">
                    <p>
                      In high-stakes public sector digital transformations, information asymmetry and administrative boundaries represent the true points of friction. Section {currentPage}.1 addresses how statutory gazettes, procurement policies, and inter-ministry administrative archives must be structured to ensure immediate, dependable retrieval under complex regulatory conditions.
                    </p>
                    <p>
                      By establishing formal mathematical boundaries around document chunking and vector storage, the system ensures that every extracted fact maintains complete cryptographic lineage back to its source document, eliminating black-box generation risk.
                    </p>
                  </div>

                  {/* Callout Box */}
                  <div className="p-4 rounded-lg bg-zinc-900/90 border border-sky-500/20 text-xs">
                    <span className="font-semibold text-sky-400 block mb-1 uppercase tracking-wider text-[11px]">
                      Operational Benchmark (Page {currentPage})
                    </span>
                    <span className="text-zinc-300 italic">
                      "{pub.takeaways[(currentPage - 2) % pub.takeaways.length]}"
                    </span>
                  </div>

                  {/* Running Footer */}
                  <div className="flex items-center justify-between text-[11px] font-mono text-zinc-400 border-t border-white/10 pt-3">
                    <span className="truncate max-w-xs">{pub.title}</span>
                    <span className="text-white font-semibold">Page {currentPage} of {pub.pages}</span>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-6 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4 bg-zinc-950/80 shrink-0">
          <div className="text-xs text-zinc-400 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span>Complete {pub.pages}-Page Formatted PDF Ready for Export</span>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={handleDownload}
              disabled={isGenerating}
              className={`flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-semibold rounded-lg transition-all ${
                downloaded
                  ? 'bg-emerald-500 text-zinc-950'
                  : 'bg-white hover:bg-zinc-200 text-zinc-950 active:bg-zinc-300'
              }`}
            >
              {isGenerating ? (
                <span>Generating {pub.pages} Pages...</span>
              ) : downloaded ? (
                <>
                  <Check className="w-4 h-4" />
                  <span>PDF Downloaded ({pub.pages} Pages)</span>
                </>
              ) : (
                <>
                  <Download className="w-4 h-4 text-zinc-900" />
                  <span>Download Full PDF ({pub.pages} Pages)</span>
                </>
              )}
            </button>
            <button
              onClick={onClose}
              className="px-4 py-2.5 text-xs font-medium text-zinc-400 hover:text-white transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
