import React from 'react'
import { useGlobalContext } from '../context/globalContext'

export default function Pressure() {

  const {forecast} = useGlobalContext()

  const {main: mainPressure} = forecast

  const pressureIndex = mainPressure?.pressure

  const pressureCondition = () => {
    switch (true) {
      case pressureIndex > 1030:
        return "Long periods of dry, sunny weather with little to no clouds";
      case pressureIndex >= 1015 && pressureIndex <= 1030:
        return "A nice, calm day with clear skies and mild temperatures";
      case pressureIndex >= 1000 && pressureIndex <= 1014:
        return "Overcast skies with occasional light showers"
      case pressureIndex >= 985 && pressureIndex <= 999:
        return "Rainy and windy weather, possibly with thunderstorms"
      case pressureIndex <= 984:
        return "Severe storms or hurricanes with heavy rain and strong winds"
      default:
        return "Unusual weather conditions";
    }
  };

  const pressureDesc = pressureCondition()

  return (
    <div className='h-[110px] w-[130px] px-3 flex flex-col justify-center items-center gap-2 shadow-lg rounded-3xl'>
      <h1 className='text-sm'>Pressure</h1>
      <p className=' font-bold'>{pressureIndex} hpa</p>
      <p className='text-[8px] text-center'>{pressureDesc}</p>
    </div>
  )
}
