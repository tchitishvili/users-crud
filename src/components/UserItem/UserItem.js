import { StyledUserItem, StyledUserItemContent, StyledUserName, StyledUserBio, StyledUserActions } from './styled'

function UserItem({ user, deleteUser, editUserState }) {
  return (
    <StyledUserItem>
      <StyledUserItemContent>
        <img alt='' src={'https://aui.atlassian.com/aui/latest/docs/images/avatar-person.svg'} />
        <StyledUserName>
          {`${user.firstName} ${user.lastName} ${user.age ? `(${user.age})` : ''}`}
        </StyledUserName>
        <StyledUserBio>
          {user.bio}
        </StyledUserBio>
        <StyledUserActions>
          <button onClick={() => editUserState(user.id)}>Edit</button>
          <button onClick={() => deleteUser(user.id)}>X</button>
        </StyledUserActions>
      </StyledUserItemContent>
    </StyledUserItem>
  )
}

export default UserItem;
