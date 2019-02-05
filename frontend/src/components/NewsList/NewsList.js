import React, { Component } from "react";
import { observable, action } from "mobx";
import { observer } from "mobx-react";

@observer
class NewsList extends Component {

  render() {
    return (
      <div className="c-news-list">
        {this.props.news.map((n) => 
          <div className="c-news-list__box" key={n._id}>
            <h3>{n.title}</h3>
            <small>{n.humanDate}</small>
            <p>{n.description}</p>
          </div>
        )}
      </div>
    );
  }
}

export default NewsList;