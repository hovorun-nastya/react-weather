import React, {useCallback} from "react";
import {GlobalSvgSelector} from "../../../assets/icons/global/GlobalSvgSelector";
import {HeaderS, Wrapper, Logo, Title} from "./Header_s";
import {Dispatch, SetStateAction} from "react";
import {Theme, useTheme} from "@emotion/react";
import SearchCityComponent from "./SearchCityComponent";
import ChangeLanguage from "../ChangeLanguage";


export interface IProps {
  setIsDay: Dispatch<SetStateAction<boolean>>
  language: string;
  setLanguage: (lang: string) => void;
}

export const Header = ({setIsDay, language, setLanguage}: IProps,) => {

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
        <ChangeLanguage language={language} setLanguage={setLanguage}/>
        <SearchCityComponent/>
      </Wrapper>
    </HeaderS>
  )
}