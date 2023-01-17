const CartItem = ({ item }) => {
  return (
    <div
      key={item.id}
      className="cart-item flex flex-col gap-5 items-center cursor-pointer transition ease-in-out text-dgray  hover:text-gold"
    >
      <img
        className="hover:grayscale-[70%] object-cover"
        src={item.img}
        alt={item.title}
      />
      <p className="text-base sm:text-[10px] uppercase tracking-widest">
        {item.title}
      </p>
    </div>
  );
};

export default CartItem;
