"use client";

export const dynamic = "force-dynamic";
export const revalidate = 0;

import React from "react";
import windicon from "@/public/windspeed.png";
import Image from "next/image";
import { useGlobalContext } from "../context/globalContext";

export default function WindSpeed() {
  const { forecast } = useGlobalContext();

  const { wind } = forecast;

  const windSpeed = wind?.speed;

  return (
    <div className="w-[185.3px] h-[120px] md:h-[170px] md:w-[170px] bg-white rounded-3xl shadow-lg">
      <div className="flex flex-col h-full">
        <div className="flex justify-start items-center gap-3 pl-4 pt-2">
          <Image
            src={windicon}
            alt="humidity icon weather water drop"
            className="w-[15px] h-auto"
          />
          <h1 className="text-black font-bold text-[14px]">Wind Speed</h1>
        </div>
        <div className=" flex flex-col items-center justify-center h-full">
          <p className="text-black text-[30px] font-extrabold">{windSpeed} m/s</p>
        </div>
      </div>
    </div>
  );
}
