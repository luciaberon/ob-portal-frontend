/**
 * Position
 * @returns Name of the job position
 */
const Position = ({position}) => {
    return (
        <span className="block mt-1 leading-tight text-medium font-medium text-black hover:underline">
            {position}
        </span>
    )
}

export default Position;