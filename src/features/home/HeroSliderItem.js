const HeroSliderItem = ({ item }) => {
  return (
    <div
      className="flex justify-center md:justify-end md:items-center 
                            md:pr-[10%] relative w-screen h-[25rem]"
    >
      <img
        src={item.img}
        alt={item.title}
        className=" absolute top-0 left-0 z-20 opacity-80"
      />
      <div
        className="z-40 flex flex-col text-center 
                              md:text-start gap-8 pt-12 px-10 md:px-0 md:w-[400px]"
      >
        <h2 className="text-3xl font-light sm:text-4xl">{item.title}</h2>
        <p
          className="text-xs"
          style={{ textShadow: " 0 2px 3px rgba(0, 0, 0, 0.3)" }}
        >
          {item.text}
        </p>
        <button
          className="border mx-auto md:mx-0 border-gold w-[180px] 
                                   py-2 rounded uppercase text-xs tracking-wider 
                                   hover:bg-white"
        >
          {item.link}
        </button>
      </div>
    </div>
  );
};

export default HeroSliderItem;
