import { useEffect, useState } from 'react'
import CameraShell from './components/CameraShell'
import CameraManual from './components/CameraManual'
import Scrapbook from './components/Scrapbook'
import ProjectModal from './components/ProjectModal'
import BotanicalFlower from './assets/botanical-flower.png'
import CornellTower from './assets/cornell-tower-decal.png'
import CornellCampusPhoto from './assets/cornell-autumn-campus.webp'
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
  const navigationSections = sections.filter((section) => section.id !== 'home')

  function scrollToSection(sectionId) {
    setActiveSection(sectionId)

    if (isDeveloped) {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  function handlePowerChange(nextPowerState) {
    setIsPoweredOn(nextPowerState)
    setActiveSection('home')

    if (!nextPowerState) {
      setIsDeveloped(false)
      setSelectedProject(null)
    }
  }

  function handleDevelop() {
    setActiveSection('home')
    setIsDeveloped(true)
  }

  useEffect(() => {
    if (!isDeveloped) {
      return undefined
    }

    const scrollTimer = window.setTimeout(() => {
      document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' })
    }, 850)

    return () => window.clearTimeout(scrollTimer)
  }, [isDeveloped])

  return (
    <main className="site-shell">
      <header className="portfolio-toolbar">
        <a className="portfolio-toolbar__title" href="#camera-hero">
          Shreyaa’s Portfolio
        </a>
        {isDeveloped && (
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
        )}
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
        <div className="hero-decals" aria-hidden="true">
          <div className="hero-decal hero-decal--note">
            <span className="hero-decal__tape" />
            Rooted in curiosity,<br />driven by impact.
            <span className="hero-decal__heart">♡</span>
          </div>
          <div className="hero-decal hero-decal--cornell">
            <span>Cornell</span>
            <b>C</b>
            <small>Ithaca · 1865</small>
          </div>
          <div className="hero-decal hero-decal--motto">
            <span>Day by day</span>
            <b>✦</b>
            <span>Better</span>
          </div>
          <span className="hero-decal hero-decal--sparkle-one">✦</span>
          <span className="hero-decal hero-decal--sparkle-two">✧</span>
          <span className="hero-decal hero-decal--sparkle-three">✦</span>
          <span className="hero-decal hero-decal--dashes">· · · · ·</span>
        </div>

        <div className="portfolio-stage">
          <div className="camera-column">
            <CameraShell
              sections={navigationSections}
              currentSection={currentSection}
              isPoweredOn={isPoweredOn}
              onPowerChange={handlePowerChange}
              onSectionChange={scrollToSection}
              onExplore={handleDevelop}
            />

            <a
              className={`developing-photo${isDeveloped ? ' developing-photo--visible' : ''}`}
              href="#home"
            >
              <span className="developing-photo__image">
                <img src={CornellCampusPhoto} alt="Cornell campus in autumn with McGraw Tower" />
              </span>
              <strong>CS + AI at Cornell</strong>
              <span>Scroll to develop ↓</span>
            </a>
          </div>

          <CameraManual />
        </div>
      </section>

      {isDeveloped && (
        <Scrapbook
          experiences={experiences}
          projects={projects}
          skillGroups={skillGroups}
          onProjectOpen={setSelectedProject}
        />
      )}

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






