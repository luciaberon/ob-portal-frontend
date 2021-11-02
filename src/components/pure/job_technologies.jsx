/**
 * Technologies
 * @returns Badges of required technologies
 */
 const Technologies = ({technologies}) => {
    return (
        <div className="w-56 flex-wrap self-center hidden md:flex items-center">
        {
            technologies.map((item,index) => (               
                <span key={index} className="px-2 mx-1 my-1 text-sm 
                        text-center font-medium text-black uppercase 
                        bg-transparent rounded-md border-black border-2">
                    {item.nombre}
                </span>
            ))
        }
        </div>
    )
}

export default Technologies;