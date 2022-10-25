export interface Rate{
  amount:string;
  base:string;
  date:string;
  rates:{
    [key:string]:number
  }
}
