import React from "react";
import {TabsStyle,TabStyle} from "./DaysStyles";
import {useTranslation} from "react-i18next";

export const Tabs =()=>{
const {t}=useTranslation()
  return (
  <TabsStyle>
        <TabStyle >
          {t("5Day")}
    </TabStyle>
  </TabsStyle>
  );
};