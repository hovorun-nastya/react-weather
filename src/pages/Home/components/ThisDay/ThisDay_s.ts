import styled from '@emotion/styled'

export const ThisDayHeader = styled.header`
  padding: 20px;
  max-width: 400px;
  width: 100%;
  background: ${props => props.theme.cardsBackground};
  box-shadow: 2px 5px 25px -3px rgba(100, 100, 100, 0.25);
  border-radius: 20px;
`
export const TopBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 30px;

  svg {
    width: 119px;
    height: 119px;
  }
`
export const ThisTemp = styled.div`
  font-size: 96px;
  font-weight: 500;
  color: #4793ff;
`
export const ThisDayName = styled.div`
  font-size: 40px;
  color: ${props => props.theme.textColor};
`
export const ThisTime = styled.div`
  color: #939cd0;
  font-size: 25px;
`
export const ThisCity = styled.div`
  color: #939cd0;
  font-size: 25px;
`