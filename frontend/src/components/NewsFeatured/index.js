import React, { Component } from "react";
import { observer } from "mobx-react";
import Slider from "react-slick";

@observer
class NewsFeatured extends Component {

  render() {
    const slickSettings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };

    return (
      <div className="c-news-featured">
        <Slider {...slickSettings}>
          {this.props.news.map((n) => 
            <div className="c-news-featured__box" key={n._id}>
              {n.title} <small>{n.humanDate}</small>
            </div>
          )}
        </Slider>
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