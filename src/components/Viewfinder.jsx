import Home from '../sections/Home'

function Viewfinder({ section }) {
  return (
    <div className="viewfinder" aria-live="polite">
      <div className="viewfinder__status">
        <span>● REC</span>
        <span>{section.label}</span>
      </div>

      <div className="viewfinder__content">
        <p className="eyebrow">Portfolio / {section.label}</p>
        <h1>{section.heading}</h1>
        <p>{section.placeholder}</p>

        {/* TODO: Replace this placeholder with a component for each section. */}
        <div className="content-placeholder">
          Your {section.label.toLowerCase()} content will go here.
        </div>
      </div>
    </div>
  )
}

export default Viewfinder
