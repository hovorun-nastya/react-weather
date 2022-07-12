import React from "react";
import Select from 'react-select'
import {GlobalSvgSelector} from "../../../assets/icons/global/GlobalSvgSelector";
import {HeaderS, Wrapper,ChangeTheme,Logo,Title} from "./Header_s";
interface Props{
}

export const Header =(props: Props) =>{
  const options = [
    { value: 'city-1', label: 'Київ' },
    { value: 'city-2', label: 'Харків' },
    { value: 'city-3', label: 'Суми' }
  ];

  const colourStyles = {
    control:(styles:any) => ({
      ...styles,
      backgroundColor:'rgba(71, 147, 255, 0.2)',
      width:'194px',
      height:'37px',
      border:'none',
      borderRadius:'10px',
      zIndex: 100,

    })
  }

  return(
    <HeaderS>
             <Wrapper>
               <Logo>
                 <GlobalSvgSelector id="header-logo"/>
               </Logo>
                 <Title>React weather</Title>
             </Wrapper>
             <Wrapper>
               <ChangeTheme>
                 <GlobalSvgSelector id="change-theme"/>
               </ChangeTheme>
               <Select defaultValue={options[0]}
                       styles = {colourStyles}
                       options={options} />
             </Wrapper>
    </HeaderS>
  )
}