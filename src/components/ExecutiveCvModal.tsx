import React, { useEffect, useState } from 'react';
import { X, Download, Printer, Check, GraduationCap, Briefcase, Award, Shield, FileText, ChevronRight } from 'lucide-react';
import { CAREER_CREDENTIALS, CASE_STUDIES } from '../data/consultingData';

interface ExecutiveCvModalProps {
  onClose: () => void;
}

export const ExecutiveCvModal: React.FC<ExecutiveCvModalProps> = ({ onClose }) => {
  const [downloaded, setDownloaded] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  const handlePrint = () => {
    window.print();
  };

  const handleDownload = () => {
    setDownloaded(true);
    setTimeout(() => {
      const cvText = `AISHWARYA SRIRAM SRINIVASACHARY | CURRICULUM VITAE
Technology Strategy & Digital Operations Specialist
Contact: ssaishwarya2021@gmail.com · Portfolio & Advisory Dossier

EXECUTIVE SUMMARY:
Technology strategy and digital operations specialist with 3.5 years of high-stakes experience spanning apex public sector governance (Cabinet Secretariat), global enterprise IT consulting (TCS)andmodern SaaS product optimization (DevRev Cloud). Combines hands-on engineering execution with structured MECE problem-solving to untangle operational bottlenecks and drive measurable outcomes.

CABINET SECRETARIAT (GOVERNMENT OF INDIA) — STRATEGIC TASKFORCE INITIATIVES (3 YEARS):

1. National E-Governance & Statutory Compliance Knowledge Graph (GovAI-RAG Engine)
   Timeline: 5 Months
   Focus: Sovereign E-Governance Architecture & Institutional Knowledge Management
   Scope: Technical discovery and vector pipeline engineering for an air-gapped RAG system, indexing fragmented gazette notifications and administrative manuals across ministries into a secure, localized LLM knowledge graph with strict line-by-line citation guardrails.
   Key Methodology: MECE Institutional Bottleneck Decomposition & Secure Vector Database Governance.

2. Inter-Ministry Credential & Statutory Verification Ledger (GovChain-ID)
   Timeline: 5 Months
   Focus: Cryptographic Security & Public Credential Verification
   Scope: Engineered a zero-knowledge credential verification prototype (ZK-SNARKs) across departmental testbeds, eliminating centralized honeypots and proving statutory compliance without exposing raw citizen identity data.
   Key Methodology: ZK-SNARKs Protocol Design & Decentralized Trust Frameworks.

3. Cross-Ministerial Interoperability Grid & National API Gateway
   Timeline: 5 Months
   Focus: Enterprise Architecture & API Modernization
   Scope: Key contributor on the cross-ministerial integration team; engineered high-throughput API gateway adapters and encrypted gRPC streaming telemetry connecting 12 federal civilian ministries (Finance, Commerce, Logistics, Agriculture) without disrupting core mainframes.
   Key Methodology: Strangler Fig Migration Pattern & Zero-Trust Network Access (ZTNA).

4. National Supply Chain & Essential Commodities Telemetry Platform (Predictive-Gov)
   Timeline: 6 Months
   Focus: Advanced Analytics & Public Logistics Forecasting
   Scope: Built time-series telemetry pipelines and predictive anomaly detection models across 450+ freight and agricultural market feeds, giving inter-ministerial taskforces up to 18 days of early warning on emerging food grain logistics and fertilizer distribution bottlenecks.
   Key Methodology: Predictive Telemetry Modeling & RICE-Prioritized Risk Matrix.

5. Public Sector Zero-Trust Infrastructure & Critical Service Isolation Engine
   Timeline: 6 Months
   Focus: Civilian Infrastructure Security & Automated Service Hardening
   Scope: Engineered automated micro-segmentation policies, Hardware Security Module (HSM) key rotation scriptsandincident containment playbooks for citizen service portals (GSTN, DigiLocker gateways), achieving sub-800ms workload isolation during simulated stress drills.
   Key Methodology: Continuous Compliance Auditing & Automated Playbook Orchestration.

6. Sovereign Edge Computing & Remote District Administration Platform (GovCloud-Mesh)
   Timeline: 5 Months
   Focus: Civilian Edge Resiliency & Offline-First District Administration
   Scope: Deployed lightweight, offline-first Kubernetes container workloads across 45 remote district magistrate offices and rural service blocks, ensuring citizen welfare distribution software maintained 100% operational continuity and conflict-free data sync during prolonged telecommunication outages.
   Key Methodology: GitOps Pipeline Automation & Immutable Infrastructure Design.

7. Apex Digital Policy Framework & National Interoperability Governance
   Timeline: 4 Months
   Focus: Institutional Policy, Open Standards & Anti-Vendor-Lock-In
   Scope: Technical specialist on the National Interoperability Working Group; analyzed 40 public technology contracts to isolate vendor lock-in risksanddrafted open-API compliance matrices and technical standards adopted across public IT tenders.
   Key Methodology: MECE Policy Decomposition & Multi-Tier Stakeholder Consensus Alignment.

ENTERPRISE IT & PRODUCT EXPERIENCE:

8. Tata Consultancy Services (TCS) | Systems Engineer (6 Months)
   Focus: Enterprise Technology Consulting, IT Operational Restructuring & Client Delivery
   Scope: Analyzed client workflows, isolated systemic delivery bottlenecksanddelivered custom technology solutions to improve operational efficiency for global enterprises.
   Key Methodology: Root Cause Incident Tree & Lean Operational Workflow Re-engineering.
   Impact: +32% Service Delivery Velocity, -42% Defect Resolution Time, 99.2% Contract SLA Compliance.

9. DevRev Cloud | UX / UI Engineer Intern (Product Design & Engineering)
   Focus: Customer Journey Mapping, Digital Product Experience Design & Process Optimization
   Scope: Analyzed user friction points, mapped multi-persona pathwaysandredesigned core ticket-linking workflows to drive enterprise platform adoption.
   Key Methodology: MECE Cognitive Friction Tree & Micro-Interaction Journey Auditing.
   Impact: -55% Click Depth, +40% Workflow Completion Rate, +28% Daily Active Engagement.

EDUCATION:
• Bachelor of Technology (B.Tech) in Computer Science & Engineering
• Specialized Training in National Digital Infrastructure & Governance (Government of India)`;

      const blob = new Blob([cvText], { type: 'text/plain' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `Aishwarya_Sriram_Srinivasachary_Executive_CV.txt`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    }, 400);
  };

  const cabSecPrograms = CASE_STUDIES.filter((c) => c.organization === 'Cabinet Secretariat');

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto animate-fadeIn">
      <div
        className="relative w-full max-w-4xl bg-[#0e0e11] border border-white/10 rounded-2xl shadow-2xl overflow-hidden my-8 max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-6 sm:p-8 border-b border-white/[0.08] flex items-start justify-between gap-6 bg-zinc-950/80 shrink-0">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-sky-400 tracking-wider uppercase mb-1">
              <span>Curriculum Vitae</span>
              <span aria-hidden="true" className="text-zinc-600">·</span>
              <span className="text-zinc-400">Executive Dossier</span>
            </div>
            <h2 className="text-2xl font-bold text-white tracking-tight">
              Aishwarya Sriram Srinivasachary
            </h2>
            <div className="text-xs text-zinc-400 mt-0.5">
              Ex-Cabinet Secretariat (Govt. of India) · TCS Enterprise IT · DevRev Cloud UX Architecture
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={handlePrint}
              className="p-2 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-white transition-colors border border-white/10"
              title="Print CV"
            >
              <Printer className="w-4 h-4" />
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-white transition-colors border border-white/10"
              aria-label="Close CV dialog"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable CV Document */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-8 text-zinc-300 text-xs sm:text-sm">
          {/* Executive Overview */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-sky-400 mb-2">
              Executive Profile & Strategic Framing
            </h3>
            <p className="text-zinc-300 leading-relaxed font-normal">
              Strategic technology advisor and operations transformation specialist with proven expertise spanning apex sovereign public sector governance (Cabinet Secretariat, Govt. of India), global enterprise IT consulting (TCS)andhigh-growth digital product optimization (DevRev Cloud). Expert at structuring ambiguous institutional challenges into MECE workstreams, modernizing mission-critical digital infrastructureandstreamlining cross-functional workflows.
            </p>
          </div>

          {/* Key Metrics / Highlights */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 rounded-xl bg-zinc-900/60 border border-white/[0.06]">
            <div>
              <div className="text-xs text-zinc-500 font-mono">Cabinet Secretariat</div>
              <div className="text-lg font-bold font-mono text-white tabular-nums">7 Programs</div>
            </div>
            <div>
              <div className="text-xs text-zinc-500 font-mono">TCS Delivery Lift</div>
              <div className="text-lg font-bold font-mono text-emerald-400 tabular-nums">+32%</div>
            </div>
            <div>
              <div className="text-xs text-zinc-500 font-mono">DevRev Cloud Click Depth</div>
              <div className="text-lg font-bold font-mono text-sky-400 tabular-nums">-55%</div>
            </div>
            <div>
              <div className="text-xs text-zinc-500 font-mono">Methodology</div>
              <div className="text-lg font-bold font-mono text-white tabular-nums">MECE</div>
            </div>
          </div>

          {/* Cabinet Secretariat 7 Strategic Programs */}
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b border-white/[0.08] pb-2">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-sky-400">
                Cabinet Secretariat (Govt. of India) — 7 Strategic Initiatives (Nov 2023 – Nov 2026)
              </h3>
              <span className="text-[11px] font-mono text-zinc-400">3-Year High-Stakes Advisory</span>
            </div>

            <div className="space-y-3">
              {cabSecPrograms.map((prog, idx) => (
                <div key={prog.id} className="p-4 rounded-xl bg-zinc-900/40 border border-white/[0.06] hover:border-white/15 transition-all">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1.5">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs font-semibold text-sky-400">
                        {prog.initiativeCode}.
                      </span>
                      <h4 className="font-bold text-white text-sm">{prog.title}</h4>
                    </div>
                    <span className="text-[11px] font-mono text-zinc-400 shrink-0">
                      {prog.timeframe}
                    </span>
                  </div>
                  <div className="text-xs text-sky-300/80 font-mono mb-2">
                    Focus: {prog.focusArea}
                  </div>
                  <p className="text-xs text-zinc-400 leading-relaxed mb-2.5">
                    {prog.summary}
                  </p>
                  <div className="text-[11px] font-mono text-zinc-400 pt-2 border-t border-white/[0.04] flex items-center justify-between">
                    <span>
                      <strong className="text-zinc-300">Methodology: </strong>
                      {prog.hypothesis.frameworkUsed}
                    </span>
                    <span className="text-emerald-400 font-semibold">{prog.heroStat}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Enterprise IT & Product Design Experience */}
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b border-white/[0.08] pb-2">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-sky-400">
                Enterprise IT Consulting & Product Experience
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* TCS */}
              <div className="p-4 rounded-xl bg-zinc-900/40 border border-white/[0.06]">
                <div className="flex items-center justify-between text-xs mb-1">
                  <span className="font-bold text-white text-sm">Tata Consultancy Services</span>
                  <span className="font-mono text-sky-400 text-[11px]">6 Months</span>
                </div>
                <div className="text-xs text-zinc-400 font-medium mb-2">
                  Systems Engineer · Enterprise Technology Practice
                </div>
                <p className="text-xs text-zinc-400 leading-relaxed mb-3">
                  Analyzed client workflows, isolated systemic delivery bottlenecksanddelivered custom technology architectures elevating delivery throughput by +32% and reducing defect resolution time by -42%.
                </p>
                <div className="text-[11px] font-mono text-emerald-400 font-semibold pt-2 border-t border-white/[0.04]">
                  Impact: +32% Throughput · 99.2% SLA Compliance
                </div>
              </div>

              {/* DevRev Cloud */}
              <div className="p-4 rounded-xl bg-zinc-900/40 border border-white/[0.06]">
                <div className="flex items-center justify-between text-xs mb-1">
                  <span className="font-bold text-white text-sm">DevRev Cloud</span>
                  <span className="font-mono text-sky-400 text-[11px]">Product Tenure</span>
                </div>
                <div className="text-xs text-zinc-400 font-medium mb-2">
                  UX / UI Engineer Intern · SaaS Platform Team
                </div>
                <p className="text-xs text-zinc-400 leading-relaxed mb-3">
                  Spearheaded customer journey mapping and cognitive friction diagnostics, redesigning core issue triage workflows to compress navigational click depth by -55% and increase workflow completion by +40%.
                </p>
                <div className="text-[11px] font-mono text-sky-400 font-semibold pt-2 border-t border-white/[0.04]">
                  Impact: -55% Click Depth · +40% Workflow Completion
                </div>
              </div>
            </div>
          </div>

          {/* Academic Background */}
          <div className="space-y-3">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-sky-400">
              Academic & Institutional Training
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {CAREER_CREDENTIALS.education.map((edu, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-zinc-900/30 border border-white/[0.05]">
                  <div className="font-bold text-white text-xs">{edu.degree}</div>
                  <div className="text-xs text-zinc-400 mt-1">{edu.institution}</div>
                  <div className="text-[11px] text-zinc-500 font-mono mt-0.5">{edu.year}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Core Strategic Pillars */}
          <div className="space-y-3">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-sky-400">
              Core Technical & Advisory Competencies
            </h3>
            <div className="p-4 rounded-xl bg-zinc-900/30 border border-white/[0.05] space-y-2">
              {CAREER_CREDENTIALS.boardAppointments.map((app, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs text-zinc-300">
                  <Shield className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                  <span>{app}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-white/[0.08] flex items-center justify-between bg-zinc-950/80 shrink-0">
          <button
            onClick={handleDownload}
            className={`inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold rounded-lg transition-all ${
              downloaded
                ? 'bg-emerald-500 text-zinc-950'
                : 'bg-white hover:bg-zinc-200 text-zinc-950'
            }`}
          >
            {downloaded ? (
              <>
                <Check className="w-4 h-4" />
                <span>Executive CV Downloaded</span>
              </>
            ) : (
              <>
                <Download className="w-4 h-4 text-zinc-900" />
                <span>Download Executive Bio (.txt)</span>
              </>
            )}
          </button>
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-medium text-zinc-400 hover:text-white transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
