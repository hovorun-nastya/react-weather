import React from "react";
import {useTranslation} from "react-i18next";
import {GlobalSvgSelector} from "../../../../assets/icons/global/GlobalSvgSelector";
import {ThisCity, ThisDayHeader, ThisDayName, ThisTemp, ThisTime, TopBlock} from "./ThisDay_s";
import dayjs from 'dayjs';


export const ThisDay =({weather, city}:any)=>{
  const { t } = useTranslation();

  return <ThisDayHeader>
    <TopBlock>
      <div>
      <ThisTemp>{Math.round(weather.list[0].main.temp)}</ThisTemp>
      <ThisDayName>{t("today")}</ThisDayName>
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