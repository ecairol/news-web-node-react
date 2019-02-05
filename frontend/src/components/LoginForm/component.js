import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { withRouter } from 'react-router-dom';
import { isAuthenticated } from '../../services/authentication';

@inject('store')

@observer
class LoginForm extends Component {

  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  async onSubmit(e) {
    e.preventDefault();
    const loginStore = this.props.store.login; 
    loginStore.setError('');
    const result = await loginStore.onSubmitLogin();
    if (isAuthenticated()) {
      this.props.history.push('/admin');
    }
  }

  render () {
    //const { form } = this.props;
    const loginStore = this.props.store.login;
    const { username, password } = loginStore.state.form;
    const { error } = loginStore.state.meta;
    
    return (
      <form onSubmit={this.onSubmit}>
        <div className="form-control">
          <input type="text" name="username" value={username} onChange={(e) => loginStore.onFieldChange(e.target.name, e.target.value)} />
        </div>

        <div className="form-control">
          <input type="password" name="password" value={password} onChange={(e) => loginStore.onFieldChange(e.target.name, e.target.value)} />
        </div>

        <div className="form-control">
          <button type="submit">Login</button>
        </div>

        <p className="error">{error}</p>
      </form>
    )
  }
}

export default withRouter(LoginForm);