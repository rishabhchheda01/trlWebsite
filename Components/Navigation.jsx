import { Link } from "react-router-dom"
import logo from "../Images/Terrapin_Record_label.png"

export default function Navigation({ menuItems }){
    const menu_items = menuItems.map((item, index) => (
        <li key = {index} className="text-black m-r-[1em]"><Link className="link_tag" to = {item.url}>{item.name}</Link></li>
    ))
    return(
        <>
            <div className = "bg-yellow-500 flex align-middle justify-between border-b-2 border-black pr-5">
                <div className = "flex w-1/2 items-center">
                    <Link className = "link_tag" to = "/"><img src = {logo} className = "h-[80px] w-auto" /></Link>
                    <h1><Link className = "link_tag font-bold" to = "/">Terrapin Record Label</Link></h1>
                </div>
                <nav id = "navbar">
                    <ul className="flex flex-row-reverse h-[100%] list-none m-0 p-0 justify-between items-center">
                        {menu_items}
                    </ul>
                </nav>
            </div>
        </>
    )
}