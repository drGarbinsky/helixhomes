import { projects } from '../data/content'

export function Portfolio() {
  return (
    <section id="portfolio">
      <div className="section-head">
        <h2>Current &amp; recent projects</h2>
        <a className="all" href="#">
          View full portfolio &rarr;
        </a>
      </div>
      <div className="projects">
        {projects.map((project) => (
          <div className="project-card" key={project.name}>
            <div className="elevation" data-label={project.name} style={{ position: 'relative' }}>
              <span className={`status ${project.status}`}>{project.statusLabel}</span>
            </div>
            <h3>{project.name}</h3>
            <div className="project-meta">
              <span>{project.location}</span>
              <span className="n">{project.meta}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
