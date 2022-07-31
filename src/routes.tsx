import * as React from 'react';
import {RootComponent} from "./RootComponent";
import HomeContainer from "./pages/Home/HomeContainer";

export const routes = [
  {
    path: "/",
    element: <RootComponent/>,
    children: [
      {
        path: "/home",
        element: <HomeContainer/>,
      }
    ],
  },
];
