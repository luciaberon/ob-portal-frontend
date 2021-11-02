import Moment from 'react-moment';

/**
 * AgeOfOffer
 * @returns Time elapsed since the offer was published
 */
 const AgeOfOffer = ({date}) => {
    return (
        <div className="self-center px-2 hidden md:block">
       {/* Cambiar con API call */}
        <Moment fromNow>{date}</Moment>
        </div>
    )
}

export default AgeOfOffer;