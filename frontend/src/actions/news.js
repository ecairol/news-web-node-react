export const ADD_NEWS = 'ADD_NEWS';
 export const ADD_NEWS_SUCCESS = 'ADD_NEWS_SUCCESS';
 export const NEWS_FAILURE = 'NEWS_FAILURE';
 export const TOGGLE_NEWS = 'TOGGLE_NEWS';
 export const DELETE_NEWS = 'DELETE_NEWS';
 export const LOADED_NEWS = 'LOADED_NEWS';
 export const FETCH_NEWS = 'FETCH_NEWS';
 
 // action creators
 export function addNews(news) {
 return { type: ADD_NEWS, news }
 }
 
 export function addNewsSuccess(news) {
 return { type: ADD_NEWS_SUCCESS, news }
 }
 
 export function newssFailure(error) {
 return { type: NEWS_FAILURE, error }
 }
 
 export function toggleNews(id) {
 return { type: TOGGLE_NEWS, id }
 }
 
 export function deleteNews(id) {
 return { type: DELETE_NEWS, id }
 }
 
 export function loadedNewss(newss) {
 return { type: LOADED_NEWS, newss }
 }
 
 export function fetchNewss() {
 return { type: FETCH_NEWS }
 }