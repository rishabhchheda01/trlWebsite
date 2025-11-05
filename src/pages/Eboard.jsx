import Navigation from "../Components/Navigation"
import EboardMember from "../Components/EboardMember"

export default function Eboard() {
    const menu_items = [{ name: "Eboard", url: "/eboard" }, { name: "About", url: "/about" }]

    const eboardMembers = [

        {
            name: "Sarah Zhu",
            position: "President",
            image: "../Images/Eboard_Pics/Sarah.png",
            description: "Sarah is a senior studying Computer Science with a minor in Sustainability Studies. She's been with TRL for almost four years—starting out as a general member, moving into the Artist Relations Manager role, and now serving as President. Outside of TRL, you can catch her as the lead singer and guitarist of her band no girlfriend, where she channels her love for music and performing.",
            linkedin: "https://linkedin.com/in/sarah-zhu"
        },

        {
            name: "Rishabh Chheda",
            position: "Treasurer",
            image: "../Images/Eboard_Pics/Rishabh.png",
            description: "",
            linkedin: "https://www.linkedin.com/in/rishabhchheda/"
        },
        {
            name: "Jolie Boiadjieva",
            position: "Artist Relations",
            image: "../Images/Eboard_Pics/Jolie.png",
            description: "I'm currently studying finance and government, with a strong interest in public policy and strategy. Alongside my studies, I'm passionate about the entertainment industry and how finance plays a role in the arts.",
            linkedin: "https://linkedin.com/in/jolie-boiadjieva"
        },
        {
            name: "Jacklynn Ho",
            position: "Social Media",
            image: "../Images/Eboard_Pics/Jacklynn.png",
            description: "Jacklynn is a Junior studying Marketing and Information Systems. She's been with TRL for 2 years, starting as Social Media Manager and continuing with the Social Media team. Outside of TRL, Jacklynn is a Marketing Intern at the Robert H. Smith Office of Career Services and spends most of her time doing arts and crafts projects and constantly organizing her Google Calendar.",
            linkedin: "https://linkedin.com/in/jacklynn-ho"
        },
        {
            name: "Jeremy Rayhan",
            position: "Social Media",
            image: "../Images/Eboard_Pics/Jeremy.png",
            description: "Jeremy is a senior Computer Science and Immersive Media Design double major. He started originally knowing nobody, but became increasingly involved by attending performances and socials with other clubs. Outside of E-board, you can find him longboarding around campus, at car meets, or out traveling. ",
            linkedin: "https://linkedin.com/in/jeremy-rayhan"
        },
        {
            name: "Robert Marshall",
            position: "Graphic Design",
            image: "../Images/Eboard_Pics/Robert.png",
            description: "Robert is a senior studying Information Systems and Public Policy at the University of Maryland. He's been with Terrapin Record Label since 2024, focusing on graphics, visuals, and logistics. Outside of TRL, he's from North Carolina foothills and has a thing for good design, aesthetic home goods.",
            linkedin: "https://linkedin.com/in/robert-marshall"
        },
        {
            name: "David Montoya",
            position: "?",
            image: "../Images/Eboard_Pics/David.png",
            description: "David is a music lover who finds meaning in the moments that connect people.  Through songs, late-night jams, or the energy of live shows, there will never be a lackluster moment. Music has always been his way of understanding the world, a creative outlet that keeps him grounded and inspired. If David is not playing guitar or at a concert, he is studying on the pre-med track at the University of Maryland. He aims toward becoming an emergency physician in the future. For David, both music and medicine are about presence, emotion, and care. To him, they are two different rhythms that share the same heartbeat.",
            linkedin: "https://www.linkedin.com/in/david-montoya-b563ab297/"
        },
        {
            name: "Victoria Melville",
            position: "Community & Outreach",
            image: "../Images/Eboard_Pics/Victoria.png",
            description: "Victoria Melville is a senior Psychology major with a minor in Business. Passionate about the intersection of creativity and community, she is pursuing a career in entertainment events. In her first year with Terrapin Record Label, Victoria serves as the Lead of Community & Outreach, where she focuses on fostering connections and expanding the label’s engagement initiatives.",
            linkedin: "https://www.linkedin.com/in/victoria-melville-165641299/"
        },
    ]

    return (
        <div>
            <Navigation menuItems={menu_items} />
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
                            linkedin={member.linkedin}
                            className="w-full max-w-75"
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}
