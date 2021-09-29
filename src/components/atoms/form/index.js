import { StyledForm } from './styled'

const Form = ({ children, onSubmit }) => {
  return (
    <StyledForm onSubmit={onSubmit}>
      {children}
    </StyledForm>
  )
}

export default Form

