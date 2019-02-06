import { extendObservable, computed } from 'mobx';
import moment from 'moment';

export default class News {
  constructor(data) {
    const { _id, title, description, date, image, featured } = data;

    extendObservable(this, {
      _id,
      title,
      description,
      date,
      image,
      featured
    })
  }

  @computed
  get humanDate() {
    return moment(this.date).fromNow();
  }
}