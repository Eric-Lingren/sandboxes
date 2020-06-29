import React, { useState, useEffect } from 'react';

const Register = () =>  {

  const [firstName, setFirstName] = useState('')

  // this.state={
  //   firstName: ''
  // }
  // this.setState( { firstName: 'Eric' })

  const [password, setPassword] = useState('')
  const [currentUser, setCurrentUser] = useState({})


  useEffect(() => {
    fetch('https://swapi.dev/api/people/1')
			.then(res => res.json())
      .then(
        (result) => {
          // console.log(result)
          setCurrentUser(result)
        },
        (error) => error)
  }, [firstName])

  useEffect(() => {
    return () => cleanupLoggedinUser()
  }, [] )


  const handleFirstName = (e) => {
    const {value} = e.target
    setFirstName(value)
  }

  const register = (e) => {
    e.preventDefault()
    let currentUser = {
      name: firstName,
      password: password
    }
    setCurrentUser(currentUser)
  }

  const cleanupLoggedinUser = () => {
    setCurrentUser({})
  }


console.log(currentUser)

  return (
    <div>
      <h1> Register for my sweet site here! </h1>

      <form onSubmit={register}>
        Name: 
        <input 
          type='text'
          name='firstName'
          value={firstName}
          onChange={handleFirstName}
        />
        Password: 
        <input 
          type='text'
          name='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button> Register </button>
      </form>

    </div>
  );
}

export default Register;
