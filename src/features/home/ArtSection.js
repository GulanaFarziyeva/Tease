import Button from "../../components/Button";

const ArtSection = () => {
  const data = [
    {
      id: 1,
      img: "https://cdn.shopify.com/s/files/1/0311/4398/5197/files/organically_grown_icon_small.png?v=1614756072",
      title: "ORGANICALLY GROWN",
    },
    {
      id: 2,
      img: "https://cdn.shopify.com/s/files/1/0311/4398/5197/files/direct_import_icon_small.png?v=1614756072",
      title: "FRESH INVENTORY",
    },
    {
      id: 3,
      img: "https://cdn.shopify.com/s/files/1/0311/4398/5197/files/hand_blended_icon_small.png?v=1614756072",
      title: "HAND BLENDED",
    },
  ];
  return (
    <section className="md:my-16 flex flex-col gap-10 bg-gray relative">
      <div className="absolute top-[-40px] lg:top-[-50px] left-[80%] hidden md:flex">
        <img
          src="https://cdn.shopify.com/s/files/1/0311/4398/5197/files/front-teacup_300x.png?v=1614756072"
          alt="img"
        />
      </div>
      <div className="flex flex-col w-[80%]  md:w-[60%] mx-auto items-center justify-center gap-14 my-12">
        <h4 className="text-head text-2xl  md:w-[80%] lg:w-[50%] text-center">
          Each tea has a beautiful display and a unique story of its own
        </h4>

        <div className="flex justify-between items-start gap-10 lg:gap-20">
          {data.map((item) => (
            <div key={item.id}>
              <div>
                <img
                  src={item.img}
                  alt={item.title}
                  className="h-[80px] mx-auto"
                />
              </div>
              <p className="mt-5 text-xs uppercase text-center">{item.title}</p>
            </div>
          ))}
        </div>

        <Button props="Discover the art of tea experience" />
      </div>
      <div className="absolute bottom-[-70px] left-0 lg:left-[30px] md:bottom-[-70px] hidden md:flex">
        <img
          src="https://cdn.shopify.com/s/files/1/0311/4398/5197/files/teabag-transparent_200x.png?v=1614756088"
          alt="img"
        />
      </div>
    </section>
  );
};

export default ArtSection;
