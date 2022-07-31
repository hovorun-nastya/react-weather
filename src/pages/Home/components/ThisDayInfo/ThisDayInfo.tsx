import React from 'react';
import cloud from '../../../../assets/images/cloud.png'
import {ThisDayItem} from "./ThisDayItem";
import {ThisDayInfoStyle, CloudImg} from "./ThisDayInfoStyles";
import {Item} from "../../../../types/types";
import {useTranslation} from "react-i18next";

export const ThisDayInfo = ({weather}: any) => {
  const {t} = useTranslation()
  const items = [
    {
      icon_id: 'temp',
      name: t("thisDayInfo.temperature"),
      value: Math.round(weather.list[0].main.temp) + '°C ' + t("thisDayInfo.feelsLike") + Math.round(weather.list[0].main.feels_like) + '°C'
    },
    {
      icon_id: 'pressure',
      name: t("thisDayInfo.pressure"),
      value: weather.list[0].main.pressure + ' mm Hg'
    },
    {
      icon_id: 'precipitation',
      name: t("thisDayInfo.precipitation"),
      value: weather.list[0].pop + ' %'
    },
    {
      icon_id: 'wind',
      name: t("thisDayInfo.wind"),
      value: weather.list[0].wind.speed + ' ' + t("thisDayInfo.m/c")
    },
  ]
  return (
    <ThisDayInfoStyle>
      <div>
        {items.map((item: Item) =>
          (<ThisDayItem key={item.icon_id} item={item}/>)
        )}
      </div>
      <CloudImg src={cloud} alt="хмарка"/>
    </ThisDayInfoStyle>
  );
}
