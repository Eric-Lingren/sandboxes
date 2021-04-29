import React, { Component } from 'react';

const UserContext = React.createContext()

class UserProvider extends Component {
    constructor(){
        super()
        this.state = {
            isLoggedIn: false
        }
    }

    handleSubmitLogin = (userName, password) => {
        localStorage.setItem("isLoggedIn", true)
        // let token = localStorage.getItem("isLoggedIn")
        // console.log(token)
        this.getToken()
    }


    handleLogout = () => {
        // let token = localStorage.getItem("isLoggedIn")
        // localStorage.removeItem("isLoggedIn")
        localStorage.setItem("isLoggedIn", false)
        this.getToken()
    }

    getToken = () => {
        let token = localStorage.getItem("isLoggedIn")
        let parsedToken = JSON.parse(token)
        this.setState({ isLoggedIn: parsedToken })
        return parsedToken
    }

    render(){
        return (
            <UserContext.Provider 
                value={{
                    ...this.state,
                    handleSubmitLogin: this.handleSubmitLogin,
                    handleLogout: this.handleLogout,
                    getToken: this.getToken
                }}>
                { this.props.children }
            </UserContext.Provider>
        )
    }
}

export default UserProvider

export const withUser = C => props => (
    <UserContext.Consumer>
        {value => <C {...props} {...value}/>}
    </UserContext.Consumer>
)