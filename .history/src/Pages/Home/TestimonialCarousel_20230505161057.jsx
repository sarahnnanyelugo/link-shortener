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
      <div
        className="col-md-12 dashboard-carousel-container"
        style={{ margin: "20px" }}
      >
        <Slider {...settings}>
          <Testimonials
            paragraph="I meant to email you a long time ago, but kept putting it off until the work was published. Anyway, I used Random.org data initially for my final year project in 2003/2004. It was research on sorting algorithms in the presence of caches and branch predictors. Back then the data was available for download in 10MB blocks, and there were 16 of them. So I uses all of them, 'cat'ed together, as the data to be sorted."
            testifier="Paul Biggar, Trinity College Dublin"
          />
          <Testimonials
            paragraph="Came across your web site some time ago when I was dithering over what CDs to put in my 12-CD cassette in my car. In those days I had in excess of 500 CDs, and could never make up my mind which ones to listen to. I was tending to put just my favourites in week after week. I googled ‘Random Number,’ and your site was the result. I have now well over 700 CDs and religously put in the CDs that the number generator commands."
            testifier="Malcolm Lashbrook"
          />{" "}
          <Testimonials
            paragraph="When writing short children's stories Simplified is surprisingly coherent when it comes to sentence structure and stories have actual flow. I would not know they weren't written by a real person.."
            testifier="Jonathan Polese"
          />{" "}
          <Testimonials
            paragraph="Simplified is one of the many AI tools I have tried and is my favorite so far. I appreciate the rewrite tool (it is the one I use the most). Sometimes I can't get my thoughts together, but this tool perfectly organizes and cleans up those thoughts for me. I can rely on it to provide me with a professional and clean rewrite copy which I have used to update my resume. This is just one of the few things it does other than being able to continue your writing or (pun intended) simplify it."
            testifier="Morghan Countryman"
          />
        </Slider>
      </div>
    );
  }
}
