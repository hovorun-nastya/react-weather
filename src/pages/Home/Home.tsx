import React from 'react';
import {ThisDay} from "./components/ThisDay/ThisDay";
import {ThisDayInfo} from "./components/ThisDayInfo/ThisDayInfo";
import {Days} from "./components/Days/Days";
import {HomeWrapper} from "./HomeStyle";

export const Home = ({weather, city}: any) => {
  return (
    <>
      <HomeWrapper>
        <ThisDay weather = {weather}  city = {city} />
        <ThisDayInfo weather = {weather}  city = {city} />
      </HomeWrapper>
      <Days weather ={weather}  />
    </>
  );
};


