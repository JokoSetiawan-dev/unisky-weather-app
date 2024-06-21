"use client";

export const dynamic = "force-dynamic";
export const revalidate = 0;

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useGlobalContext } from "../context/globalContext";
import {
  broken,
  dayClear,
  dayRain,
  drizzleCond,
  fewCloudDay,
  fewCloudNight,
  nightClear,
  nightRain,
  scattered,
  thunder,
} from "../utils/weatherIcon";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import moment from "moment";

const formatTime = (dateString: string): string => {
  return moment(dateString).format("HH:mm");
};

const isDayTime = (dateString: string): boolean => {
  const hour = parseInt(dateString.split(" ")[1].split(":")[0], 10);
  return hour >= 6 && hour < 18;
};

const getIcon = (weatherMain: string, description: string, isDay: boolean) => {
  switch (weatherMain) {
    case "Drizzle":
      return drizzleCond;
    case "Clear":
      return isDay ? dayClear : nightClear;
    case "Clouds":
      if (description === "few clouds") {
        return isDay ? fewCloudDay : fewCloudNight;
      } else if (description === "scattered clouds") {
        return scattered;
      } else if (
        description === "broken clouds" ||
        description === "overcast clouds"
      ) {
        return broken;
      }
      break;
    case "Rain":
      return isDay ? dayRain : nightRain;
    case "Thunderstorm":
      return thunder;
    default:
      return drizzleCond;
  }
};

export default function DailyForecast() {
  const { dailyForecast } = useGlobalContext();

  if (!dailyForecast || !dailyForecast.list) {
    return <div>Loading...</div>;
  }

  const { city, list } = dailyForecast;

  const today = new Date();
  const todayString = today.toLocaleDateString("en-CA");

  console.log("today string", todayString);

  const todayForecast = list.filter(
    (forecast: {
      dt_txt: string;
      main: { temp: number };
      weather: { main: string; description: string }[];
    }) => {
      return forecast.dt_txt.startsWith(todayString);
    }
  );

  console.log("today forecast hourly", todayForecast);

  return (
    <div className="m-5">
      <div className="flex flex-col justify-center h-[90px] w-full shadow-md rounded-3xl">
        <div className="flex text-xs justify-around mx-5">
          <div className="h-full flex overflow-hidden w-full mx-2">
            {todayForecast.length < 1 ? (
              <div>Loading...</div>
            ) : (
              <div className="w-full">
                <Carousel className="w-full">
                  <CarouselContent className="flex flex-row gap-5 justify-between mx-1 w-10">
                    {todayForecast.map(
                      (forecast: {
                        dt_txt: string;
                        main: { temp: number };
                        weather: { main: string; description: string }[];
                      }) => {
                        const timeLabel = formatTime(forecast.dt_txt);
                        const dayOrNight = isDayTime(forecast.dt_txt);
                        const weatherMain = forecast.weather[0].main;
                        const description = forecast.weather[0].description;
                        const weatherIcon = getIcon(
                          weatherMain,
                          description,
                          dayOrNight
                        );

                        return (
                          <CarouselItem
                            key={forecast.dt_txt}
                            className="flex flex-col justify-between  items-center cursor-grab w-full"
                          >
                            <p>{timeLabel}</p>
                            <Image
                              className="w-[27px] h-auto my-2"
                              src={weatherIcon ?? ""}
                              alt="weather icon"
                            />
                            <p>{Math.round(forecast.main.temp - 273.15)}°</p>
                          </CarouselItem>
                        );
                      }
                    )}
                  </CarouselContent>
                </Carousel>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
