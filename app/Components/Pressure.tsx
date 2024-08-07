"use client";

export const dynamic = "force-dynamic";
export const revalidate = 0;

import React from "react";
import { useGlobalContext } from "../context/globalContext";
import Image from "next/image";
import pressureIcon from "@/public/pressure.png";

export default function Pressure() {
  const { forecast } = useGlobalContext();

  const { main: mainPressure } = forecast;

  const pressureIndex = mainPressure?.pressure;

  const pressureCondition = () => {
    switch (true) {
      case pressureIndex > 1030:
        return "Long periods of dry, sunny weather with little to no clouds";
      case pressureIndex >= 1015 && pressureIndex <= 1030:
        return "A nice, calm day with clear skies and mild temperatures";
      case pressureIndex >= 1000 && pressureIndex <= 1014:
        return "Overcast skies with occasional light showers";
      case pressureIndex >= 985 && pressureIndex <= 999:
        return "Rainy and windy weather, possibly with thunderstorms";
      case pressureIndex <= 984:
        return "Severe storms or hurricanes with heavy rain and strong winds";
      default:
        return "Unusual weather conditions";
    }
  };

  const pressureDesc = pressureCondition();

  return (
    <div className="w-[46%] h-[120px] md:w-auto flex flex-col md:flex-row justify-between items-center gap-2 shadow-lg rounded-3xl">
      <div className="flex gap-3 items-center self-start pl-4 pt-2">
        <Image
          src={pressureIcon}
          className="h-[15px] w-auto"
          alt="weather pressure icon "
        />
        <h1 className="text-[14px] font-bold md:hidden">Pressure</h1>
      </div>
      <div className="flex flex-col h-full w-[80%] gap-2">
        <p className=" font-bold text-center">{pressureIndex} hpa</p>
        <p className="text-[10px] text-center">{pressureDesc}</p>
      </div>
    </div>
  );
}
