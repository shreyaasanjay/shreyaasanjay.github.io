function Viewfinder({ photos, selectedPhoto, onPhotoSelect, capturedPhoto }) {
  return (
    <div className="viewfinder" aria-live="polite">
      <div className="viewfinder__status"><span>● REC</span><span>{capturedPhoto ? 'Scroll the photo strip to switch photos' : 'Pick a photo → press the red shutter'}</span></div>
      <div className="viewfinder__content">
        <img className="viewfinder__photo" src={selectedPhoto.src} alt={selectedPhoto.alt} />
        <div className="viewfinder__filmstrip" aria-label="Choose a photo to print">
          {photos.map((photo) => (
            <button
              key={photo.id}
              type="button"
              onClick={() => onPhotoSelect(photo)}
              data-selected={selectedPhoto.id === photo.id}
              aria-label={`Select ${photo.label} photo`}
            >
              <img src={photo.src} alt="" />
              <span>{photo.label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Viewfinder
