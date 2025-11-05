import React from 'react'
import Navbar from './components/Navbar.jsx'
import LandingPage from './pages/LandingPage.jsx'

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/eboard" element={<Eboard />} />
          <Route path="/events" element={<EventsPage />} />
          {/* ADD CONTACT PAGE */}
        </Routes>
      </BrowserRouter>
    </>
  )
}



