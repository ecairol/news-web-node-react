import { observable, action, computed } from 'mobx';
import News from './model';
import axios from 'axios';
import {API_URL} from '../../constants.js';

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
  settleList(data) {
    // filter state.list to leave only items not
    // present in the new data to be merged
    const filtered = this.state.list.filter(stateItem => 
      !data.find(
        newItem => newItem._id === stateItem._id
      )
    );
    
    // .replace() current state.list with two arrays: filtered and data
    this.state.list.replace(filtered.concat(data)); 
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

  @computed
  get featured() {
    // TODO: Filter state.list to actually filter by news.isFeatured
    return this.state.list.filter((item) => {
      return item.title[0] === "D";
    });
  }

  @computed
  get nonFeatured() {
    // TODO: Filter state.list to actually filter by news.isFeatured
    return this.state.list.filter((item) => {
      return item.title[0] !== "D";
    });
  }

  // Functions that do not alter the state.
  findAll() {
    this.setLoading(true);
    this.setError(false);

    return axios.get(`${API_URL}/news`)
      .then((response) => {
        this.settleList(response.data);
      })
      .catch((error) => {
        this.setLoading(false);
        this.setError(error.message);
      })
      .finally(() => {
        this.setLoading(false);
      });
  }
}