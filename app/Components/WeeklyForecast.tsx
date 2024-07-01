import React from "react";
import Image from "next/image";
import arrowUp from "../../public/arrow-up.png";
import arrowDown from "../../public/arrow-down.png";
import { useGlobalContext } from "../context/globalContext";
import { kelvinToCelsius, unixToDay, unixToTime } from "../utils/misc";
import {
  drizzleCond,
  dayClear,
  nightClear,
  fewCloudDay,
  fewCloudNight,
  scattered,
  broken,
  dayRain,
  nightRain,
  thunder,
} from "../utils/weatherIcon";
import moment from "moment";

const formatTime = (unixTimestamp: number): string => {
  return moment.unix(unixTimestamp).format("HH:mm");
};

const isDayTime = (unixTimestamp: number): boolean => {
  const hour = moment.unix(unixTimestamp).hour();
  return hour >= 6 && hour < 18;
};

const getIcon = (weatherMain: string, isDay: boolean) => {
  switch (weatherMain) {
    case "Drizzle":
      return drizzleCond;
    case "Clear":
      return isDay ? dayClear : nightClear;
    case "Clouds":
      return isDay ? fewCloudDay : fewCloudNight;
    case "Scattered clouds":
      return scattered;
    case "Broken clouds":
    case "Overcast clouds":
      return broken;
    case "Rain":
      return isDay ? dayRain : nightRain;
    case "Thunderstorm":
      return thunder;
    default:
      return drizzleCond;
  }
};

export default function WeeklyForecast() {
  const { dailyForecast } = useGlobalContext();

  if (!dailyForecast || !dailyForecast.list) {
    return <div>Loading...</div>;
  }

  const { city, list } = dailyForecast;

  const processData = (
    dailyData: {
      main: { temp_min: number; temp_max: number };
      dt: number;
      weather: { main: string }[];
    }[]
  ) => {
    let minTemp = Number.MAX_VALUE;
    let maxTemp = Number.MIN_VALUE;
    let weatherMain = dailyData[0].weather[0].main; // Assuming the main weather is consistent for the day

    dailyData.forEach(
      (day: { main: { temp_min: number; temp_max: number }; dt: number; weather: { main: string }[] }) => {
        if (day.main.temp_min < minTemp) {
          minTemp = day.main.temp_min;
        }
        if (day.main.temp_max > maxTemp) {
          maxTemp = day.main.temp_max;
        }
      }
    );

    return {
      day: unixToDay(dailyData[0].dt),
      minTemp: kelvinToCelsius(minTemp),
      maxTemp: kelvinToCelsius(maxTemp),
      weatherMain,
      dt: dailyData[0].dt, // Add dt to use for time checks
    };
  };

  const dailyForecasts = [];

  for (let i = 0; i < list.length; i += 8) {
    const dailyData = list.slice(i, i + 8);
    if (dailyData.length === 8) {
      dailyForecasts.push(processData(dailyData));
    }
  }

  return (
    <div className="w-full h-auto px-5">
      <div className="flex flex-col px-5 pt-6 mb-7 shadow-lg rounded-3xl h-[300px] gap-6">
        <div>
          <h1 className="text-xs font-bold">
            5 Days Forecast for {city?.name}
          </h1>
        </div>
        <div className="text-xs flex flex-col gap-6">
          {dailyForecasts.map((day, i) => (
            <div className="font-bold flex justify-between items-center" key={i}>
              <p>{day.day}</p>
              <div className="flex w-[65%] justify-between items-center">
                <Image
                  src={getIcon(day.weatherMain, isDayTime(day.dt))}
                  alt="weather icon"
                  className="w-[27px]"
                />
                <div className="flex gap-1 items-center">
                  <Image src={arrowUp} alt="max temperature" />
                  <p>{day.maxTemp}°</p>
                </div>
                <div className="flex gap-1 items-center">
                  <Image src={arrowDown} alt="min temperature" />
                  <p>{day.minTemp}°</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
