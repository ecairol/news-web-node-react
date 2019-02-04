import React, { Component } from 'react'
import axios from 'axios';
import {API_URL} from '../constants.js';

class News extends Component {
  state = {
     form: null,
     error: "",
     isLoading: false
   }

   render () {
     return (
       <div className="component-login">
        <h1>Login Screen</h1>
       </div>
     )
   }
 }
 
 export default News