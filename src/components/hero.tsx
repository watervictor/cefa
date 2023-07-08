import { TbNorthStar } from "react-icons/tb";
import { FaHeartbeat } from "react-icons/fa";
import { MdOutlineDirections } from "react-icons/md";
import hand from "../assets/hand.png";
import { Text } from "../static";

const Hero = () => {
  return (
    <div className="w-full bg-black text-white flex items-center justify-center">
      <div className="w-[85%] md:justify-between 2xl:justify-between flex flex-wrap">
        <div className="w-full pt-[150px] flex-col md:w-[fit-content] mb-8">
          <div className="text-[12px] flex items-center gap-3">
            <div className="mb-1 flex items-center gap-2">
              <TbNorthStar />
              <div className="mb-3 text-[#080808]">_</div>
            </div>
            <div className="text-[#888888]">MARKET CRYPTO</div>
          </div>
          <div className="mt-10 text-6xl">
            The
            <span className="text-[#888888]"> most </span>
            <br />
            secure crypo
            <br />
            <span className="text-[#888888]"> trading </span>
            center
          </div>
          <div className="mt-7 text-[#888888]">
            Buy, trade and hold over 400
            <br />
            cryptocurrencies in crypt
          </div>
          <div className="mt-7 flex gap-4">
            <button className="rounded-3xl h-[40px] w-40 text-xs text-black bg-white">
              Start transactions
            </button>
            <div className="flex justify-center items-center rounded-[50%] text-white bg-blue-600 w-[40px] h-[40px]">
              <FaHeartbeat />
            </div>
          </div>
          <div className="mt-12 flex items-center gap-14">
            <div className="text-[#888888] text-sm">Supported</div>
            <div className="flex gap-4">
              <div className="flex justify-center items-center rounded-[50%] text-xs border-[1px] border-[#888888] w-[25px] h-[25px]">
                <MdOutlineDirections />
              </div>
              <div className="flex justify-center items-center rounded-[50%] text-xs border-[1px] border-[#888888] w-[25px] h-[25px]">
                <MdOutlineDirections />
              </div>
              <div className="flex justify-center items-center rounded-[50%] text-xs border-[1px] border-[#888888] w-[25px] h-[25px]">
                <MdOutlineDirections />
              </div>
            </div>
          </div>
        </div>
        <div className="hidden xl:ml-16 xl:flex w-[350px] justify-center items-end">
          <img className="h-full object-cover" src={hand} />
        </div>
        <div className="max-md:flex-1 pt-[150px] md:items-end md:mt-16 lg:mt-16 flex justify-between flex-wrap lg:items-end w-[300px]">
          <Text title="$76 Bilion" par="24h trading volume duxica exchange" />
          <Text title="600+" par="Cryptocurrencies listed" />
          <Text title="80 million" par="Registered users who trust cefa" />
          <Text title="<0.10%" par="Lowest transaction fees" />
        </div>
      </div>
    </div>
  );
};
// nnnnnnn
export default Hero;
