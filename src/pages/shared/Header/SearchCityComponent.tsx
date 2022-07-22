import React, {useCallback, useState} from 'react';
import {useSearchParams} from "react-router-dom";
import {useFetchWeather} from "../../../hooks/useFetchWeather";

export const SearchCityComponent = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [value, setValue] = useState('')

  const onClick = useCallback(() => {
    setSearchParams({q: value})
    setValue('')
  }, [setValue, value,setSearchParams])

console.log(value)
  return (
    <>
      <input
        value={value}
        id="city"
        placeholder={"Введіть місто"}
        onChange={(e) => setValue(e.target.value)}
        autoComplete="off"
      />
      <button onClick={onClick} disabled={!value}>
        Show
      </button>

    </>
  );
};

export default SearchCityComponent;