type Main ={
  temp_max:number;
  temp_min:number;
}
type Weather ={
  description:string;
}
export interface Day{
  dt: string;
  dt_txt:any;
  main:Main;
  weather:Array<Weather>;
  day: string,
  day_info: string,
  icon_id: string,
  info: string,

}
export interface Props{
  day: Day;
}
export interface Item{
  icon_id: string;
  name: string;
  value: any;
}
