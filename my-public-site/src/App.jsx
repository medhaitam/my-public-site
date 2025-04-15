import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import History from './pages/History'
import About from './pages/About'
import Contact from './pages/Contact'

function App() {
  return (
    <BrowserRouter>
      <nav style={{
        padding: 10,
        backgroundColor: '#1f2937',
        color: 'white',
        display: 'flex',
        gap: '1rem'
      }}>
        <Link to="/" style={{ color: 'white' }}>Dashboard</Link>
        <Link to="/history" style={{ color: 'white' }}>Historique</Link>
        <Link to="/about" style={{ color: 'white' }}>À propos</Link>
        <Link to="/contact" style={{ color: 'white' }}>Contact</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/history" element={<History />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

