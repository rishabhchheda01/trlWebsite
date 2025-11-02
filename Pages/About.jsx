import Navigation from "../Components/Navigation"
import photo1 from "../Images/TRL_About_Photo1.jpeg"

export default function About(){
    const menu_items = [{name: "About Us", url: "/about"}, {name: "Events", url: "/about"}, {name: "Artists", url: "/about"}, {name: "Contact Us", url: "/about"}]
    return(
        <>
            <Navigation menuItems={ menu_items } />
            <div className="bg-[#121212] min-h-screen py-4 sm:py-6 md:py-0">
                <div className="flex flex-col lg:flex-row-reverse items-stretch h-auto lg:h-[90vh] overflow-hidden">
                    <div className="w-full lg:w-1/2 flex flex-col items-center justify-center p-4 sm:p-5 md:p-6 lg:p-5 min-h-[35vh] sm:min-h-[40vh] md:min-h-[45vh] lg:h-full">
                        <img src = {photo1} className="w-full h-full object-contain"></img>
                    </div>
                    <div className="w-full lg:w-1/2 flex flex-col p-4 sm:p-5 md:p-6 lg:p-5 justify-between min-h-[60vh] sm:min-h-[65vh] md:min-h-[70vh] lg:h-[90vh]">
                        <div className="flex flex-col flex-1 justify-center my-4 sm:my-6 md:my-2 lg:my-0 min-h-0">
                            <h1 className="text-red-500 text-xl sm:text-2xl md:text-3xl lg:text-5xl font-bold text-center mb-2 sm:mb-3 md:mb-3 lg:mb-6">About</h1>
                            <div className="flex-1 flex flex-col justify-center text-white text-center space-y-2 sm:space-y-3 md:space-y-3 lg:space-y-6 px-2 sm:px-4 md:px-2 lg:px-0 overflow-y-auto">
                                <p className="font-bold text-xs sm:text-xs md:text-sm lg:text-lg leading-relaxed">Founded in 2017, Terrapin Record Label (TRL) is a student-run music collective at the University of Maryland dedicated to supporting, promoting, and celebrating music in all its forms. TRL was created to centralize the campus music scene, providing a platform for production, promotion, and community connection. Since our founding, we have worked to give students and local artists opportunities to create, perform, and be heard.</p>
                                <p className="font-bold text-xs sm:text-xs md:text-sm lg:text-lg leading-relaxed">We have shown our presence at major campus and local events, including Next Now Festival, Maryland Day, Art Attack, and Lemon Zest, and we also host our own shows at local venues. As we continue to grow, TRL is expanding its reach, creating more opportunities for artists, and strengthening the music community both on and off campus.</p>
                                <p className="font-bold text-xs sm:text-xs md:text-sm lg:text-lg leading-relaxed">Over the years, TRL has evolved from a small student initiative into a thriving hub for creativity, collaboration, and musical exploration. Our legacy continues to grow, and we are committed to building something bigger, better, and louder—bringing music and community together every step of the way.</p>
                            </div>
                        </div>
                        <button className="bg-red-500 text-white px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-2 rounded-md self-center hover:bg-red-600 transition text-sm sm:text-base flex-shrink-0 mt-3 sm:mt-4 md:mt-3 lg:mt-0"><a target="_blank" href = "https://www.instagram.com/terrapinrecordlabel/">Follow Us!</a></button>
                    </div>
                </div>
            </div>
        </>
    )
}