function Viewfinder({ section }) {
  return (
    <div className="viewfinder" aria-live="polite">
      <div className="viewfinder__status">
        <span>● REC</span>
        <span>Portfolio / {section.label}</span>
      </div>

      <div className="viewfinder__content">
        <p className="eyebrow"></p>
        <h1>Hi, I’m Shreyaa!</h1>
        <p>Computer Science + ECE at Cornell University</p>
        {/* <p className="viewfinder__cta viewfinder__cta--instruction">
          {hasTakenPhoto ? 'Picture captured ✓' : 'Press ↓ to take picture'}
        </p> */}
      </div>
    </div>
  )
}

export default Viewfinder



