import React from "react";
import {GlobalSvgSelector} from "../../../../assets/icons/global/GlobalSvgSelector";
import {ThisCity, ThisDayHeader, ThisDayName, ThisTemp, ThisTime, TopBlock} from "./ThisDay_s";
interface Props{
}

export const ThisDay =(props:Props)=>{
  return <ThisDayHeader>
    <TopBlock>
      <div>
      <ThisTemp>20°</ThisTemp>
      <ThisDayName>Cьогодні</ThisDayName>
      </div>
      <GlobalSvgSelector id="sun"/>
    </TopBlock>
    <div>
    <ThisTime>Час:
      <span>21:59</span>
    </ThisTime>
    <ThisCity>
      Місто:<span>Київ</span>
    </ThisCity>
      </div>
  </ThisDayHeader>
}