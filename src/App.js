import { useEffect, useState } from 'react';
import Navigation from './Components/Navigation';
import Hero from './Components/Hero';
import About from './Components/About';
import Skills from './Components/Skills';
import Experience from './Components/Experiance';
import Projects from './Components/Projects';
import Education from './Components/Education';
import Contact from './Components/Contact';
import styled from 'styled-components';
import Footer from './Components/Footer';
import Certifications from './Components/Certifications';

const MainContainer = styled.div`
  display: flex;
  background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
  color: #e2e8f0;
  font-family: 'Geist', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    sans-serif;
  min-height: 100vh;
`;

const ContentWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
  @media (max-width: 768px) {
    margin-left: 0;
  }
`;

export default function App() {
  const [activeSection, setActiveSection] = useState('about');
  useEffect(() => {
    const sections = document.querySelectorAll(
      '#hero, #about, #skills, #experience, #projects, #education, #certifications, #contact'
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.6, // section must be 60% visible to activate
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);
  return (
    <MainContainer>
      <Navigation
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />
      <ContentWrapper>
        <div id='hero'>
          <Hero setActiveSection={setActiveSection} />
        </div>
        <div id='about'>
          <About />
        </div>
        <div id='skills'>
          <Skills />
        </div>
        <div id='experience'>
          <Experience />
        </div>
        <div id='projects'>
          <Projects />
        </div>
        <div id='education'>
          <Education />
        </div>
        <div id='certifications'>
          <Certifications />
        </div>
        <div id='contact'>
          <Contact />
        </div>
        <Footer />
      </ContentWrapper>
    </MainContainer>
  );
}
