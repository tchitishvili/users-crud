import { StyledUserHeader } from './styled'

function UsersHeader({ onClick, count }) {
  return (
    <StyledUserHeader>
      Total Users Count: {count}
      <button onClick={() => onClick()}>Add New User</button>
    </StyledUserHeader>
  )
}

export default UsersHeader;
