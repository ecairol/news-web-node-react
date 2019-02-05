import React, { Component } from "react";
import { observable, action } from "mobx";
import { observer } from "mobx-react";

@observer
class NewsFeatured extends Component {

  render() {
    return (
      <div className="c-news-featured">
        {this.props.news.map((n) => 
          <div className="c-news-featured__box" key={n._id}>
            {n.title} <small>{n.humanDate}</small>
          </div>
        )}
      </div>
    );
  }

  // @action
  // handleFormSubmit = e => {
  //   this.props.store.addTodo(this.newTodoTitle);
  //   this.newTodoTitle = "";
  //   e.preventDefault();
  // };
}

export default NewsFeatured;