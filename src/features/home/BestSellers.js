import CartItem from "./CartItem";
import HeaderText from "../../components/HeaderText";

const BestSellers = () => {
  const bestSellersData = [
    {
      id: 1,
      img: "https://cdn.shopify.com/s/files/1/0311/4398/5197/files/AOT-Home-Card-Images-1000x800-1_540x.jpg?v=1643931370",
      title: "Shop sachets",
    },
    {
      id: 2,
      img: "https://cdn.shopify.com/s/files/1/0311/4398/5197/files/AOT-Home-Card-Images-1000x800-2_540x.jpg?v=1643931399",
      title: "Shop Matcha",
    },
    {
      id: 3,
      img: "https://cdn.shopify.com/s/files/1/0311/4398/5197/files/AOT-Home-Card-Images-1000x800-3_1_540x.jpg?v=1655140732",
      title: "Shop Gifts",
    },
  ];

  return (
    <section className="flex flex-col sm:mb-10 bg-mdgray py-12">
      <HeaderText props="Shop Best Sellers" />
      <div className="flex flex-col sm:flex-row mt-12 gap-10 sm:gap-5 px-10">
        {bestSellersData.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
};

export default BestSellers;
