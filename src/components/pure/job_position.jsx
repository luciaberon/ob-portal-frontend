/**
 * Position
 * @returns Name of the job position
 */
const Position = ({position}) => {
    return (
        <a href="#" className="block mt-1 leading-tight text-medium font-medium text-black hover:underline">
            {position}
        </a>
    )
}

export default Position;