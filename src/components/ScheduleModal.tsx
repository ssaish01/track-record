import React, { useState, useEffect } from 'react';
import { X, Calendar, Clock, CheckCircle2, Building, Mail, User, Shield } from 'lucide-react';

interface ScheduleModalProps {
  onClose: () => void;
}

export const ScheduleModal: React.FC<ScheduleModalProps> = ({ onClose }) => {
  const [selectedDate, setSelectedDate] = useState('2026-11-04');
  const [selectedTime, setSelectedTime] = useState('14:00 EST');
  const [topic, setTopic] = useState('Public Sector Strategy & Digital Modernization');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [notes, setNotes] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) return;
    setIsSubmitted(true);
  };

  const dates = [
    { value: '2026-11-04', label: 'Wed, Nov 4' },
    { value: '2026-11-05', label: 'Thu, Nov 5' },
    { value: '2026-11-09', label: 'Mon, Nov 9' },
    { value: '2026-11-10', label: 'Tue, Nov 10' },
  ];

  const times = ['09:00 EST', '11:00 EST', '14:00 EST', '16:30 EST'];

  const topics = [
    'Public Sector Strategy & Digital Modernization',
    'Enterprise IT Operational Restructuring',
    'Customer Journey Mapping & Process Friction Optimization',
    'Inter-Agency Stakeholder Alignment & Policy Implementation',
    'Confidential Strategic Advisory Session'
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto animate-fadeIn">
      <div
        className="relative w-full max-w-xl bg-[#0e0e11] border border-white/10 rounded-2xl shadow-2xl overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-6 border-b border-white/[0.08] flex items-start justify-between gap-4 bg-zinc-950/70">
          <div>
            <div className="flex items-center gap-1.5 text-xs font-semibold text-sky-400 tracking-wider uppercase mb-1">
              <Shield className="w-3.5 h-3.5" />
              <span>Confidential Executive Consultation</span>
            </div>
            <h2 className="text-xl font-bold text-white tracking-tight">
              Schedule 30-Minute Strategic Briefing
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-white transition-colors border border-white/10 shrink-0"
            aria-label="Close scheduling modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {isSubmitted ? (
          <div className="p-8 text-center space-y-4">
            <div className="w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white tracking-tight">
              Strategic Briefing Reserved
            </h3>
            <p className="text-xs sm:text-sm text-zinc-300 max-w-md mx-auto leading-relaxed">
              Thank you, <span className="font-semibold text-white">{name}</span>. A calendar invitation and preliminary non-disclosure agreement (NDA) outline have been dispatched to{' '}
              <span className="font-mono text-sky-400">{email}</span>.
            </p>

            <div className="p-4 rounded-xl bg-zinc-950/80 border border-white/[0.08] text-xs text-left text-zinc-300 max-w-sm mx-auto space-y-1.5">
              <div className="flex justify-between">
                <span className="text-zinc-500">Date & Time:</span>
                <span className="font-mono text-white">{selectedDate} @ {selectedTime}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-zinc-500">Focus Area:</span>
                <span className="text-white text-right">{topic}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-zinc-500">Organization:</span>
                <span className="text-white">{company || 'Confidential'}</span>
              </div>
            </div>

            <div className="pt-4">
              <button
                onClick={onClose}
                className="px-6 py-2.5 text-xs font-semibold text-zinc-950 bg-white hover:bg-zinc-200 rounded-lg transition-colors"
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-5 text-xs text-zinc-300">
            {/* Consultation Focus */}
            <div>
              <label className="block text-xs font-semibold text-zinc-300 mb-2">
                Strategic Advisory Focus:
              </label>
              <select
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-lg bg-zinc-900 border border-white/10 text-white focus:outline-none focus:border-sky-500 text-xs"
              >
                {topics.map((t, idx) => (
                  <option key={idx} value={t}>
                    {t}
                  </option>
                ))}
              </select>
            </div>

            {/* Date Selection */}
            <div>
              <label className="block text-xs font-semibold text-zinc-300 mb-2">
                Available Windows:
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {dates.map((d) => (
                  <button
                    key={d.value}
                    type="button"
                    onClick={() => setSelectedDate(d.value)}
                    className={`py-2 px-2 text-center rounded-lg border text-xs transition-all ${
                      selectedDate === d.value
                        ? 'bg-zinc-800 text-white border-sky-400 font-semibold'
                        : 'bg-zinc-900/50 text-zinc-400 border-white/[0.06] hover:border-white/10'
                    }`}
                  >
                    {d.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Time Slot Selection */}
            <div>
              <label className="block text-xs font-semibold text-zinc-300 mb-2">
                Time (EST):
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {times.map((t) => (
                  <button
                    key={t}
                    type="button"
                    onClick={() => setSelectedTime(t)}
                    className={`py-2 px-2 text-center rounded-lg border text-xs font-mono transition-all ${
                      selectedTime === t
                        ? 'bg-zinc-800 text-white border-sky-400 font-semibold'
                        : 'bg-zinc-900/50 text-zinc-400 border-white/[0.06] hover:border-white/10'
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>

            {/* Contact Fields */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 border-t border-white/[0.06]">
              <div>
                <label className="block text-zinc-400 mb-1">Full Name *</label>
                <div className="relative">
                  <User className="w-3.5 h-3.5 text-zinc-500 absolute left-3 top-3" />
                  <input
                    type="text"
                    required
                    placeholder="e.g. Eleanor Vance"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full pl-9 pr-3 py-2 rounded-lg bg-zinc-900 border border-white/10 text-white placeholder-zinc-600 focus:outline-none focus:border-sky-500 text-xs"
                  />
                </div>
              </div>

              <div>
                <label className="block text-zinc-400 mb-1">Corporate Email *</label>
                <div className="relative">
                  <Mail className="w-3.5 h-3.5 text-zinc-500 absolute left-3 top-3" />
                  <input
                    type="email"
                    required
                    placeholder="name@enterprise.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-9 pr-3 py-2 rounded-lg bg-zinc-900 border border-white/10 text-white placeholder-zinc-600 focus:outline-none focus:border-sky-500 text-xs"
                  />
                </div>
              </div>
            </div>

            <div>
              <label className="block text-zinc-400 mb-1">Organization / Enterprise</label>
              <div className="relative">
                <Building className="w-3.5 h-3.5 text-zinc-500 absolute left-3 top-3" />
                <input
                  type="text"
                  placeholder="e.g. Apex Holdings / Private Equity Sponsor"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  className="w-full pl-9 pr-3 py-2 rounded-lg bg-zinc-900 border border-white/10 text-white placeholder-zinc-600 focus:outline-none focus:border-sky-500 text-xs"
                />
              </div>
            </div>

            <div>
              <label className="block text-zinc-400 mb-1">High-Level Context / Objectives (Optional)</label>
              <textarea
                rows={2}
                placeholder="Briefly describe the operating challenge, EBITDA target, or M&A timeline..."
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="w-full p-2.5 rounded-lg bg-zinc-900 border border-white/10 text-white placeholder-zinc-600 focus:outline-none focus:border-sky-500 text-xs resize-none"
              />
            </div>

            {/* Submit button */}
            <div className="pt-3 border-t border-white/[0.08] flex items-center justify-between">
              <span className="text-[11px] text-zinc-500">
                All communications subject to standard mutual NDA.
              </span>
              <button
                type="submit"
                className="px-6 py-2.5 text-xs font-semibold text-zinc-950 bg-white hover:bg-zinc-200 active:bg-zinc-300 rounded-lg transition-all"
              >
                Confirm Strategic Briefing
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
