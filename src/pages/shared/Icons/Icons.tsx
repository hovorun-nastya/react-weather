import React from "react";
import snow from "../../../assets/icons/global/snow.png"
import {GlobalSvgSelector} from "../../../assets/icons/global/GlobalSvgSelector";


type PropsType = {
  main: string;
};
const Icons: React.FC<PropsType> = ({ main }) => {
  if (main === "чисте небо" ||
    main === "clear sky"||
    main==="scattered clouds"||
    main==="уривчасті хмари")
    return <GlobalSvgSelector id="sun"/>;
  else if (
    main === "рвані хмари" ||
    main === "broken clouds" ||
    main === "хмарно" ||
    main === "overcast clouds" ||
    main === "кілька хмар" ||
    main === "few clouds"
  )
    return <GlobalSvgSelector id={"mainly_cloudy"}/>
  else if (
    main === "легкий дощ" ||
    main === "light rain"
  )
    return <GlobalSvgSelector id={"small_rain"}/>
  else if (
    main === "дощ" ||
    main === "rain"||
    main==="помірний дощ"||
    main==="moderate rain"
  )
    return <GlobalSvgSelector id={"rain"}/>
  else if (
    main === "сніг" ||
    main === "snow"
  )
    return <img src={snow} alt={main}/>
  else return null
};

export default React.memo(Icons);