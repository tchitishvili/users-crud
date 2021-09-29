import { StyledInput } from './styled'

const Input = ({ type, onChange, placeholder, name, value }) => {
  return (
    <StyledInput type={type} placeholder={placeholder} onChange={onChange} name={name} value={value} />
  )
}

export default Input

