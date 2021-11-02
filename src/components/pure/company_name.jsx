/**
 * Company
 * @returns name of the company
 */
 const Company = ({company}) => {
    return (
        <div className="uppercase tracking-wide text-sm md:text-sm text-indigo-500 font-semibold">
            {company}
        </div>
    )
}

export default Company;