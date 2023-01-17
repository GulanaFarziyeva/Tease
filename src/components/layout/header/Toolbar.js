import { Close } from "../../../assets/icons/icons";
const Toolbar = () => {
  return (
    <div className="bg-gray flex items-center px-10 z-20">
      <div className="text-black w-full text-center text-[9px] uppercase tracking-widest font-semibold py-2">
        Between now and march 29, we're donating 5% off all
        <a href="#nolink" className="text-gold ml-1 underline ">
          matcha
        </a>{" "}
        sales to
        <a href="#nolink" className="text-gold ml-1 underline">
          gift all life marrow register
        </a>
      </div>
      <button className="ml-auto">
        <Close />
      </button>
    </div>
  );
};

export default Toolbar;
