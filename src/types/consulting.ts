export interface CaseStudy {
  id: string;
  title: string;
  organization: 'Cabinet Secretariat' | 'Tata Consultancy Services' | 'DevRev Cloud';
  focusArea?: string;
  initiativeCode?: string;
  clientVertical: string;
  engagementType: string;
  timeframe: string;
  heroStat: string;
  heroStatLabel: string;
  summary: string;
  image: string;
  context: {
    macroChallenge: string;
    baselineState: string;
    stakeholders: string[];
  };
  hypothesis: {
    coreHypothesis: string;
    frameworkUsed: string;
    diagnosticFindings: string[];
  };
  execution: {
    phases: {
      phase: string;
      title: string;
      timeline: string;
      initiatives: string[];
    }[];
  };
  impact: {
    primaryKpis: {
      metric: string;
      label: string;
      context: string;
    }[];
    waterfallDrivers: {
      lever: string;
      contribution: string;
      type: 'revenue' | 'cost' | 'working_capital';
    }[];
  };
  quote: {
    text: string;
    author: string;
    role: string;
    company: string;
  };
}

export interface Pillar {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  coreLevers: string[];
  deliverables: string[];
  impactMetric: string;
}

export interface Publication {
  id: string;
  title: string;
  category: 'Strategy' | 'Operations' | 'Private Equity' | 'Digital & AI';
  year: string;
  readTime: string;
  abstract: string;
  takeaways: string[];
  pages: number;
}

export interface MatrixItem {
  id: string;
  name: string;
  impact: 'High' | 'Medium';
  feasibility: 'High' | 'Medium' | 'Low';
  quadrant: 'Quick Win' | 'Strategic Bet' | 'Operational Fill-in' | 'Re-evaluate';
  ebitdaEstimate: string;
  timeToValue: string;
  description: string;
}

export interface MeceNode {
  id: string;
  label: string;
  value?: string;
  benchmark?: string;
  status?: 'critical' | 'moderate' | 'optimal';
  insight?: string;
  children?: MeceNode[];
}
