import { observable, action } from 'mobx';
import axios from 'axios';
import { API_URL } from '../../constants.js';
import { storeToken } from '../../services/authentication';

export default class LoginStore {
  @observable
  state = {
    form: {
      username: '',
      password: ''
    },
    meta: {
      error: ''
    }
  }

  // Actions that alter the state
  @action
  setError(value) {
    this.state.meta.error = value;
  }

  @action
  onFieldChange(field, value) {
    this.state.form[field] = value;
  };

  // Functions that do not alter the state
  async onSubmitLogin() {
    try {
      const response = await axios.post(`${API_URL}/users/auth`, {
        "username": this.state.form.username,
        "password": this.state.form.password
      });
      
      storeToken(response.data);
    } catch(error) {
        this.setError('Incorrect username or password');
    };
  }
}