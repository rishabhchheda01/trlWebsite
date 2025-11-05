import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Eboard from './pages/Eboard'
import EventsPage from './pages/Events/EventsPage'
import LandingPage from './pages/LandingPage'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/eboard" element={<Eboard />} />
        <Route path="/events" element={<EventsPage />} />
        {/* ADD CONTACT PAGE */}
      </Routes>
    </BrowserRouter>
  )
}



