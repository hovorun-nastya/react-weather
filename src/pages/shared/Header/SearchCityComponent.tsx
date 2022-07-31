import React, {useCallback, useState} from 'react';
import {useSearchParams} from "react-router-dom";
import {Button, Input} from './SearchCityStyle';


export const SearchCityComponent = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [value, setValue] = useState('')

  const onClick = useCallback(() => {
    setSearchParams({q: value})
    setValue('')
  }, [setValue, value, setSearchParams])

  console.log(value)
  return (
    <>
      <Input value={value}
             id="city"
             placeholder={"Введіть місто"}
             onChange={(e) => setValue(e.target.value)}
             autoComplete="off"/>
      <Button type="submit" onClick={onClick} disabled={!value}>Search</Button>
    </>
  );
};

export default SearchCityComponent;