import { Link, useParams } from 'react-router-dom'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { projects } from '../data/content'

export function ProjectDetail() {
  const { slug } = useParams()
  const project = projects.find((p) => p.slug === slug)

  return (
    <>
      <Header />
      <main>
        <div className="section-head">
          <h2>{project ? project.name : 'Project not found'}</h2>
          <Link className="all" to="/#portfolio">
            &larr; Back to portfolio
          </Link>
        </div>
        {project && (
          <div className="project-detail">
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
            <div>
              <div className="project-meta">
                <span>{project.location}</span>
                <span className="n">{project.meta} units</span>
              </div>
              <p className="bio">{project.description}</p>
              <dl className="project-stats">
                <div>
                  <dt>Timeline</dt>
                  <dd>{project.timeline}</dd>
                </div>
                <div>
                  <dt>Address</dt>
                  <dd>
                    {project.address.street}, {project.address.city.trim()}{' '}
                    {project.address.state}
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        )}
      </main>
      <div style={{ margin: '0 3em' }}>
        <Footer />
      </div>
    </>
  )
}
