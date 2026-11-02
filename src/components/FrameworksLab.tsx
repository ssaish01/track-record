import React, { useState } from 'react';
import { MECE_ROOT, MATRIX_ITEMS } from '../data/consultingData';
import { MeceNode, MatrixItem } from '../types/consulting';
import { GitFork, Grid3X3, Calculator, ChevronDown, ChevronRight, Info, Check, ArrowUpRight } from 'lucide-react';

export const FrameworksLab: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'mece' | 'matrix' | 'simulator'>('mece');

  // MECE Tree state
  const [expandedNodes, setExpandedNodes] = useState<Record<string, boolean>>({
    'root': true,
    'rev': true,
    'cost': true,
  });
  const [selectedNode, setSelectedNode] = useState<MeceNode>(MECE_ROOT);

  const toggleNode = (nodeId: string) => {
    setExpandedNodes(prev => ({
      ...prev,
      [nodeId]: !prev[nodeId]
    }));
  };

  // Matrix state
  const [selectedMatrixItem, setSelectedMatrixItem] = useState<MatrixItem>(MATRIX_ITEMS[0]);

  // Operating Leverage Simulator state
  const [annualRevenue, setAnnualRevenue] = useState<number>(250); // $250M
  const [grossMarginPct, setGrossMarginPct] = useState<number>(42); // 42%
  const [sgaPct, setSgaPct] = useState<number>(28); // 28%
  const [enableProcurement, setEnableProcurement] = useState<boolean>(true); // +240 bps COGS
  const [enableSkuPruning, setEnableSkuPruning] = useState<boolean>(true); // +180 bps SG&A
  const [enablePriceFloor, setEnablePriceFloor] = useState<boolean>(true); // +190 bps Revenue

  // Calculations
  const baselineGrossProfit = (annualRevenue * grossMarginPct) / 100;
  const baselineSga = (annualRevenue * sgaPct) / 100;
  const baselineEbitda = baselineGrossProfit - baselineSga;
  const baselineEbitdaMargin = (baselineEbitda / annualRevenue) * 100;

  // Optimized scenario
  const revenueOptimization = enablePriceFloor ? annualRevenue * 0.024 : 0; // +2.4% pricing yield
  const optimizedRevenue = annualRevenue + revenueOptimization;

  const cogsOptimizedRate = grossMarginPct + (enableProcurement ? 2.6 : 0);
  const optimizedGrossProfit = (optimizedRevenue * cogsOptimizedRate) / 100;

  const sgaOptimizedRate = sgaPct - (enableSkuPruning ? 2.2 : 0);
  const optimizedSga = (optimizedRevenue * sgaOptimizedRate) / 100;

  const optimizedEbitda = optimizedGrossProfit - optimizedSga;
  const optimizedEbitdaMargin = (optimizedEbitda / optimizedRevenue) * 100;
  const ebitdaUplift = optimizedEbitda - baselineEbitda;
  const marginDeltaBps = Math.round((optimizedEbitdaMargin - baselineEbitdaMargin) * 100);

  return (
    <section id="frameworks" className="py-20 md:py-28 border-t border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-sky-400 mb-3">
              <span>Interactive Frameworks</span>
              <span aria-hidden="true" className="text-zinc-600">·</span>
              <span className="text-zinc-400">Ex-MBB Methodologies</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight leading-tight [text-wrap:balance]">
              Diagnostic toolkits utilized in sovereign advisory and enterprise transformations.
            </h2>
          </div>

          {/* Framework Switcher Tabs (Functional filter buttons allowed by design constitution §1.A) */}
          <div className="flex items-center p-1 bg-zinc-900 rounded-lg border border-white/[0.08] self-start md:self-auto shrink-0">
            <button
              onClick={() => setActiveTab('mece')}
              className={`flex items-center gap-2 px-3.5 py-2 text-xs font-medium rounded-md transition-colors whitespace-nowrap ${
                activeTab === 'mece'
                  ? 'bg-zinc-800 text-white shadow-sm'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              <GitFork className="w-3.5 h-3.5 text-sky-400" />
              <span>MECE Issue Tree</span>
            </button>
            <button
              onClick={() => setActiveTab('matrix')}
              className={`flex items-center gap-2 px-3.5 py-2 text-xs font-medium rounded-md transition-colors whitespace-nowrap ${
                activeTab === 'matrix'
                  ? 'bg-zinc-800 text-white shadow-sm'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              <Grid3X3 className="w-3.5 h-3.5 text-sky-400" />
              <span>2×2 Prioritization Matrix</span>
            </button>
            <button
              onClick={() => setActiveTab('simulator')}
              className={`flex items-center gap-2 px-3.5 py-2 text-xs font-medium rounded-md transition-colors whitespace-nowrap ${
                activeTab === 'simulator'
                  ? 'bg-zinc-800 text-white shadow-sm'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              <Calculator className="w-3.5 h-3.5 text-sky-400" />
              <span>EBITDA Bridge Simulator</span>
            </button>
          </div>
        </div>

        {/* Tab 1: MECE Issue Tree */}
        {activeTab === 'mece' && (
          <div className="bg-zinc-900/40 rounded-2xl border border-white/[0.08] p-6 sm:p-8 backdrop-blur-sm">
            <div className="flex items-center justify-between pb-4 border-b border-white/[0.06] mb-6 text-xs text-zinc-400">
              <span className="flex items-center gap-1.5 font-medium text-zinc-300">
                <Info className="w-3.5 h-3.5 text-sky-400" />
                <span>Mutually Exclusive, Collectively Exhaustive (MECE) Root Cause Decomposition</span>
              </span>
              <span className="hidden sm:inline">Click any node to inspect operational diagnostics</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Tree Visualizer */}
              <div className="lg:col-span-7 bg-zinc-950/60 rounded-xl border border-white/[0.06] p-5">
                {/* Root Node */}
                <div
                  onClick={() => setSelectedNode(MECE_ROOT)}
                  className={`p-3.5 rounded-lg border transition-all cursor-pointer mb-4 ${
                    selectedNode.id === MECE_ROOT.id
                      ? 'bg-zinc-900 border-sky-500/50 shadow-md shadow-sky-500/5'
                      : 'bg-zinc-900/60 border-white/[0.08] hover:border-white/20'
                  }`}
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-sm font-semibold text-white tracking-tight">
                      {MECE_ROOT.label}
                    </span>
                    <span className="text-xs font-mono font-medium text-rose-400 tabular-nums">
                      {MECE_ROOT.value}
                    </span>
                  </div>
                  <div className="text-xs text-zinc-400 mt-1">{MECE_ROOT.benchmark}</div>
                </div>

                {/* Level 1 Branches (Revenue vs Cost) */}
                <div className="space-y-4 pl-4 border-l-2 border-white/10 ml-3">
                  {MECE_ROOT.children?.map((branch) => {
                    const isExpanded = !!expandedNodes[branch.id];
                    const isSelected = selectedNode.id === branch.id;
                    return (
                      <div key={branch.id} className="space-y-2">
                        <div
                          className={`p-3 rounded-lg border transition-all flex items-center justify-between gap-2 cursor-pointer ${
                            isSelected
                              ? 'bg-zinc-900 border-sky-500/50'
                              : 'bg-zinc-900/40 border-white/[0.06] hover:border-white/15'
                          }`}
                          onClick={() => {
                            setSelectedNode(branch);
                            toggleNode(branch.id);
                          }}
                        >
                          <div className="flex items-center gap-2">
                            {isExpanded ? (
                              <ChevronDown className="w-3.5 h-3.5 text-zinc-400" />
                            ) : (
                              <ChevronRight className="w-3.5 h-3.5 text-zinc-400" />
                            )}
                            <span className="text-xs sm:text-sm font-medium text-white">
                              {branch.label}
                            </span>
                          </div>
                          <span className="text-xs font-mono text-zinc-300 tabular-nums">
                            {branch.value}
                          </span>
                        </div>

                        {/* Level 2 Sub-drivers */}
                        {isExpanded && branch.children && (
                          <div className="pl-5 space-y-2 border-l border-white/10 ml-3">
                            {branch.children.map((sub) => {
                              const isSubSelected = selectedNode.id === sub.id;
                              return (
                                <div
                                  key={sub.id}
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    setSelectedNode(sub);
                                  }}
                                  className={`p-2.5 rounded-md border text-xs cursor-pointer transition-all ${
                                    isSubSelected
                                      ? 'bg-zinc-900 border-sky-500/60 text-white'
                                      : 'bg-zinc-900/20 border-white/[0.04] text-zinc-300 hover:border-white/10 hover:text-white'
                                  }`}
                                >
                                  <div className="flex items-center justify-between gap-2">
                                    <span className="font-medium">{sub.label}</span>
                                    <span className="font-mono text-zinc-400 tabular-nums">
                                      {sub.value}
                                    </span>
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Node Diagnostic Inspector */}
              <div className="lg:col-span-5 bg-zinc-900/70 rounded-xl border border-white/[0.08] p-6">
                <div className="text-[11px] font-semibold uppercase tracking-wider text-sky-400 mb-1">
                  Diagnostic Inspection
                </div>
                <h4 className="text-base font-semibold text-white tracking-tight mb-2">
                  {selectedNode.label}
                </h4>
                {selectedNode.value && (
                  <div className="text-xs font-mono text-zinc-300 mb-3">
                    Observed Metric Variance:{' '}
                    <span className="text-rose-400 font-semibold">{selectedNode.value}</span>
                  </div>
                )}
                {selectedNode.benchmark && (
                  <div className="text-xs text-zinc-400 mb-4 pb-4 border-b border-white/[0.06]">
                    {selectedNode.benchmark}
                  </div>
                )}

                <div className="mb-6">
                  <div className="text-xs font-semibold text-zinc-300 mb-1.5">
                    Consultant Diagnostic Finding:
                  </div>
                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                    {selectedNode.insight}
                  </p>
                </div>

                <div className="p-3.5 rounded-lg bg-zinc-950/80 border border-white/[0.06] text-xs text-zinc-400">
                  <div className="text-[11px] font-medium text-sky-400 uppercase tracking-wider mb-1">
                    Actionable Playbook:
                  </div>
                  <span>
                    Isolate the root cause workflow gate, standardize data schemas across participating teamsandenforce automated validation rules to prevent recurring friction.
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: 2x2 Strategic Prioritization Matrix */}
        {activeTab === 'matrix' && (
          <div className="bg-zinc-900/40 rounded-2xl border border-white/[0.08] p-6 sm:p-8 backdrop-blur-sm">
            <div className="flex items-center justify-between pb-4 border-b border-white/[0.06] mb-6 text-xs text-zinc-400">
              <span className="font-medium text-zinc-300">
                Strategic Impact vs Implementation Feasibility Grid
              </span>
              <span>Click any initiative to view board assessment</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* 2x2 Grid Layout */}
              <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Quadrant 1: Quick Wins */}
                <div className="p-4 rounded-xl bg-zinc-950/70 border border-emerald-500/20">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-semibold tracking-wider uppercase text-emerald-400">
                      Quick Wins (High Impact · High Feasibility)
                    </span>
                  </div>
                  <div className="space-y-2">
                    {MATRIX_ITEMS.filter((i) => i.quadrant === 'Quick Win').map((item) => (
                      <button
                        key={item.id}
                        onClick={() => setSelectedMatrixItem(item)}
                        className={`w-full text-left p-3 rounded-lg border text-xs transition-all ${
                          selectedMatrixItem.id === item.id
                            ? 'bg-zinc-900 border-emerald-400/60 shadow-sm text-white'
                            : 'bg-zinc-900/40 border-white/[0.05] text-zinc-300 hover:border-white/10'
                        }`}
                      >
                        <div className="font-medium mb-1">{item.name}</div>
                        <div className="flex items-center justify-between text-[11px] font-mono text-zinc-400">
                          <span className="text-emerald-400 font-semibold">{item.ebitdaEstimate}</span>
                          <span>{item.timeToValue}</span>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Quadrant 2: Strategic Transformations */}
                <div className="p-4 rounded-xl bg-zinc-950/70 border border-sky-500/20">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-semibold tracking-wider uppercase text-sky-400">
                      Strategic Transformations (High Impact · Medium Feasibility)
                    </span>
                  </div>
                  <div className="space-y-2">
                    {MATRIX_ITEMS.filter((i) => i.quadrant === 'Strategic Bet').map((item) => (
                      <button
                        key={item.id}
                        onClick={() => setSelectedMatrixItem(item)}
                        className={`w-full text-left p-3 rounded-lg border text-xs transition-all ${
                          selectedMatrixItem.id === item.id
                            ? 'bg-zinc-900 border-sky-400/60 shadow-sm text-white'
                            : 'bg-zinc-900/40 border-white/[0.05] text-zinc-300 hover:border-white/10'
                        }`}
                      >
                        <div className="font-medium mb-1">{item.name}</div>
                        <div className="flex items-center justify-between text-[11px] font-mono text-zinc-400">
                          <span className="text-sky-400 font-semibold">{item.ebitdaEstimate}</span>
                          <span>{item.timeToValue}</span>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Quadrant 3: Operational Fill-ins */}
                <div className="p-4 rounded-xl bg-zinc-950/70 border border-zinc-700/40">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-semibold tracking-wider uppercase text-zinc-400">
                      Operational Fill-ins (Medium Impact · Medium Feasibility)
                    </span>
                  </div>
                  <div className="space-y-2">
                    {MATRIX_ITEMS.filter((i) => i.quadrant === 'Operational Fill-in').map((item) => (
                      <button
                        key={item.id}
                        onClick={() => setSelectedMatrixItem(item)}
                        className={`w-full text-left p-3 rounded-lg border text-xs transition-all ${
                          selectedMatrixItem.id === item.id
                            ? 'bg-zinc-900 border-zinc-400 shadow-sm text-white'
                            : 'bg-zinc-900/40 border-white/[0.05] text-zinc-300 hover:border-white/10'
                        }`}
                      >
                        <div className="font-medium mb-1">{item.name}</div>
                        <div className="flex items-center justify-between text-[11px] font-mono text-zinc-400">
                          <span className="text-zinc-300 font-semibold">{item.ebitdaEstimate}</span>
                          <span>{item.timeToValue}</span>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Quadrant 4: Re-evaluate */}
                <div className="p-4 rounded-xl bg-zinc-950/70 border border-amber-500/20">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-semibold tracking-wider uppercase text-amber-400">
                      Re-Evaluate / Low Feasibility (High Friction)
                    </span>
                  </div>
                  <div className="space-y-2">
                    {MATRIX_ITEMS.filter((i) => i.quadrant === 'Re-evaluate').map((item) => (
                      <button
                        key={item.id}
                        onClick={() => setSelectedMatrixItem(item)}
                        className={`w-full text-left p-3 rounded-lg border text-xs transition-all ${
                          selectedMatrixItem.id === item.id
                            ? 'bg-zinc-900 border-amber-400/60 shadow-sm text-white'
                            : 'bg-zinc-900/40 border-white/[0.05] text-zinc-300 hover:border-white/10'
                        }`}
                      >
                        <div className="font-medium mb-1">{item.name}</div>
                        <div className="flex items-center justify-between text-[11px] font-mono text-zinc-400">
                          <span className="text-amber-400 font-semibold">{item.ebitdaEstimate}</span>
                          <span>{item.timeToValue}</span>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Initiative Detail Panel */}
              <div className="lg:col-span-4 bg-zinc-900/70 rounded-xl border border-white/[0.08] p-6">
                <div className="text-[11px] font-semibold uppercase tracking-wider text-sky-400 mb-1">
                  Prioritization Assessment
                </div>
                <h4 className="text-lg font-bold text-white tracking-tight mb-2">
                  {selectedMatrixItem.name}
                </h4>
                <div className="flex items-center gap-2 text-xs text-zinc-400 mb-4 pb-4 border-b border-white/[0.06]">
                  <span>Quadrant: {selectedMatrixItem.quadrant}</span>
                  <span aria-hidden="true">·</span>
                  <span>Horizon: {selectedMatrixItem.timeToValue}</span>
                </div>

                <div className="space-y-4 mb-6">
                  <div>
                    <div className="text-xs font-semibold text-zinc-300 mb-1">
                      Estimated Strategic Impact / Efficiency Gain:
                    </div>
                    <div className="text-xl font-bold font-mono text-emerald-400 tabular-nums">
                      {selectedMatrixItem.ebitdaEstimate}
                    </div>
                  </div>

                  <div>
                    <div className="text-xs font-semibold text-zinc-300 mb-1">
                      Operational Rationale & Action Plan:
                    </div>
                    <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                      {selectedMatrixItem.description}
                    </p>
                  </div>
                </div>

                <div className="p-3 rounded-lg bg-zinc-950/80 border border-white/[0.06] text-xs text-zinc-400">
                  <span className="text-zinc-300 font-medium">Execution Note: </span>
                  Requires cross-functional buy-in and active milestone checkpoints to prevent operational slippage.
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: Operating Leverage Simulator */}
        {activeTab === 'simulator' && (
          <div className="bg-zinc-900/40 rounded-2xl border border-white/[0.08] p-6 sm:p-8 backdrop-blur-sm">
            <div className="flex items-center justify-between pb-4 border-b border-white/[0.06] mb-6 text-xs text-zinc-400">
              <span className="font-medium text-zinc-300">
                Operating Leverage & System Efficiency Bridge Simulator
              </span>
              <span>Model how eliminating workflow friction compounds into organizational velocity</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Levers & Controls */}
              <div className="lg:col-span-6 space-y-6">
                <div>
                  <div className="flex items-center justify-between text-xs font-medium text-zinc-300 mb-2">
                    <span>Baseline Annual Revenue ($M)</span>
                    <span className="font-mono text-white text-sm tabular-nums">${annualRevenue}M</span>
                  </div>
                  <input
                    type="range"
                    min={50}
                    max={1000}
                    step={25}
                    value={annualRevenue}
                    onChange={(e) => setAnnualRevenue(Number(e.target.value))}
                    className="w-full h-1.5 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-sky-400"
                  />
                  <div className="flex justify-between text-[11px] text-zinc-500 font-mono mt-1">
                    <span>$50M</span>
                    <span>$500M</span>
                    <span>$1,000M</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="flex items-center justify-between text-xs font-medium text-zinc-300 mb-2">
                      <span>Gross Margin %</span>
                      <span className="font-mono text-white text-sm tabular-nums">{grossMarginPct}%</span>
                    </div>
                    <input
                      type="range"
                      min={20}
                      max={75}
                      step={1}
                      value={grossMarginPct}
                      onChange={(e) => setGrossMarginPct(Number(e.target.value))}
                      className="w-full h-1.5 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-sky-400"
                    />
                  </div>
                  <div>
                    <div className="flex items-center justify-between text-xs font-medium text-zinc-300 mb-2">
                      <span>SG&A % of Rev</span>
                      <span className="font-mono text-white text-sm tabular-nums">{sgaPct}%</span>
                    </div>
                    <input
                      type="range"
                      min={10}
                      max={45}
                      step={1}
                      value={sgaPct}
                      onChange={(e) => setSgaPct(Number(e.target.value))}
                      className="w-full h-1.5 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-sky-400"
                    />
                  </div>
                </div>

                {/* Optimization Levers Toggles */}
                <div className="pt-4 border-t border-white/[0.06] space-y-3">
                  <div className="text-xs font-semibold text-zinc-300 uppercase tracking-wider">
                    Toggle Strategic Transformation Levers:
                  </div>

                  <label className="flex items-center justify-between p-3 rounded-lg bg-zinc-950/60 border border-white/[0.06] cursor-pointer hover:border-white/10 transition-colors">
                    <div>
                      <div className="text-xs font-medium text-white">Direct & Indirect Strategic Sourcing</div>
                      <div className="text-[11px] text-zinc-400">Consolidated vendor procurement (+260 bps Gross Margin)</div>
                    </div>
                    <input
                      type="checkbox"
                      checked={enableProcurement}
                      onChange={(e) => setEnableProcurement(e.target.checked)}
                      className="w-4 h-4 rounded text-sky-500 bg-zinc-900 border-zinc-700 accent-sky-400"
                    />
                  </label>

                  <label className="flex items-center justify-between p-3 rounded-lg bg-zinc-950/60 border border-white/[0.06] cursor-pointer hover:border-white/10 transition-colors">
                    <div>
                      <div className="text-xs font-medium text-white">Zero-Based SG&A & Spans/Layers</div>
                      <div className="text-[11px] text-zinc-400">Delayering and discretionary spend guardrails (-220 bps SG&A)</div>
                    </div>
                    <input
                      type="checkbox"
                      checked={enableSkuPruning}
                      onChange={(e) => setEnableSkuPruning(e.target.checked)}
                      className="w-4 h-4 rounded text-sky-500 bg-zinc-900 border-zinc-700 accent-sky-400"
                    />
                  </label>

                  <label className="flex items-center justify-between p-3 rounded-lg bg-zinc-950/60 border border-white/[0.06] cursor-pointer hover:border-white/10 transition-colors">
                    <div>
                      <div className="text-xs font-medium text-white">Dynamic Pricing Floor & Yield Control</div>
                      <div className="text-[11px] text-zinc-400">Enforcing deal-desk floor margins (+2.4% net revenue yield)</div>
                    </div>
                    <input
                      type="checkbox"
                      checked={enablePriceFloor}
                      onChange={(e) => setEnablePriceFloor(e.target.checked)}
                      className="w-4 h-4 rounded text-sky-500 bg-zinc-900 border-zinc-700 accent-sky-400"
                    />
                  </label>
                </div>
              </div>

              {/* Modeled Output Bridge */}
              <div className="lg:col-span-6 bg-zinc-950/80 rounded-xl border border-white/[0.08] p-6">
                <div className="text-[11px] font-semibold uppercase tracking-wider text-sky-400 mb-1">
                  Simulated Value Creation
                </div>
                <h4 className="text-lg font-bold text-white tracking-tight mb-6">
                  Modeled EBITDA Bridge & Value Expansion
                </h4>

                <div className="grid grid-cols-2 gap-4 p-4 rounded-xl bg-zinc-900/60 border border-white/[0.06] mb-6">
                  <div>
                    <div className="text-xs text-zinc-400 mb-1">Baseline EBITDA</div>
                    <div className="text-xl sm:text-2xl font-bold font-mono text-zinc-300 tabular-nums">
                      ${baselineEbitda.toFixed(1)}M
                    </div>
                    <div className="text-[11px] text-zinc-500 font-mono mt-0.5">
                      {baselineEbitdaMargin.toFixed(1)}% Margin
                    </div>
                  </div>

                  <div>
                    <div className="text-xs text-emerald-400 font-medium mb-1">Transformed EBITDA</div>
                    <div className="text-xl sm:text-2xl font-bold font-mono text-emerald-400 tabular-nums">
                      ${optimizedEbitda.toFixed(1)}M
                    </div>
                    <div className="text-[11px] text-emerald-500 font-mono mt-0.5">
                      {optimizedEbitdaMargin.toFixed(1)}% Margin
                    </div>
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center justify-between text-xs py-2 border-b border-white/[0.06]">
                    <span className="text-zinc-400">Net Incremental Annual EBITDA</span>
                    <span className="font-mono font-bold text-emerald-400 text-sm tabular-nums">
                      +${ebitdaUplift.toFixed(1)}M / year
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-xs py-2 border-b border-white/[0.06]">
                    <span className="text-zinc-400">Total EBITDA Margin Expansion</span>
                    <span className="font-mono font-bold text-sky-400 text-sm tabular-nums">
                      +{marginDeltaBps} bps
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-xs py-2 border-b border-white/[0.06]">
                    <span className="text-zinc-400">Modeled Enterprise Value Uplift (@ 10x Multiple)</span>
                    <span className="font-mono font-bold text-white text-sm tabular-nums">
                      +${(ebitdaUplift * 10).toFixed(0)}M
                    </span>
                  </div>
                </div>

                <p className="text-[11px] text-zinc-500 leading-normal">
                  *Preliminary estimation model. Actual synergy capture depends on baseline spend visibility, supplier concentrationandorganizational governance speed.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
