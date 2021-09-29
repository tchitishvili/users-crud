import { StyledUserHeader } from './styled'
import Button from 'components/atoms/button'

const UsersHeader = ({ onClick, count }) => {
  return (
    <StyledUserHeader>
      Total Users Count: {count}
      <Button onClick={() => onClick()}>Add New User</Button>
    </StyledUserHeader>
  )
}

export default UsersHeader;
