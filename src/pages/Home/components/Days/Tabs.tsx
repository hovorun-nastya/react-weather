import React from "react";
import {TabsStyle, TabsWrapper,TabStyle,Cancel} from "./DaysStyles";

export const Tabs =()=>{
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