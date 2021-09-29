import styled from 'styled-components'
import { StyledButton } from 'components/atoms/button/styled'

export const StyledOverlay = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: ${props => props.theme.modalOverlay};
  z-index: 99;
`
export const StyledModal = styled.div`
  position: fixed;
  width: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${props => props.theme.modalBackground};
  background-repeat: no-repeat;
  background-size: cover;
  z-index: 99;
  padding: 15px 0 38px;
  width: ${props => props.modalWidth};
  max-height: 98vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`

export const StyledModalHeader = styled.div`
  font-size: 20px;
  color: ${props => props.theme.modalTitleColor};
  text-align: center;
  margin: auto;
  padding-bottom: 15px;
  border-bottom: 1px solid ${props => props.theme.modalHeaderBorder};
  width: 100%;

  ${StyledButton} {
    position: absolute;
    top: 15px;
    right: 15px;
    color: ${props => props.theme.whtieColor};
    background: transparent;
    border: 0;

    svg path {
      fill: ${props => props.theme.whtieColor};
    }
  }
`

export const StyledModalContent = styled.div`
  margin-top: 10px;
  overflow: auto;
`

export const StyledModalContentInner = styled.div`
  padding: 0px 30px;
`
