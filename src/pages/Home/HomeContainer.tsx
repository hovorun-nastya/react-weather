import React from 'react';
import {Home} from "./Home";
import {useFetchWeather} from "../../hooks/useFetchWeather";
import {useSearchParams} from "react-router-dom";

const HomeContainer = () => {
  const [searchParams] = useSearchParams()
  const {data: weather, isLoading} = useFetchWeather(searchParams.get('q') ? searchParams.get('q') : 'Kiev')

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