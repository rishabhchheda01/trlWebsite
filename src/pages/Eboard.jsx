import Navbar from "../components/Navbar";
import EboardMember from "../components/EboardMember";
import "./Eboard.css";

export default function Eboard() {
    const eboardGroups = [
        {
            title: "Executive Team",
            members: [
                {
                    name: "Sarah Zhu",
                    position: "President",
                    image: "/src/assets/Eboard_Pics/Sarah.png",
                    description:
                        "Sarah is a senior studying Computer Science with a minor in Sustainability Studies. She's been with TRL for almost four years—starting out as a general member, moving into the Artist Relations Manager role, and now serving as President. Outside of TRL, you can catch her as the lead singer and guitarist of her band no girlfriend, where she channels her love for music and performing.",
                    linkedin: "https://linkedin.com/in/sarah-zhu",
                },
                {
                    name: "Cadence Michels",
                    position: "Vice President",
                    image: "", // No image available ADD IT LATER
                    description: "",
                    linkedin:
                        "https://www.linkedin.com/in/cadence-michels-83b7941b2/",
                },
                
            ],
        },
        {
            title: "Artist Outreach Team",
            members: [
                {
                    name: "Jolie Boiadjieva",
                    position: "Artist Relations",
                    image: "/src/assets/Eboard_Pics/Jolie.png",
                    description:
                        "I'm currently studying finance and government, with a strong interest in public policy and strategy. Alongside my studies, I'm passionate about the entertainment industry and how finance plays a role in the arts.",
                    linkedin: "https://linkedin.com/in/jolie-boiadjieva",
                },
                {
                    name: "David Montoya",
                    position: "Artist Relations",
                    image: "/src/assets/Eboard_Pics/David.png",
                    description:
                        "David is a music lover who finds meaning in the moments that connect people.  Through songs, late-night jams, or the energy of live shows, there will never be a lackluster moment. Music has always been his way of understanding the world, a creative outlet that keeps him grounded and inspired. If David is not playing guitar or at a concert, he is studying on the pre-med track at the University of Maryland. He aims toward becoming an emergency physician in the future. For David, both music and medicine are about presence, emotion, and care. To him, they are two different rhythms that share the same heartbeat.",
                    linkedin:
                        "https://www.linkedin.com/in/david-montoya-b563ab297/",
                },
            ],
        },
        {
            title: "Social Media & Graphic Design",
            members: [

                {
                    name: "Robert Marshall",
                    position: "Design & Media Management",
                    image: "/src/assets/Eboard_Pics/Robert.png",
                    description:
                        "Robert is a senior studying Information Systems and Public Policy at the University of Maryland. He's been with Terrapin Record Label since 2024, focusing on graphics, visuals, and logistics. Outside of TRL, he's from North Carolina foothills and has a thing for good design, aesthetic home goods.",
                    linkedin: "https://linkedin.com/in/robert-marshall",
                },
                {
                    name: "Jacklynn Ho",
                    position: "Social Media Manager",
                    image: "/src/assets/Eboard_Pics/Jacklynn.png",
                    description:
                        "Jacklynn is a Junior studying Marketing and Information Systems. She's been with TRL for 2 years, starting as Social Media Manager and continuing with the Social Media team. Outside of TRL, Jacklynn is a Marketing Intern at the Robert H. Smith Office of Career Services and spends most of her time doing arts and crafts projects and constantly organizing her Google Calendar.",
                    linkedin: "https://linkedin.com/in/jacklynn-ho",
                },
                {
                    name: "Jeremy Rayhan Menecio",
                    position: "Social Media Manager",
                    image: "/src/assets/Eboard_Pics/Jeremy.png",
                    description:
                        "Jeremy is a senior Computer Science and Immersive Media Design double major. He started originally knowing nobody, but became increasingly involved by attending performances and socials with other clubs. Outside of E-board, you can find him longboarding around campus, at car meets, or out traveling. ",
                    linkedin: "https://linkedin.com/in/jeremy-rayhan",
                },
                {
                    name: "Lily Ureta",
                    position: "Social Media",
                    image: "/src/assets/Eboard_Pics/Lily.png",
                    description:
                        "Lily is a Junior studying Computer Science and Human Development. She just joined the TRL team, starting as Social Media staff. Outside of TRL, Lily is a research assitant for Co-Learn Code & Mind where she gets to combine her two majors and teach underrepresented kids robotics. Her favorite food without hesitation is outshine popsicles.",
                    linkedin: "https://www.linkedin.com/in/lilyureta/",
                },
            ],
        },
        {
            title: "Other",
            members: [
                {
                    name: "Victoria Melville",
                    position: "Communication & Outreach",
                    image: "/src/assets/Eboard_Pics/Victoria.png",
                    description:
                        "Victoria Melville is a senior Psychology major with a minor in Business. Passionate about the intersection of creativity and community, she is pursuing a career in entertainment events. In her first year with Terrapin Record Label, Victoria serves as the Lead of Community & Outreach, where she focuses on fostering connections and expanding the label’s engagement initiatives.",
                    linkedin:
                        "https://www.linkedin.com/in/victoria-melville-165641299/",
                },


                {
                    name: "Rishabh Chheda",
                    position: "Treasurer",
                    image: "/src/assets/Eboard_Pics/Rishabh.png",
                    description: "",
                    linkedin: "https://www.linkedin.com/in/rishabhchheda/",
                },
            ],
        },

    ];

        return (
    <>
      <Navbar />

      <div className="notebook-container">
        <div className="notebook-lines" />

          <section className="about-section">
            <div className="title-wrapper">
              <div className="pin"></div>
              <h1 className="notebook-title">Executive Board</h1>
            </div>

          {(() => {
            let runningIndex = 0;
            return eboardGroups.map((group, groupIdx) => (
              <div key={`group-${groupIdx}`} className="mt-10 animate-[fadeInUp_0.8s_ease-out]">
                {group.title ? (
                  <div className="mb-10 text-center group-title">
                    <h2 className="font-serif text-2xl font-semibold text-slate-800">
                      {group.title}
                    </h2>
                  </div>
                ) : null}

                {/* ensure the group container centers each card */}
                <div className="flex flex-col gap-6 items-center w-full">
                  {group.members.map((member) => {
                    const imageLeft = runningIndex % 2 === 0;
                    const key = `${member.name ?? "member"}-${runningIndex}`;
                    runningIndex++;
                    return (
                      <div key={key} className="w-full flex justify-center p-10 member-row">
                        <EboardMember
                          name={member.name}
                          position={member.position}
                          image={member.image}
                          description={member.description}
                          linkedin={member.linkedin}
                          imageLeft={imageLeft}
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
            ));
          })()}
        </section>
      </div>
    </>
  );
}