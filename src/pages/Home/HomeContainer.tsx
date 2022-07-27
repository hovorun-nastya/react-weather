import React, {useState, useTransition} from 'react';
import {Home} from "./Home";
import {useFetchWeather} from "../../hooks/useFetchWeather";
import {useSearchParams} from "react-router-dom";
import {useTranslation} from "react-i18next";




const HomeContainer = () => {
  const [searchParams] = useSearchParams()
  const {i18n} = useTranslation()
  const {data: weather,isLoading} = useFetchWeather( searchParams.get('q') ? searchParams.get('q') : 'Kiev',  i18n.language  )
  if (isLoading) {
    return <div>Data is loading...</div>
  }
  return (
    <>
      <Home weather={weather} city={searchParams.get('q') ? searchParams.get('q') : 'Kiev'}/>
    </>
  );
};

export default HomeContainer;