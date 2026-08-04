import { Link } from 'react-router-dom'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { partners } from '../data/content'

export function PartnerBios() {
  return (
    <>
      <Header />
      <main>
        <div className="section-head">
          <h2>Partner biographies</h2>
          <Link className="all" to="/#partners">
            &larr; Back to overview
          </Link>
        </div>
        <div className="bio-list">
          {partners.map((partner) => (
            <div className="partner partner-full" key={partner.name}>
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
                <p className="bio">{partner.bioFull}</p>
              </div>
            </div>
          ))}
        </div>
      </main>
      <div style={{ margin: '0 3em' }}>
        <Footer />
      </div>
    </>
  )
}
