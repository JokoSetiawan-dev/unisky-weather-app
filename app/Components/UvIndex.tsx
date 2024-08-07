import React from "react";
import Image from "next/image";
import sunImage from "@/public/clear-day.png";
import { useGlobalContext } from "../context/globalContext";

export default function UvIndex() {
  const { uvForecast } = useGlobalContext();

  if (!uvForecast || !uvForecast.daily || !uvForecast.daily.uv_index_max) {
    return <div>Loading...</div>; // or handle the loading state appropriately
  }

  const { daily } = uvForecast;

  const { uv_index_max } = daily;

  const uvIndexMax = uv_index_max[0].toFixed(0);

  const uvIndexCategory = (uvForecast: number) => {
    if (uvForecast <= 2) {
      return {
        text: "Low",
        protection: "No protection required",
      };
    } else if (uvForecast <= 5) {
      return {
        text: "Moderate",
        protection: "Stay in shade near midday.",
      };
    } else if (uvForecast <= 7) {
      return {
        text: "High",
        protection: "Wear a hat and sunglasses.",
      };
    } else if (uvForecast <= 10) {
      return {
        text: "Very High",
        protection: "Apply sunscreen SPF 30+ every 2 hours.",
      };
    } else if (uvForecast > 10) {
      return {
        text: "Extreme",
        protection: "Avoid being outside.",
      };
    } else {
      return {
        text: "Extreme",
        protection: "Avoid being outside.",
      };
    }
  };

  return (
    <div className="flex flex-col  justify-center w-[46%] h-[120px] md:h-[170px] md:w-[170px] bg-white rounded-3xl shadow-lg">
      <div className=" flex flex-col justify-between items-center h-full pt-2">
        <div className="flex items-center self-start justify-center gap-3 pl-4">
          <Image src={sunImage} alt="sun image uv index" className="w-[15px]" />
          <h1 className="text-[14px] font-bold">UV Index</h1>
        </div>
        <div className="flex flex-col items-center justify-center w-[80%] h-full gap-3">
          <p className="text-black font-extrabold text-md">
            {uvIndexCategory(uvIndexMax).text}
          </p>
          <p className="text-black text-[10px] w-full text-center">
          {uvIndexCategory(uvIndexMax).protection}
          </p>
        </div>
      </div>
    </div>
  );
}
