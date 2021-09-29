import { StyledUsersList } from './styled'
import UserItem from 'components/molecules/userItem';

const UsersList = ({ users, deleteUser, editUserState }) => {
  return (
    <StyledUsersList>
      {users.map(user => {
        return (
          <UserItem
            key={user.id}
            user={user}
            deleteUser={deleteUser}
            editUserState={editUserState}
          />
        )
      })}
    </StyledUsersList>
  )
}

export default UsersList
