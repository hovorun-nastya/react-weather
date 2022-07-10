import React from "react";
import {TabsStyle, TabsWrapper,TabStyle,Cancel} from "./DaysStyles";

interface Props{
}

export const Tabs =(props:Props)=>{
  const tabs =[
    {
      value:'На тиждень',
    },
    {
      value:'На 10 днів',
    },
    {
      value:'На місяць',
    },
  ];
  return (
  <TabsStyle>
    <TabsWrapper>
      {tabs.map((tab) => (
        <TabStyle key={tab.value}>
      {tab.value}
    </TabStyle>))}
  </TabsWrapper>
    <Cancel>Відмінити</Cancel>
  </TabsStyle>
  );
};