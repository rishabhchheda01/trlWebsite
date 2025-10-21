import Navigation from "../Components/Navigation"

export default function About(){
    const menu_items = [{name: "About Us", url: "/about"}, {name: "Events", url: "/about"}, {name: "Artists", url: "/about"}, {name: "Contact Us", url: "/about"}]
    return(
        <>
            <Navigation menuItems={ menu_items } />
            <div className="bg-[#121212] flex flex-row-reverse">
                <div className="w-1/2 flex items-center justify-center">
                    <img src = "../Images/About_Image.png" className="max-w-full max-h-full object-contain"></img>
                </div>
                <div className="w-1/2 flex flex-col p-5">
                    <h1 className="text-red-500 text-3xl font-bold text-center mb-[10%]">About</h1>
                    <div className="mb-[10%] text-white text-center">
                        <p className="font-bold">Founded in 2017, Terrapin Record Label (TRL) is a student-run music collective at the University of Maryland dedicated to supporting, promoting, and celebrating music in all its forms. TRL was created to centralize the campus music scene, providing a platform for production, promotion, and community connection. Since our founding, we have worked to give students and local artists opportunities to create, perform, and be heard.</p>
                        <br></br>
                        <p className="font-bold">We have shown our presence at major campus and local events, including Next Now Festival, Maryland Day, Art Attack, and Lemon Zest, and we also host our own shows at local venues. As we continue to grow, TRL is expanding its reach, creating more opportunities for artists, and strengthening the music community both on and off campus.</p>
                        <br></br>
                        <p className="font-bold">Over the years, TRL has evolved from a small student initiative into a thriving hub for creativity, collaboration, and musical exploration. Our legacy continues to grow, and we are committed to building something bigger, better, and louder—bringing music and community together every step of the way.</p>
                    </div>
                    <button className="bg-red-500 text-white px-6 py-2 rounded-md self-center hover:bg-red-600 transition"><a target="_blank" href = "https://www.instagram.com/terrapinrecordlabel/">Follow Us!</a></button>
                </div>
            </div>
            
            
        </>
    )
}