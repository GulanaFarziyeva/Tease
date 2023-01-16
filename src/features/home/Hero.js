import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import HeroSliderItem from "./HeroSliderItem";
import heroData from "./heroData";

const Hero = () => {
  const settings = {
    infinite: true,
    arrows: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <section className="mt-24">
      <Slider {...settings}>
        {heroData.map((item) => (
          <HeroSliderItem item={item} key={item.id} />
        ))}
      </Slider>
    </section>
  );
};

export default Hero;
