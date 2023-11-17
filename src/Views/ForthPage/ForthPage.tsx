import macbook1 from "../../assets/images/macbook1.png";
import macbook2 from "../../assets/images/Macbook Pro 2022 - Group-1.png";
import macbook3 from "../../assets/images/Macbook Pro 2022 - Group.png";
import macbook4 from "../../assets/images/Macbook Pro 2022 - Group@2x.png";
import macbook5 from "../../assets/images/macbook5.png";

import { useState } from "react";

export default function ForthPage() {
  const [img, setImg] = useState(1);

  return (
    <div className="flex justify-center items-center  text-black  h-screen w-screen bg-white">
      <div className="2xl:w-[1536px] s4:w-[375]   h-[800px] 2xl:px-14 rounded-3xl	 shadow bg-gray-100 mx-auto p-4  text-center ">
        <div className=" hidden 2xl:block mx-auto max-w-2xl 2xl:p-4 2xl:mt-6  text-center">
          <h1 className=" 2xl:text-5xl text-2xl font-bold  2xl:pt-2  2xl:pb-4 ">
            HOW INVESTING AMMO WORKS
          </h1>
        </div>
        <div className=" block 2xl:hidden mx-auto max-w-2xl 2xl:p-4 2xl:mt-6  text-center">
          <h1 className=" text-2xl absolute top-24 font-bold left-[10px] py-8 px-4">
            HOW INVESTING AMMO WORKS
          </h1>
        </div>
        <div className=" flex justify-between items-center ">
          <section className="w-full flex justify-start ">
            <div className="w-ful flex gap-[55px] items-start">
              <ul>
                <li
                  onClick={() => setImg(1)}
                  className=" hidden 2xl:block w-[480px] rounded-[10px] border-solid border-[1px] border-[gray] flex flex-col flex-start justify-start items-start text-start px-[25px] pt-[20px] pb-[14px] gap-[20px] relative"
                >
                  <h3 className="text-[#3988F6] font-bold text-[18px] leading-[23.4px] tracking-[0.9px]">
                    Hadge Investment
                  </h3>
                  <p>
                    It's as simple as E*Trade or Robinhood. Use your credit card
                    or a bank transfer..
                  </p>
                  <div className="absolute left-[-17px] bottom-[55px] w-[34px] h-[34px] rounded-full bg-[#3988F6] flex justify-center items-center text-white">
                    1
                  </div>
                </li>
                <li className="2xl:hidden block w-[300px] ml-[55px] rounded-[10px] border-solid border-[1px] border-[#0084ff] pt-4 flex flex-col  px-[25px] mt-[500px] pb-[14px] gap-[20px] relative flex-start justify-start items-start text-start">
                  <div className="absolute left-[130px] top-0 w-[34px] h-[34px] rounded-full bg-[#3988F6]  flex justify-center items-center text-white transform -translate-y-1/2">
                    1
                  </div>
                  <h3 className="text-[#3988F6] pt-4 font-bold text-[18px] leading-[23.4px] tracking-[0.9px]">
                    Hadge Investment
                  </h3>
                  <p>
                    It's as simple as E*Trade or Robinhood. Use your credit card
                    or a bank transfer.
                  </p>
                </li>
                <li
                  onClick={() => setImg(2)}
                  className=" hidden 2xl:block w-[480px] rounded-[10px] flex flex-col  px-[25px] pt-[20px] pb-[14px] gap-[20px] relative opacity-[50%]  flex-start justify-start items-start text-start"
                >
                  <h3 className="text-[#000000] font-bold text-[18px] leading-[23.4px] tracking-[0.9px]">
                    Buy At Real Market Prices
                  </h3>
                  <p>
                    Price volatility makes ammo the next asset class ready for
                    speculation and trading
                  </p>
                </li>
                <li
                  onClick={() => setImg(3)}
                  className="hidden 2xl:block w-[480px] rounded-[10px] flex flex-col  px-[25px] pt-[20px] pb-[14px] gap-[20px] relative opacity-[50%] flex-start justify-start items-start text-start"
                >
                  <h3 className="text-[#000000] font-bold text-[18px] leading-[23.4px] tracking-[0.9px]">
                    Store Free In Our Armory
                  </h3>
                  <p>
                    Every trade gives you free storage. Keep it and trade later
                    or ship it to yourself whenever.
                  </p>
                </li>
                <li
                  onClick={() => setImg(4)}
                  className=" hidden 2xl:block w-[480px] rounded-[10px] flex flex-col flex-start justify-start items-start text-start px-[25px] pt-[20px] pb-[14px] gap-[20px] relative opacity-[50%]"
                >
                  <h3 className="text-[#000000] font-bold text-[18px] leading-[23.4px] tracking-[0.9px]">
                    Sell When the Price Is Right
                  </h3>
                  <p>
                    Buy low, sell high. Ammo held in our armories can be resold
                    instantly to other buyers.
                  </p>
                </li>
                <li
                  onClick={() => setImg(5)}
                  className=" hidden 2xl:block w-[480px] rounded-[10px] flex flex-col flex-start justify-start items-start text-start px-[25px] pt-[20px] pb-[14px] gap-[20px] relative opacity-[50%]"
                >
                  <h3 className="text-[#000000] font-bold text-[18px] leading-[23.4px] tracking-[0.9px]">
                    On Demand Shipping
                  </h3>
                  <p>
                    You buy it. You own it. Direct ownership means, any time
                    during your storage period you can have your ammo shipped to
                    you for your enjoyment
                  </p>
                </li>
              </ul>
              <img alt="" />
            </div>
          </section>
          <div className="absolute 2xl:right-12 2xl:top-[340%] hidden 2xl:block w-[730px] ">
            {img === 1 && <img src={macbook1}></img>}
            {img === 2 && <img src={macbook2}></img>}
            {img === 3 && <img src={macbook3}></img>}
            {img === 4 && <img src={macbook4}></img>}
            {img === 5 && <img src={macbook5}></img>}
          </div>
          <div className="absolute right-5 left-5 top-[270px] block 2xl:hidden ">
            <img src={macbook1}></img>
          </div>
        </div>
      </div>
    </div>
  );
}
