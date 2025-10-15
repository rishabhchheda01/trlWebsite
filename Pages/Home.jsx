import { Link } from "react-router-dom"
import Navigation from "../Components/Navigation"

export default function Home(){
    const menu_items = [{name: "About", url: "/about"}]
    return(
        <>
            <Navigation menuItems={ menu_items } />
        </>
    )
}