import React from "react";
import {Card} from "./Card";
import {Tabs} from "./Tabs";
import {DaysStyles} from "./DaysStyles";
import {Day} from "../../../../types/types";

export const Days = ({weather}: any) => {
  return (
    <>
      <Tabs/>
      <DaysStyles>
        {
          weather.list
            .filter(
              (item: Day) => item.dt_txt.split(" ")[1] === "12:00:00"
            )
            .map((item: Day) => (
              <Card day={item}/>
            ))}
      </DaysStyles>
    </>
  );
}