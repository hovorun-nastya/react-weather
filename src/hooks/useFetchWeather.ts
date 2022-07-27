import {useQuery} from "@tanstack/react-query";
import { weatherAPI } from "../api";


export const useFetchWeather = (city: any, language:string) => {
  console.log(language)
  return useQuery([city,language],async () => {
    const { lat, lon } = await weatherAPI.fetchCoordinate(city)
      .then((res: any) => res.data[0])
    return await weatherAPI.fetchWeather(lat, lon,language)
      .then((arr: any) => arr.data)
  })

}
