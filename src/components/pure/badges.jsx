/**
 * Badges
 * @returns Badges of location and salary range
 */
 const Badges = ({location,minSalary,maxSalary}) => {
    const min = minSalary.toString().slice(0,-3);
    const max = maxSalary.toString().slice(0,-3);
    
    return (
        <div className="space-x-1">
            <span className="items-center inline-block text-sm justify-center font-semibold px-2 py-1 leading-none text-black bg-gray-300 uppercase rounded">
                {location}
            </span>
            <span className="items-center inline-block text-sm justify-center font-semibold px-2 py-1 leading-none text-black bg-gray-300 uppercase rounded">
                💰 ${min}k - ${max}k
            </span>
        </div>
    )
}

export default Badges;