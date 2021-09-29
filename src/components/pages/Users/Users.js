import { StyledContainer } from './styled'
import UsersHeader from 'components/molecules/usersHeader';
import NewUserForm from 'components/molecules/newUserForm';
import UsersList from 'components/organisms/usersList';
import React, { useEffect, useState } from 'react'
import Modal from 'components/organisms/modal'

const usersData = [
  {
    id: 1,
    firstName: 'John',
    lastName: 'Smith',
    age: '30',
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
  },
  {
    id: 2,
    firstName: 'Mary',
    lastName: 'Lopez',
    age: '28',
    bio: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae",
  },
]

function Users() {
  const [modalOpen, setModalOpen] = useState(false)
  const [editState, setEditState] = useState(null)
  const [users, setUsers] = useState(usersData)
  const [userFormData, setUserFormData] = useState({
    firstName: '',
    lastName: '',
    age: '',
    bio: ''
  })

  useEffect(() => {
    if (!modalOpen) {
      setEditState(false)
      setUserFormData({
        firstName: '',
        lastName: '',
        age: '',
        bio: ''
      })
    }
  }, [modalOpen])

  const addNewUser = () => {
    const lastId = users.length ? users[users.length - 1].id + 1 : 1

    if (userFormData.firstName) {
      const newUser = {
        id: lastId,
        firstName: userFormData.firstName,
        lastName: userFormData.lastName,
        age: userFormData.age,
        bio: userFormData.bio
      }
      setUsers([...users, newUser])
      setModalOpen(false)
    }
  }

  const deleteUser = (userId) => {
    if (userId) {
      setUsers(users.filter(user => user.id !== userId))
    }
  }

  const editUser = () => {
    if (editState) {
      setUsers(users.map(user => {
        if (user.id === editState) {
          return {
            ...user,

            ...userFormData
          }
        } else {
          return user
        }
      }))
      setModalOpen(false)
    }
  }

  const editUserState = (userId) => {
    if (userId) {
      setEditState(userId)
      setUserFormData(users.find(user => user.id === userId))
      setModalOpen(true)
    }
  }

  return (
    <StyledContainer>
      <UsersHeader count={users.length} onClick={() => setModalOpen(true)} />
      <UsersList users={users} deleteUser={deleteUser} editUserState={editUserState} />
      {modalOpen && (
        <Modal title={editState ? 'Edit User' : 'Add New User'} onClose={() => setModalOpen(false)}>
          <NewUserForm
            userFormData={userFormData}
            editState={editState}
            onSubmit={() => {
              if (!editState) {
                addNewUser()
              } else {
                editUser()
              }
            }}
            onChange={(value, name) => setUserFormData({
              ...userFormData,

              [name]: value
            })}
          />
        </Modal>
      )
      }
    </StyledContainer>
  )
}

export default Users;
