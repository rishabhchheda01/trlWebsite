import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import About from "./Pages/about"
import Home from "./Pages/Home"
import Eboard from "./Pages/Eboard"

export default function App(){
    return(
        <BrowserRouter>

            <Routes>
                <Route path = "/" element = {<Home />} />
                <Route path = "/about" element = {<About />} />
                <Route path = "/eboard" element = {<Eboard />} />
            </Routes>

        </BrowserRouter>
    )
}