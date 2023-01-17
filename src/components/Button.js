const Button = ({ props }) => {
  return (
    <button className="border border-gold px-8 mx-auto md:mx-0  py-2 rounded uppercase text-xs tracking-wider hover:bg-white hover:text-gold">
      {props}
    </button>
  );
};

export default Button;
