import React from "react";
import {CardStyle, DayInfo, DayStyle, Img, DayTemp, NightTemp, Info} from "./DaysStyles";
import {Day} from "../../../../types/types";
import {useTranslation} from "react-i18next";
import dayjs from "dayjs";
import Icons from "../../../shared/Icons/Icons";
import Modal from "../../../../modal/Modal";
import useModal from "../../../../modal/useModal";


require('dayjs/locale/uk')
type PropsType = {
  day: Day;
};


export const Card: React.FC<PropsType> = ({day}) => {
  const {i18n, t} = useTranslation()
  const curLang = () => {
    let lang;
    if (i18n.language === 'ua') {
      lang = dayjs(day.dt_txt).locale('uk').format('dddd')
    } else {
      lang = dayjs(day.dt_txt).locale('en').format('dddd')
    }
    return lang
  }
  const {isShowing, toggle} = useModal();

  return <CardStyle onClick={toggle}>
    <DayStyle>{curLang()[0].toUpperCase() + curLang().slice(1)}</DayStyle>
    <DayInfo>{day.day_info}</DayInfo>
    <Img>
      <Icons main={day.weather[0].description}/>
    </Img>
    <DayTemp>{day.main.temp_max > 0
      ? "+" + Math.round(day.main.temp_max)
      : "-" + Math.round(day.main.temp_max)}</DayTemp>
    <NightTemp>{day.main.temp_min > 0
      ? "+" + Math.round(day.main.temp_min)
      : "-" + Math.round(day.main.temp_min)}</NightTemp>
    <Info>{t(day.weather[0].description)}</Info>
    <Modal
      isShowing={isShowing}
      hide={toggle}
      day={day}
      currentLang={curLang}
    />
  </CardStyle>
}