import { useState } from 'react'
import CameraShell from './components/CameraShell'
import Scrapbook from './components/Scrapbook'
import ProjectModal from './components/ProjectModal'
import BotanicalFlower from './assets/botanical-flower.png'
import ShutterPhoto from './assets/shutter-lake.jpg'
import CornellBenchPhoto from './assets/memory-cornell-bench.jpg'
import NewOrleansPhoto from './assets/memory-new-orleans.jpg'
import FriendsPhoto from './assets/memory-friends.jpg'
import { sections } from './data/sections'
import { experiences, projects, research, skillGroups } from './data/portfolio'
import './App.css'

const cameraPhotos = [
  { id: 'lake', src: ShutterPhoto, alt: 'Lake and waterfall surrounded by trees', label: 'Lake' },
  { id: 'campus', src: CornellBenchPhoto, alt: 'Shreyaa near a Cornell campus building', label: 'Cornell' },
  { id: 'travel', src: NewOrleansPhoto, alt: 'Shreyaa in New Orleans', label: 'Travel' },
  { id: 'friends', src: FriendsPhoto, alt: 'Shreyaa with friends', label: 'Friends' },
]

function App() {
  const [activeSection, setActiveSection] = useState('home')
  const [selectedPhoto, setSelectedPhoto] = useState(cameraPhotos[0])
  const [capturedPhoto, setCapturedPhoto] = useState(null)
  const [photoPrintVersion, setPhotoPrintVersion] = useState(0)
  const [selectedProject, setSelectedProject] = useState(null)

  function scrollToSection(sectionId) {
    setActiveSection(sectionId)
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
  }

  function handleTakePhoto(photo) {
    setCapturedPhoto(photo)
    setPhotoPrintVersion((version) => version + 1)
  }

  return (
    <main className="site-shell">
      <header className="portfolio-toolbar">
        <div className="portfolio-toolbar__identity">
          <a className="portfolio-toolbar__title" href="#camera-hero">Shreyaa Sanjay . Software Portfolio</a>
          <span className="portfolio-toolbar__separator" aria-hidden="true">.</span>
          <a className="portfolio-toolbar__link" href="https://github.com/shreyaasanjay" target="_blank" rel="noreferrer">GitHub</a>
          <span className="portfolio-toolbar__separator" aria-hidden="true">.</span>
          <a className="portfolio-toolbar__link" href="/resume.pdf" target="_blank" rel="noreferrer">Resume</a>
          <span className="portfolio-toolbar__separator" aria-hidden="true">.</span>
          <a className="portfolio-toolbar__link" href="https://www.linkedin.com/in/shreyaa-sanjay-3166b2275/" target="_blank" rel="noreferrer">LinkedIn</a>
        </div>
        <nav aria-label="Main navigation">
          {sections.map((section) => (
            <button key={section.id} type="button" onClick={() => scrollToSection(section.id)} data-active={activeSection === section.id}>
              {section.label}
            </button>
          ))}
        </nav>
      </header>

      <img className="botanical-background" src={BotanicalFlower} alt="" aria-hidden="true" />
      <img className="botanical-background botanical-background--top" src={BotanicalFlower} alt="" aria-hidden="true" />

      <section className="camera-hero" id="camera-hero">
        <div className="portfolio-stage">
          <div className="portfolio-hero-copy">
            <h1>Hi, I’m Shreyaa!</h1>
            <p>I’m a current student at Cornell University studying Computer Science and ECE, interested in building physical AI and intelligent systems to enhance daily life!</p>
            <div className="portfolio-hero-copy__actions">
              <button type="button" onClick={() => scrollToSection('projects')}>View projects</button>
            </div>
          </div>

          <div className="camera-column">
            <CameraShell
              photos={cameraPhotos}
              selectedPhoto={selectedPhoto}
              capturedPhoto={capturedPhoto}
              onPhotoSelect={setSelectedPhoto}
              onTakePhoto={handleTakePhoto}
            />
            <div key={photoPrintVersion} className={`developing-photo${capturedPhoto ? ' developing-photo--visible' : ''}`} aria-live="polite">
              <span className="developing-photo__image">
                {capturedPhoto && <img src={capturedPhoto.src} alt={capturedPhoto.alt} />}
              </span>
              <strong>Photo Captured</strong>
              <span>Take another anytime</span>
            </div>
          </div>
        </div>
      </section>

      <Scrapbook experiences={experiences} projects={projects} research={research} skillGroups={skillGroups} onProjectOpen={setSelectedProject} />
      {selectedProject && <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />}
    </main>
  )
}

export default App
