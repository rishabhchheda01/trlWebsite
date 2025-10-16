import Navigation from "../components/Navigation"
import EboardMember from "../components/EboardMember"

export default function Eboard(){
    const menu_items = [{name: "Eboard", url: "/eboard"}, {name: "About", url: "/about"}]
    
    const eboardMembers = [
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
        }
    ]

    return(
        <div>
            <Navigation menuItems={ menu_items } />
            <div className="p-5">
                <h1 className="text-white w-[100%] text-center font-geist text-4xl m-5">Executive Board</h1>
                <div className="flex flex-row justify-center gap-8 mt-5">
                    {eboardMembers.map((member, index) => (
                        <EboardMember 
                            key={index}
                            name={member.name}
                            position={member.position}
                            image={member.image}
                            description={member.description}
                            className="w-72"
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}
