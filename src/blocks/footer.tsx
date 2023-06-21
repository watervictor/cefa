import { FaWpressr } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-black text-white flex flex-col justify-center items-center pt-[150px]">
      <div className="flex w-[85%] items-start flex-wrap gap-[50px] sm:justify-between border-b-[1px] mb-10 border-[#03172b] pb-[40px]">
        <div className="flex w-full flex-col gap-7 sm:w-[250px]">
          <div className="text-[55px] text-blue-600 flex items-center gap-4">
            <FaWpressr />
            <div className="text-3xl">cefa</div>
          </div>
          <div>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima
            nam.
          </div>
          <div className="flex gap-5">
            <div className="w-8 h-8 rounded-[50%] text-white flex items-center justify-center bg-blue-500">
              o
            </div>
            <div className="w-8 h-8 rounded-[50%] text-white flex items-center justify-center bg-blue-500">
              o
            </div>
            <div className="w-8 h-8 rounded-[50%] text-white flex items-center justify-center bg-blue-500">
              o
            </div>
            <div className="w-8 h-8 rounded-[50%] text-white flex items-center justify-center bg-blue-500">
              o
            </div>
            <div className="w-8 h-8 rounded-[50%] text-white flex items-center justify-center bg-blue-500">
              o
            </div>
          </div>
        </div>
        <div className="flex w-full flex-col gap-5 text-white sm:w-[150px]">
          <div className="text-xl font-semibold">Something Title</div>
          <div className="flex w-full flex-col gap-5">
            <div className="cursor-pointer text-[#5d5d5d] transition-[all 350ms] hover:text-[#21476d] hover:underline">
              something
            </div>
            <div className="cursor-pointer text-[#5d5d5d] transition-[all 350ms] hover:text-[#21476d] hover:underline">
              something
            </div>
            <div className="cursor-pointer text-[#5d5d5d] transition-[all 350ms] hover:text-[#21476d] hover:underline">
              something
            </div>
            <div className="cursor-pointer text-[#5d5d5d] transition-[all 350ms] hover:text-[#21476d] hover:underline">
              something
            </div>
          </div>
        </div>
        <div className="flex w-full flex-col gap-5 text-white sm:w-[150px]">
          <div className="text-xl font-semibold">Something Title</div>
          <div className="flex w-full flex-col gap-5">
            <div className="cursor-pointer text-[#5d5d5d] transition-[all 350ms] hover:text-[#21476d] hover:underline">
              something
            </div>
            <div className="cursor-pointer text-[#5d5d5d] transition-[all 350ms] hover:text-[#21476d] hover:underline">
              something
            </div>
            <div className="cursor-pointer text-[#5d5d5d] transition-[all 350ms] hover:text-[#21476d] hover:underline">
              something
            </div>
            <div className="cursor-pointer text-[#5d5d5d] transition-[all 350ms] hover:text-[#21476d] hover:underline">
              something
            </div>
          </div>
        </div>
        <div className="flex w-full flex-col gap-5 text-white sm:w-[150px]">
          <div className="text-xl font-semibold">Something Title</div>
          <div className="flex w-full flex-col gap-5">
            <div className="cursor-pointer text-[#5d5d5d] transition-[all 350ms] hover:text-[#21476d] hover:underline">
              something
            </div>
            <div className="cursor-pointer text-[#5d5d5d] transition-[all 350ms] hover:text-[#21476d] hover:underline">
              something
            </div>
            <div className="cursor-pointer text-[#5d5d5d] transition-[all 350ms] hover:text-[#21476d] hover:underline">
              something
            </div>
            <div className="cursor-pointer text-[#5d5d5d] transition-[all 350ms] hover:text-[#21476d] hover:underline">
              something
            </div>
          </div>
        </div>
      </div>
      <div className="w-[85%] pb-6 flex flex-wrap gap-3 justify-between text-[#848484]">
        <div className="">somethings are</div>
        <div className="flex flex-wrap gap-5">
          <div>loremn</div>
          <div>Lorem ipsum.</div>
          <div>Loreipsum.</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
