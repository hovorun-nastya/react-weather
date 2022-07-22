import React from 'react';
import cloud from '../../../../assets/images/cloud.png'
import {ThisDayItem} from "./ThisDayItem";
import {ThisDayInfoStyle, CloudImg} from "./ThisDayInfoStyles";
import {Item} from "../../../../types/types";

export const ThisDayInfo = ({weather, city}: any) => {
  const items = [
    {
      icon_id: 'temp',
      name: 'Temperature',
      value:Math.round(weather.list[0].main.temp)+'°C feels like ' + Math.round(weather.list[0].main.feels_like)+'°C'
    },
    {
      icon_id: 'pressure',
      name: 'Pressure',
      value: weather.list[0].main.pressure +' mm Hg'
    },
    {
      icon_id: 'precipitation',
      name: 'Опади',
      value: 'Без опадів'
    },
    {
      icon_id: 'wind',
      name: 'Вітер',
      value: '3 м/с - легкий вітерець'
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
