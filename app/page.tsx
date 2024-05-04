import CurrentWeather from "./Components/CurrentWeather";
import DailyForecast from "./Components/DailyForecast";
import HumidityIndex from "./Components/HumidityIndex";
import Navbar from "./Components/Navbar";
import Pressure from "./Components/Pressure";
import SunriseSet from "./Components/SunriseSet";
import UvIndex from "./Components/UvIndex";
import WeeklyForecast from "./Components/WeeklyForecast";


export default function Home() {
  return (
    <main>
      <Navbar/>
      <CurrentWeather/>
      <DailyForecast/>
      <WeeklyForecast/>
      <div className="flex w-full items-center justify-between p-4">
        <UvIndex/>
        <HumidityIndex/>
      </div>
      <div>
        <Pressure/>
        <SunriseSet/>
      </div>
    </main>
  );
}
