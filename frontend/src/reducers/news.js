/* frontend/src/reducers/news.js */
import {
  ADD_NEWS,
  ADD_NEWS_SUCCESS,
  NEWS_FAILURE,
  TOGGLE_NEWS,
  DELETE_NEWS,
  LOADED_NEWS,
  FETCH_NEWS
} from '../actions/news';
  
export const NEWS_DEFAULT_STATE = {
  loading: false,
  saving: false,
  error: '',
  items: []
}
  
export default function news (state = NEWS_DEFAULT_STATE, action) {
  switch (action.type) {
    case LOADED_NEWS:
      return {...state, items: action.news, loading: false}
    
    case FETCH_NEWS:
      return {...state, loading: true}
    
    case ADD_NEWS:
      return {...state, saving: true}
  
    case ADD_NEWS_SUCCESS:
      return {
        ...state,
        items: state.items.concat(action.news),
        saving: false
      }
  
    case NEWS_FAILURE:
      return {...state, loading: false, saving: false, error: action.error}
  
    case TOGGLE_NEWS:
      return {
        ...state,
        items: state.items.map((news) =>
          news._id === action.id ? {...news, done: !news.done} : news
        )
      }
  
    case DELETE_NEWS:
      return {
        ...state,
        items: state.items.reduce((items, news) =>
          news._id !== action.id ? items.concat(news) : items, []
        )
      }
  
    default:
      return state
  }
}