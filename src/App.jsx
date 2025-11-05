import React from 'react'
import Navbar from './components/Navbar.jsx'
import LandingPage from './components/LandingPage.jsx'

export default function App() {
  return (
    <>
      <Navbar />
      <LandingPage />
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



