import styled from '@emotion/styled'

export const DaysStyles = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding:20px;
  width:100%;
  background:${props => props.theme.cardsBackground};
  box-shadow: 2px 5px 25px -3px rgba(100,100,100,0.25);
  border-radius: 0 0 20px 20px;
`
export const CardStyle = styled.div`
  display: flex;
  flex-direction: column;
  background: ${props => props.theme.cardBackground};
  border-radius: 10px;
  padding: 10px;
  width: 149px;
  transition: 0.3s;
  cursor:pointer;
  &:hover{
    box-shadow: 0 3px 20px rgba(147,144,144,0.28);
  }
`
export const DayStyle = styled.div`
  margin-bottom: 7px;
  font-size: 18px;
  color: ${props => props.theme.textColor};
`
export const DayInfo = styled.div`
  font-size: 14px;
  margin-bottom: 12px;
  color: #939cd0;
`
export const Img = styled.div`
  margin-bottom: 12px;
`
export const DayTemp = styled.div`
  font-size: 18px;
  color:${props => props.theme.textColor}
`
export const NightTemp = styled.div`
  font-size: 13px;
  color: #939cd0 ;
  margin-bottom: 6px;
`
export const Info = styled.div`
  font-size: 13px;
  color:#939cd0;
`
export const TabsStyle = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 7px;
`
export const TabsWrapper = styled.div`
  display: flex;
`
export const TabStyle = styled.div`
  box-shadow: 2px 5px 25px -3px rgba(180,180,100,0.25);
  border-radius:5px;
  padding: 9px 20px;
  background-color:${props => props.theme.cardsBackground} ;
  margin-right: 15px;
  color:${props => props.theme.textColor};
  font-size: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  &.active{
    background: #4793ff;
    color: #fff;
  }
`
export const Cancel = styled.div`
  box-shadow: 2px 5px 25px -3px rgba(180,180,100,0.25);
  border-radius:5px;
  padding: 9px 20px;
  background-color: ${props => props.theme.cardsBackground};
  color:${props => props.theme.textColor};
  font-size: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin-right:0;
`