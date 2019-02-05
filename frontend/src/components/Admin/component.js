import React, { Component } from 'react'

class Admin extends Component {
  state = {
     form: null,
     error: "",
     isLoading: false
   }

   render () {
     return (
       <div className="c-admin">
        <h1>Admin Screen</h1>
       </div>
     )
   }
 }
 
 export default Admin