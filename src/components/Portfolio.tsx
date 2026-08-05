import { Link } from 'react-router-dom'
import { projects } from '../data/content'

export function Portfolio() {
  return (
    <section id="portfolio">
      <div className="section-head">
        <h2>Current &amp; recent projects</h2>
      </div>
      <div className="projects">
        {projects.map((project) => (
          <Link className="project-card" to={`/projects/${project.slug}`} key={project.name}>
            <div
              className="elevation"
              data-label={project.name}
              style={
                project.image
                  ? {
                      position: 'relative',
                      backgroundImage: `url(${project.image})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                    }
                  : { position: 'relative' }
              }
            >
              <span className={`status ${project.status}`}>{project.statusLabel}</span>
            </div>
            <h3>{project.name}</h3>
            <div className="project-meta">
              <span>{project.location}</span>
              <span className="n">{project.meta}</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
