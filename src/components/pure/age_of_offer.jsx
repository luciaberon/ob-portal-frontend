/**
 * AgeOfOffer
 * @returns Time elapsed since the offer was published
 */
 const AgeOfOffer = ({date}) => {
    let today = new Date();
    let before = new Date(date);

    // To calculate the time difference of two dates
    var Difference_In_Time = today.getTime() - before.getTime();
    
    // To calculate the no. of days between two dates
    var Difference_In_Days = Math.trunc(Difference_In_Time / (1000 * 3600 * 24));

    const timeElapsed = () => {
    if (Difference_In_Days < 1) {
        return `${Difference_In_Days*24}h`
    } else {
        return `${Difference_In_Days}d`
    }
    }
    
    return (
        <div className="self-center px-2 hidden md:block">
       {/* Cambiar con API call */}
        {timeElapsed()}
        </div>
    )
}

export default AgeOfOffer;