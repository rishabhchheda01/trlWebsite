export default function EboardMember({ name, position, image, description, linkedin, className = "" }){
    return(
        <div className={`flex flex-col items-center text-center border-2 border-[#E21833] bg-red-500/10 rounded-lg p-5 h-90 overflow-y-auto ${className}`}>
            <img src={ image } alt={ name } className="w-full max-w-48 aspect-square object-cover rounded-full" />
            <h2 className="text-2xl text-white font-geist mt-4">{ name }</h2>
            <p className="text-lg text-white font-geist">{ position } {linkedin && <a href={linkedin} target="_blank"><img src="../assets/LinkedinLogo.png" alt="LinkedIn" className="w-4 h-4 inline ml-1" /></a>}</p>
            <p className="text-md text-white font-geist">{ description }</p>
        </div>
    )
}