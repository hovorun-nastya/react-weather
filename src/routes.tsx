import  * as React from 'react';
import { MonthStatistics } from "./pages/MonthStatistics/components/MonthStatistics";
import { Home } from './pages/Home/Home';
import {RootComponent} from "./RootComponent";

export const routes = [
  {
    path: "/",
    element: <RootComponent/>,
    children: [
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "month-statics",
        element: <MonthStatistics />
      },
    ],
  },
];
