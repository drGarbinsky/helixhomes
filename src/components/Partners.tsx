import { Link } from 'react-router-dom'
import { partners } from '../data/content'

export function Partners() {
  return (
    <section id="partners">
      <div className="section-head">
        <h2>Partners</h2>
        <Link className="all" to="/partners">
          Full biographies &rarr;
        </Link>
      </div>
      <div className="team">
        {partners.map((partner) => (
          <div className="partner" key={partner.name}>
            <div className="headshot">
              {partner.photo ? (
                <img src={partner.photo} alt={partner.name} className="headshot-img" />
              ) : (
                partner.initials
              )}
            </div>
            <div>
              <h3>{partner.name}</h3>
              <div className="role">{partner.role}</div>
              <p className="bio">{partner.bioShort}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
