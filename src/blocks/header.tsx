import { FaWpressr } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdOutlineCancel } from "react-icons/md";
import { CiSearch, CiBellOn } from "react-icons/ci";
import { RiArrowDownSLine } from "react-icons/ri";

import { useState } from "react";

const Header = () => {
  const [is, setIs] = useState<boolean>(true);
  const toggle = () => {
    setIs(!is);
  };

  return (
    <div className="fixed z-[5] top-0 pt-14 pb-6 text-white w-full h-10 flex justify-center items-center bg-black">
      <div className="w-[85%] h-full flex justify-between items-center text-xs">
        <div className="flex items-center gap-7 text-[#f7f7f7]">
          <div className="flex items-center gap-2">
            <div className="text-3xl text-blue-600">
              <FaWpressr />
            </div>
            <div className="text-base font-bold">cefa</div>
          </div>
          <div className="hidden items-center md:flex gap-2 cursor-pointer">
            <div>Buy Crypto</div>
            <div className="rounded-xl px-1 text-white bg-blue-600 text-[7px]">
              NGN
            </div>
            <div className="text-xs">
              <RiArrowDownSLine />
            </div>
          </div>
          <div className="hidden md:flex cursor-pointer">Markets</div>
        </div>
        <div className="flex items-center gap-7">
          <div className="hidden md:block text-2xl">
            <CiSearch />
          </div>
          <div className="text-2xl relative">
            <div className="absolute right-[-9px] top-[-11px] z-[1] flex justify-center items-center rounded-[50%] h-[17px] w-[17px] bg-red-600 text-[10px] text-white">
              27
            </div>
            <CiBellOn />
          </div>
          <div onClick={toggle} className="text-xl md:hidden">
            {is ? <RxHamburgerMenu /> : <MdOutlineCancel />}
          </div>
          <div className="hidden md:flex">
            <button className="w-[100px] h-[34px] rounded-xl text-xs bg-blue-600">
              Get started
            </button>
          </div>
        </div>
      </div>
      <div
        className={
          is
            ? "hidden"
            : "md:hidden fixed right-0 top-20 bg-[#11111199] rounded-tl rounded-bl flex-col text-[#8a8a8a] text-xs"
        }>
        <div className="flex items-center pt-6 gap-2 cursor-pointer rounded-tl px-6 py-4 hover:bg-[#111111a9]">
          <div className="text-white text-lg">
            <CiSearch />
          </div>
          <div>Search</div>
        </div>
        <div className="flex gap-3 cursor-pointer px-6 py-5 hover:bg-[#111111a9]">
          <div>Buy Promise</div>
          <div className="rounded-xl px-1 text-white bg-blue-600 text-[7px]">
            NGN
          </div>
          <div className="mt-1 text-xs">
            <RiArrowDownSLine />
          </div>
        </div>
        <div className="cursor-pointer pb-6 px-6 py-4 hover:bg-[#111111a9] rounded-bl">
          Markets
        </div>
      </div>
    </div>
  );
};
export default Header;
