import { StyledTextarea } from './styled'

const Textarea = ({ name, onChange, placeholder, value }) => {
  return (
    <StyledTextarea placeholder={placeholder} onChange={onChange} name={name} value={value}></StyledTextarea>
  )
}

export default Textarea

