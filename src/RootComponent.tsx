import React, {Suspense, useState} from 'react';
import {Header} from "./pages/shared/Header/Header";
import {GridColumn, GridRow} from "emotion-flex-grid";
import { Outlet } from 'react-router-dom'
import {ThemeProvider,Theme} from "@emotion/react";
import {GlobalBackground} from './globalStyle'


import  '../src/utils/i18n';
declare module '@emotion/react' {
  export interface Theme {
    cardsBackground: string,
    cardBackground: string,
    textColor:string,
    globalBackground:string
  }
}
export const dayTheme = {
  cardsBackground: '#fff',
  cardBackground: 'rgba(71,147,255,0.2)',
  textColor:'#000',
  globalBackground:'#E5E5E5'
}
export const nightTheme = {
  cardsBackground:'#2E3035' ,
  cardBackground: '#0D1117',
  textColor:'#fff',
  globalBackground:'#0D1117'
}



export const RootComponent = () => {
  const [isDay, setIsDay] = useState(true)
  const [language, setLanguage] = useState('en');


  return (
    <Suspense fallback={"loading..."}>
    <ThemeProvider theme={isDay ? dayTheme : nightTheme}>
      <GlobalBackground>
    <GridRow justify ='center'>
      <GridColumn pt ='20px' width ='1200px' >
        <Header setIsDay={setIsDay} language ={language} setLanguage ={setLanguage} />
        <Outlet/>
      </GridColumn>
    </GridRow>
      </GlobalBackground>
      </ThemeProvider>
    </Suspense>
  );
};

