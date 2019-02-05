import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import LoginForm from '../LoginForm/component';
import { withRouter } from 'react-router-dom';
import { isAuthenticated } from '../../services/authentication';

@inject('store')

@observer
class Login extends Component {

    componentWillMount() {
      if (isAuthenticated()) {
        this.props.history.push('/admin');
      }
    }
  
   render () {
     return (
       <div className="c-login">
        <h1>Login</h1>
        <LoginForm />
       </div>
     )
   }
 }
 
 export default withRouter(Login);