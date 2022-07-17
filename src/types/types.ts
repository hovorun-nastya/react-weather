
export interface Day{
  day: string,
  day_info: string,
  icon_id: string,
  temp_day: string,
  temp_night: string,
  info: string,
}
export interface Props{
  day: Day;
}
export interface Item{
  icon_id: string;
  name: string;
  value: string;
}
