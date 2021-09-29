import Button from 'components/atoms/button'
import Input from 'components/atoms/input'
import TextArea from 'components/atoms/textarea'
import Form from 'components/atoms/form'

const NewUserForm = ({ onChange, userFormData, onSubmit, editState }) => {
  const onFormSubmit = (e) => {
    e.preventDefault()
    onSubmit()
  }
  return (
    <Form onSubmit={onFormSubmit}>
      <Input
        type='text'
        placeholder='First Name'
        name='firstName'
        value={userFormData.firstName}
        onChange={(e) => onChange(e.target.value, e.target.name)}
      />
      <Input
        type='text'
        placeholder='Last Name'
        name='lastName'
        value={userFormData.lastName}
        onChange={(e) => onChange(e.target.value, e.target.name)}
      />
      <Input
        type='number'
        placeholder='Age'
        name='age'
        value={userFormData.age}
        onChange={(e) => onChange(e.target.value, e.target.name)}
      />
      <TextArea
        name='bio'
        placeholder='Bio'
        value={userFormData.bio}
        onChange={(e) => onChange(e.target.value, e.target.name)}
      ></TextArea>
      {editState ? <Button type='submit'>Save</Button> : <Button type='submit'>Add</Button>}
    </Form>
  )
}

export default NewUserForm;
