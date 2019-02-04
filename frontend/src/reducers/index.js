import { combineReducers } from 'redux';
import news, { NEWS_DEFAULT_STATE } from './news';

const flNewsApp = combineReducers({
  news
})

export const DEFAULT_STATE = {
  news: NEWS_DEFAULT_STATE
}

export default flNewsApp