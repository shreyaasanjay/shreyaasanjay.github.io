import { useEffect, useState } from 'react'
import CameraImage from '../assets/camera-illustrated.png'
import Viewfinder from './Viewfinder'

function CameraShell({ photos, selectedPhoto, capturedPhoto, onPhotoSelect, onTakePhoto }) {
  const [isShutterActive, setIsShutterActive] = useState(false)
  const [isLabelVisible, setIsLabelVisible] = useState(false)

  useEffect(() => {
    if (!isShutterActive) return undefined
    const timer = window.setTimeout(() => setIsShutterActive(false), 700)
    return () => window.clearTimeout(timer)
  }, [isShutterActive])

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setIsLabelVisible(true)
      return undefined
    }

    const timer = window.setTimeout(() => setIsLabelVisible(true), 2800)
    return () => window.clearTimeout(timer)
  }, [])

  function handleTakePhoto() {
    setIsShutterActive(true)
    onTakePhoto(selectedPhoto)
  }

  return (
    <section className="camera" aria-label="Shreyaa's portfolio camera">
      <svg
        className="camera__get-to-know-doodle"
        viewBox="0 0 1000 300"
        aria-hidden="true"
      >
        <path
          className="camera__get-to-know-line"
          pathLength="1"
          d="M35 12C72 76 80 128 145 146C210 164 246 76 193 67C134 58 139 157 227 194C307 228 384 190 472 150C590 98 666 145 732 188C812 240 906 224 1000 181"
        />
      </svg>
      <svg
        className={`camera__curve-label${isLabelVisible ? ' camera__curve-label--visible' : ''}`}
        viewBox="0 0 500 200"
        aria-hidden="true"
      >
        <defs>
          <path
            id="camera-curve-label-path"
            d="M12 42C98 18 183 28 244 68C275 88 292 108 302 128"
          />
        </defs>
        <text>
          <textPath href="#camera-curve-label-path" startOffset="0%">GET TO KNOW ME!</textPath>
        </text>
      </svg>
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
