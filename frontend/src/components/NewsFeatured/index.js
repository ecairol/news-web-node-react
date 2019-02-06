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
          {this.props.news.map((n) => {
            const imgDiv = {
              backgroundImage: `url(${n.image})`
            }
            return (<div className="c-news-featured__box" key={n._id}>
              <div className="c-news-featured__image" style={imgDiv}></div>
              <div className="c-news-featured__title">
                <h3>{n.title}</h3>
                <small>{n.humanDate}. {n.description}</small>
              </div>
            </div>)
          })}
        </Slider>
      </div>
    );
  }
}

export default NewsFeatured;