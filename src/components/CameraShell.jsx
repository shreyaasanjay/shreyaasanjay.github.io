import CameraControls from './CameraControls'
import CameraImage from '../assets/cameraback.png'
import Viewfinder from './Viewfinder'

function CameraShell({
  sections,
  currentSection,
  isPoweredOn,
  onPowerChange,
  onSectionChange,
  onExplore,
}) {
  function handlePowerClick() {
    onPowerChange(!isPoweredOn)
  }

  return (
    <section className="camera" aria-label="Shreyaa’s portfolio camera">
      <img
        className="camera__image"
        src={CameraImage}
        alt=""
        aria-hidden="true"
      />

      <button
        className="camera__power"
        type="button"
        onClick={handlePowerClick}
        aria-label={isPoweredOn ? 'Turn camera off' : 'Turn camera on'}
        aria-pressed={isPoweredOn}
      >
        {isPoweredOn ? 'OFF' : 'ON'}
      </button>

      <div className="camera__screen">
        {isPoweredOn ? (
          <Viewfinder section={currentSection} onExplore={onExplore} />
        ) : (
          <div className="camera__off-screen" aria-label="Camera is off">
            <span>Press ON to begin</span>
          </div>
        )}

        {isPoweredOn && (
          <div className="camera__shutter" aria-hidden="true">
            <span />
          </div>
        )}
      </div>

      {isPoweredOn && (
        <CameraControls
          sections={sections}
          activeSection={currentSection.id}
          onSectionChange={onSectionChange}
        />
      )}
    </section>
  )
}

export default CameraShell
