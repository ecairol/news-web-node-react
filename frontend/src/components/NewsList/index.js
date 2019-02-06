import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { observer } from "mobx-react";

@observer
class NewsList extends Component {

  render() {
    return (
      <div className="c-news-list">
        {this.props.news.map((n) => 
          <div className="c-news-list__box" key={n._id}>
            <small>{n.humanDate}</small>
            <h3>{n.title}</h3>
            <p>{n.description}</p>
            {this.props.editable &&
              <Link className="btn btn--small" to={`/admin/news/${n._id}`}>Edit</Link>
            }
          </div>
        )}
      </div>
    );
  }
}

export default NewsList;