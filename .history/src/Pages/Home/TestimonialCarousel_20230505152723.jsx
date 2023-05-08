import React, { Component } from "react";
import Slider from "react-slick";
import Testimonials from "../../components/Testimonials/Testimonials";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "green" }}
      onClick={onClick}
    />
  );
}
export default class TestimonialCarousel extends Component {
  render() {
    const settings = {
      // className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "",
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: true,
      // fade: true,
      speed: 500,
      autoplay: true,
      autoplaySpeed: 2000,
      pauseOnHover: true,

      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
            centerMode: false,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1,
            centerMode: false,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode: false,
          },
        },
      ],
    };
    return (
      <div className="col-md-12 dashboard-carousel-container">
        <Slider {...settings}>
          <Testimonials paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dignissim orci in finibus posuere. Quisque ut mollis nibh. Praesent eget lobortis mi, sed vulputate justo. Aliquam vel lobortis lectus, a scelerisque risus. " />
          <Testimonials paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dignissim orci in finibus posuere. Quisque ut mollis nibh. Praesent eget lobortis mi, sed vulputate justo. Aliquam vel lobortis lectus, a scelerisque risus. " />
        </Slider>
      </div>
    );
  }
}
