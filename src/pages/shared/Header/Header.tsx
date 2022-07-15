import React, {useState} from "react";
import Select from 'react-select'
import {GlobalSvgSelector} from "../../../assets/icons/global/GlobalSvgSelector";
import {HeaderS, Wrapper, Logo, Title} from "./Header_s";
import { Dispatch, SetStateAction } from "react";
import {Theme, useTheme} from "@emotion/react";


export interface IProps {
  setIsDay:Dispatch<SetStateAction<boolean>>
}
export const Header = ({setIsDay}:IProps) => {
  const options = [
    {value: 'city-1', label: 'Київ'},
    {value: 'city-2', label: 'Харків'},
    {value: 'city-3', label: 'Суми'}
  ];

  const theme  = useTheme();

  const colourStyles = {
    control: (styles: any) => ({
      ...styles,
      backgroundColor: theme.cardsBackground,
      color: '#fff',
      width: '194px',
      height: '37px',
      border: 'none',
      borderRadius: '10px',
      zIndex: 100,
    }),
    multiValue: (styles:any) =>({
      ...styles,
      color:'#fff'
    })
  }


  return (
    <HeaderS>
      <Wrapper>
        <Logo>
          <GlobalSvgSelector id="header-logo"/>
        </Logo>
        <Title>React weather</Title>
      </Wrapper>
      <Wrapper>
        <div style={{marginRight: "20px"}} onClick={() => setIsDay(prevState => !prevState)}>
          <GlobalSvgSelector id="change-theme"/>
        </div>
        <Select
          defaultValue={options[0]}
          styles={colourStyles}
          options={options}
        />
      </Wrapper>
    </HeaderS>
  )
}