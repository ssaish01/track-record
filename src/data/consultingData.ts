import { CaseStudy, Pillar, Publication, MatrixItem, MeceNode } from '../types/consulting';
import heroImg from '../assets/images/hero_executive_advisory_1793434531213.jpg'

export const HERO_IMAGE = heroImg;

export const CASE_STUDIES: CaseStudy[] = [
  // 1. CabSec - GovAI-RAG Engine
  {
    id: 'govai-rag-engine',
    organization: 'Cabinet Secretariat',
    title: 'National E-Governance & Statutory Compliance Knowledge Graph (GovAI-RAG Engine)',
    focusArea: 'Sovereign E-Governance Architecture & Knowledge Management',
    clientVertical: 'Public Sector Knowledge Governance (MeitY & Cabinet Secretariat)',
    engagementType: 'E-Governance Architecture & Institutional Knowledge Management',
    timeframe: '5 Months',
    heroStat: 'Air-Gapped AI',
    heroStatLabel: 'Zero-Egress Knowledge Engine with Source Citations',
    summary: 'Contributed as a data pipeline engineer on an inter-ministerial digital taskforce; helped build on-premise vector indexing and citation verification scripts for central gazettes and statutory administrative manuals, compressing cross-departmental policy research from 14 hours down to seconds with zero network data egress.',
    image: '/src/assets/images/casestudy_govai_rag_1793540016960.jpg',
    context: {
      macroChallenge: 'Policy analysts and administrative officers across ministries were working in disconnected document repositories. When an urgent inter-departmental policy clarification arose regarding public procurement rules or statutory gazette notifications, officers spent over 14 hours manually digging through legacy circulars and contradictory PDF archives to verify precedent.',
      baselineState: 'Decades of central government circulars, statutory orders, and administrative precedents were trapped in unindexed intranet drives and scanned gazette scans, creating delays and validation friction during inter-ministerial coordination.',
      stakeholders: ['Ministry of Electronics & IT (MeitY)', 'Department of Administrative Reforms (DARPG)', 'National Informatics Centre (NIC)', 'Cabinet Secretariat Coordination Wing']
    },
    hypothesis: {
      coreHypothesis: 'By assisting in the deployment of a locally hosted vector search engine with strict citation guardrails, our team compressed statutory search times from 14 hours down to seconds while ensuring confidential inter-departmental working drafts never touched external networks.',
      frameworkUsed: 'MECE Bottleneck Decomposition & Secure Vector Database Governance',
      diagnosticFindings: [
        'Handled document sets where over 70% of vital circulars were trapped in unindexed repositories were trapped in unindexed document repositories across disparate ministries.',
        'Public commercial AI tools were non-viable—government policy deliberations and pre-gazette drafts require complete on-premise data custody.',
        'Administrative officers required verifiable answers with direct line-by-line citations to official gazette notices and department orders, not ungrounded text.'
      ]
    },
    execution: {
      phases: [
        {
          phase: 'Phase 1',
          title: 'Gazette & Circular Taxonomy & Vector Pipeline Design',
          timeline: 'Weeks 1–6',
          initiatives: [
            'Designed and implemented document chunking and preprocessing scripts to clean heterogeneous ministerial archives.',
            'Built automated ingestion pipelines to vectorize incoming administrative notifications into local vector stores."'
          ]
        },
        {
          phase: 'Phase 2',
          title: 'Self-Hosted LLM & Regulatory Fact-Checking Guardrails',
          timeline: 'Weeks 7–14',
          initiatives: [
            'Assisted in setting up self-hosted open-weights language models on isolated on-premise server clusters.',
            'Developed metadata filtering and post-processing rules to ensure generated summaries mapped back to specific gazette paragraphs.'
          ]
        },
        {
          phase: 'Phase 3',
          title: 'Administrative Interface & Inter-Ministry Rollout',
          timeline: 'Weeks 15–20',
          initiatives: [
            'Contributed to the frontend search UI for internal ministry users.',
            'Assisted in conducting user walkthroughs and drafted technical documentation for initial ministry pilot groups.'
          ]
        }
      ]
    },
    impact: {
      primaryKpis: [
        { metric: '<3.2s', label: 'Search & Retrieval Time', context: 'Replaced 14-hour manual circular searches with instant verified answers' },
        { metric: '0%', label: 'External Data Exposure', context: 'Operates 100% on isolated hardware with zero cloud egress' },
        { metric: '14 Depts', label: 'Role-Based Access', context: 'Precise permission controls matching ministerial administrative jurisdictions' },
        { metric: '100%', label: 'Source Traceability', context: 'Every generated summary cites exact official gazette page and paragraph sources' }
      ],
      waterfallDrivers: [
        { lever: 'Air-Gapped Vector Search & Semantic Indexing', contribution: 'Instant Answers', type: 'working_capital' },
        { lever: 'Line-by-Line Document Citation Verification', contribution: 'Zero Hallucinations', type: 'cost' },
        { lever: 'Intuitive Natural Language Search Interface', contribution: '+85% Research Velocity', type: 'revenue' },
        { lever: 'Self-Contained On-Premise Infrastructure', contribution: 'Total Sovereignty', type: 'working_capital' }
      ]
    },
    quote: {
      text: 'Aishwarya brought rigorous engineering execution to a complex e-governance mandate. Her localized vector retrieval pipeline and citation controls proved that we could run modern semantic search reliably across central gazettes and administrative archives.',
      author: 'Technical Director',
      role: 'E-Governance Architecture',
      company: 'Cabinet Secretariat'
    }
  },

  // 2. CabSec - GovChain-ID
{
    id: 'govchain-id',
    organization: 'Cabinet Secretariat',
    title: 'Inter-Ministry Credential & Statutory Verification Ledger (GovChain-ID)',
    focusArea: 'Cryptographic Security & Public Credential Verification',
    clientVertical: 'Cross-Departmental Verification & Data Privacy',
    engagementType: 'Zero-Knowledge Protocol Design & Inter-Departmental Verification',
    timeframe: '5 Months',
    heroStat: 'Zero Honeypots',
    heroStatLabel: 'Cryptographic Credential Checks Without Raw Data Exposure',
    summary: 'Contributed to the development and testing of a zero-knowledge credential verification prototype (ZK-SNARKs) across departmental testbeds, helping ministries verify statutory clearances and compliance without transmitting raw records.',
    image: '/src/assets/images/casestudy_cyber_zerotrust_1793540019615.jpg',
    context: {
      macroChallenge: 'Centralized public registries and citizen databases were attractive targets for unauthorized scraping and security breaches. At the same time, routine credential verifications between the Ministry of Finance, Ministry of Corporate Affairs, and licensing bodies were bogged down in manual document audits, taking nearly a week to complete.',
      baselineState: 'Verifying an institutional subsidy eligibility or statutory corporate compliance required physically sharing raw, sensitive corporate and citizen identity documents across unstandardized departmental channels.',
      stakeholders: ['Ministry of Corporate Affairs (MCA)', 'Department of Revenue (Ministry of Finance)', 'National Informatics Centre (NIC)', 'Inter-Ministerial Compliance Board']
    },
    hypothesis: {
      coreHypothesis: 'By utilizing zero-knowledge proofs (ZK-SNARKs), agencies can mathematically verify that an applicant satisfies statutory financial and licensing criteria without exposing underlying raw biographical records or maintaining centralized honeypots.',
      frameworkUsed: 'ZK-SNARKs Protocol Implementation & Secure Data Pipelines',
      diagnosticFindings: [
        'Centralized credential stores faced high security overhead and audit liabilities when holding unnecessary citizen records.',
        'Routine cross-departmental compliance checks dragged on for 3 to 7 days due to manual paperwork exchanges.',
        'Over-sharing of personal data created major compliance, privacy, and data-protection risks under modern statutory privacy mandates.'
      ]
    },
    execution: {
      phases: [
        {
          phase: 'Phase 1',
          title: 'Zero-Knowledge Circuit Design & Data Formatting',
          timeline: 'Weeks 1–6',
          initiatives: [
            'Assisted in structuring verification scripts and data pipelines that confirm financial compliance and statutory licenses without revealing personal data.',
            'Helped test cryptographic circuit inputs and validate correctness across development testbeds.'
          ]
        },
        {
          phase: 'Phase 2',
          title: 'Decentralized Verification Ledger Integration',
          timeline: 'Weeks 7–15',
          initiatives: [
            'Contributed to building permissioned state ledger components and validator testing nodes distributed across partner civilian ministries.',
            'Assisted in integrating hardware security module (HSM) routines for automated departmental verification signatures.'
          ]
        },
        {
          phase: 'Phase 3',
          title: 'API Integration & Pilot Department Rollout',
          timeline: 'Weeks 16–20',
          initiatives: [
            'Supported 8 pilot departments in integrating lightweight verification tools into standard internal portals.',
            'Helped benchmark verification response times and drafted technical documentation for internal agency use.'
          ]
        }
      ]
    },
    impact: {
      primaryKpis: [
        { metric: '0', label: 'Central Honeypots', context: 'Eliminated monolithic database targets vulnerable to external breaches' },
        { metric: '<180ms', label: 'Verification Speed', context: 'Instant cryptographic confirmation with zero paperwork delay' },
        { metric: '100%', label: 'Tamper-Proof Audit Trail', context: 'Decentralized ledger permanently seals all state credential events' },
        { metric: 'Zero', label: 'Private Data Leaks', context: 'Compliance verified purely through mathematical proof, not raw records' }
      ],
      waterfallDrivers: [
        { lever: 'Zero-Knowledge Mathematical Verification', contribution: 'Zero Private Data Shared', type: 'working_capital' },
        { lever: 'Decentralized Multi-Ministry Ledger Nodes', contribution: 'Honeypots Eliminated', type: 'cost' },
        { lever: 'Hardware Security Module Key Protection', contribution: 'Hardware Isolation', type: 'revenue' },
        { lever: 'Instant Inter-Departmental Verification APIs', contribution: '5-Day Wait Eliminated', type: 'working_capital' }
      ]
    },
    quote: {
      text: 'Aishwarya demonstrated that citizen privacy and administrative rigor can be achieved simultaneously. Her zero-knowledge verification prototype gave our working group a practical, mathematical blueprint to eliminate redundant credential storage across departments.',
      author: 'Director of Digital Identity',
      role: 'Public Systems Verification Working Group',
      company: 'Cabinet Secretariat'
    }
  },

  // 3. CabSec - Cross-Ministerial Interoperability Grid
  {
    id: 'national-api-gateway',
    organization: 'Cabinet Secretariat',
    title: 'Cross-Ministerial Interoperability Grid & National API Gateway',
    focusArea: 'Enterprise Architecture & API Modernization',
    clientVertical: 'Civilian Inter-Ministerial Telemetry & Enterprise Architecture',
    engagementType: 'Enterprise Integration & Zero-Trust Telemetry Modernization',
    timeframe: '5 Months',
    heroStat: '<45ms',
    heroStatLabel: 'Sub-Second Data Synchronization Between Ministries',
    summary: 'Contributed to the cross-ministerial integration team connecting 12 federal ministries; assisted in building secure middleware proxy adapters and telemetry streams that enabled real-time data exchange across finance, commerce, and logistics without destabilizing legacy mainframes.',
    image: '/src/assets/images/casestudy_gov_modernization_1793435662064.jpg',
    context: {
      macroChallenge: 'Over 20 federal ministries operated on completely different technological generations—ranging from 30-year-old mainframe software to modern SQL clouds. When one department needed data from another, they had to export CSV files, get manual approvals, and wait days.',
      baselineState: 'Fragmented data exchanges riddled with formatting mismatches, slow turnaround times, and zero shared real-time operational visibility.',
      stakeholders: ['Ministry of Finance (PFMS & GSTN)', 'Ministry of Commerce & Industry (DPIIT)', 'National Informatics Centre (NIC)', 'Federal IT Steering Council']
    },
    hypothesis: {
      coreHypothesis: 'Rather than forcing an expensive, multi-year rebuild that would disrupt daily governance, wrapping legacy systems in modern proxy adapters and connecting them through an encrypted API gateway could safely streamline data exchange.',
      frameworkUsed: 'Strangler Fig Migration Pattern & Zero-Trust Network Access (ZTNA)',
      diagnosticFindings: [
        'Nearly a quarter of cross-agency data sync attempts failed due to mismatched file formatting and inconsistent schemas.',
        'Legacy mainframes slowed to a crawl during end-of-quarter reporting spikes because queries were sent all at once.',
        'Internal government network links lacked end-to-end encryption, creating avoidable security vulnerabilities.'
      ]
    },
    execution: {
      phases: [
        {
          phase: 'Phase 1',
          title: 'Legacy Interface Mapping & Adapter Design',
          timeline: 'Weeks 1–6',
          initiatives: [
            'Assisted in auditing legacy data interfaces across finance, commerce, logistics, and corporate affairs.',
            'Helped build proxy adapters that translate legacy mainframe output into modern, clean JSON/REST data on the fly.'
          ]
        },
        {
          phase: 'Phase 2',
          title: 'High-Throughput Gateway & Security Controls',
          timeline: 'Weeks 7–14',
          initiatives: [
            'Contributed to optimizing API gateway components supporting high-throughput transaction handling and sub-45ms response benchmarks.',
            'Assisted in implementing mutual TLS encryption and granular permission configurations for connecting services.'
          ]
        },
        {
          phase: 'Phase 3',
          title: 'Live Ministry Migration & Monitoring',
          timeline: 'Weeks 15–20',
          initiatives: [
            'Supported the rollout and live connection of 12 flagship ministries to the shared grid with zero operational downtime.',
            'Helped configure monitoring dashboards tracking system health, bandwidth, and error rates across participating agencies.'
          ]
        }
      ]
    },
    impact: {
      primaryKpis: [
        { metric: '<45ms', label: 'Average Response Time', context: 'Replaced multi-day manual CSV data transfers with instant synchronization' },
        { metric: '100k/s', label: 'Peak Capacity', context: 'High-throughput system built to handle heavy national reporting spikes' },
        { metric: '12 Ministries', label: 'Connected on Day 1', context: 'Harmonized onto a single modern, encrypted API standard' },
        { metric: '0 Minutes', label: 'System Downtime', context: 'Smooth transition without disrupting ongoing public operations' }
      ],
      waterfallDrivers: [
        { lever: 'Non-Disruptive Strangler Fig Architecture', contribution: 'Preserved Legacy Tech', type: 'working_capital' },
        { lever: 'End-to-End Mutual TLS & Zero-Trust Access', contribution: 'Ironclad Security', type: 'cost' },
        { lever: 'Real-Time Telemetry Streaming', contribution: 'Days Saved per Request', type: 'revenue' },
        { lever: 'Automated Schema Translation', contribution: 'Zero Formatting Mismatches', type: 'working_capital' }
      ]
    },
    quote: {
      text: 'Aishwarya was instrumental in bridging legacy mainframes with modern API standards. Her proxy adapters allowed 12 ministries to synchronize data under 45ms without interrupting daily public operations.',
      author: 'Inter-Agency Integration Lead',
      role: 'National Systems Working Group',
      company: 'Cabinet Secretariat'
    }
  },

  // 4. CabSec - Predictive-Gov
  {
    id: 'predictive-gov',
    organization: 'Cabinet Secretariat',
    title: 'National Supply Chain & Essential Commodities Telemetry Platform (Predictive-Gov)',
    focusArea: 'Advanced Analytics & Public Logistics Forecasting',
    clientVertical: 'Public Supply Chain Telemetry & Commodity Forecasting',
    engagementType: 'Predictive Logistics Modeling & Dynamic Distribution Matrices',
    timeframe: '6 Months',
    heroStat: '18-Day Horizon',
    heroStatLabel: 'Early Detection of National Commodity Distribution Bottlenecks',
    summary: 'Contributed to building time-series telemetry pipelines and predictive anomaly detection models ingesting 450+ freight and agricultural market feeds, giving inter-ministerial taskforces up to 18 days of early warning on emerging food grain logistics and fertilizer distribution bottlenecks.',
    image: '/src/assets/images/casestudy_govai_rag_1793540016960.jpg',
    context: {
      macroChallenge: 'Essential commodity distribution taskforces were constantly playing catch-up. They relied on lagging monthly reports to spot seasonal crop inventory shortfalls, port freight congestion, and rail wagon allocation delays—meaning leadership only found out about distribution bottlenecks after retail prices had already spiked.',
      baselineState: 'Fragmented logistics data feeds arrived weeks after the fact, leaving consumer affairs and civil supply departments reacting to distribution crises rather than preventing them.',
      stakeholders: ['Ministry of Consumer Affairs, Food & Public Distribution', 'Ministry of Agriculture & Farmers Welfare', 'Ministry of Railways (Freight Operations)', 'Inter-Ministerial Monitoring Committee']
    },
    hypothesis: {
      coreHypothesis: 'Continuously correlating railway freight rake movements, wholesale market (mandi) arrivals, port container dwell times, and seasonal crop yields into a unified time-series model helps flag distribution bottlenecks 2 to 3 weeks before regional shortages occur.',
      frameworkUsed: 'Predictive Telemetry Modeling & RICE-Prioritized Risk Matrix',
      diagnosticFindings: [
        'Early indicators of regional supply shortages were present in freight telemetry 14 to 18 days in advance, but buried under fragmented departmental spreadsheets.',
        'Different logistics divisions were prioritizing rail wagon allocation using manual memos rather than empirical predictive demand.',
        'Leadership had static monthly charts, but lacked a real-time ranking of which transport corridors required immediate freight diversion.'
      ]
    },
    execution: {
      phases: [
        {
          phase: 'Phase 1',
          title: 'Logistics Telemetry Pipeline & Signal Filtering',
          timeline: 'Weeks 1–8',
          initiatives: [
            'Assisted in building streaming data connectors ingesting continuous data feeds across railway freight, port container traffic, and wholesale agricultural mandis.',
            'Helped apply automated signal filtering to strip out baseline noise and highlight genuine distribution anomalies.'
          ]
        },
        {
          phase: 'Phase 2',
          title: 'Predictive Machine Learning Models',
          timeline: 'Weeks 9–16',
          initiatives: [
            'Helped train and evaluate predictive time-series models tracking seasonal crop harvesting, monsoon transport patterns, and cyclical demand divergences.',
            'Assisted inter-ministerial logistics coordinators in tuning model sensitivity to minimize false alerts.'
          ]
        },
        {
          phase: 'Phase 3',
          title: 'Executive Logistics Cockpit & Allocation Matrix',
          timeline: 'Weeks 17–24',
          initiatives: [
            'Supported the delivery of the executive command dashboard visualizing commodity flow trajectories with root-cause bottleneck breakdowns.',
            'Helped implement objective scoring matrices to assist leaders in identifying transport corridors requiring emergency freight support.'
          ]
        }
      ]
    },
    impact: {
      primaryKpis: [
        { metric: '18 Days', label: 'Early Warning Head-Start', context: 'Surfaces emerging regional commodity shortages and freight bottlenecks in advance' },
        { metric: '94.2%', label: 'Forecast Accuracy', context: 'High precision validated against historical seasonal crop disruption datasets' },
        { metric: '450+', label: 'Automated Feeds', context: 'Continuous monitoring across freight corridors, mandis, and central granaries' },
        { metric: 'Objective', label: 'Allocation Standard', context: 'Replaced subjective debates with data-driven freight scheduling' }
      ],
      waterfallDrivers: [
        { lever: 'Real-Time Multivariate Anomaly Detection', contribution: '18-Day Early Warning', type: 'working_capital' },
        { lever: 'Noise Denoising & Automated Signal Cleaning', contribution: 'Zero Alert Fatigue', type: 'cost' },
        { lever: 'RICE Decision Prioritization Framework', contribution: 'Optimized Freight Dispatch', type: 'revenue' },
        { lever: 'Executive Simulation Cockpit', contribution: 'Decisive Leadership Action', type: 'working_capital' }
      ]
    },
    quote: {
      text: 'Aishwarya turned noisy, overwhelming freight and market feeds into clean, actionable early-warning signals. Her data pipelines gave our inter-ministerial taskforce the foresight to redirect supply convoys before retail price shocks occurred.',
      author: 'Joint Director (Logistics)',
      role: 'Essential Commodities Monitoring Taskforce',
      company: 'Cabinet Secretariat'
    }
  },

  // 5. CabSec - Zero-Trust Cyber & Automated Remediation
  {
    id: 'cyber-zerotrust-engine',
    organization: 'Cabinet Secretariat',
    title: 'Public Sector Zero-Trust Infrastructure & Critical Service Isolation Engine',
    focusArea: 'Civilian Infrastructure Security & Automated Service Hardening',
    clientVertical: 'Public Sector Cybersecurity & Automated Workload Protection',
    engagementType: 'Zero-Trust Architecture & Automated Infrastructure Hardening',
    timeframe: '6 Months',
    heroStat: '<800ms',
    heroStatLabel: 'Automated Service Quarantine and Workload Containment',
    summary: 'Contributed to building automated network micro-segmentation rules and Hardware Security Module (HSM) key rotation scripts for public-facing citizen service portals (GSTN, DigiLocker gateways), containing anomalous traffic in under 800 milliseconds during simulated load and security audits.',
    image: '/src/assets/images/casestudy_cyber_zerotrust_1793540019615.jpg',
    context: {
      macroChallenge: 'Public digital infrastructure systems handling tax filings and public services were experiencing high volumes of unauthorized scanning. The existing perimeter firewalls protected external ingress, but once an internal service or third-party vendor connection was compromised, attackers could theoretically move across departmental networks while manual security reviews took hours.',
      baselineState: 'Internal government data center networks operated on an outdated assumption of perimeter trust: once inside the state WAN, applications communicated without continuous identity verification.',
      stakeholders: ['Indian Computer Emergency Response Team (CERT-In)', 'National Informatics Centre (NIC)', 'Ministry of Electronics & IT (MeitY)', 'Public Digital Infrastructure Working Group']
    },
    hypothesis: {
      coreHypothesis: 'Isolating each e-governance service into a micro-segmented container enclave, requiring cryptographic proof for every inter-service database request, and automating incident response helps quarantine compromised workloads in under a second.',
      frameworkUsed: 'Continuous Compliance Auditing & Automated Playbook Orchestration',
      diagnosticFindings: [
        'Over 85% of internal server-to-server calls between public web portals and database tiers lacked continuous cryptographic verification.',
        'Database encryption keys were rotated manually on 6-month cycles, creating excessive vulnerability windows if a credential was misplaced.',
        'Systems administrators spent hours manually auditing access logs when anomalous traffic was detected on citizen portals.'
      ]
    },
    execution: {
      phases: [
        {
          phase: 'Phase 1',
          title: 'Workload Micro-Segmentation & Mutual TLS Enforcement',
          timeline: 'Weeks 1–8',
          initiatives: [
            'Assisted in configuring software-defined micro-segmentation boundaries across internal e-governance data centers.',
            'Helped enforce unique cryptographic workload identities across citizen service microservices.'
          ]
        },
        {
          phase: 'Phase 2',
          title: 'Automated Cryptographic Key Lifecycle',
          timeline: 'Weeks 9–16',
          initiatives: [
            'Assisted in integrating Hardware Security Module (HSM) automation scripts for scheduled database key rotation.',
            'Helped eliminate static credentials and API keys across core citizen portal infrastructure test environments.'
          ]
        },
        {
          phase: 'Phase 3',
          title: 'Automated Isolation Playbooks & Resilience Drills',
          timeline: 'Weeks 17–24',
          initiatives: [
            'Supported the configuration of automated security playbooks designed to isolate anomalous container workloads in under 800ms.',
            'Helped execute platform resilience and high-concurrency automated stress drills.'
          ]
        }
      ]
    },
    impact: {
      primaryKpis: [
        { metric: '<800ms', label: 'Automated Containment', context: 'Isolated compromised service containers instantly, down from hours of manual investigation' },
        { metric: '100%', label: 'Mutual Workload Authentication', context: 'Every single inter-service database request requires mutual cryptographic verification' },
        { metric: '60 Min', label: 'Key Rotation Cycle', context: 'Automated key lifecycle rendering compromised credentials useless within the hour' },
        { metric: 'Zero', label: 'Lateral Movement', context: 'Zero successful lateral traversals during rigorous penetration stress tests' }
      ],
      waterfallDrivers: [
        { lever: 'Dynamic Software-Defined Micro-Segmentation', contribution: 'Lateral Movement Blocked', type: 'working_capital' },
        { lever: 'Automated Incident Remediation Playbooks', contribution: 'Sub-Second Isolation', type: 'cost' },
        { lever: 'Hourly Hardware Security Module (HSM) Key Rotation', contribution: 'Stolen Keys Ineffective', type: 'revenue' },
        { lever: 'Continuous Real-Time Posture Auditing', contribution: 'Zero Blindspots', type: 'working_capital' }
      ]
    },
    quote: {
      text: 'Aishwarya’s automation scripts replaced slow manual auditing with sub-second container isolation. Her focus on automated cryptographic key management substantially hardened our public service architectures against lateral intrusion.',
      author: 'Chief Information Security Officer',
      role: 'Public Infrastructure Security Cell',
      company: 'Cabinet Secretariat'
    }
  },

  // 6. CabSec - GovCloud-Mesh
  {
    id: 'govcloud-mesh',
    organization: 'Cabinet Secretariat',
    title: 'Sovereign Edge Computing & Remote District Administration Platform (GovCloud-Mesh)',
    focusArea: 'Civilian Edge Resiliency & Offline-First District Administration',
    clientVertical: 'Public Sector Cloud & Resilient District E-Governance',
    engagementType: 'Edge Containerization & Offline-First Distributed Synchronization',
    timeframe: '5 Months',
    heroStat: '100% Uptime',
    heroStatLabel: 'Uninterrupted Operations During 30-Day Network Outages',
    summary: 'Contributed to deploying lightweight, offline-first container workloads across 45 remote district magistrate offices and rural service blocks, helping ensure citizen welfare distribution software maintained 100% operational continuity and conflict-free data sync during prolonged telecommunication outages.',
    image: '/src/assets/images/casestudy_govcloud_mesh_1793540018615.jpg',
    context: {
      macroChallenge: 'Remote district magistrate headquarters and rural panchayat centers in hilly and coastal regions frequently lost fiber connectivity to central state data centers. When connections failed, local officers could not process welfare disbursements, land record verifications, or ration quota allocations, causing severe citizen hardship.',
      baselineState: 'Heavy reliance on central cloud servers; rural administrative offices were halted during local telecom fiber cuts, forcing officers to revert to manual paper ledgers that took days to re-enter.',
      stakeholders: ['Ministry of Rural Development', 'Ministry of Panchayati Raj', 'Department of Telecommunications (BharatNet)', 'National Informatics Centre (NIC)']
    },
    hypothesis: {
      coreHypothesis: 'Packaging public welfare applications into lightweight, tamper-resistant edge containers with conflict-free replicated data types (CRDTs) helps remote district offices process citizen services autonomously during offline periods and sync smoothly upon reconnection.',
      frameworkUsed: 'GitOps Pipeline Automation & Immutable Infrastructure Design',
      diagnosticFindings: [
        'Remote block offices experienced an average of 42 hours of network downtime monthly due to physical fiber cuts and weather disruptions.',
        'Software updates for rural administration computers lagged by up to 9 months because installing patches required physical technician visits.',
        'Re-entering paper entries after network restoration caused widespread clerical errors and duplicate benefit payouts.'
      ]
    },
    execution: {
      phases: [
        {
          phase: 'Phase 1',
          title: 'Hardened Offline-First Container Images',
          timeline: 'Weeks 1–6',
          initiatives: [
            'Assisted in building ultra-lean, secure software containers embedded with local SQLite and CRDT synchronization datastores.',
            'Helped configure automated internal software registry signing workflows before deployment.'
          ]
        },
        {
          phase: 'Phase 2',
          title: 'Decentralized Edge Mesh & Conflict-Free Sync',
          timeline: 'Weeks 7–14',
          initiatives: [
            'Contributed to setting up federated Kubernetes testbeds connecting regional state data centers with district administration hubs.',
            'Assisted in testing conflict-free data replication (CRDTs) to ensure offline citizen welfare transactions merge smoothly upon reconnection.'
          ]
        },
        {
          phase: 'Phase 3',
          title: 'District Pilot & Network Severance Simulation',
          timeline: 'Weeks 15–20',
          initiatives: [
            'Supported the physical and remote installation of edge micro-servers across 45 remote district magistrate and block development offices.',
            'Helped monitor intentional 30-day telecommunication blackout simulation drills and verify automated data synchronization.'
          ]
        }
      ]
    },
    impact: {
      primaryKpis: [
        { metric: '100%', label: 'District Operational Continuity', context: 'Maintained uninterrupted citizen service delivery during full 30-day offline simulation' },
        { metric: '45 Districts', label: 'Remote Deployments', context: 'Standardized edge appliances deployed to remote administrative blocks' },
        { metric: 'Zero', label: 'Configuration Drift', context: 'Every node runs identical, verified software managed through automated GitOps' },
        { metric: '100%', label: 'Data Sovereignty', context: 'Complete institutional ownership on sovereign infrastructure with zero commercial cloud leakage' }
      ],
      waterfallDrivers: [
        { lever: 'GitOps Automated Multi-Cluster Infrastructure', contribution: 'Zero Configuration Errors', type: 'working_capital' },
        { lever: 'Decentralized Conflict-Free Data Synchronization', contribution: 'Offline Autonomy', type: 'cost' },
        { lever: 'Tamper-Resistant Ruggedized Edge Appliances', contribution: 'Harsh Environment Readiness', type: 'revenue' },
        { lever: 'Air-Gapped Cryptographic Software Registry', contribution: 'Supply Chain Security', type: 'working_capital' }
      ]
    },
    quote: {
      text: 'Aishwarya solved a severe grassroots administrative headache. Her offline container architecture ensured that remote district offices could continue issuing land certificates and welfare aid even when central fiber links were severed.',
      author: 'Director of District Informatics',
      role: 'Rural E-Governance Taskforce',
      company: 'Cabinet Secretariat'
    }
  },

  // 7. CabSec - Apex Digital Policy Framework
  {
    id: 'apex-digital-policy',
    organization: 'Cabinet Secretariat',
    title: 'Apex Digital Policy Framework & National Interoperability Governance',
    focusArea: 'Institutional Policy, Compliance & Long-Term Transition',
    clientVertical: 'National Digital Policy & Tech Governance',
    engagementType: 'National Technical Standards & Strategic Policy Advisory',
    timeframe: '4 Months',
    heroStat: '40 Contracts',
    heroStatLabel: 'Public IT Tenders Audited Across ~$450M Procurement Pipeline',
    summary: 'Contributed as a technical specialist on the National Interoperability Working Group; assisted in analyzing 40 public technology contracts to isolate vendor lock-in risks, and helped draft open-API compliance matrices and technical standards adopted across public IT tenders.',
    image: '/src/assets/images/casestudy_gov_modernization_1793435662064.jpg',
    context: {
      macroChallenge: 'Different ministries were independently hiring commercial tech vendors who built closed, proprietary systems. When government departments later needed to share data or switch providers, vendors charged exorbitant fees or claimed ownership over proprietary formats.',
      baselineState: 'Over 60 conflicting departmental procurement policies; public bodies were locked into multi-million dollar annual maintenance contracts with commercial vendors.',
      stakeholders: ['Cabinet Committee on Economic Affairs', 'Ministry of Electronics & IT (MeitY)', 'Department of Expenditure (Ministry of Finance)', 'Government e-Marketplace (GeM) Steering Committee']
    },
    hypothesis: {
      coreHypothesis: 'Establishing objective technical standards requiring open data schemas, sovereign cryptographic key custody, and standard API export hooks in public procurement helps government bodies eliminate predatory vendor lock-in and avoid substantial lifecycle costs.',
      frameworkUsed: 'Technical Policy Evaluation & Open Standards Framework',
      diagnosticFindings: [
        'Proprietary vendor lock-in added a 35% surcharge to ongoing maintenance and feature upgrades.',
        'Migrating data from closed commercial databases cost departments up to $18M for a single transition.',
        'Past contracts frequently neglected to secure government ownership over AI models trained using public data.'
      ]
    },
    execution: {
      phases: [
        {
          phase: 'Phase 1',
          title: 'Contract Audit & Technical Discovery',
          timeline: 'Weeks 1–6',
          initiatives: [
            'Assisted in auditing 40 major public technology contracts signed over the past decade to identify common vendor lock-in clauses.',
            'Collaborated with taskforce colleagues and legal advisors to quantify vendor lock-in penalties and technical friction.'
          ]
        },
        {
          phase: 'Phase 2',
          title: 'Open API Standards & Interoperability Rubric',
          timeline: 'Weeks 7–14',
          initiatives: [
            'Helped draft technical evaluation rubrics, schema validation criteria, and open-API requirements for public tenders.',
            'Assisted in drafting model contractual language requiring open data schema export and government custody of cryptographic keys.'
          ]
        },
        {
          phase: 'Phase 3',
          title: 'Working Group Alignment & Adoption',
          timeline: 'Weeks 15–20',
          initiatives: [
            'Assisted taskforce directors in preparing documentation and technical assessments for inter-ministerial IT working groups.',
            'Contributed technical baseline data to the National Digital Assurance Board for evaluating future public IT contracts.'
          ]
        }
      ]
    },
    impact: {
      primaryKpis: [
        { metric: '40 Tenders', label: 'Procurement Contracts Audited', context: 'Identified proprietary lock-in risks across ~$450M in projected 5-year public IT tenders' },
        { metric: '100%', label: 'Sovereign Data Ownership', context: 'Guaranteed government custody over all data schemas, models, and cryptographic keys' },
        { metric: 'Binding', label: 'National Standard', context: 'Officially adopted across all federal procurement guidelines and technology tenders' },
        { metric: 'Unanimous', label: 'Inter-Agency Adoption', context: 'Achieved full consensus across federal ministries without political friction' }
      ],
      waterfallDrivers: [
        { lever: 'Mandatory Open Schema & Anti-Lock-in Contract Clauses', contribution: '$450M Taxpayer Savings', type: 'revenue' },
        { lever: 'Sovereign Cryptographic Key Custody Rules', contribution: 'Strategic Independence', type: 'working_capital' },
        { lever: 'Standardized Public-Private Technical Guidelines', contribution: '-60% Tender Review Time', type: 'cost' },
        { lever: 'National Digital Assurance Board Oversight', contribution: 'Enduring Protection', type: 'working_capital' }
      ]
    },
    quote: {
      text: 'Aishwarya brought rigorous technical analysis and sharp data evidence to our working group discussions. Her contract evaluation rubrics gave us the leverage to insist on open schemas and sovereign data ownership.',
      author: 'Taskforce Director',
      role: 'Public Technology Governance Working Group',
      company: 'Cabinet Secretariat'
    }
  },

  // 8. TCS - Enterprise Technology Consulting
  {
    id: 'tcs-enterprise-restructuring',
    organization: 'Tata Consultancy Services',
    title: 'Enterprise Technology Consulting & Operational Restructuring',
    focusArea: 'Enterprise Technology Consulting, IT Operational Restructuring & Client Delivery',
    clientVertical: 'Global Enterprise IT & Operational Delivery',
    engagementType: 'IT Operational Optimization & System Workflow Restructuring',
    timeframe: '6 Months',
    heroStat: '+32% Velocity',
    heroStatLabel: 'Service Delivery Throughput and SLA Compliance',
    summary: 'Contributed to turning around a client IT delivery pipeline for a Fortune 500 enterprise, helping pinpoint upstream data schema errors and cutting ticket resolution times by 42%.',
    image: '/src/assets/images/casestudy_enterprise_tcs_1793435663716.jpg',
    context: {
      macroChallenge: 'A Tier-1 enterprise client was drowning in unresolved support tickets, experiencing friction between disparate ERP modules, and failing contractual SLAs. The engineering team was exhausted from continuous firefighting.',
      baselineState: 'Manual, disorganized ticket queues with resolution times dragging 38% past contract benchmarks; high recurring maintenance costs and strained client trust.',
      stakeholders: ['Client IT Operations Director', 'TCS Global Delivery Lead', 'Enterprise Solutions Architect', 'Cross-Functional Engineering Pods']
    },
    hypothesis: {
      coreHypothesis: 'Delivery slowdowns are frequently caused by mismatched data schemas between business logic and backend databases that force repetitive manual fixes, rather than a lack of engineering talent or server power.',
      frameworkUsed: 'Root Cause Incident Tree & Lean Operational Workflow Re-engineering',
      diagnosticFindings: [
        'Just 15% of recurring bug types were burning through nearly two-thirds of engineering maintenance hours.',
        'Support engineers were forced to manually clean data across 4 handover gates between business modules.',
        'Batch processing jobs frequently collided at midnight, creating ticket avalanches every morning.'
      ]
    },
    execution: {
      phases: [
        {
          phase: 'Phase 1',
          title: 'Ticket Baselining & Pareto Root-Cause Analysis',
          timeline: 'Weeks 1–4',
          initiatives: [
            'Assisted in analyzing 5,000+ support tickets and system logs to identify true failure points.',
            'Helped prove that a large portion of delays stemmed from preventable data formatting errors rather than complex software bugs.'
          ]
        },
        {
          phase: 'Phase 2',
          title: 'Automated Middleware & Integration Fixes',
          timeline: 'Weeks 5–16',
          initiatives: [
            'Helped build custom middleware scripts that automatically clean and validate data handoffs between modules.',
            'Assisted in configuring real-time monitoring and smart notification routing so issues are flagged immediately.'
          ]
        },
        {
          phase: 'Phase 3',
          title: 'Delivery Stabilization & SOP Handover',
          timeline: 'Weeks 17–24',
          initiatives: [
            'Supported the rollout of optimized pipeline components into client staging and production environments with zero regressions.',
            'Assisted in documenting clear standard operating procedures (SOPs) so support teams can triage issues easily.'
          ]
        }
      ]
    },
    impact: {
      primaryKpis: [
        { metric: '+32%', label: 'Delivery Throughput', context: 'Faster sprint velocity and consistently delivered milestones' },
        { metric: '-42%', label: 'Incident Resolution Time', context: 'Average resolution time dropped from 18.4 hours to 10.6 hours' },
        { metric: '99.2%', label: 'SLA Contract Compliance', context: 'Restored customer account from at-risk status back to green' },
        { metric: '100%', label: 'Automated Pipeline Uptime', context: 'Smooth migration with zero production downtime or data losses' }
      ],
      waterfallDrivers: [
        { lever: 'Automated Middleware & Queue Triaging', contribution: 'Hundreds of Hours Saved', type: 'cost' },
        { lever: 'Upstream Data Schema Harmonization', contribution: '-64% Fewer Repeat Bugs', type: 'working_capital' },
        { lever: 'Client Workflow & Delivery Restructuring', contribution: '+32% Sprint Velocity', type: 'revenue' },
        { lever: 'Clear Standard Operating Procedures (SOPs)', contribution: 'Calm, Confident Team', type: 'working_capital' }
      ]
    },
    quote: {
      text: 'When our client delivery pipeline was burning through hours and missing SLAs, Aishwarya rolled up her sleeves, traced the errors back to their source, and fixed the underlying system. She took our team from constant panic to steady, confident delivery.',
      author: 'R. K. Narayanan',
      role: 'Enterprise Delivery Lead',
      company: 'Tata Consultancy Services'
    }
  },

  // 9. DevRev Cloud - Product Experience
  {
    id: 'DevRev Cloud-product-optimization',
    organization: 'DevRev Cloud Cloud Private Limited',
    title: 'Customer Journey Mapping & Product Workflow Optimization',
    focusArea: 'Customer Journey Mapping, Digital Product Experience Design & Process Optimization',
    clientVertical: 'High-Growth Enterprise SaaS & Developer Experience',
    engagementType: 'Digital Product Experience & Process Friction Optimization',
    timeframe: '3 Months',
    heroStat: '+40% Lift',
    heroStatLabel: 'Core Workflow Completion and Daily User Engagement',
    summary: 'Contributed to streamlining customer support and developer triage workflows, helping replace a confusing 9-click navigation path with a unified split-screen view that lifted feature completion rates by 40%.',
    image: '/src/assets/images/casestudy_devrev_product_1793435663231.jpg',
    context: {
      macroChallenge: 'Customer support agents and software engineers were talking past each other. Linking customer feedback to an active developer ticket required navigating a confusing multi-drawer interface, causing 48% of users to give up halfway through.',
      baselineState: 'Users had to click through up to 9 separate screens and tabs just to connect a customer conversation to an engineering bug, leading to dropped tickets and frustrated enterprise clients.',
      stakeholders: ['Head of Product Design', 'VP of Engineering', 'Customer Experience Leads', 'Product Marketing Managers']
    },
    hypothesis: {
      coreHypothesis: 'Users weren’t abandoning platforms due to a lack of features, but because layouts forced them to juggle contradictory mental models. Unifying the view into a contextual split screen helps make cross-functional collaboration effortless.',
      frameworkUsed: 'Cognitive Friction Analysis & Micro-Interaction Journey Auditing',
      diagnosticFindings: [
        'Users spent over 3 minutes per session simply hunting for ticket details buried in nested sub-menus.',
        'Primary action buttons competed visually with secondary administrative tools, causing decision paralysis.',
        'Mobile web users experienced awkward layout overflow on ticket detail views.'
      ]
    },
    execution: {
      phases: [
        {
          phase: 'Phase 1',
          title: 'User Journey Mapping & Friction Heatmaps',
          timeline: 'Phase 1: Research & Audit',
          initiatives: [
            'Assisted in user research and journey mapping sessions across support and engineering user workflows.',
            'Helped document click paths and user bottlenecks to isolate where workflows stalled.'
          ]
        },
        {
          phase: 'Phase 2',
          title: 'Split-Pane Workspace & Design System Overhaul',
          timeline: 'Phase 2: Architecture & Prototyping',
          initiatives: [
            'Assisted in redesigning and prototyping the split-view experience where customer context sits adjacent to code issues.',
            'Helped refine typography and button hierarchies to streamline user task execution.'
          ]
        },
        {
          phase: 'Phase 3',
          title: 'Production Implementation & User Testing',
          timeline: 'Phase 3: Rollout & Quantitative Testing',
          initiatives: [
            'Contributed to building responsive, high-performance React components with smooth micro-interactions.',
            'Helped track and validate a 40% improvement in task completion times during user testing.'
          ]
        }
      ]
    },
    impact: {
      primaryKpis: [
        { metric: '+40%', label: 'Task Completion Rate', context: 'Significantly more users finish linking customer issues to code tickets' },
        { metric: '-55%', label: 'Click Path Compression', context: 'Reduced the steps needed from 9 tedious clicks down to 4 simple clicks' },
        { metric: '+28%', label: 'Daily Active Engagement', context: 'Cross-functional teams now collaborate inside the platform every day' },
        { metric: '100%', label: 'Accessible Design System', context: 'Fully responsive, clean interface tested across mobile and desktop screens' }
      ],
      waterfallDrivers: [
        { lever: 'Unified Split-Pane Contextual View', contribution: 'Cut Clicks from 9 to 4', type: 'working_capital' },
        { lever: 'Clear Visual Hierarchy & Clean Typography', contribution: 'Zero Decision Paralysis', type: 'revenue' },
        { lever: 'Smooth Micro-Interactions & Fast Loading', contribution: '+40% Task Completion', type: 'cost' },
        { lever: 'Mobile & Tablet Viewport Normalization', contribution: 'Zero Broken Layouts', type: 'working_capital' }
      ]
    },
    quote: {
      text: 'Aishwarya doesn’t just design interfaces—she understands how people think under pressure. Her redesign turned one of our most frustrating, click-heavy workflows into something smooth, fast, and natural.',
      author: 'Design & Product Leadership',
      role: 'Product Engineering Lead',
      company: 'DevRev Cloud Cloud Private Limited'
    }
  }
];

export const PILLARS: Pillar[] = [
  {
    id: 'public-sector-strategy',
    number: '01',
    title: 'Sovereign Digital Strategy & Public Sector Governance',
    tagline: 'Translating complex government mandates into clear, resilient execution roadmaps.',
    description: 'We help public sector leadership break through bureaucratic silos, establish secure data standards, and deliver modernization programs that earn institutional trust and deliver real public value.',
    coreLevers: [
      'Multi-Agency Stakeholder Alignment & Mandate Scoping',
      'Strategic Technology Policy & Regulatory Safeguards',
      'Inter-Agency Information Flow & Operational Protocols',
      'Long-Term Institutional Roadmaps & Field Execution'
    ],
    deliverables: [
      'Comprehensive Public Sector Technology Modernization Blueprint',
      'Inter-Departmental Operational Readiness Protocol',
      'Technical Evaluation Dossiers & Inter-Ministry Briefings'
    ],
    impactMetric: '7 Inter-Ministerial Workstreams'
  },
  {
    id: 'sovereign-ai-rag',
    number: '02',
    title: 'Sovereign AI & Air-Gapped Knowledge Architecture',
    tagline: 'Bringing the power of modern LLMs into secure public sector and administrative environments.',
    description: 'We build self-contained, air-gapped AI systems that give public administrators instant answers with verifiable statutory citations—operating completely on-premise with zero risk of external data leakage or hallucinations.',
    coreLevers: [
      'Air-Gapped Vector Database Indexing & Partitioning',
      'Hallucination-Resistant Semantic Search & Citation Provenance',
      'On-Premise Quantized LLM Deployment & Parameter Tuning',
      'Zero-Egress Security Guardrails & Hardware Isolation'
    ],
    deliverables: [
      'Sovereign AI Technical Architecture Blueprint',
      'Vector Store Security & Departmental Access Policy',
      'Model Calibration & Verification Playbook'
    ],
    impactMetric: '<3.2s Query Latency at Zero Leakage'
  },
  {
    id: 'zero-trust-cybersecurity',
    number: '03',
    title: 'Zero-Trust Cybersecurity & Cryptographic Architecture',
    tagline: 'Engineering security architectures designed for real-world public systems, not theoretical checklists.',
    description: 'We replace vulnerable centralized databases with zero-knowledge verification, automate cryptographic key rotation, and deploy sub-second incident containment playbooks that isolate anomalies before damage occurs.',
    coreLevers: [
      'Zero-Knowledge Proof (ZK-SNARK) Verification Circuit Design',
      'Dynamic Software-Defined Micro-Segmentation',
      'Hardware Security Module (HSM) Key Rotation Automation',
      'Autonomous Playbook Execution & Instant Network Quarantine'
    ],
    deliverables: [
      'Zero-Trust Public Infrastructure Specification',
      'ZK-Credential Protocol Architecture',
      'Autonomous Security Remediation Runbooks'
    ],
    impactMetric: '<800ms Automated Service Quarantine'
  },
  {
    id: 'it-operational-restructuring',
    number: '04',
    title: 'Enterprise Technology Consulting & Operational Restructuring',
    tagline: 'Finding the hidden bottlenecks in complex IT delivery and ending the firefighting.',
    description: 'We audit workflows, eliminate repetitive handoff friction, and standardize operating procedures so global engineering teams can get out of constant panic and deliver projects on time.',
    coreLevers: [
      'Workflow Bottleneck Isolation & Defect Pareto Modeling',
      'Direct & Indirect IT Service Delivery Streamlining',
      'Automated Integration Architecture & Middleware Design',
      'SLA Contract Governance & Client Uptime Hardening'
    ],
    deliverables: [
      'Enterprise Workflow Modernization Blueprint',
      'Automated Service Delivery Middleware Specification',
      'Standard Operating Procedure (SOP) Framework'
    ],
    impactMetric: '+32% Client Delivery Throughput'
  },
  {
    id: 'customer-journey-design',
    number: '05',
    title: 'Digital Product Experience & Process Optimization',
    tagline: 'Making enterprise software an intuitive, high-velocity experience.',
    description: 'We map how people actually work, strip away unnecessary clicks, and build interfaces that bring clarity to daily tasks—turning complex, frustrating software into high-adoption workflows.',
    coreLevers: [
      'End-to-End Customer Journey & Workflow Mapping',
      'Cognitive Friction Diagnostics & Mental Model Alignment',
      'Design System Architecture & Micro-Interaction Polish',
      'Quantitative Adoption & Funnel Conversion Analytics'
    ],
    deliverables: [
      'Friction-Mapped User Journey & Touchpoint Architecture',
      'Production-Grade Design System & Component Library',
      'Product Adoption & Engagement KPI Scorecard'
    ],
    impactMetric: '-55% Navigation Clicks to Value'
  }
];

export const PUBLICATIONS: Publication[] = [
  {
    id: 'sovereign-ai-rag-whitepaper',
    title: 'Air-Gapped Sovereign AI: Architecting Hallucination-Resistant Knowledge Graphs for Public Sector Administration',
    category: 'Digital & AI',
    year: '2026',
    readTime: '12 min read',
    abstract: 'A practical look at how government departments can run modern foundation models inside physically isolated rooms—giving administrative officers instant semantic search across statutory gazettes and central circulars without cloud data egress or hallucinations.',
    takeaways: [
      'Public cloud AI APIs introduce severe data sovereignty and compliance risks for official government drafts; true security requires locally hosted, air-gapped infrastructure.',
      'Vector chunking must strictly respect departmental authorization tiers so administrative officers only query documents within their statutory jurisdiction.',
      'Requiring models to provide line-by-line gazette and circular citations eliminates 99.8% of user-facing hallucination risks.'
    ],
    pages: 26
  },
  {
    id: 'sovereign-digital-transformation',
    title: 'Architecting Sovereign Digital Infrastructure: Navigating Inter-Agency Silos at Scale',
    category: 'Strategy',
    year: '2026',
    readTime: '10 min read',
    abstract: 'Lessons from modernizing technology across federal ministries. Why digital transformation usually stalls at administrative handoffs rather than tech limitations, and how to build inter-agency consensus.',
    takeaways: [
      'Public sector modernization projects fail most often at administrative boundaries where data ownership is disputed.',
      'Establishing shared data schemas and open APIs cuts project cycle times by more than half.',
      'Zero-trust security rules must be integrated into everyday workflows so they enhance security without creating red tape.'
    ],
    pages: 20
  },
  {
    id: 'zero-knowledge-state-governance',
    title: 'Zero-Knowledge Proofs in Public Governance: Eliminating Centralized Credential Honeypots',
    category: 'Private Equity',
    year: '2025',
    readTime: '9 min read',
    abstract: 'A blueprint for using zero-knowledge proofs (ZKPs) in public administration. How ministries can verify corporate compliance, tax status, and citizen eligibility without aggregating or storing sensitive personal data in vulnerable databases.',
    takeaways: [
      'Monolithic centralized citizen identity databases represent severe data breach liabilities for public bodies.',
      'Non-interactive ZK-proofs allow sub-200ms validation on regular, everyday computers.',
      'Decentralized ledgers provide an unalterable audit trail across autonomous government departments.'
    ],
    pages: 18
  },
  {
    id: 'it-delivery-operational-restructuring',
    title: 'Operational Restructuring in Global IT Delivery: Deconstructing Enterprise Process Friction',
    category: 'Operations',
    year: '2025',
    readTime: '8 min read',
    abstract: 'A straightforward guide for enterprise engineering leads on how to diagnose recurring ticket backlogs, automate clunky handoffs, and get delivery teams back to green SLA health.',
    takeaways: [
      'Over 60% of recurring maintenance tickets trace back to preventable data formatting mismatches between systems.',
      'Automating intermediate validation checks resolves issues quickly and restores client confidence.',
      'Written standard operating procedures must be backed by automated monitoring to ensure long-term stability.'
    ],
    pages: 16
  }
];

export const MATRIX_ITEMS: MatrixItem[] = [
  {
    id: 'm1',
    name: 'Air-Gapped Sovereign RAG Engine (GovAI-RAG)',
    impact: 'High',
    feasibility: 'High',
    quadrant: 'Quick Win',
    ebitdaEstimate: 'Instant <3.2s Querying',
    timeToValue: '5 Months',
    description: 'Deploy localized vector stores and quantized LLMs inside physical air-gap to unify inter-ministerial gazette search.'
  },
  {
    id: 'm2',
    name: 'Automated IT Incident Triage Middleware (TCS)',
    impact: 'High',
    feasibility: 'High',
    quadrant: 'Quick Win',
    ebitdaEstimate: '+32% Delivery Velocity',
    timeToValue: '60 Days',
    description: 'Implement automated schema transformation scripts to bypass manual data handover gates in enterprise service delivery.'
  },
  {
    id: 'm3',
    name: 'Zero-Knowledge Statutory Credential Ledger (GovChain-ID)',
    impact: 'High',
    feasibility: 'Medium',
    quadrant: 'Strategic Bet',
    ebitdaEstimate: 'Zero Honeypots / ZKPs',
    timeToValue: '5 Months',
    description: 'Architect ZK-SNARK proof verification layer for cross-ministerial credential checks without exposing raw citizen data.'
  },
  {
    id: 'm4',
    name: 'National Interoperability Grid & API Gateway',
    impact: 'High',
    feasibility: 'Medium',
    quadrant: 'Strategic Bet',
    ebitdaEstimate: 'Sub-45ms Telemetry',
    timeToValue: '5 Months',
    description: 'Deploy national integration gateway connecting legacy ministry mainframes via strangler-fig proxy adapters.'
  },
  {
    id: 'm5',
    name: 'Cross-Functional SaaS Split-Pane Redesign (DevRev Cloud)',
    impact: 'High',
    feasibility: 'High',
    quadrant: 'Quick Win',
    ebitdaEstimate: '+40% Completion Rate',
    timeToValue: '90 Days',
    description: 'Re-engineer complex issue-tracking interfaces into unified contextual workspaces to compress click depth by 55%.'
  },
  {
    id: 'm6',
    name: 'National Commodity Logistics Telemetry System (Predictive-Gov)',
    impact: 'High',
    feasibility: 'Medium',
    quadrant: 'Strategic Bet',
    ebitdaEstimate: '18-Day Bottleneck Early-Warning',
    timeToValue: '6 Months',
    description: 'Deploy real-time predictive anomaly detection models and time-series forecasting dashboards for public commodity supply chains.'
  }
];

export const MECE_ROOT: MeceNode = {
  id: 'root',
  label: 'Institutional & Enterprise Operational Drag',
  value: 'Cross-Agency & Enterprise Bottlenecks',
  benchmark: 'Target: Real-Time Modern Architecture',
  status: 'critical',
  insight: 'Diagnosing where operational friction actually happens: statutory retrieval delays, fragmented mainframe APIs, public logistics bottlenecks, and IT delivery backlogs.',
  children: [
    {
      id: 'inst',
      label: '1. Cabinet Secretariat (Govt. of India) Institutional Friction',
      value: '7 Sovereign Strategic Initiatives',
      benchmark: 'Target: Real-Time Air-Gapped Interoperability',
      status: 'critical',
      insight: 'Untangling bureaucratic silos across administrative knowledge retrieval, zero-knowledge verification, and remote district edge continuity.',
      children: [
        {
          id: 'inst-ai',
          label: 'A. Statutory Knowledge Retrieval & Document Silos (GovAI-RAG)',
          value: '14-Hour Manual Search Drag',
          benchmark: 'Achieved: <3.2s Zero-Egress RAG',
          status: 'critical',
          insight: 'Fragmented gazette notifications and circular archives resolved through localized vector embedding and strict citation provenance.'
        },
        {
          id: 'inst-zk',
          label: 'B. Credential Honeypots & Inter-Ministry Verification (GovChain-ID)',
          value: 'Excessive Centralized Data Exposure',
          benchmark: 'Achieved: <180ms ZK-SNARK Validation',
          status: 'critical',
          insight: 'Replaced centralized database targets with zero-knowledge cryptographic proof layers across departments.'
        },
        {
          id: 'inst-api',
          label: 'C. Inter-Ministry Interoperability Grid (National Gateway)',
          value: '24% Legacy Sync Failures',
          benchmark: 'Achieved: <45ms Across 12 Ministries',
          status: 'moderate',
          insight: 'Strangler-fig adapters and gRPC messaging streams deployed across legacy database mainframes and modern stacks.'
        },
        {
          id: 'inst-edge',
          label: 'D. Remote District Edge Continuity (GovCloud-Mesh)',
          value: '42h/mo Fiber Outage Drag',
          benchmark: 'Achieved: 100% 30-Day Offline Autonomy',
          status: 'optimal',
          insight: 'Immutable GitOps Kubernetes container mesh deployed across 45 remote district magistrate offices.'
        }
      ]
    },
    {
      id: 'enterprise-ops',
      label: '2. Enterprise IT & Product Experience Optimization',
      value: 'TCS & DevRev Cloud Programs',
      benchmark: 'Target: Sub-Minute Delivery Velocity',
      status: 'moderate',
      insight: 'Fixing the handoffs between teams and removing friction in day-to-day user tools.',
      children: [
        {
          id: 'ops-tcs',
          label: 'A. Enterprise IT Handover Gaps (TCS)',
          value: '38% SLA Variance',
          benchmark: 'Achieved: +32% Throughput / 99.2% SLA',
          status: 'critical',
          insight: 'Uncoordinated manual transitions resolved via custom middleware hooks and defect Pareto modeling.'
        },
        {
          id: 'ops-DevRev Cloud',
          label: 'B. Customer Journey Cognitive Load (DevRev Cloud)',
          value: '9 Clicks / 48% Drop-off',
          benchmark: 'Achieved: -55% Click Depth / +40% Completion',
          status: 'optimal',
          insight: 'Redesigned core cross-functional triage into unified split-pane workspaces.'
        }
      ]
    }
  ]
};

export const CAREER_CREDENTIALS = {
  name: 'Aishwarya Sriram Srinivasachary',
  currentRole: 'Technology Strategy & Digital Operations Specialist',
  email: 'ssaishwarya2021@gmail.com',
  summaryHeadline: 'Ex-Cabinet Secretariat (Govt. of India) · Tata Consultancy Services (TCS) · DevRev Cloud',
  pastRoles: [
    {
      role: 'Deputy Field Officer (Tech)',
      organization: 'Cabinet Secretariat, Government of India',
      period: '3 Years (Nov 2023 – Nov 2026)',
      location: 'New Delhi & Regional District Hubs',
      summary: 'Contributed to 7 high-impact sovereign digital transformation programs across MeitY, Ministry of Finance, and Cabinet Secretariat spanning e-governance RAG knowledge engines, zero-knowledge credential ledgers, national API gateways, commodity supply chain telemetry, and apex digital policy frameworks.'
    },
    {
      role: 'Systems Engineer',
      organization: 'Tata Consultancy Services (TCS)',
      period: '6 Months',
      location: 'Enterprise Technology Practice',
      summary: 'Specialized in enterprise technology consulting, IT operational restructuring, and client delivery. Analyzed complex client workflows, diagnosed delivery bottlenecks, and engineered custom technology solutions to improve operational efficiency for global enterprises.'
    },
    {
      role: 'UX / UI Engineer Intern',
      organization: 'DevRev Cloud',
      period: 'Product Design & Engineering',
      location: 'SaaS Platform Team',
      summary: 'Focused on customer journey mapping, digital product experience design, and process optimization. Analyzed user friction points, redesigned cross-functional ticket-to-code workflows, and improved platform adoption and user engagement metrics.'
    }
  ],
  education: [
    {
      degree: 'Bachelor of Technology (B.Tech) in Engineering',
      institution: 'Premier Technical University',
      year: 'Honors & Technical Distinction'
    },
    {
      degree: 'Specialized Executive Training in National Digital Infrastructure & Governance',
      institution: 'Sovereign Institutional Programs',
      year: 'Government of India'
    }
  ],
  coreCompetencies: [
    'Public Sector Digital Modernization & Technical Procurement Standards',
    'Air-Gapped Sovereign AI & Gazette RAG Knowledge Graphs',
    'Public Sector Zero-Trust Architecture & Critical Service Hardening',
    'Enterprise IT Operational Restructuring & SLA Optimization',
    'Customer Journey Mapping & Product Workflow UX'
  ],
  boardAppointments: [
    'Public Sector Digital Modernization & Technical Procurement Standards',
    'Air-Gapped Sovereign AI & Gazette RAG Knowledge Graphs',
    'Public Sector Zero-Trust Architecture & Critical Service Hardening',
    'Enterprise IT Operational Restructuring & SLA Optimization',
    'Customer Journey Mapping & Product Workflow UX'
  ]
};
