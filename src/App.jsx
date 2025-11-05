import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import About from "./pages/about"
import Home from "./pages/Home"
import Eboard from "./pages/Eboard"
import EventsPage from "./pages/Events/EventsPage"

export default function App() {
  return (
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/eboard" element={<Eboard />} />
        <Route path="/events" element={<EventsPage />} />
      </Routes>

    </BrowserRouter>
  )
}