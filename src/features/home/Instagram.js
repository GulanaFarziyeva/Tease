import { InstagramIcon } from "../../assets/icons/icons";

const Instagram = () => {
  const data = [
    {
      id: 1,
      img: "https://scontent.cdninstagram.com/v/t51.2885-15/325907735_1893366304351466_2664133199949230941_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=F40IN8tAhUIAX8uoHgG&_nc_oc=AQltu8hhNKzLNNMxed9dX1lsUHnGp4-pde2ZM43XmKleyL_dHBJFCG06MIid5w7mPPQ&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AfAVpoIjfd62l5gXJkwXG4tbonXGqOoYpemXdP-XYl3x3A&oe=63CC54A4",
    },
    {
      id: 2,
      img: "https://scontent.cdninstagram.com/v/t51.2885-15/324956165_1806349926405932_7981783767783192651_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=0YYVYzLZGhUAX8AMXiM&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AfCtIPJD0TFyg3waaAAeQKfj7RsJoffU2L2uEK8PtYVf6w&oe=63CB35DC",
    },
    {
      id: 3,
      img: "https://scontent.cdninstagram.com/v/t51.2885-15/324875829_568270811503365_4176288039650260711_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=Li-Zn21ev5sAX-Cia0d&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AfAq6aLoo8w37iT6GWTGY4cSpKAnqzZ_jQgPg3Mb3Dk9Bg&oe=63CB3EAE",
    },
    {
      id: 4,
      img: "https://scontent.cdninstagram.com/v/t51.2885-15/324911120_686200996301254_1568272532298756253_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=hj2F8j-AiIQAX8ouxFB&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AfCvlQu8rh2I8NHUBzMJ7IEL444bNYnR-MMNrKMF5VgCeQ&oe=63CBB994",
    },
  ];
  return (
    <section className="my-10 px-10">
      <div className="flex gap-5">
        <div className="bg-gray flex flex-col items-center justify-center gap-5 py-5 basis-1/4 px-8 text-center cursor-pointer">
          <p className="text-xs">
            Join our virtual CommuniTEA on Instagram for daily tea trends, tips,
            and inspiration.
          </p>
          <InstagramIcon />
          <p className="uppercase text-[10px] tracking-wider text-medium">
            @Artofteala
          </p>
        </div>
        <div className="flex gap-5">
          {data.map((item) => (
            <div
              key={item.id}
              className="cart h-[270px] basis-1/4 relative cursor-pointer"
            >
              <img src={item.img} alt="img" className="h-[100%] w-[100%]" />
              <div className="overlay hidden absolute top-0 left-0 w-[100%] h-[100%] bg-black opacity-[0.5] transition-all duration-300 ease-in-out justify-center items-center">
                <img
                  src="https://instafeed.nfcube.com/assets/img/instagram-icon.svg"
                  alt="img"
                  className="w-5"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Instagram;
