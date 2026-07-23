import CameraControls from './CameraControls'
import CameraImage from '../assets/camera-illustrated.png'
import CaptureGuide from '../assets/capture-guide-transparent.png'
import Viewfinder from './Viewfinder'
import { useEffect, useState } from 'react'

function CameraShell({
  sections,
  currentSection,
  isPoweredOn,
  hasTakenPhoto,
  onPowerChange,
  onSectionChange,
  onTakePhoto,
}) {
  const [isShutterActive, setIsShutterActive] = useState(false)

  useEffect(() => {
    if (!isShutterActive) return undefined

    const timer = window.setTimeout(() => setIsShutterActive(false), 700)
    return () => window.clearTimeout(timer)
  }, [isShutterActive])

  function handlePowerClick() {
    onPowerChange(!isPoweredOn)
  }

  function handleTakePhoto() {
    if (hasTakenPhoto) return

    setIsShutterActive(true)
    onTakePhoto()
  }

  return (
    <section className="camera" aria-label="Shreyaa’s portfolio camera">
      <img
        className="camera__image"
        src={CameraImage}
        alt=""
        aria-hidden="true"
      />

      {isPoweredOn && !hasTakenPhoto && (
        <img
          className="camera__capture-guide"
          src={CaptureGuide}
          alt="Press the down-arrow button to take a picture"
        />
      )}

      <button
        className="camera__power"
        type="button"
        onClick={handlePowerClick}
        aria-label={isPoweredOn ? 'Turn camera off' : 'Turn camera on'}
        aria-pressed={isPoweredOn}
      >
        {isPoweredOn ? 'OFF' : 'ON'}
      </button>

      {isPoweredOn && (
        <button
          className="camera__capture"
          type="button"
          onClick={handleTakePhoto}
          disabled={hasTakenPhoto}
          aria-label={hasTakenPhoto ? 'Picture captured' : 'Take picture'}
        >
          <span aria-hidden="true">↓</span>
        </button>
      )}

      <div className="camera__screen">
        {isPoweredOn ? (
          <Viewfinder section={currentSection} hasTakenPhoto={hasTakenPhoto} />
        ) : (
          <div className="camera__off-screen" aria-label="Camera is off">
            <span>Press ON to begin</span>
          </div>
        )}

        {isShutterActive && (
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
