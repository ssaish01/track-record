import React, { useState } from 'react';
import { Mail, Copy, Check, Calendar, ArrowUpRight, Shield } from 'lucide-react';
import { CAREER_CREDENTIALS } from '../data/consultingData';

interface FooterProps {
  onOpenSchedule: () => void;
  onOpenCv: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenSchedule, onOpenCv }) => {
  const [copied, setCopied] = useState(false);
  const email = CAREER_CREDENTIALS.email;

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <footer className="border-t border-white/[0.08] bg-[#070709] pt-20 pb-12 relative text-zinc-400">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Contact Advisory Box */}
        <div className="rounded-2xl bg-zinc-900/40 border border-white/[0.08] p-8 md:p-12 mb-16 relative overflow-hidden backdrop-blur-sm">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-sky-400 mb-3">
              <span>Executive Inquiry</span>
              <span aria-hidden="true" className="text-zinc-600">·</span>
              <span className="text-zinc-400">Strategic Advisory & Engagement</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight leading-tight mb-4 [text-wrap:balance]">
              Let’s discuss your next initiative.
            </h2>
            <p className="text-sm sm:text-base text-zinc-400 leading-relaxed font-normal mb-8 max-w-2xl">
              Whether you’re working through complex public sector modernization, unblocking an enterprise IT delivery pipeline, or rethinking digital product workflows, I’m available for consultation and discussion.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              {/* Primary Schedule CTA */}
              <button
                onClick={onOpenSchedule}
                className="inline-flex items-center gap-2 px-6 py-3 text-xs font-semibold text-zinc-950 bg-white hover:bg-zinc-200 active:bg-zinc-300 rounded-lg transition-all shadow-md shadow-white/5"
              >
                <Calendar className="w-4 h-4 text-zinc-900" />
                <span>Reserve Strategic Briefing</span>
              </button>

              {/* Email Copy Tooltip Button */}
              <div className="relative">
                <button
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-2 px-4 py-3 text-xs font-medium text-zinc-300 hover:text-white bg-zinc-900/80 hover:bg-zinc-800 border border-white/10 rounded-lg transition-all group"
                >
                  <Mail className="w-3.5 h-3.5 text-sky-400" />
                  <span className="font-mono">{email}</span>
                  {copied ? (
                    <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  ) : (
                    <Copy className="w-3.5 h-3.5 text-zinc-500 group-hover:text-zinc-300 shrink-0" />
                  )}
                </button>

                {/* Success Tooltip */}
                {copied && (
                  <div className="absolute -top-9 left-1/2 -translate-x-1/2 px-2.5 py-1 bg-emerald-500 text-zinc-950 text-[11px] font-semibold rounded shadow-md whitespace-nowrap animate-fadeIn">
                    Copied to clipboard!
                  </div>
                )}
              </div>

              {/* LinkedIn Link */}
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-3 text-xs font-medium text-zinc-300 hover:text-white bg-zinc-900/80 hover:bg-zinc-800 border border-white/10 rounded-lg transition-all"
              >
                <span>LinkedIn Profile</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-sky-400" />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Navigation & Copyright */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-white/[0.06]">
          <div className="md:col-span-6 space-y-3">
            <span className="text-sm font-bold text-white tracking-tight">
              AISHWARYA SRIRAM SRINIVASACHARY
            </span>
            <p className="text-xs text-zinc-400 leading-relaxed max-w-sm font-normal">
              Technology Strategy & Digital Operations Specialist. Ex-Cabinet Secretariat (Govt. of India), TCS Enterprise IT Consulting, DevRev Cloud Product Design.
            </p>
          </div>

          <div className="md:col-span-3 space-y-2">
            <div className="text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-2">
              Sections
            </div>
            <ul className="space-y-1.5 text-xs text-zinc-400">
              <li><a href="#expertise" className="hover:text-white transition-colors">Capabilities</a></li>
              <li><a href="#engagements" className="hover:text-white transition-colors">Engagements & Experience</a></li>
              <li><a href="#frameworks" className="hover:text-white transition-colors">MECE Frameworks Lab</a></li>
              <li><a href="#insights" className="hover:text-white transition-colors">Working Papers</a></li>
              <li><a href="#credentials" className="hover:text-white transition-colors">Career Trajectory</a></li>
            </ul>
          </div>

          <div className="md:col-span-3 space-y-2">
            <div className="text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-2">
              Governance & Integrity
            </div>
            <ul className="space-y-1.5 text-xs text-zinc-400">
              <li>
                <button onClick={onOpenCv} className="hover:text-white transition-colors text-left">
                  Curriculum Vitae (CV)
                </button>
              </li>
              <li><span className="text-zinc-500">Mutual Non-Disclosure (Standard)</span></li>
              <li><span className="text-zinc-500">Professional Discretion Protocol</span></li>
            </ul>
          </div>
        </div>

        {/* Quiet Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-400">
          <div>
            © {new Date().getFullYear()} Aishwarya Sriram Srinivasachary. All rights reserved.
          </div>
          <div className="flex items-center gap-1.5 text-zinc-400">
            <Shield className="w-3.5 h-3.5 text-sky-400" />
            <span>Structured Problem-Solving & Operational Integrity</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
