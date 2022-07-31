import React from 'react';
import {useTranslation} from "react-i18next";
import {Day} from "../types/types";
import {Item} from "../types/types";
import {ThisDayItem} from "../pages/Home/components/ThisDayInfo/ThisDayItem";

type PropsType = {
  day: Day;
};
export const ModalInfo: React.FC<PropsType> = ({day}) => {
  const {t} = useTranslation()
  const items = [
    {
      icon_id: 'temp',
      name: t("thisDayInfo.temperature"),
      value: Math.round(day.main.temp) + '°C ' + t("thisDayInfo.feelsLike") + Math.round(day.main.feels_like) + '°C'
    },
    {
      icon_id: 'pressure',
      name: t("thisDayInfo.pressure"),
      value: day.main.pressure + ' mm Hg'
    },
    {
      icon_id: 'precipitation',
      name: t("thisDayInfo.precipitation"),
      value: day.pop + ' %'
    },
    {
      icon_id: 'wind',
      name: t("thisDayInfo.wind"),
      value: day.wind.speed + ' ' + t("thisDayInfo.m/c")
    },
  ]
  return (
    <div>
      {items.map((item: Item) =>
        (<ThisDayItem key={item.icon_id} item={item}/>)
      )}
    </div>
  );
}
