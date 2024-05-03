import CurrentWeather from "./Components/CurrentWeather";
import DailyForecast from "./Components/DailyForecast";
import Navbar from "./Components/Navbar";
import WeeklyForecast from "./Components/WeeklyForecast";


export default function Home() {
  return (
    <main>
      <Navbar/>
      <CurrentWeather/>
      <DailyForecast/>
      <WeeklyForecast/>
    </main>
  );
}
