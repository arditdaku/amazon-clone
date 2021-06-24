import Image from "next/image";
import {
  MenuIcon,
  SearchIcon,
  ShoppingCartIcon,
} from "@heroicons/react/outline";
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
          <div className="link">
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
      <div></div>
    </header>
  );
}

export default Header;
