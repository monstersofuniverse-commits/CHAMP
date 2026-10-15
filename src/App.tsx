/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StatsRow from './components/StatsRow';
import ToolsSection from './components/ToolsSection';
import ServicesSection from './components/ServicesSection';
import ProjectsSection from './components/ProjectsSection';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import JarvisVoiceModal from './components/JarvisVoiceModal';
import ProjectDetailModal from './components/ProjectDetailModal';
import { Project } from './types';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isJarvisModalOpen, setIsJarvisModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string>('Voice Assistant / AI Tool');

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectService = (serviceTitle: string) => {
    setSelectedService(serviceTitle);
    scrollToSection('contact');
  };

  return (
    <div className="min-h-screen bg-[#080c0b] text-zinc-100 flex flex-col font-sans selection:bg-[#00e599] selection:text-black">
      {/* 1. Navbar */}
      <Navbar onNavigate={scrollToSection} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 2. Hero with heading, bio, two buttons, and small cards */}
        <Hero
          onExploreProjects={() => scrollToSection('projects')}
          onContactClick={() => scrollToSection('contact')}
          onOpenJarvisDemo={() => setIsJarvisModalOpen(true)}
        />

        {/* 3. Stats row with only real numbers: 5 Projects, 1 Year of Experience */}
        <StatsRow />

        {/* 4. Tools: Python, Linux, Git */}
        <ToolsSection />

        {/* 5. Services as 3 cards: Web Development, AI Tools, Linux Scripting */}
        <ServicesSection onSelectService={handleSelectService} />

        {/* 6. Projects: Jarvis AI (voice assistant built with Python), plus placeholder cards */}
        <ProjectsSection
          onSelectProject={(project) => setSelectedProject(project)}
          onOpenJarvisDemo={() => setIsJarvisModalOpen(true)}
        />

        {/* About Tahir Iqbal */}
        <AboutSection onContactClick={() => scrollToSection('contact')} />

        {/* 7. Contact section */}
        <ContactSection initialService={selectedService} />
      </main>

      {/* Footer */}
      <Footer onNavigate={scrollToSection} />

      {/* Interactive Modals */}
      <JarvisVoiceModal
        isOpen={isJarvisModalOpen}
        onClose={() => setIsJarvisModalOpen(false)}
      />

      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onOpenJarvisDemo={() => setIsJarvisModalOpen(true)}
      />
    </div>
  );
}
