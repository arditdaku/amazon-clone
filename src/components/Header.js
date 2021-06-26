import Image from "next/image";
import {
  MenuIcon,
  SearchIcon,
  ShoppingCartIcon,
} from "@heroicons/react/outline";

import { signIn, signOut, useSession } from "next-auth/client";

function Header() {
  return (
    <header>
      {/* top */}
      <div className="flex items-center bg-amazon_blue p-1 flex-grow py-2">
        <div className="mt-2 flex items-center flex-grow sm:flex-grow-0">
          <Image
            src="https://links.papareact.com/f90"
            width={150}
            height={40}
            objectFit="contain"
            className="cursor-pointer"
          />
        </div>

        {/* search */}
        <div className="hidden sm:flex items-center h-10 rounded-md flex-grow bg-yellow-400 hover:bg-yellow-500 cursor-pointer">
          <input
            type="text"
            className="p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none px-4"
          />
          <SearchIcon className="h-12 p-4" />
        </div>
        {/* right */}
        <div className="text-white flex items-center text-xs space-x-6 mx-6 whitespace-nowrap">
          <div onClick={signIn} className="link">
            <p>Hello Ardit Daku</p>
            <p className="link-text">Account & Lists</p>
          </div>
          <div className="link">
            <p>Returns</p>
            <p className="link-text">& Orders</p>
          </div>
          <div className="link relative flex items-center ">
            <span className="chart-items">4</span>
            <ShoppingCartIcon className="h-10" />
            <p className="hidden md:inline link-text mt-2">Basket</p>
          </div>
        </div>
      </div>
      {/* bootom */}
      <div className="flex items-center space-x-3 p-2 pl-6 bg-amazon_blue-light text-white text-sm">
        <p className="link flex items-center">
          <MenuIcon className="h-6 mr-1" />
          All
        </p>
        <p className="link">Prime Video</p>
        <p className="link">Prime Video</p>
        <p className="link">Amazon Busines</p>
        <p className="link">Today's Deals</p>
        <p className="hidden-menu-item">Electronics</p>
        <p className="hidden-menu-item">Food & Grocery</p>
        <p className="hidden-menu-item">Prime</p>
        <p className="hidden-menu-item">Buy Again</p>
        <p className="hidden-menu-item">Shopper Toolkit</p>
        <p className="hidden-menu-item">Health & Personal Care</p>
      </div>
    </header>
  );
}

export default Header;
