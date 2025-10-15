import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import About from "./Pages/about"
import Home from "./Pages/Home"

export default function App(){
    return(
        <BrowserRouter>

            <Routes>
                <Route path = "/" element = {<Home />} />
                <Route path = "/about" element = {<About />} />
            </Routes>

        </BrowserRouter>
    )
}