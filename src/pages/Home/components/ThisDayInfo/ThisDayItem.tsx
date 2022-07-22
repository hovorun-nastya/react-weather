import React from 'react';
import {Item} from "../../../../types/types";
import {IndicatorSvgSelector} from "../../../../assets/icons/indicators/IndicatorSvgSelector";
import {ItemStyle, Indicator, IndicatorValue, IndicatorName} from "./ThisDayInfoStyles";

interface Props {
  item: Item;

}

export const ThisDayItem = ({item}: Props) => {
  const {icon_id, name, value} = item;
  return (
    <ItemStyle>
      <Indicator>
        <IndicatorSvgSelector id={icon_id}/>
      </Indicator>
      <IndicatorName>{name}</IndicatorName>
      <IndicatorValue>{value}</IndicatorValue>
    </ItemStyle>
  );
};

