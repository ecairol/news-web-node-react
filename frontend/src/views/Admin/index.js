import React, { Component } from 'react';
import { isAuthenticated, logout } from '../../services/authentication';

class Admin extends Component {
  state = {
     form: null,
     error: "",
     isLoading: false
   }

   doLogout() {
    if (isAuthenticated()) {
      logout();
    }
   }

   render () {
     return (
       <div className="c-admin page">
        <header className="c-admin__header">
          <h1>Admin </h1>
          <a href="#" onClick={this.doLogout}>Logout</a>
        </header>
       </div>
     )
   }
 }
 
 export default Admin