import ProfileHeadshot from '../assets/profile-headshot.jpg'

function Scrapbook({ experiences, projects, skillGroups, onProjectOpen }) {
  return (
    <article className="scrapbook" aria-label="Shreyaa’s portfolio scrapbook">
      <section className="scrapbook-intro" id="home">
        <div className="scrapbook-intro__copy">
          <p className="scrapbook-kicker">About Me</p>
          <h2>About Me</h2>
          <p>
            Hey! I’m Shreyaa Sanjay, a Cornell University student studying Computer
            Science and ECE. I love learning about how physical systems connect to
            software and love building tools for social impact. I also enjoy watching
            bollywood movies, thrifting and sewing clothes, and photography!
          </p>
        </div>

        <figure className="scrapbook-intro__photo">
          <span aria-hidden="true" />
          <img src={ProfileHeadshot} alt="Portrait of Shreyaa" />
          <figcaption>New Jersey, USA</figcaption>
        </figure>
      </section>

      <div className="scrapbook-spread">
        <section className="scrapbook-page experience-page" id="experience">
          <header className="section-heading">
            <span>Chapter 02</span>
            <h2>Experience</h2>
          </header>

          <div className="experience-timeline">
            {experiences.map((experience, index) => (
              <article className="experience-note" key={experience.company}>
                <span className="experience-note__number">0{index + 1}</span>
                <p className="experience-note__date">{experience.date}</p>
                <h3>{experience.company}</h3>
                <p className="experience-note__role">{experience.role}</p>
                <p>{experience.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="scrapbook-page projects-page" id="projects">
          <header className="section-heading">
            <span>Chapter 03</span>
            <h2>Selected Projects</h2>
          </header>

          <div className="project-grid">
            {projects.map((project, index) => (
              <button
                className={`project-polaroid project-polaroid--${project.accent}`}
                key={project.id}
                type="button"
                onClick={() => onProjectOpen(project)}
              >
                <span className="project-polaroid__image" aria-hidden="true">
                  <span>{String(index + 1).padStart(2, '0')}</span>
                </span>
                <span className="project-polaroid__category">{project.category}</span>
                <strong>{project.title}</strong>
                <span>{project.description}</span>
                <em>Open case study →</em>
              </button>
            ))}
          </div>
        </section>
      </div>

      <section className="skills-strip" id="skills">
        <header className="section-heading">
          <span>Chapter 04</span>
          <h2>Skills</h2>
        </header>
        <div className="skill-stamps">
          {skillGroups.map((group) => (
            <article className="skill-stamp" key={group.label}>
              <span aria-hidden="true">✦</span>
              <div>
                <h3>{group.label}</h3>
                <p>{group.items.join(' · ')}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="contact-postcard" id="contact">
        <div>
          <p className="scrapbook-kicker">Contact</p>
          <h2>Connect with Me!</h2>
          <p>I’m always happy to talk about projects, research, and new technology!</p>
        </div>
        <a href="mailto:ss4457@cornell.edu">ss4457@cornell.edu →</a>
      </section>
    </article>
  )
}

export default Scrapbook


