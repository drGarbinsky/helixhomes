import { Link } from 'react-router-dom'

export function Footer() {
  return (
    <footer className="site" id="contact">
      <div className="col">
        <h4>Helix Homes</h4>
        <span>[Office address]</span>
        <a href="mailto:investment@helixhomes.dev">Contact</a>
      </div>
      <div className="col">
        <h4>Navigate</h4>
        <Link to="/#portfolio">Portfolio</Link>
        <Link to="/partners">Partners</Link>
        <Link to="/#invest">Investors</Link>
      </div>

    </footer>
  )
}
