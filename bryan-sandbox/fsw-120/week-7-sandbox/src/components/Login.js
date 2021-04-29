import React, {useState} from 'react';
import { withUser } from '../providers/UserProvider'

const Login = ({ handleSubmitLogin }) => {
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    handleSubmitLogin(userName, password)
  }


  return (
    <div>
      <form onSubmit={handleSubmit}>
        User Name:
        <input 
          type='text'
          name='userName'
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        Password:
        <input 
          type='password'
          name='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button> Login </button>
      </form>
    </div>
  );
}

export default withUser(Login)
