/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { PillarsSection } from './components/PillarsSection';
import { FrameworksLab } from './components/FrameworksLab';
import { EngagementsSection } from './components/EngagementsSection';
import { ThoughtLeadershipSection } from './components/ThoughtLeadershipSection';
import { CredentialsSection } from './components/CredentialsSection';
import { Footer } from './components/Footer';
import { ScheduleModal } from './components/ScheduleModal';
import { ExecutiveCvModal } from './components/ExecutiveCvModal';

export default function App() {
  const [isScheduleOpen, setIsScheduleOpen] = useState(false);
  const [isCvOpen, setIsCvOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#09090b] text-[#f4f4f5] selection:bg-sky-500/20 selection:text-sky-200 relative">
      {/* Subtle architectural background grid */}
      <div className="fixed inset-0 bg-grid-subtle pointer-events-none opacity-40 z-0" />

      {/* Main Content Layers */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar onOpenSchedule={() => setIsScheduleOpen(true)} />

        <main className="flex-grow">
          <Hero
            onOpenCv={() => setIsCvOpen(true)}
            onOpenSchedule={() => setIsScheduleOpen(true)}
          />

          <PillarsSection />

          <EngagementsSection />

          <FrameworksLab />

          <ThoughtLeadershipSection />

          <CredentialsSection
            onOpenCv={() => setIsCvOpen(true)}
            onOpenSchedule={() => setIsScheduleOpen(true)}
          />
        </main>

        <Footer
          onOpenSchedule={() => setIsScheduleOpen(true)}
          onOpenCv={() => setIsCvOpen(true)}
        />
      </div>

      {/* Global Executive Modals */}
      {isScheduleOpen && (
        <ScheduleModal onClose={() => setIsScheduleOpen(false)} />
      )}

      {isCvOpen && (
        <ExecutiveCvModal onClose={() => setIsCvOpen(false)} />
      )}
    </div>
  );
}
