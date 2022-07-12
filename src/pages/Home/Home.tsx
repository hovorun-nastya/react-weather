import React, {useState} from 'react';
import {ThisDay} from "./components/ThisDay/ThisDay";
import {ThisDayInfo} from "./components/ThisDayInfo/ThisDayInfo";
import {Days} from "./components/Days/Days";
import {HomeWrapper} from "./HomeStyle";
import {ThemeProvider} from "@emotion/react";
export interface Props{

}
/*declare module '@emotion/react' {
  export interface Props{

  }
  export interface Theme {
      primary: string
      positive: string
      negative: string

  }
}*/

/*const dayTheme = {
   cardsBackground:'rgba(71,147,255,0.2)'
    whiteColor:'#fff',
    blackColor:'#000',
    cardBackground:'rgba(71,147,255,0.2)'
}
const nightTheme ={
    blackColor: '#0D1117',
    backgroundColor: '#4F4F4F',
    whiteColor: '#fff',
   cardBackground: '#2E3035',
} */



export const Home = (props:Props) => {
   const [isDay, setIsDay] = useState(true)

   return (
     /* <ThemeProvider theme={isDay ? dayTheme : nightTheme}>*/
     <div>
      <HomeWrapper>
       <ThisDay/>
       <ThisDayInfo/>
      </HomeWrapper>
      <Days/>
</div>

  );
};


