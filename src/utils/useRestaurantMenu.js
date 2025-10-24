import { useState, useEffect } from "react";
import { MENU_API } from "./constant.js";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, [resId]);

  const fetchMenu = async () => {
    try {
      const response = await fetch(`/api/menu?id=${resId}`);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const json = await response.json();
      console.log("🍽️ Fetched Menu Data:", json);
      setResInfo(json);
    } catch (error) {
      console.error("Error fetching restaurant menu:", error);
    }
  };
  return resInfo;
};
export default useRestaurantMenu;
