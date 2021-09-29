import styled from 'styled-components'

export const StyledUserItem = styled.div`
  width: 25%;
  padding: 0px 15px;
  margin: 10px 0px;

  img {
    width: 50%;
    margin: auto;
    display: block;
  }
`

export const StyledUserItemContent = styled.div`
  padding: 12px;
  background-color: ${props => props.theme.userCardBackground};
`

export const StyledUserName = styled.div`
  text-align: center;
  margin-top: 20px;
  margin-bottom: 12px;
`

export const StyledUserActions = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;

  button {
    margin: 0px 10px;
  }
`

export const StyledUserBio = styled.div`

`
