import { Link } from 'react-router-dom'

export function Header() {
  return (
    <header className="site">
      <Link className="wordmark" to="/">
        <b>Helix</b> Homes
      </Link>
      <nav className="primary">
        <Link to="/#portfolio">Portfolio</Link>
        <Link to="/partners">Partners</Link>
        <Link to="/#invest">Investors</Link>
        <Link to="/#contact">Contact</Link>
      </nav>
    </header>
  )
}
