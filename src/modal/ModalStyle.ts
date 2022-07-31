import styled from '@emotion/styled'

export const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1040;
  width: 100vw;
  height: 100vh;
  background-color: #000;
  opacity: .5;
`
export const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1050;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  outline: 0;
`
export const AllModal = styled.div`
  z-index: 100;
  background: ${props => props.theme.globalBackground};
  position: relative;
  margin: 1.75rem auto;
  border-radius: 20px;
  max-width: 1000px;
  padding: 2rem;
`
export const ModalHeader = styled.div`
  display: flex;
  justify-content: flex-end;
`
export const TwoFrames = styled.div`
  display: flex;
  justify-content: space-between;
`
export const FirstFrame = styled.div`
  padding: 20px;
  max-width: 400px;
  width: 100%;
  background: ${props => props.theme.cardsBackground};
  box-shadow: 2px 5px 25px -3px rgba(100, 100, 100, 0.25);
  border-radius: 20px;
  margin-right: 30px;
`
export const FirstTopBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 30px;

  svg {
    width: 119px;
    height: 119px;
  }
`
export const FirstTemp = styled.div`
  font-size: 96px;
  font-weight: 500;
  color: #4793ff;
`
export const FirstDayName = styled.div`
  font-size: 40px;
  color: ${props => props.theme.textColor};
`
export const FirstInfo = styled.div`
  font-size: 14px;
  margin-bottom: 12px;
  color: #939cd0;
`

export const SecondFrame = styled.div`
  position: relative;
  padding: 40px;
  max-width: 750px;
  width: 100%;
  box-shadow: 2px 5px 25px -3px rgba(100, 100, 100, 0.25);
  border-radius: 20px;
  background: ${props => props.theme.cardsBackground};
`
export const CloseButton = styled.button`
  background: ${props => props.theme.cardsBackground};
  color: ${props => props.theme.textColor};
  margin: 5px;
  border-radius: 20px;
  border: 2px solid #4793ff;
  padding: 5px 10px
`