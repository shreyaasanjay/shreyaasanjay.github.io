import CameraControls from './CameraControls'
import Viewfinder from './Viewfinder'

function CameraShell({ sections, currentSection, onSectionChange }) {
  return (
    <section className="camera" aria-label="Portfolio camera">
      <div className="camera__top">
        <span className="camera__brand">YOUR NAME</span>
        <button className="shutter" type="button" aria-label="Featured project">
          <span />
        </button>
      </div>

      <div className="camera__back">
        <Viewfinder section={currentSection} />
        <CameraControls
          sections={sections}
          activeSection={currentSection.id}
          onSectionChange={onSectionChange}
        />
      </div>
    </section>
  )
}

export default CameraShell
