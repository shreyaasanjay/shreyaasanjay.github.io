import { useState } from 'react'
import CameraShell from './components/CameraShell'
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
      <CameraShell
        sections={sections}
        currentSection={currentSection}
        onSectionChange={setActiveSection}
      />
    </main>
  )
}

export default App
