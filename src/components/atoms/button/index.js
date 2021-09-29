import { StyledButton } from './styled'

const Button = ({ type, onClick, children, className, disabled }) => {
  return (
    <StyledButton type={type} onClick={onClick} disabled={disabled} className={className}>
      {children}
    </StyledButton>
  )
}

export default Button

