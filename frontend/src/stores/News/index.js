import { observable, action, computed } from 'mobx';
import News from './model';
import axios from 'axios';
import {API_URL} from '../../constants.js';

export default class NewsStore {
  @observable
  state = {
    list: [],
    selected: {
      _id: "",
      title: "",
      description: "",
      image: "",
      date: "",
      featured: false
    },
    error: false,
    isLoading: false,
  }

  // Actions (functions that modify the state)
  @action
  add(data) {
    const created = new News(data);
    this.state.list.push(created);
    return created;
  }

  @action
  replaceItemInList(data) {
    let listItem = this.state.list.find(item => item._id === data._id);
    listItem = new News(data);
    // const created = new News(data);
    // this.state.list.push(created);
    return listItem;
  }

  @action
  settleList(data) {
    // filter state.list to leave only items not
    // present in the new data to be merged
    const filtered = this.state.list.filter(stateItem => 
      !data.find(
        newItem => newItem._id === stateItem._id
      )
    ).concat(data);
      
    this.state.list = [];
    filtered.map(item => {
      return this.add(item);
    });
  }

  @action
  setLoading(value) {
    this.state.busy = value;
  }

  @action
  setError(value) {
    this.state.error = value;
  }

  @action
  setSelected(data) {
    const base = this.state.selected;
    this.state.selected = new News({...base, ...data});
  }

  @action.bound
  onFieldChange(field, value) {
    this.state.selected[field] = value;
  };
  
  @action.bound
  async onUpdateForm() {
    const { _id, title, description, date, image } = this.state.selected;
    try {
      const response = await axios.put(
        `${API_URL}/news/${_id}`, 
        { title, description, date, image });
      
        return this.replaceItemInList(_id, response.data);
    } catch(error) {
      this.setError('An error occurred. The news could not be updated');
    };
  }


  // Computed Properties
  @computed
  get newsLength() {
    return this.state.list.length;
  }

  @computed
  get featured() {
    // TODO: Filter state.list to actually filter by news.isFeatured
    return this.state.list.filter((item) => {
      return item.featured;
    });
  }

  @computed
  get nonFeatured() {
    // TODO: Filter state.list to actually filter by news.isFeatured
    return this.state.list.filter((item) => {
      return !item.featured;
    });
  }

  // Functions that do not alter the state.
  async findAll() {
    this.setLoading(true);
    this.setError(false);

    try {
      const response = await axios.get(`${API_URL}/news`);
      this.settleList(response.data);
    } catch(error) {
      this.setLoading(false);
      this.setError("The news data could not be retrieved.");
    } finally {
      this.setLoading(false);
    }
  }

  async load(id) {
    this.setLoading(true);
    this.setError(false);

    try {
      const response = await axios.get(`${API_URL}/news/${id}`);
      this.setSelected(response.data);
    } catch(error) {
      this.setError("The news data could not be retrieved.");
    } finally {
        this.setLoading(false);
    };
  }
}