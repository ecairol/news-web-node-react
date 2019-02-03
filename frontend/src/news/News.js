import React, { Component } from 'react'
 
 class News extends Component {
  state = {
     news: [],
     error: "",
     isLoading: false
   }

  componentDidMount() {
    this.fetchNews();
  }

  fetchNews() {
    this.setState({ isLoading: true });

    fetch('http://localhost:3001/v1/news')
      .then((res) => res.json())
      .then(news => {this.setState({ isLoading: false, news });console.log(">",news)})
      .catch((error) => this.setState({ error: error.message }));
  }

   render () {
    let { news, isLoading, error } = this.state;
    console.log(news);
     return (
       <div className="component-todos">
        <h1>News</h1>
        {news.map((n) => 
          <p>
            {n.title}
          </p>
        )}
       </div>
     )
   }
 }
 
 export default News