import { partners } from '../data/content'

export function Partners() {
  return (
    <section id="partners">
      <div className="section-head">
        <h2>Partners</h2>
        <a className="all" href="#">
          Full biographies &rarr;
        </a>
      </div>
      <div className="team">
        {partners.map((partner) => (
          <div className="partner" key={partner.name}>
            <div className="headshot">{partner.initials}</div>
            <div>
              <h3>{partner.name}</h3>
              <div className="role">{partner.role}</div>
              <p className="bio">{partner.bio}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
