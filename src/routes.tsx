import  * as React from 'react';
import { MonthStatistics } from "./pages/MonthStatistics/components/MonthStatistics";
import {RootComponent} from "./RootComponent";
import HomeContainer from "./pages/Home/HomeContainer";


export const routes = [
  {
    path: "/",
    element: <RootComponent />,
    children: [
      {
        path: "/home",
        element: <HomeContainer/>,
      },
      {
        path: "month-statics",
        element: <MonthStatistics />
      },
    ],
  },
];
