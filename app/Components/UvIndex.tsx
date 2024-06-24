import React from "react";
import Image from "next/image";
import uvImage from "../../public/uv-image.png";
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
    <div className="relative w-[190px] h-[190px]">
      <Image src={uvImage} alt="UV Image" layout="fill" objectFit="cover" />
      <div className="absolute inset-0 flex flex-col justify-center mt-20 items-center gap-1">
        <p className="text-white font-extrabold text-sm">{uvIndexCategory(uvIndexMax).text}</p>
        <p className="text-white text-[10px] text-center w-[80%]">{uvIndexCategory(uvIndexMax).protection}</p>
      </div>
    </div>
  );
}
