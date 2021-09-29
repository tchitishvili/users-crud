import { StyledUserItem, StyledUserItemContent, StyledUserName, StyledUserBio, StyledUserActions } from './styled'
import CloseIcon from 'icons/CloseIcon'
import Button from 'components/atoms/button'
import Img from 'components/atoms/image'

const UserItem = ({ user, deleteUser, editUserState }) => {
  return (
    <StyledUserItem>
      <StyledUserItemContent>
        <Img alt='user' src={'https://aui.atlassian.com/aui/latest/docs/images/avatar-person.svg'} />
        <StyledUserName>
          {`${user.firstName} ${user.lastName} ${user.age ? `(${user.age})` : ''}`}
        </StyledUserName>
        <StyledUserBio>
          {user.bio}
        </StyledUserBio>
        <StyledUserActions>
          <Button onClick={() => editUserState(user.id)}>Edit</Button>
          <Button onClick={() => deleteUser(user.id)}><CloseIcon /></Button>
        </StyledUserActions>
      </StyledUserItemContent>
    </StyledUserItem>
  )
}

export default UserItem
