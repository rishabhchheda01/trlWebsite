export default function EboardMember({ name, position, image, description, className = "" }){
    return(
        <div className={`flex flex-col items-center border-2 border-[#E21833] rounded-lg p-5 ${className}`}>
            <img src={ image } alt={ name } className="w-20 h-20 rounded-full" />
            <h2 className="text-2xl text-white font-geist">{ name }</h2>
            <p className="text-lg text-white font-geist">{ position }</p>
            <p className="text-md text-white font-geist">{ description }</p>
        </div>
    )
}