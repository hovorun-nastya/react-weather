import styled from '@emotion/styled'

 export const ThisDayInfoStyle = styled.div`
   position: relative;
   padding:40px;
   max-width:750px;
   width:100%;
   background:#fff;
   box-shadow: 2px 5px 25px -3px rgba(100,100,100,0.25);
   border-radius:20px;
 `
export const ItemStyle = styled.div`
 position: relative;
 display: flex;
 align-items: center;
 margin-bottom: 25px;
 &:last-of-type{
  margin-bottom: 0;
`
export const Indicator = styled.div`
 margin-right: 20px;
 width: 38px;
 height: 38px;
 display: flex;
 align-items: center;
 justify-content: center;
 background-color: #fff ;
 box-shadow: 2px 5px 25px -3px rgba(100,100,100,0.25);
 border-radius: 50%;
`;
export const IndicatorName = styled.div`
 font-size:14px;
 color: #939cd0;
 margin-right: 20px;
`
export const IndicatorValue = styled.div`
 font-size:14px;
 color: #000;
`
export const CloudImg = styled.img`
 position: absolute;
 top: 0;
 right: 0;
`