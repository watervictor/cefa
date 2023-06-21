import { CiBitcoin } from "react-icons/ci";
import { FaEthereum } from "react-icons/fa";
import { AiOutlineDollar } from "react-icons/ai";

const Reasons = () => {
  return (
    <div className="w-full flex justify-center text-white bg-black">
      <div className="w-[85%] flex flex-wrap justify-between items-center">
        <div className="my-10 w-full md:w-[40%]">
          <div className="text-4xl">Why Choose Cefa ?</div>
          <div className="mt-7 text-[#888888]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
            necessitatibus voluptas labore sint perferendis illum aut reiciendis
            rerum? Consequatur quos ducimus voluptate ipsa accusantium, nulla
            rerum architecto quisquam iste minus.
          </div>
          <button className="mt-7 px-14 py-3 bg-blue-500 rounded-md">
            Get Started
          </button>
        </div>
        <div className="my-10 w-full md:w-[50%] flex md:justify-end">
          <div className="relative w-[fit-content]">
            <div className="ml-12 w-[320px] flex flex-col gap-4 bg-[#252525] rounded-sm p-4">
              <div className="w-8 h-8 rounded-[50%] bg-blue-500 text-[#252525] flex items-center justify-center text-2xl font-bold">
                <CiBitcoin />
              </div>
              <div className="text-[13px] text-[#888888]">
                Lorem ipsum dolor sit amet consectetur amet adipisicing elit.
                Voluptatum accusantium dolores.
              </div>
            </div>
            <div className="absolute left-0 top-[105px] z-[1] w-[320px] flex flex-col gap-4 bg-blue-500 rounded-sm p-4">
              <div className="w-8 h-8 rounded-[50%] bg-[#252525] text-blue-500 flex items-center justify-center text-xl font-bold">
                <FaEthereum />
              </div>
              <div className="text-[13px]">
                Lorem ipsum dolor sit amet consectetur amet adipisicing elit.
                Voluptatum accusantium dolores.
              </div>
            </div>
            <div className="ml-24 mt-[85px] z-[-1] w-[320px] flex flex-col gap-4 bg-[#252525] rounded-sm p-4">
              <div className="w-8 h-8 rounded-[50%] bg-blue-500 text-[#252525] flex items-center justify-center text-2xl font-bold">
                <AiOutlineDollar />
              </div>
              <div className="text-[13px] text-[#888888]">
                Lorem ipsum dolor sit amet consectetur amet adipisicing elit.
                Voluptatum accusantium dolores.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reasons;
