import macbook1 from "../../assets/images/macbook1.png";
import macbook2 from "../../assets/images/Macbook Pro 2022 - Group-1.png";
import macbook3 from "../../assets/images/Macbook Pro 2022 - Group.png";
import macbook4 from "../../assets/images/Macbook Pro 2022 - Group@2x.png";
import macbook5 from "../../assets/images/macbook5.png";

import { useState } from "react";

export default function ForthPage() {
  const [img, setImg] = useState(1);

  return (
    <div className="flex justify-center items-center max-lg:pt-[1500px]   max-xl:pt-[300px] text-black  h-screen w-screen bg-white">
      <div className="w-[1536px] max-sm:w-[640px] max-md:w-[768px] max-lg:w-[1024px] max-xl:[1280px]  s4:w-[375] max-s1:w-[500px] max-s2:w-[400px] max-s3:w-[375px] max-s4:w-[350px]   h-[800px] px-14 rounded-3xl	 shadow bg-gray-100 mx-auto p-4  text-center ">
        <div className="w-full">
          <div className="  block mx-auto max-w-2xl p-4 mt-6  text-center max-lg:pt-[30px]">
            <h1 className=" text-5xl text-2xl font-bold  pt-2  pb-4 ">
              HOW INVESTING AMMO WORKS
            </h1>
          </div>

          <div className=" flex justify-between items-center ">
            <section className="w-full flex justify-start ">
              <div className="w-ful flex gap-[55px] items-start">
                <ul>
                  <li
                    onClick={() => setImg(1)}
                    className=" max-xl:mt-[400px] max-sm:ml-8 max-xl:ml-[330px] max-lg:mt-[400px] max-lg:w-[600px] max-lg:ml-[160px] max-md:ml-[70px] max-md:mt-[390px] max-md:w-[500px] block w-[480px] rounded-[10px] border-solid border-[1px] border-[gray] flex flex-col flex-start justify-start items-start text-start px-[25px] pt-4 pb-4 gap-[10px] relative"
                  >
                    <h3 className="  text-[#3988F6] font-bold text-[18px] leading-[23.4px] tracking-[0.9px]">
                      Hadge Investment
                    </h3>
                    <p>
                      It's as simple as E*Trade or Robinhood. Use your credit
                      card or a bank transfer..
                    </p>
                    <div className="absolute left-[-17px] bottom-[55px] w-[34px] h-[34px] rounded-full bg-[#3988F6] flex justify-center items-center text-white">
                      1
                    </div>
                  </li>

                  <li
                    onClick={() => setImg(2)}
                    className="  max-xl:hidden  w-[480px] rounded-[10px] flex flex-col  px-[25px] pt-[20px]  gap-[10px] relative opacity-[50%]  flex-start justify-start items-start text-start"
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
                    className=" max-xl:hidden  w-[480px] rounded-[10px] flex flex-col  px-[25px] pt-[20px] pb-[14px] gap-[10px] relative opacity-[50%] flex-start justify-start items-start text-start"
                  >
                    <h3 className="text-[#000000] font-bold text-[18px] leading-[23.4px] tracking-[0.9px]">
                      Store Free In Our Armory
                    </h3>
                    <p>
                      Every trade gives you free storage. Keep it and trade
                      later or ship it to yourself whenever.
                    </p>
                  </li>
                  <li
                    onClick={() => setImg(4)}
                    className="  max-xl:hidden  w-[480px] rounded-[10px] flex flex-col flex-start justify-start items-start text-start px-[25px] pt-[20px] pb-[14px] gap-[10px] relative opacity-[50%]"
                  >
                    <h3 className="text-[#000000] font-bold text-[18px] leading-[23.4px] tracking-[0.9px]">
                      Sell When the Price Is Right
                    </h3>
                    <p>
                      Buy low, sell high. Ammo held in our armories can be
                      resold instantly to other buyers.
                    </p>
                  </li>
                  <li
                    onClick={() => setImg(5)}
                    className="  max-xl:hidden   w-[480px] rounded-[10px] flex flex-col flex-start justify-start items-start text-start px-[25px] pt-[20px] pb-[14px] gap-[10px] relative opacity-[50%]"
                  >
                    <h3 className="text-[#000000] font-bold text-[18px] leading-[23.4px] tracking-[0.9px]">
                      On Demand Shipping
                    </h3>
                    <p>
                      You buy it. You own it. Direct ownership means, any time
                      during your storage period you can have your ammo shipped
                      to you for your enjoyment
                    </p>
                  </li>
                </ul>
                <img alt="" />
              </div>
            </section>
            <div className="absolute right-12 top-[332%] max-xl:w-[550px] max-lg:w-[500px] max-xl:mr-[330px]   max-sm:ml-0 max-sm:mr-[70px] max-s1:ml-4 max-s1:mr-0  max-lg:mr-[210px]   max-lg:mt-[950px]  block w-[730px]  max-md:mr-32 max-md:mt-[940px] max-md:w-[500px] max-md:left-[120px] max-xl:absolute max-xl:top-[345%] ">
              {img === 1 && <img src={macbook1}></img>}
              {img === 2 && <img src={macbook2}></img>}
              {img === 3 && <img src={macbook3}></img>}
              {img === 4 && <img src={macbook4}></img>}
              {img === 5 && <img src={macbook5}></img>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
