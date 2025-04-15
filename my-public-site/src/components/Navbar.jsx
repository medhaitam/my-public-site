import { Link } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  return (
    <nav className="navbar">
      <h1>Monitoring Solaire</h1>
      <div className="links">
        <Link to="/">Accueil</Link>
        <Link to="/about">À propos</Link>
        <Link to="/history">Historique</Link>
      </div>
    </nav>
  )
}

export default Navbar

