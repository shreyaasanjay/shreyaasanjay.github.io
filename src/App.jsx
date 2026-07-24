import { useEffect, useState } from 'react'
import CameraShell from './components/CameraShell'
import CameraManual from './components/CameraManual'
import Scrapbook from './components/Scrapbook'
import ProjectModal from './components/ProjectModal'
import BotanicalFlower from './assets/botanical-flower.png'
import PressedFlower from './assets/pressed-flower.webp'
import CornellTower from './assets/cornell-tower-decal.png'
import ShutterPhoto from './assets/shutter-lake.jpg'
import CornellBenchPhoto from './assets/memory-cornell-bench.jpg'
import NewOrleansPhoto from './assets/memory-new-orleans.jpg'
import FriendsPhoto from './assets/memory-friends.jpg'
import { sections } from './data/sections'
import { experiences, projects, skillGroups } from './data/portfolio'
import './App.css'

function App() {
  const [activeSection, setActiveSection] = useState('home')
  const [isPoweredOn, setIsPoweredOn] = useState(false)
  const [hasTakenPhoto, setHasTakenPhoto] = useState(false)
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
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
      setHasTakenPhoto(false)
      setIsDeveloped(false)
      setSelectedProject(null)
    }
  }

  function handleTakePhoto() {
    setHasTakenPhoto(true)
  }

  function handleDevelop() {
    if (!hasTakenPhoto) return

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

  useEffect(() => {
    document.body.style.overflowY = hasTakenPhoto ? '' : 'hidden'

    return () => {
      document.body.style.overflowY = ''
    }
  }, [hasTakenPhoto])

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
          <figure className="hero-memory-polaroid hero-memory-polaroid--bench">
            <span />
            <img src={CornellBenchPhoto} alt="" />
            <figcaption>Cornell · summer</figcaption>
          </figure>
          <figure className="hero-memory-polaroid hero-memory-polaroid--travel">
            <span />
            <img src={NewOrleansPhoto} alt="" />
            <figcaption>Camera roll · 02</figcaption>
          </figure>
          <figure className="hero-memory-polaroid hero-memory-polaroid--friends">
            <span />
            <img src={FriendsPhoto} alt="" />
            <figcaption>Friends · Cornell</figcaption>
          </figure>
          <img
            className="hero-decal hero-decal--pressed-flower-left"
            src={PressedFlower}
            alt=""
          />
          <span className="hero-decal hero-decal--ink-speckles" />
          <span className="hero-decal hero-decal--tape-left" />
          <div className="hero-decal hero-decal--cornell">
            <span>Cornell</span>
            <b>C</b>
            <small>Ithaca · 1865</small>
          </div>
          <span className="hero-decal hero-decal--sparkle-one">✦</span>
          <span className="hero-decal hero-decal--sparkle-two">✧</span>
          <span className="hero-decal hero-decal--sparkle-three">✦</span>
          <span className="hero-decal hero-decal--dashes">· · · · ·</span>
        </div>

        <div className="portfolio-stage">
          <div className="camera-flower-decal" aria-hidden="true">
            <img src={PressedFlower} alt="" />
          </div>
          <div className="camera-column">
            <CameraShell
              sections={navigationSections}
              currentSection={currentSection}
              isPoweredOn={isPoweredOn}
              hasTakenPhoto={hasTakenPhoto}
              onPowerChange={handlePowerChange}
              onSectionChange={scrollToSection}
              onTakePhoto={handleTakePhoto}
            />

            <button
              className={`developing-photo${hasTakenPhoto ? ' developing-photo--visible' : ''}`}
              type="button"
              onClick={handleDevelop}
              disabled={!hasTakenPhoto || isDeveloped}
              aria-label="Develop and open portfolio"
              aria-hidden={!hasTakenPhoto}
            >
              <span className="developing-photo__image">
                <img src={ShutterPhoto} alt="Lake and waterfall surrounded by trees" />
              </span>
              <strong>Portfolio captured</strong>
              <span>{isDeveloped ? 'Developed ✓' : 'Click to develop ↓'}</span>
            </button>
          </div>

          <CameraManual />
        </div>
      </section>

      {isPoweredOn && isDeveloped && (
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




















