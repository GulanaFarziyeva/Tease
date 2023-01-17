import { useState } from "react";
import {
  HamburgerMenu,
  Search,
  Profile,
  ShoppingCard,
  Heart,
} from "../../../assets/icons/icons";

const Navbar = () => {
  const menu = [
    "shop",
    "gift sets",
    "beauty",
    "kits",
    "refills",
    "subscroptions",
    "benefits club",
    "about",
  ];

  const [isOpen, setIsOpen] = useState(false);

  const openMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="flex items-center bg-white fixed top-[43px] left-0 right-0 md:px-10 py-3 gap-10 px-5">
      <div className="md:hidden cursor-pointer" onClick={openMenu}>
        <HamburgerMenu />
      </div>
      <div>
        <img
          src="https://cdn.shopify.com/s/files/1/0311/4398/5197/files/AOT-Logo-One-Line_copy_medium.png?v=1614756072"
          alt="tease"
          className="w-[160px]  md:w-[180px]"
        />
      </div>
      <ul className="hidden md:flex flex-wrap">
        {menu.map((navLink, index) => (
          <li
            className="text-black text-xs uppercase font-light z-50 ml-5 tracking-wider hover:text-gold cursor-pointer mb-2"
            key={index}
          >
            {navLink}
          </li>
        ))}
      </ul>
      <ul className="flex ml-auto gap-3">
        <li className="hidden md:block cursor-pointer ">
          <Profile />
        </li>
        <li className="cursor-pointer">
          <Search />
        </li>
        <li className="cursor-pointer">
          <Heart />
        </li>
        <li className="cursor-pointer">
          <ShoppingCard />
        </li>
      </ul>
      {isOpen && (
        <ul className="ease-in md:hidden flex flex-col w-screen  mt-50 absolute top-[53px] sm:top-[72px] left-0">
          {menu.map((navLink, index) => (
            <li
              className="text-black text-sm uppercase z-50  tracking-wider cursor-pointer p-5 even:bg-mdgray odd:bg-gray"
              key={index}
            >
              {navLink}
            </li>
          ))}
        </ul>
      )}
    </header>
  );
};

export default Navbar;
