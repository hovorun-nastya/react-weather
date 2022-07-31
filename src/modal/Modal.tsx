import React from 'react';
import ReactDOM from 'react-dom';
import {
  ModalBackground,
  ModalWrapper,
  AllModal,
  ModalHeader,
  TwoFrames,
  FirstFrame,
  FirstTopBlock,
  FirstTemp,
  FirstDayName,
  FirstInfo,
  SecondFrame, CloseButton
} from "./ModalStyle";
import {Day} from "../types/types";
import Icons from "../pages/shared/Icons/Icons";
import {Img} from "../pages/Home/components/Days/DaysStyles";
import {ModalInfo} from "./ModalInfo";

require('dayjs/locale/uk')

type PropsType = {
  day: Day;
  isShowing: boolean;
  hide: any;
  currentLang: any
};

const Modal: React.FC<PropsType> = ({isShowing, hide, day, currentLang}) => isShowing ? ReactDOM.createPortal(
  <React.Fragment>
    <ModalBackground/>
    <ModalWrapper aria-modal aria-hidden tabIndex={-1} role="dialog">
      <AllModal>
        <ModalHeader>
          <CloseButton data-dismiss="modal" aria-label="Close" onClick={hide}>
            <span aria-hidden="true">&times;</span>
          </CloseButton>
        </ModalHeader>
        <TwoFrames>
          <FirstFrame>
            <div>
              <FirstTopBlock>
                <FirstTemp>{day.main.temp > 0
                  ? "+" + Math.round(day.main.temp)
                  : "-" + Math.round(day.main.temp)}</FirstTemp>
                <FirstDayName>{currentLang()[0].toUpperCase() + currentLang().slice(1)}</FirstDayName>
                <Img>
                  <Icons main={day.weather[0].description}/>
                </Img>
                <FirstInfo>{day.weather[0].description}</FirstInfo>
              </FirstTopBlock>
            </div>
          </FirstFrame>
          <SecondFrame>
            <ModalInfo day={day}/>
          </SecondFrame>
        </TwoFrames>
      </AllModal>
    </ModalWrapper>
  </React.Fragment>, document.body
) : null;

export default Modal;