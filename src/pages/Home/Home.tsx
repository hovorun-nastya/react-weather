import React, {useState} from 'react';
import {ThisDay} from "./components/ThisDay/ThisDay";
import {ThisDayInfo} from "./components/ThisDayInfo/ThisDayInfo";
import {Days} from "./components/Days/Days";
import {HomeWrapper} from "./HomeStyle";

export const Home = () => {
  const [isDay, setIsDay] = useState(true)
  console.log(isDay)
  return (
    <>
      <HomeWrapper>
        <ThisDay/>
        <ThisDayInfo/>
      </HomeWrapper>
      <Days/>
    </>
  );
};


