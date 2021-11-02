/**
 * Image
 * @returns Logo of the company
 */
 const Image = ({image}) => {
    return (
        <img 
            className="w-16 border rounded h-16 self-center hidden lg:block"
            src={image} alt="companyPhoto">
        </img>
    )
}


export default Image;