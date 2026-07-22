import { useState } from 'react'
import CameraControls from './CameraControls'
import CameraImage from '../assets/cameraback.png'
import Viewfinder from './Viewfinder'

function CameraShell({ sections, currentSection, onSectionChange }) {
  const [isPoweredOn, setIsPoweredOn] = useState(false)

  function handlePowerClick() {
    const nextPowerState = !isPoweredOn

    setIsPoweredOn(nextPowerState)

    if (nextPowerState) {
      onSectionChange('home')
    }
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
          <Viewfinder section={currentSection} />
        ) : (
          <div className="camera__off-screen" aria-label="Camera is off" />
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
