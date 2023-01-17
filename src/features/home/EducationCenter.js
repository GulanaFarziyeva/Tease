import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Button from "../../components/Button";
import HeaderText from "../../components/HeaderText";
import CartItem from "./CartItem";
import { ArrowLeft } from "../../assets/icons/icons";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
       background: 'rgba(0,0,0,.6)',
       width: '40px',
       height:'50px',
       display: 'flex',
       alignItems: 'center',
       justifyContent: 'center',
        marginTop: "-30px",
      }}
      onClick={onClick}
    >
      <ArrowLeft />
    </div>
  );
}

const EducationCenter = () => {
  const data = [
    {
      id: 1,
      img: "https://cdn.shopify.com/s/files/1/0311/4398/5197/files/crop_7_540x.png?v=1614772210",
      title: "How do i prepare my tea",
    },
    {
      id: 2,
      img: "https://cdn.shopify.com/s/files/1/0311/4398/5197/files/crop_8_540x.jpg?v=1614772210",
      title: "Recommended steep times",
    },
    {
      id: 3,
      img: "https://cdn.shopify.com/s/files/1/0311/4398/5197/files/20190220_ArtofTea__AudreyMa-0357_1_540x.jpg?v=1614772206",
      title: "what is tea",
    },
    {
      id: 4,
      img: "https://cdn.shopify.com/s/files/1/0311/4398/5197/files/mocktail_blog_540x.jpg?v=1614777986",
      title: "Iced tea mocktail recipe",
    },
  ];

  const settings = {
    infinite: true,
    arrows: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 2,
    nextArrow: <SampleNextArrow />,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };

  return (
    <section className="flex flex-col lg:flex-row gap-20 lg:gap-10 justify-between items-center py-10 lg:pl-10 px-10">
      <div className="w-[90%] lg:w-[100%] flex flex-col items-center">
        <HeaderText props="Education Center" />
        <p className="text-sm   text-center my-8">
          With brand new tea knowledge and discoveries unveiling themselves each
          day, the journey into the world of tea is an exciting and limitless
          adventure with room for us all to explore, connect and interact.
        </p>
        <Button props="Read More " />
      </div>
      <div className="lg:basis-1/3 lg:w-4/6 w-[100%]">
        <Slider {...settings} className="px-10">
          {data.map((item) => (
            <CartItem item={item} key={item.id} />
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default EducationCenter;
