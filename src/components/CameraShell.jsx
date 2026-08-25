import { useEffect, useState } from 'react'
import CameraImage from '../assets/camera-illustrated.png'
import Viewfinder from './Viewfinder'

function CameraShell({ photos, selectedPhoto, capturedPhoto, onPhotoSelect, onTakePhoto }) {
  const [isShutterActive, setIsShutterActive] = useState(false)

  useEffect(() => {
    if (!isShutterActive) return undefined
    const timer = window.setTimeout(() => setIsShutterActive(false), 700)
    return () => window.clearTimeout(timer)
  }, [isShutterActive])

  function handleTakePhoto() {
    setIsShutterActive(true)
    onTakePhoto(selectedPhoto)
  }

  return (
    <section className="camera" aria-label="Shreyaa's portfolio camera">
      <p className="camera__interaction-sign">
        Play around<br />with the camera!
        <span className="camera__interaction-arrow" aria-hidden="true">
          <svg viewBox="0 0 260 150" fill="none">
            <path d="M248 14C161 -5 115 25 91 73C72 110 54 119 26 130" />
            <path d="M47 108L26 130L57 136" />
          </svg>
        </span>
      </p>
      <img className="camera__image" src={CameraImage} alt="" aria-hidden="true" />
      <button
        className="camera__capture"
        type="button"
        onClick={handleTakePhoto}
        aria-label={`Print ${selectedPhoto.label} photo`}
      >
        <span className="camera__capture-dot" aria-hidden="true" />
      </button>
      <div className="camera__screen">
        <Viewfinder
          photos={photos}
          selectedPhoto={selectedPhoto}
          onPhotoSelect={onPhotoSelect}
          capturedPhoto={capturedPhoto}
        />
      </div>
      {isShutterActive && <div className="camera__shutter" aria-hidden="true"><span /></div>}
    </section>
  )
}

export default CameraShell
