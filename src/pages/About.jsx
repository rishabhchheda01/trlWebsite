import Navbar from "../components/Navbar";

export default function About() {
    return (
        <>
            <Navbar />
            <div className="p-5">
                <h1 className="text-red-500 w-[100%] text-center font-bold">About</h1>
                <div className="flex flex-row-reverse gap-5">
                    <div>
                        <p className="font-bold">Founded in 2017, Terrapin Record Label (TRL) is a student-run music collective at the University of Maryland dedicated to supporting, promoting, and celebrating music in all its forms. TRL was created to centralize the campus music scene, providing a platform for production, promotion, and community connection. Since our founding, we have worked to give students and local artists opportunities to create, perform, and be heard.</p>
                        <br></br>
                        <p className="font-bold">We have shown our presence at major campus and local events, including Next Now Festival, Maryland Day, Art Attack, and Lemon Zest, and we also host our own shows at local venues. As we continue to grow, TRL is expanding its reach, creating more opportunities for artists, and strengthening the music community both on and off campus.</p>
                        <br></br>
                        <p className="font-bold">Over the years, TRL has evolved from a small student initiative into a thriving hub for creativity, collaboration, and musical exploration. Our legacy continues to grow, and we are committed to building something bigger, better, and louder—bringing music and community together every step of the way.</p>
                    </div>
                    <div className="h-[100%] bg-black w-[25%] flex flex-col p-3 gap-3 items-center">
                        <h1 className="text-red-500 font-bold">Follow us</h1>
                        <p className="text-white"><a href="https://www.instagram.com/terrapinrecordlabel/">Instagram</a></p>
                    </div>
                </div>
            </div>


        </>
    )
}