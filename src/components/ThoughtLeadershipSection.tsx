import React, { useState } from 'react';
import { PUBLICATIONS } from '../data/consultingData';
import { Publication } from '../types/consulting';
import { BookOpen, FileText, ArrowUpRight, Clock, ChevronRight } from 'lucide-react';
import { PublicationModal } from './PublicationModal';

export const ThoughtLeadershipSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activePublication, setActivePublication] = useState<Publication | null>(null);

  const categories = ['All', 'Operations', 'Private Equity', 'Strategy', 'Digital & AI'];

  const filteredPublications =
    selectedCategory === 'All'
      ? PUBLICATIONS
      : PUBLICATIONS.filter((p) => p.category === selectedCategory);

  return (
    <section id="insights" className="py-20 md:py-28 border-t border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-sky-400 mb-3">
              <span>Thought Leadership</span>
              <span aria-hidden="true" className="text-zinc-600">·</span>
              <span className="text-zinc-400">Boardroom Publications</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight leading-tight [text-wrap:balance]">
              Executive whitepapers and strategic research notes.
            </h2>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-zinc-900 rounded-lg border border-white/[0.08]">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap ${
                  selectedCategory === cat
                    ? 'bg-zinc-800 text-white shadow-sm'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Publications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredPublications.map((pub) => (
            <div
              key={pub.id}
              className="group p-6 sm:p-8 rounded-2xl bg-zinc-900/40 border border-white/[0.08] hover:border-white/20 transition-all duration-300 flex flex-col justify-between hover:shadow-xl hover:-translate-y-0.5"
            >
              <div>
                {/* Clean unboxed metadata with typographic separators */}
                <div className="flex items-center gap-2 text-xs text-zinc-400 mb-3 font-medium">
                  <span className="text-sky-400">{pub.category}</span>
                  <span aria-hidden="true" className="text-zinc-600">·</span>
                  <span>{pub.year}</span>
                  <span aria-hidden="true" className="text-zinc-600">·</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3 text-zinc-500" />
                    <span>{pub.readTime}</span>
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight mb-3 leading-snug group-hover:text-sky-200 transition-colors">
                  {pub.title}
                </h3>

                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed line-clamp-3 mb-6">
                  {pub.abstract}
                </p>

                {/* Key Takeaways Preview */}
                <div className="p-4 rounded-xl bg-zinc-950/60 border border-white/[0.04] mb-6">
                  <div className="text-[11px] font-semibold uppercase tracking-wider text-zinc-300 mb-2">
                    Executive Core Finding:
                  </div>
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    {pub.takeaways[0]}
                  </p>
                </div>
              </div>

              {/* Action */}
              <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between">
                <span className="text-xs text-zinc-400 font-mono">
                  {pub.pages} Pages · Verified PDF
                </span>
                <button
                  onClick={() => setActivePublication(pub)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-sky-400 hover:text-sky-300 group/link"
                >
                  <span>Read & Export ({pub.pages}p PDF)</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Publication Modal */}
      {activePublication && (
        <PublicationModal
          pub={activePublication}
          onClose={() => setActivePublication(null)}
        />
      )}
    </section>
  );
};
