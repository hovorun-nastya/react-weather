import React from "react";
import {GlobalSvgSelector} from "../../../../assets/icons/global/GlobalSvgSelector";
import {ThisCity, ThisDayHeader, ThisDayName, ThisTemp, ThisTime, TopBlock} from "./ThisDay_s";
import {useFetchWeather} from "../../../../hooks/useFetchWeather";
import dayjs from 'dayjs';

export const ThisDay =({weather, city}:any)=>{
  console.log(Math.round(weather.list[0].main.temp))

  return <ThisDayHeader>
    <TopBlock>
      <div>
      <ThisTemp>{Math.round(weather.list[0].main.temp)}</ThisTemp>
      <ThisDayName>Today</ThisDayName>
      </div>
      <GlobalSvgSelector id="sun"/>
    </TopBlock>
    <div>
    <ThisTime>Час:
      <span> { dayjs(weather.list[0].dt_txt).format('HH:mm')}</span>
    </ThisTime>
    <ThisCity>
      Місто:<span> {city}</span>
    </ThisCity>
      </div>
  </ThisDayHeader>
}