import { useState } from 'react'
import CameraShell from './components/CameraShell'
import CameraManual from './components/CameraManual'
import BotanicalFlower from './assets/botanical-flower.png'
import CornellTower from './assets/cornell-tower-decal.png'
import { sections } from './data/sections'
import './App.css'

function App() {
  // This is the first piece of React state to experiment with.
  // Changing it causes the viewfinder to render a different section.
  const [activeSection, setActiveSection] = useState('home')

  const currentSection = sections.find(
    (section) => section.id === activeSection,
  )

  return (
    <main className="site-shell">
      <header className="portfolio-toolbar">
        <span>Shreyaa’s Portfolio</span>
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
      <div className="portfolio-stage">
        <CameraShell
          sections={sections}
          currentSection={currentSection}
          onSectionChange={setActiveSection}
        />
        <CameraManual />
      </div>
    </main>
  )
}

export default App




