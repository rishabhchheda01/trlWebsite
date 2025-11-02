import { Link } from "react-router-dom"
import Navigation from "../Components/Navigation"

export default function Home(){
    const menu_items = [{name: "About Us", url: "/about"}, {name: "Events", url: "/about"}, {name: "Artists", url: "/about"}, {name: "Contact Us", url: "/about"}]
    return(
        <>
            <Navigation menuItems={ menu_items } />
        </>
    )
}