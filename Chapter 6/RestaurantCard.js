import { IMG_CDN_URL } from "../config";

export const RestaurantCards = ({cloudinaryImageId, name, cuisines, avgRating}) => { // we can destructure even this
    return (
        <div className="restaurantCard">
            <img src= { IMG_CDN_URL + cloudinaryImageId} />
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h5>{avgRating} Stars</h5>
        </div>
    )
}