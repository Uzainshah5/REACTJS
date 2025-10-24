import { useState, useEffect } from "react";
import Shimmer from "./Shimmer.js";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu.js";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);

  // Show shmmer while loading
  if (resInfo === null) {
    return <Shimmer />;
  }

  // Destructure restaurant details
  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[0]?.card?.card?.info || {};

  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
      ?.card || {};

  console.log("🍽️ Menu Items:", itemCards);

  return (
    <div className="menu">
      <h1>Restaurant Menu - {name || "Unknown"}</h1>
      <h3>Cuisines: {cuisines?.join(", ") || "N/A"}</h3>
      <h3>{costForTwoMessage || "Cost info not available"}</h3>
      <h2>Menu Items:</h2>
      <ul>
        {itemCards ? (
          itemCards.map((item) => (
            <li key={item.card.info.id}>
              {item.card.info.name} - ₹
              {item.card.info.price
                ? item.card.info.price / 100
                : item.card.info.defaultPrice / 100}
            </li>
          ))
        ) : (
          <li>No items available.</li>
        )}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
