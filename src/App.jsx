import { useState } from 'react'
import CameraShell from './components/CameraShell'
import CameraManual from './components/CameraManual'
import Scrapbook from './components/Scrapbook'
import ProjectModal from './components/ProjectModal'
import BotanicalFlower from './assets/botanical-flower.png'
import CornellTower from './assets/cornell-tower-decal.png'
import { sections } from './data/sections'
import { experiences, projects, skillGroups } from './data/portfolio'
import './App.css'

function App() {
  const [activeSection, setActiveSection] = useState('home')
  const [isPoweredOn, setIsPoweredOn] = useState(false)
  const [isDeveloped, setIsDeveloped] = useState(false)
  const [selectedProject, setSelectedProject] = useState(null)

  const currentSection =
    sections.find((section) => section.id === activeSection) ?? sections[0]

  function scrollToSection(sectionId) {
    setActiveSection(sectionId)
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
  }

  function handlePowerChange(nextPowerState) {
    setIsPoweredOn(nextPowerState)

    if (nextPowerState) {
      setActiveSection('home')
      setIsDeveloped(true)
    }
  }

  return (
    <main className="site-shell">
      <header className="portfolio-toolbar">
        <a className="portfolio-toolbar__title" href="#camera-hero">
          Shreyaa’s Portfolio
        </a>
        <nav aria-label="Main navigation">
          {sections.map((section) => (
            <button
              key={section.id}
              type="button"
              onClick={() => scrollToSection(section.id)}
            >
              {section.label}
            </button>
          ))}
        </nav>
      </header>

      <img
        className="botanical-background"
        src={BotanicalFlower}
        alt=""
        aria-hidden="true"
      />
      <img
        className="botanical-background botanical-background--top"
        src={BotanicalFlower}
        alt=""
        aria-hidden="true"
      />
      <img
        className="tower-background"
        src={CornellTower}
        alt=""
        aria-hidden="true"
      />

      <section className="camera-hero" id="camera-hero">
        <div className="portfolio-stage">
          <div className="camera-column">
            <CameraShell
              sections={sections}
              currentSection={currentSection}
              isPoweredOn={isPoweredOn}
              onPowerChange={handlePowerChange}
              onSectionChange={scrollToSection}
              onExplore={() => scrollToSection('home')}
            />

            <a
              className={`developing-photo${isDeveloped ? ' developing-photo--visible' : ''}`}
              href="#home"
            >
              <span className="developing-photo__image">
                <img src={CornellTower} alt="Cornell’s McGraw Tower" />
              </span>
              <strong>CS + AI at Cornell</strong>
              <span>Scroll to develop ↓</span>
            </a>
          </div>

          <CameraManual />
        </div>
      </section>

      <Scrapbook
        experiences={experiences}
        projects={projects}
        skillGroups={skillGroups}
        onProjectOpen={setSelectedProject}
      />

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </main>
  )
}

export default App
