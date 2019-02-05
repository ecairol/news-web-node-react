import { extendObservable, computed } from 'mobx';
import moment from 'moment';

export default class News {
  constructor(data) {
    const { _id, title, description, date, image } = data;

    extendObservable(this, {
      _id,
      title,
      description,
      date,
      image
    })
  }

  @computed get humanDate() {
    console.log("!!!");
    return moment(this.date).format("MMM Do YY");
  }
}