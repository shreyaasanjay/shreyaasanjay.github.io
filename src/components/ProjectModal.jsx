import { useEffect } from 'react'

function ProjectModal({ project, onClose }) {
  useEffect(() => {
    function handleKeyDown(event) {
      if (event.key === 'Escape') {
        onClose()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [onClose])

  return (
    <div className="project-modal" role="presentation" onMouseDown={onClose}>
      <article
        className="project-modal__paper"
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <button
          className="project-modal__close"
          type="button"
          onClick={onClose}
          aria-label="Close project details"
          autoFocus
        >
          ×
        </button>
        <p className="scrapbook-kicker">Project case study</p>
        <h2 id="project-modal-title">{project.title}</h2>
        <p className="project-modal__category">{project.category}</p>
        <p>{project.details}</p>
        <div className="project-modal__prompts">
          <span>Problem</span>
          <span>Process</span>
          <span>Impact</span>
        </div>
        <p className="project-modal__note">
          Replace this starter copy with screenshots, your technical decisions,
          and the result of the project.
        </p>
      </article>
    </div>
  )
}

export default ProjectModal
