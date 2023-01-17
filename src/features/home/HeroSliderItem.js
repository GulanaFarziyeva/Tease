import Button from "../../components/Button";

const HeroSliderItem = ({ item }) => {
  return (
    <div className="flex justify-center md:justify-end md:items-center md:pr-[10%] relative w-screen md:h-[25rem]">
      <img
        src={item.img}
        alt={item.title}
        className=" absolute top-0 left-0 z-20 opacity-80"
      />
      <div className="z-40 flex flex-col text-center md:text-start  gap-4 sm:gap-8 py-10 px-10 md:px-0 md:w-[400px]">
        <h2 className="text-3xl font-light sm:text-4xl">{item.title}</h2>
        <p
          className="text-xs"
        >
          {item.text}
        </p>
        <div className="w-[50%] mx-auto md:mx-0">
        <Button props={item.link} />
        </div>
      </div>
    </div>
  );
};

export default HeroSliderItem;
