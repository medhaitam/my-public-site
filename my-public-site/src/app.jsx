import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'

function App() {
  return (
    <BrowserRouter>
      <nav style={{ padding: 10 }}>
        <a href="/" style={{ marginRight: 10 }}>Home</a>
        <a href="/about" style={{ marginRight: 10 }}>About</a>
        <a href="/contact">Contact</a>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

