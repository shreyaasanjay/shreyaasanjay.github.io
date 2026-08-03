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
          <section>
            <h3>Problem</h3>
            <p>{project.problem ?? 'Add the user or research problem this project solves.'}</p>
          </section>
          <section>
            <h3>Process</h3>
            <p>{project.process ?? 'Add the main design and implementation steps.'}</p>
          </section>
          <section>
            <h3>Tools</h3>
            <p>{project.tools ?? 'Add the languages, frameworks, and tools you used.'}</p>
          </section>
        </div>
      </article>
    </div>
  )
}

export default ProjectModal

