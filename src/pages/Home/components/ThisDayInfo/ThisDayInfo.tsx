import React from 'react';
import cloud from '../../../../assets/images/cloud.png'
import {ThisDayItem} from "./ThisDayItem";
import {ThisDayInfoStyle,CloudImg} from "./ThisDayInfoStyles";
import { Item } from "../../../../types/types";

export const ThisDayInfo = () =>{
  const items = [
    {
      icon_id:'temp',
      name:'Температура',
      value:'20 - відчувається як 17'
    },
    {
      icon_id:'pressure',
      name:'Тиск',
      value:'765мм ртутного стовбчика - нормальне'
    },
    {
      icon_id:'precipitation',
      name:'Опади',
      value:'Без опадів'
    },
    {
      icon_id:'wind',
      name:'Вітер',
      value:'3 м/с - легкий вітерець'
    },
  ]
  return (
    <ThisDayInfoStyle>
    <div>
      {items.map((item: Item) =>
        ( <ThisDayItem  key={item.icon_id} item={item} />)
      )}
    </div>
    <CloudImg src={cloud} alt="хмарка"/>
  </ThisDayInfoStyle>
  );
}
