import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import UsersForm from './components/UsersForm'
import UsersList from './components/UsersList'

function App() {

  const [users, setUsers] = useState([])
  const [userSelected, setUserSelected] = useState(null)

  useEffect(() => {
    axios.get('https://users-crud1.herokuapp.com/users/')
    .then(res => setUsers(res.data))
  }, [])

  const getuser = () => {
    axios.get('https://users-crud1.herokuapp.com/users/')
    .then(res => setUsers(res.data))
  }

  const selectUser = (user) => {
    setUserSelected(user)
  }

  const deselectUser = () => {
    setUserSelected(null)
  }

  const deleteUser = (id) => {
    axios.delete(`https://users-crud1.herokuapp.com/users/${id}/`)
    .then(() => getuser())
  }
  console.log(users)


  return (
    <div className="App">
      <UsersList users={users} selectUser={selectUser} deleteUser={deleteUser} />
      <UsersForm getuser={getuser} userSelected={userSelected} deselectUser={deselectUser}/>
    </div>
  )
}

export default App
