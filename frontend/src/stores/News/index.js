import { observable, action, computed } from 'mobx';
import News from './model';

export default class NewsStore {
  @observable
  state = {
    list: [],
    selected: null,
    error: false,
    isLoading: false,
  }

  @action
  add(data) {
    const created = new News(data);
    this.state.list.push(created);
    return created;
  }

  @action
  setLoading(value) {
    this.state.busy = value;
  }

  @action
  setError(value) {
    this.state.error = value;
  }

  @computed
  get newsLength() {
    return this.state.list.length;
  }

  // Functions that do not alter the state.
  findAll() {
    this.setLoading(true);
    this.setError(false);

    return axios.get(`${API_URL}/news`)
      .then((response) => {
        this.setLoading(false);
        response.data.map(news => {
          return this.add(news);
       })
      })
      .catch((error) => {
        this.setLoading(false);
        this.setError(error.message);
      });
  }
}