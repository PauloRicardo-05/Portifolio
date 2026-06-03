import { useEffect, useState } from 'react';
import './styles/global.css';
import { About } from './components/About';
import { Certificates } from './components/Certificates';
import { Contact } from './components/Contact';
import { EasterEgg } from './components/EasterEgg';
import { FloatingControls } from './components/FloatingControls';
import { Footer } from './components/Footer';
import { GitHubActivity } from './components/GitHubActivity';
import { Hero } from './components/Hero';
import { Navbar } from './components/Navbar';
import { ProjectModal } from './components/ProjectModal';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { VideoModal } from './components/VideoModal';
import type { Project } from './types/portfolio';

export function App() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [printMode, setPrintMode] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [videoProject, setVideoProject] = useState<Project | null>(null);
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null);

  useEffect(() => {
    function updateScrollUI() {
      const scrollTop = document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const progress = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;

      setScrollProgress(progress);
      setScrolled(scrollTop > 10);
      setShowBackToTop(scrollTop > 300);
    }

    updateScrollUI();
    window.addEventListener('scroll', updateScrollUI, { passive: true });
    return () => window.removeEventListener('scroll', updateScrollUI);
  }, []);

  useEffect(() => {
    document.body.classList.toggle('print-mode', printMode);
    return () => document.body.classList.remove('print-mode');
  }, [printMode]);

  useEffect(() => {
    const lockScroll = Boolean(selectedProject || videoProject);
    document.body.style.overflow = lockScroll ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [selectedProject, videoProject]);

  useEffect(() => {
    function handleEscape(event: KeyboardEvent) {
      if (event.key !== 'Escape') return;
      setSelectedProject(null);
      setVideoProject(null);
    }

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, []);

  function enterPrintMode() {
    setPrintMode(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <>
      <div className="scroll-progress" id="scroll-progress" aria-hidden="true" style={{ width: `${scrollProgress}%` }} />
      <Navbar scrolled={scrolled} />
      <Hero onPrintMode={enterPrintMode} />
      <About />
      <Certificates />
      <Skills selectedSkill={selectedSkill} onSelectSkill={setSelectedSkill} />
      <Projects selectedSkill={selectedSkill} onClearSkill={() => setSelectedSkill(null)} onOpenProject={setSelectedProject} onOpenVideo={setVideoProject} />
      <GitHubActivity />
      <Contact />
      <Footer />
      <FloatingControls showBackToTop={showBackToTop} printMode={printMode} onExitPrintMode={() => setPrintMode(false)} />
      <EasterEgg />
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} onOpenVideo={setVideoProject} />
      <VideoModal project={videoProject} onClose={() => setVideoProject(null)} />
    </>
  );
}
