import Navigation from "../components/Navigation"
import EboardMember from "../components/EboardMember"

export default function Eboard(){
    const menu_items = [{name: "Eboard", url: "/eboard"}, {name: "About", url: "/about"}]
    
    const eboardMembers = [

        {
            name: "Sarah Zhu",
            position: "President",
            image: "../Images/Eboard_Pics/Sarah.png",
            description: "Sarah is a senior studying Computer Science with a minor in Sustainability Studies. She’s been with TRL for almost four years—starting out as a general member, moving into the Artist Relations Manager role, and now serving as President. Outside of TRL, you can catch her as the lead singer and guitarist of her band no girlfriend, where she channels her love for music and performing."
        },
        {
            name: "Jolie Boiadjieva",
            position: "Artist Relations",
            image: "../Images/Eboard_Pics/Jolie.png",
            description: "I'm currently studying finance and government, with a strong interest in public policy and strategy. Alongside my studies, I'm passionate about the entertainment industry and how finance plays a role in the arts."
        },
        {
            name: "Jacklynn Ho",
            position: "Social Media",
            image: "../Images/Eboard_Pics/Jacklynn.png",
            description: "I'm a junior studying business administration with a concentration in marketing. I'm passionate about music and the entertainment industry, and I'm excited to be a part of the Terrapin Record Label team."
        },
        {
            name: "Robert Marshall",
            position: "Graphic Design",
            image: "../Images/Eboard_Pics/Robert.png",
            description: "I'm a junior studying business administration with a concentration in marketing. I'm passionate about music and the entertainment industry, and I'm excited to be a part of the Terrapin Record Label team."
        },
        {
            name: "someone else",
            position: "someone else",
            image: "../Images/Eboard_Pics/someone_else.png",
            description: "i love TRL"
        }
    ]

    return(
        <div>
            <Navigation menuItems={ menu_items } />
            <div className="p-5">
                <h1 className="text-white w-[100%] text-center font-geist text-4xl m-7">Executive Board</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mt-5 justify-items-center">
                    {eboardMembers.map((member, index) => (
                        <EboardMember 
                            key={index}
                            name={member.name}
                            position={member.position}
                            image={member.image}
                            description={member.description}
                            className="w-full max-w-75"
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}
