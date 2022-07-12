import React from 'react';
import {Header} from "./pages/shared/Header/Header";
import {GridColumn, GridRow, GridWrap } from "emotion-flex-grid";
import { Outlet } from 'react-router-dom'
export const RootComponent = () => {
  return (
    <GridRow justify ='center'>
      <GridColumn pt ='20px' width ='1200px' >
        <Header/>
        <Outlet/>
      </GridColumn>
    </GridRow>
  );
};

