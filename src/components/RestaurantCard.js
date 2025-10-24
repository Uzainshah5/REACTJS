import { CDN_URL } from "../utils/constant";

const RestaurantCard = (props) => {
  const { resData } = props;

  // ✅ destructure correctly for Swiggy API
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla } =
    resData?.info || {}; // add fallback in case undefined
  console.log("cloudinaryImageId:", cloudinaryImageId, "name:", name);

  return (
    <div className="res-card">
      <img
        className="res-logo"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3>{name}</h3>
      <h4>{cuisines?.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla?.deliveryTime} minutes</h4>
    </div>
  );
};

export default RestaurantCard;
