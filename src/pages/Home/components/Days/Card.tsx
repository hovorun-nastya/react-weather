import React from "react";
import { Day } from './Days'
import {GlobalSvgSelector} from "../../../../assets/icons/global/GlobalSvgSelector";
import {CardStyle, DayInfo, DayStyle, Img, DayTemp, NightTemp, Info} from "./DaysStyles";
interface Props{
  day: Day;
}

export const Card =({day}:Props)=>{
  return <CardStyle>
    <DayStyle>{day.day}</DayStyle>
    <DayInfo>{day.day_info}</DayInfo>
    <Img>
      <GlobalSvgSelector id={day.icon_id}/>
    </Img>
    <DayTemp>{day.temp_day}</DayTemp>
    <NightTemp>{day.temp_night}</NightTemp>
    <Info>{day.info}</Info>

  </CardStyle>
}