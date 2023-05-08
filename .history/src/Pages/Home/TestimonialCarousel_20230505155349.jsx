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
      className: "center",
      // centerMode: true,
      infinite: true,
      centerPadding: "",
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: true,
      // fade: true,
      speed: 2000,
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
          <Testimonials paragraph="I meant to email you a long time ago, but kept putting it off until the work was published. Anyway, I used Random.org data initially for my final year project in 2003/2004. It was research on sorting algorithms in the presence of caches and branch predictors. Back then the data was available for download in 10MB blocks, and there were 16 of them. So I uses all of them, 'cat'ed together, as the data to be sorted." />
          <Testimonials paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dignissim orci in finibus posuere. Quisque ut mollis nibh. Praesent eget lobortis mi, sed vulputate justo. Aliquam vel lobortis lectus, a scelerisque risus. " />
        </Slider>
      </div>
    );
  }
}
