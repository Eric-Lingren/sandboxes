import React from 'react'
import { withUser } from '../providers/UserProvider'
import { Redirect } from 'react-router-dom'


const ProtectedRoute = (props) => {

    const { isLoggedIn } = props
    const Component = props.component

    console.log(isLoggedIn)

    return (
      isLoggedIn ?
        <Component />
      : 
        <Redirect to={{ pathname: '/' }} />
    )
}

export default withUser(ProtectedRoute)