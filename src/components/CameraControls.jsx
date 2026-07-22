function CameraControls({ sections, activeSection, onSectionChange }) {
  return (
    <nav className="camera-controls" aria-label="Portfolio sections">
      {sections.map((section) => (
        <button
          className={`camera-controls__button camera-controls__button--${section.id}`}
          key={section.id}
          type="button"
          onClick={() => onSectionChange(section.id)}
          aria-label = {`Open ${section.label}`}
          data-active={activeSection === section.id}
        >
          {section.shortLabel}
        </button>
      ))}
    </nav>
  )
  
}

export default CameraControls
