import { jsPDF } from 'jspdf';
import { Publication } from '../types/consulting';

interface PageContentItem {
  pageNumber: number;
  chapterTitle: string;
  chapterSubtitle: string;
  sections: {
    heading: string;
    body: string[];
    bulletPoints?: string[];
    calloutBox?: {
      title: string;
      content: string;
    };
  }[];
}

// Generate structured multi-page content for each publication
function getPublicationContent(pub: Publication): PageContentItem[] {
  const targetPages = pub.pages;
  const items: PageContentItem[] = [];

  // Content templates customized by publication topic
  if (pub.id === 'sovereign-ai-rag-whitepaper') {
    // 26 Pages total: Page 1 is Cover, Pages 2-26 are Content
    const topics = [
      {
        title: 'Executive Summary & Board Mandate',
        subtitle: 'The imperative for air-gapped sovereign language models in public administration',
        headings: ['Strategic Problem Statement', 'Core Hypotheses & Findings', 'The Zero-Egress Imperative'],
        callouts: ['Key Takeaway: Public cloud APIs introduce severe data sovereignty and compliance risks for official government archives.']
      },
      {
        title: 'Institutional Context & Document Silos',
        subtitle: 'Historical document fragmentation across federal administrative departments',
        headings: ['Legacy Gazette & Circular Repositories', 'The Cost of Search Latency', 'Multi-Ministry Coordination Drag'],
        callouts: ['Operational Baseline: Administrative officers historically spent 14+ hours manually cross-referencing conflicting paper circulars and PDF files.']
      },
      {
        title: 'MECE Bottleneck Decomposition',
        subtitle: 'Deconstructing document retrieval friction into mutually exclusive drivers',
        headings: ['Taxonomy & Classification Asymmetry', 'Semantic Disconnect in Administrative Terms', 'Manual Verification Bottlenecks'],
        callouts: ['Diagnostic Insight: 72% of institutional circulars were unindexed across departmental intranet repositories.']
      },
      {
        title: 'Air-Gapped System Architecture Overview',
        subtitle: 'Physical isolation, dedicated compute, and zero WAN connectivity',
        headings: ['Physical Enclave Parameters', 'High-Density Compute Topology', 'Hardware Cryptographic Perimeters'],
        callouts: ['Architecture Rule: No packet leaves physical government servers under any operational condition.']
      },
      {
        title: 'Vector Embedding & Chunking Protocols',
        subtitle: 'Preserving semantic hierarchy while respecting administrative departmental tiers',
        headings: ['Hierarchical Chunking Strategy', 'Context-Aware Token Overlap', 'Multi-Tenancy Vector Isolation'],
        callouts: ['Security Constraint: Chunks must carry cryptographic metadata enforcing departmental authorization before semantic retrieval.']
      },
      {
        title: 'Localized Quantized Foundation Models',
        subtitle: 'Evaluating parameter efficiency, quantization, and on-prem inference',
        headings: ['Open-Weights Model Selection', 'INT4 / INT8 Quantization Trade-offs', 'Inference Throughput Benchmarks'],
        callouts: ['Benchmark: Sub-3.2s query latency sustained on isolated GPU clusters for 100k+ statutory documents.']
      },
      {
        title: 'Hallucination Elimination & Verification Engine',
        subtitle: 'Enforcing line-level gazette citations for every output',
        headings: ['Citation Provenance Guardrails', 'Source Grounding Verification Loop', 'Confidence Scoring Thresholds'],
        callouts: ['Quality Metric: 99.8% reduction in hallucination risk via mandatory line-by-line gazette citation validation.']
      },
      {
        title: 'Multi-Ministry Role-Based Access Control (RBAC)',
        subtitle: 'Aligning vector search with 14 ministerial administrative jurisdictions',
        headings: ['Departmental Filter Matrices', 'Ephemeral Security Tokens', 'Need-to-Know Administrative Compartmentalization'],
        callouts: ['Compliance: Zero unauthorized inference across ministerial repositories without explicit authorization tokens.']
      },
      {
        title: 'Administrative Officer Interface Design',
        subtitle: 'Intuitive natural language search for time-sensitive public policy decisions',
        headings: ['Clean Natural Language Querying', 'Split-Screen Source Verification', 'Export & Briefing Generation'],
        callouts: ['User Adoption: 250+ secretariat officers trained with workflow completion climbing to 98% in operational pilots.']
      },
      {
        title: 'Operational Rollout & Pilot Performance',
        subtitle: 'Deployment across central ministries and regional administrative offices',
        headings: ['Phase 1 Pilot Parameters', 'Incident Turnaround Acceleration', 'Officer Satisfaction Metrics'],
        callouts: ['Impact Metric: Inter-ministerial policy brief preparation time dropped from 14 hours to under 4 minutes.']
      },
      {
        title: 'Adversarial Stress Testing & Security Audits',
        subtitle: 'Simulating prompt injection, data extraction, and unauthorized access vectors',
        headings: ['Adversarial Prompt Mitigation', 'Side-Channel Protection Protocols', 'Model Weight Tamper-Proofing'],
        callouts: ['Audit Result: Zero successful data extraction attempts during comprehensive security stress testing.']
      },
      {
        title: 'Knowledge Graph Synthesis & Multi-Hop Reasoning',
        subtitle: 'Connecting disparate state gazettes into an actionable administrative entity network',
        headings: ['Entity Extraction & Disambiguation', 'Temporal Relationship Mapping', 'Cross-Agency Directive Linkage'],
        callouts: ['Capability: Automatically discovers hidden historical linkages between central procurement rules and departmental gazette orders.']
      },
      {
        title: 'Data Governance & Continuous Indexing',
        subtitle: 'Ingesting daily gazette notifications and administrative circulars without operational drift',
        headings: ['Automated Sanitization Pipelines', 'Version Control for Living Directives', 'De-duplication & Schema Alignment'],
        callouts: ['Throughput: Continuously ingests 10,000+ daily regulatory notifications with zero latency degradation.']
      },
      {
        title: 'Sovereign Infrastructure Economics',
        subtitle: 'Cost-benefit analysis of on-premise hardware vs recurring cloud licensing',
        headings: ['CapEx vs OpEx Modeling', 'Long-Term Hardware Amortization', 'Elimination of Sovereign Lock-in'],
        callouts: ['Financial ROI: Replaces millions in recurring foreign cloud license liabilities with perpetual sovereign ownership.']
      },
      {
        title: 'National Digital Policy Alignment',
        subtitle: 'Embedding open interoperability and anti-lock-in principles into state AI',
        headings: ['Statutory Compliance Standards', 'Inter-Ministerial Consensus', 'Future Foundation Model Upgradability'],
        callouts: ['Policy Standard: Modular open-weight architecture prevents vendor lock-in and allows seamless model swapping.']
      },
      {
        title: 'Appendix A: System Specifications & Benchmarks',
        subtitle: 'Hardware configurations, vector indexing algorithms, and latency curves',
        headings: ['Cluster Hardware Topology', 'HNSW Vector Indexing Parameters', 'Load & Stress Test Profiles'],
        callouts: ['Technical Standard: Deployed across redundant Tier-4 sovereign server clusters with automated failover.']
      },
      {
        title: 'Appendix B: References, Citations & Author Bio',
        subtitle: 'Academic literature, legislative frameworks, and advisory coordinates',
        headings: ['Statutory Citations', 'Peer-Reviewed Bibliography', 'Author & Practice Leadership'],
        callouts: ['Author: Aishwarya Sriram Srinivasachary · Strategic Technology Advisor & Operational Transformation Specialist.']
      }
    ];

    // Distribute into 25 content pages (pages 2 to 26)
    for (let p = 2; p <= targetPages; p++) {
      const topicIndex = (p - 2) % topics.length;
      const t = topics[topicIndex];
      const partNumber = Math.floor((p - 2) / topics.length) + 1;
      items.push({
        pageNumber: p,
        chapterTitle: partNumber > 1 ? `${t.title} (Part ${partNumber})` : t.title,
        chapterSubtitle: t.subtitle,
        sections: [
          {
            heading: t.headings[0],
            body: [
              `In high-stakes public sector governance, administrative information asymmetry creates severe operational friction. Section ${p}.1 addresses how statutory gazettes, procurement policies, and inter-ministry administrative archives must be structured to ensure immediate, dependable retrieval under complex regulatory conditions.`,
              `By establishing formal mathematical boundaries around document chunking and vector storage, the system ensures that every extracted fact maintains complete cryptographic lineage back to its source document.`
            ],
            bulletPoints: [
              'Zero external network telemetry or third-party cloud dependencies.',
              'Line-by-line verification preventing black-box generation.',
              'Instant cryptographic clearance validation before vector similarity matching.'
            ]
          },
          {
            heading: t.headings[1],
            body: [
              `Empirical field testing confirmed that analysts using this architecture experienced an 85% lift in synthesis speed, eliminating the risk of human oversight during complex inter-agency decision cycles.`
            ],
            calloutBox: {
              title: 'Strategic Mandate',
              content: t.callouts[0]
            }
          }
        ]
      });
    }
  } else if (pub.id === 'sovereign-digital-transformation') {
    // 20 Pages total
    for (let p = 2; p <= targetPages; p++) {
      items.push({
        pageNumber: p,
        chapterTitle: `Sovereign Digital Modernization · Module ${p - 1}`,
        chapterSubtitle: 'Overcoming administrative boundaries and aligning federal technology standards',
        sections: [
          {
            heading: `Inter-Agency Modernization Directive §${p}.1`,
            body: [
              'Digital transformation in the public sector rarely stalls due to computing power limitations. Instead, institutional inertia, divergent procurement cycles, and contested data ownership represent the true points of friction.',
              'By establishing objective, shared data schemas and open API mandates, federal bodies can achieve cross-ministerial synchronization without replacing core legacy mainframes prematurely.'
            ],
            bulletPoints: [
              'Adoption of open data standards to eliminate proprietary vendor lock-in.',
              'Standardized mutual TLS encryption across all inter-departmental telemetry streams.',
              'Objective RICE prioritization for allocating digital infrastructure capital.'
            ]
          },
          {
            heading: `Executive Governance & Implementation Focus §${p}.2`,
            body: [
              'Long-term resilience requires embedding technical accountability directly into statutory procurement rules. When vendor contracts guarantee government ownership of data schemas and model weights, the state secures perpetual strategic autonomy.'
            ],
            calloutBox: {
              title: 'Institutional Principle',
              content: 'Sovereign technological independence is achieved when public bodies own their data schemas, cryptographic keys, and migration paths.'
            }
          }
        ]
      });
    }
  } else if (pub.id === 'zero-knowledge-state-governance') {
    // 18 Pages total
    for (let p = 2; p <= targetPages; p++) {
      items.push({
        pageNumber: p,
        chapterTitle: `Zero-Knowledge Cryptographic Infrastructure · Section ${p - 1}`,
        chapterSubtitle: 'Eliminating centralized identity honeypots through mathematical verification',
        sections: [
          {
            heading: `Cryptographic Architecture & Proof Circuits §${p}.1`,
            body: [
              'Monolithic centralized credential databases have become major liability centers for data leaks and regulatory non-compliance. Every centralized citizen repository represents a concentrated point of vulnerability.',
              'Non-interactive zero-knowledge proofs (ZK-SNARKs) solve this dilemma by enabling agencies to verify statutory compliance, tax status, and citizen eligibility mathematically—without exchanging or storing raw personal data.'
            ],
            bulletPoints: [
              'Sub-180ms verification generation on standard office computing hardware.',
              'Complete elimination of centralized citizen and official identity stores.',
              'Permissioned immutable ledgers providing a permanent, tamper-proof state audit log.'
            ]
          },
          {
            heading: `Hardware Security & Key Lifecycle Management §${p}.2`,
            body: [
              'Integrating hardware security modules (HSMs) allows public bodies to automate cryptographic key rotations every hour, rendering stolen credentials immediately obsolete.'
            ],
            calloutBox: {
              title: 'Zero-Knowledge Directive',
              content: 'Verification must be achieved through verifiable mathematical proof, never through the transmission of plaintext biographical records.'
            }
          }
        ]
      });
    }
  } else {
    // 16 Pages total: IT Delivery Restructuring
    for (let p = 2; p <= targetPages; p++) {
      items.push({
        pageNumber: p,
        chapterTitle: `IT Delivery Restructuring & Operational Throughput · Part ${p - 1}`,
        chapterSubtitle: 'Deconstructing workflow bottlenecks, eliminating schema errors, and stabilizing SLAs',
        sections: [
          {
            heading: `Root-Cause Incident Triage & Defect Pareto Modeling §${p}.1`,
            body: [
              'Enterprise IT teams frequently fall into continuous firefighting because management treats recurring bug symptoms rather than investigating upstream handoff friction.',
              'A disciplined Pareto analysis of 5,000+ support tickets revealed that 64% of operational delays stemmed from unaddressed data formatting mismatches between business logic and backend database triggers.'
            ],
            bulletPoints: [
              'Automated middleware data validation to eliminate manual handoffs.',
              'Batch job scheduling optimization to prevent midnight queue collisions.',
              'Standardized operating procedures (SOPs) enabling predictable sprint velocity.'
            ]
          },
          {
            heading: `SLA Stabilization & Measurable Performance Recovery §${p}.2`,
            body: [
              'Remediating upstream data handoffs compressed defect cycle times by 42% and elevated service delivery throughput by +32%, returning distressed client contracts to green health.'
            ],
            calloutBox: {
              title: 'Operational Rule',
              content: 'Sustainable engineering velocity is achieved by automating repetitive verification gates and giving teams clear, standardized operating playbooks.'
            }
          }
        ]
      });
    }
  }

  return items;
}

/**
 * Builds a pristine, high-end executive PDF briefing with the exact number of pages specified
 */
export function generateBriefingPdf(pub: Publication): jsPDF {
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4', // 210 x 297 mm
  });

  const totalPages = pub.pages;
  const pageWidth = 210;
  const pageHeight = 297;
  const margin = 20;
  const contentWidth = pageWidth - margin * 2;

  // --------------------------------------------------------------------------
  // PAGE 1: EXECUTIVE COVER PAGE (McKinsey / Kennedy School Style)
  // --------------------------------------------------------------------------
  // Top Header Bar
  doc.setFillColor(15, 23, 42); // Obsidian / slate-900 #0f172a
  doc.rect(0, 0, pageWidth, 12, 'F');

  // Decorative thin steel line
  doc.setFillColor(14, 116, 144); // Sky/Steel accent #0e7490
  doc.rect(0, 12, pageWidth, 1.5, 'F');

  // Practice Header Mark
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9);
  doc.setTextColor(148, 163, 184); // Slate-400
  doc.text('AISHWARYA SRIRAM SRINIVASACHARY  |  TECHNOLOGY STRATEGY & OPERATIONS', margin, 26);

  // Document Classification / Category
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8.5);
  doc.setTextColor(14, 116, 144);
  doc.text(`${pub.category.toUpperCase()} · STRATEGIC WORKING PAPER & ARCHITECTURE BRIEFING · ${pub.year}`, margin, 34);

  // Hairline Divider
  doc.setDrawColor(226, 232, 240); // Slate-200
  doc.setLineWidth(0.4);
  doc.line(margin, 38, pageWidth - margin, 38);

  // Main Document Title
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(22);
  doc.setTextColor(15, 23, 42); // Dark slate
  const titleLines = doc.splitTextToSize(pub.title, contentWidth);
  doc.text(titleLines, margin, 52);

  const titleHeight = titleLines.length * 9;
  const afterTitleY = 52 + titleHeight;

  // Executive Subtitle / Abstract Lead
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(11);
  doc.setTextColor(71, 85, 105); // Slate-600
  const abstractLines = doc.splitTextToSize(pub.abstract, contentWidth);
  doc.text(abstractLines, margin, afterTitleY + 4);

  const abstractHeight = abstractLines.length * 6;
  const metaBoxY = afterTitleY + abstractHeight + 10;

  // Metadata Specification Box
  doc.setFillColor(248, 250, 252); // Slate-50
  doc.setDrawColor(226, 232, 240);
  doc.setLineWidth(0.5);
  doc.roundedRect(margin, metaBoxY, contentWidth, 32, 2, 2, 'FD');

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8.5);
  doc.setTextColor(15, 23, 42);
  doc.text('DOCUMENT SPECIFICATIONS & CITATION METADATA', margin + 6, metaBoxY + 8);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8);
  doc.setTextColor(100, 116, 139);
  doc.text(`Author: Aishwarya Sriram Srinivasachary (Ex-Cabinet Secretariat, TCS, DevRev Cloud)`, margin + 6, metaBoxY + 15);
  doc.text(`Scope: ${pub.category} · Technology Strategy & Systems Architecture`, margin + 6, metaBoxY + 21);
  doc.text(`Format: ${totalPages} Pages · Strategic Working Paper & Architecture Analysis`, margin + 6, metaBoxY + 27);

  doc.text(`Publication Year: ${pub.year}`, margin + 105, metaBoxY + 15);
  doc.text(`Reading Cadence: ${pub.readTime}`, margin + 105, metaBoxY + 21);
  doc.text(`Status: Independent Technical Research Paper`, margin + 105, metaBoxY + 27);

  // Table of Contents Preview
  const tocY = metaBoxY + 42;
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(10);
  doc.setTextColor(15, 23, 42);
  doc.text('TABLE OF CONTENTS & CHAPTER DISPOSITION', margin, tocY);

  doc.setDrawColor(203, 213, 225);
  doc.setLineWidth(0.3);
  doc.line(margin, tocY + 3, pageWidth - margin, tocY + 3);

  const tocEntries = [
    { label: 'Executive Summary & Core Hypotheses', page: 'Page 2' },
    { label: 'Macro Context & Institutional Friction', page: 'Page 5' },
    { label: 'MECE Root Cause Decomposition', page: 'Page 8' },
    { label: 'System Architecture & Technical Protocol', page: 'Page 12' },
    { label: 'Operational Implementation & Rollout', page: 'Page 16' },
    { label: 'Empirical Outcomes & Telemetry Metrics', page: `Page ${totalPages - 4}` },
    { label: 'Statutory Policy & Long-Term Governance', page: `Page ${totalPages - 2}` },
    { label: 'Appendix: Technical Standards & Bibliography', page: `Page ${totalPages}` }
  ];

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.5);
  let currentTocY = tocY + 10;
  tocEntries.forEach((entry) => {
    doc.setTextColor(51, 65, 85);
    doc.text(entry.label, margin, currentTocY);
    doc.setTextColor(100, 116, 139);
    doc.text(entry.page, pageWidth - margin - 15, currentTocY);
    doc.setDrawColor(241, 245, 249);
    doc.line(margin + 75, currentTocY - 1, pageWidth - margin - 20, currentTocY - 1);
    currentTocY += 6.5;
  });

  // Cover Footer
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8);
  doc.setTextColor(148, 163, 184);
  doc.text('STRATEGIC WORKING PAPER & ARCHITECTURE BRIEFING · AUTHOR: AISHWARYA SRIRAM SRINIVASACHARY', margin, pageHeight - 15);
  doc.text(`1 of ${totalPages}`, pageWidth - margin - 12, pageHeight - 15);

  // --------------------------------------------------------------------------
  // PAGES 2 TO TOTAL PAGES: STRUCTURED CHAPTER CONTENT
  // --------------------------------------------------------------------------
  const contentItems = getPublicationContent(pub);

  contentItems.forEach((item) => {
    doc.addPage('a4', 'portrait');
    const pNum = item.pageNumber;

    // Running Header
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(7.5);
    doc.setTextColor(100, 116, 139);
    doc.text('STRATEGIC WORKING PAPER · AISHWARYA SRIRAM SRINIVASACHARY', margin, 14);

    doc.setFont('helvetica', 'normal');
    doc.text(`${pub.category.toUpperCase()} · ${pub.year}`, pageWidth - margin - 35, 14);

    doc.setDrawColor(226, 232, 240);
    doc.setLineWidth(0.3);
    doc.line(margin, 17, pageWidth - margin, 17);

    // Chapter Header
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(14);
    doc.setTextColor(15, 23, 42);
    doc.text(item.chapterTitle, margin, 27);

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(9);
    doc.setTextColor(100, 116, 139);
    doc.text(item.chapterSubtitle, margin, 33);

    doc.setDrawColor(241, 245, 249);
    doc.line(margin, 36, pageWidth - margin, 36);

    let curY = 44;

    // Section Items
    item.sections.forEach((sec) => {
      // Heading
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(10.5);
      doc.setTextColor(14, 116, 144); // Steel blue
      doc.text(sec.heading, margin, curY);
      curY += 6;

      // Paragraphs
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(8.5);
      doc.setTextColor(51, 65, 85);

      sec.body.forEach((para) => {
        const lines = doc.splitTextToSize(para, contentWidth);
        doc.text(lines, margin, curY);
        curY += lines.length * 4.6 + 4;
      });

      // Bullets if present
      if (sec.bulletPoints && sec.bulletPoints.length > 0) {
        sec.bulletPoints.forEach((bp) => {
          doc.setFillColor(14, 116, 144);
          doc.circle(margin + 2, curY - 1.2, 0.9, 'F');
          const bpLines = doc.splitTextToSize(bp, contentWidth - 8);
          doc.setTextColor(51, 65, 85);
          doc.text(bpLines, margin + 6, curY);
          curY += bpLines.length * 4.6 + 2;
        });
        curY += 2;
      }

      // Callout box if present
      if (sec.calloutBox) {
        doc.setFillColor(248, 250, 252);
        doc.setDrawColor(203, 213, 225);
        doc.setLineWidth(0.4);
        const calloutLines = doc.splitTextToSize(sec.calloutBox.content, contentWidth - 12);
        const boxHeight = calloutLines.length * 4.6 + 14;

        doc.roundedRect(margin, curY, contentWidth, boxHeight, 1.5, 1.5, 'FD');

        doc.setFont('helvetica', 'bold');
        doc.setFontSize(8);
        doc.setTextColor(14, 116, 144);
        doc.text(sec.calloutBox.title.toUpperCase(), margin + 6, curY + 6);

        doc.setFont('helvetica', 'italic');
        doc.setFontSize(8.5);
        doc.setTextColor(51, 65, 85);
        doc.text(calloutLines, margin + 6, curY + 11);

        curY += boxHeight + 8;
      }

      curY += 4;
    });

    // Running Footer
    doc.setDrawColor(226, 232, 240);
    doc.setLineWidth(0.3);
    doc.line(margin, pageHeight - 16, pageWidth - margin, pageHeight - 16);

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(7.5);
    doc.setTextColor(148, 163, 184);

    const docShortTitle = pub.title.length > 55 ? `${pub.title.substring(0, 55)}...` : pub.title;
    doc.text(docShortTitle, margin, pageHeight - 10);
    doc.text(`${pNum} of ${totalPages}`, pageWidth - margin - 14, pageHeight - 10);
  });

  return doc;
}
