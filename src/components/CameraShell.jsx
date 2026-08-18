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
