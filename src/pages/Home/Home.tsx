import React from 'react';
import {ThisDay} from "./components/ThisDay/ThisDay";
import {ThisDayInfo} from "./components/ThisDayInfo/ThisDayInfo";
import {Days} from "./components/Days/Days";
import {HomeWrapper} from "./HomeStyle";

interface Props {

}
 export const Home = (props: Props) => {
  return (
    <div>
      <HomeWrapper>
      <ThisDay/>
      <ThisDayInfo/>
      </HomeWrapper>
      <Days/>
    </div>
  );
};


