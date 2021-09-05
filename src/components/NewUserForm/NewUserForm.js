import { StyledInput, StyledTextArea } from './styled'

function NewUserForm({ onChange, userFormData, onSubmit, editState }) {
  const onFormSubmit = (e) => {
    e.preventDefault()
    onSubmit()
  }
  return (
    <form onSubmit={onFormSubmit}>
      <StyledInput
        type='text'
        placeholder='First Name'
        name='firstName'
        value={userFormData.firstName}
        onChange={(e) => onChange(e.target.value, e.target.name)}
      />
      <StyledInput
        type='text'
        placeholder='Last Name'
        name='lastName'
        value={userFormData.lastName}
        onChange={(e) => onChange(e.target.value, e.target.name)}
      />
      <StyledInput
        type='number'
        placeholder='Age'
        name='age'
        value={userFormData.age}
        onChange={(e) => onChange(e.target.value, e.target.name)}
      />
      <StyledTextArea
        name='bio'
        placeholder='Bio'
        value={userFormData.bio}
        onChange={(e) => onChange(e.target.value, e.target.name)}
      ></StyledTextArea>
      {editState ? <button type='submit'>Save</button> : <button type='submit'>Add</button>}
    </form>
  )
}

export default NewUserForm;
