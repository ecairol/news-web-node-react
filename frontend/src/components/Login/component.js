import React, { Component } from 'react'

class Login extends Component {
  state = {
     form: null,
     error: "",
     isLoading: false
   }

   render () {
     return (
       <div className="c-login">
        <h1>Login Screen</h1>
       </div>
     )
   }
 }
 
 export default Login