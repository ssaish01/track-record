import React from 'react';
import { CAREER_CREDENTIALS } from '../data/consultingData';
import { Award, Briefcase, GraduationCap, ShieldCheck, Quote, ArrowUpRight, Landmark, Building2, Sparkles } from 'lucide-react';

interface CredentialsSectionProps {
  onOpenCv: () => void;
  onOpenSchedule: () => void;
}

export const CredentialsSection: React.FC<CredentialsSectionProps> = ({ onOpenCv, onOpenSchedule }) => {
  const testimonials = [
    {
      name: 'Technical Taskforce Lead',
      role: 'Sovereign Systems & Modernization',
      org: 'Cabinet Secretariat Technical Cell',
      quote: 'Aishwarya brought rigorous problem-solving, calm execution under pressure, and genuine engineering discipline to our inter-ministerial e-governance modernization programs. Her work on vector retrieval and zero-knowledge prototypes set a clear operational standard for the team.',
      outcome: 'Core Technical Contributor · 7 Sovereign Initiatives'
    },
    {
      name: 'Enterprise Delivery Lead',
      role: 'Digital Transformation Team',
      org: 'Tata Consultancy Services (TCS)',
      quote: 'When our client delivery pipeline was burning through hours and missing SLAs, Aishwarya rolled up her sleeves, traced the errors back to their source, and fixed the underlying system. She took our team from constant panic to steady, confident delivery.',
      outcome: '+32% Sprint Velocity · 99.2% Contract SLA Compliance'
    },
    {
      name: 'Product Engineering Leadership',
      role: 'Design & Customer Experience',
      org: 'DevRev Cloud Platform Team',
      quote: 'Aishwarya doesn’t just design interfaces—she understands how people think under pressure. Her redesign turned one of our most frustrating, click-heavy workflows into something smooth, fast, and natural.',
      outcome: '-55% Click Depth · +40% Workflow Completion Rate'
    }
  ];

  return (
    <section id="credentials" className="py-20 md:py-28 border-t border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14 md:mb-18">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-sky-400 mb-3">
              <span>Career Trajectory & Credentials</span>
              <span aria-hidden="true" className="text-zinc-600">·</span>
              <span className="text-zinc-400">Institutional & Enterprise Pedigree</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight leading-tight [text-wrap:balance]">
              Cross-disciplinary excellence across governance, enterprise IT, and product design.
            </h2>
          </div>

          <button
            onClick={onOpenCv}
            className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold text-white bg-zinc-800 hover:bg-zinc-700 border border-white/10 rounded-lg transition-all self-start md:self-auto shrink-0"
          >
            <span>View Full Curriculum Vitae</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-sky-400" />
          </button>
        </div>

        {/* 2-Column: Career History & Testimonials */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-16">
          {/* Left Column: Career Timeline */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-zinc-300 pb-3 border-b border-white/[0.06]">
              <Briefcase className="w-3.5 h-3.5 text-sky-400" />
              <span>Professional Engagement History</span>
            </div>

            <div className="space-y-6 relative before:absolute before:inset-0 before:left-3 before:w-[1px] before:bg-white/10">
              {CAREER_CREDENTIALS.pastRoles.map((role, idx) => (
                <div key={idx} className="relative pl-8">
                  <div className="absolute left-[9px] top-1.5 w-2 h-2 rounded-full bg-sky-400 border border-[#09090b]" />
                  <div className="flex items-center justify-between text-xs font-mono text-zinc-400 mb-1">
                    <span className="text-sky-400 font-semibold">{role.organization}</span>
                    <span className="tabular-nums">{role.period}</span>
                  </div>
                  <h4 className="text-sm font-bold text-white mb-1">{role.role}</h4>
                  <div className="text-[11px] text-zinc-500 mb-2">{role.location}</div>
                  <p className="text-xs text-zinc-400 leading-relaxed font-normal">
                    {role.summary}
                  </p>
                </div>
              ))}
            </div>

            {/* Academic Credentials */}
            <div className="pt-6 border-t border-white/[0.06] space-y-4">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-zinc-300">
                <GraduationCap className="w-3.5 h-3.5 text-sky-400" />
                <span>Academic & Institutional Foundation</span>
              </div>
              <div className="space-y-3">
                {CAREER_CREDENTIALS.education.map((edu, idx) => (
                  <div key={idx} className="p-3.5 rounded-lg bg-zinc-900/40 border border-white/[0.05]">
                    <div className="text-xs font-bold text-white">{edu.degree}</div>
                    <div className="text-xs text-zinc-400 mt-0.5">{edu.institution} · {edu.year}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Attributable Endorsements */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-zinc-300 pb-3 border-b border-white/[0.06]">
              <Quote className="w-3.5 h-3.5 text-sky-400" />
              <span>Stakeholder & Leadership Endorsements</span>
            </div>

            <div className="space-y-4">
              {testimonials.map((t, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-xl bg-zinc-900/40 border border-white/[0.08] relative hover:border-white/15 transition-all"
                >
                  <p className="text-xs sm:text-sm text-zinc-300 italic leading-relaxed mb-4">
                    "{t.quote}"
                  </p>

                  <div className="pt-3 border-t border-white/[0.06] flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div>
                      <div className="text-xs font-bold text-white">{t.name}</div>
                      <div className="text-[11px] text-zinc-400">{t.role}</div>
                      <div className="text-[11px] text-zinc-500">{t.org}</div>
                    </div>
                    <div className="text-[11px] font-mono text-emerald-400 text-right shrink-0">
                      {t.outcome}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Advisory Focus Card */}
            <div className="p-5 rounded-xl bg-zinc-950/70 border border-white/[0.06]">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-3">
                <ShieldCheck className="w-3.5 h-3.5 text-sky-400" />
                <span>Core Technical & Advisory Competencies</span>
              </div>
              <ul className="space-y-2">
                {CAREER_CREDENTIALS.boardAppointments.map((app, idx) => (
                  <li key={idx} className="text-xs text-zinc-400 flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-400/80 mt-1.5 shrink-0" />
                    <span>{app}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
