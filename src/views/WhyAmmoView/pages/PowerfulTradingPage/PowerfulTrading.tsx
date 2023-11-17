import { useState } from "react";

import BigHeader from "../../components/BigHeader";

import firstImage from "./images/firstImage.png";
import secondImage from "./images/secondImage.png";
import thirdImage from "./images/thirdImage.png";
import fourthImage from "./images/fouthImage.png";

const PowerfulTrading = () => {
  const [selectedImage, setSelectedImage] = useState(firstImage);
  const [selectedItem, setSelectedItem] = useState(1);

  const handleListItemClick = (newImage: string, index: number) => {
    setSelectedImage(newImage);
    setSelectedItem(index);
  };

  return (
    <section className="w-full flex justify-center py-[150px]">
      <div className="w-[90%] bg-[#F8F8F8] flex flex-col items-center gap-[60px] pt-[60px] pb-[168px] rounded-[20px]">
        <BigHeader classname="text-[#1E2A39] max-w-[700px] max-s1:w-[300px]">
          POWERFUL TRADING TOOLS DELIVER SIMPLICITY / SPEED
        </BigHeader>
        <div className="w-full flex flex-wrap-reverse items-end justify-center gap-[55px] px-[45px]">
          <ul className="flex flex-col items-center">
            <li
              className={`w-[480px] rounded-[10px] flex flex-col justify-center px-[53px] pt-[20px] pb-[14px] gap-[20px] relative max-sm:w-3/4 max-s1:w-[315px] hover:cursor-pointer ${
                selectedItem === 1
                  ? "bg-white border-solid border-[1px] border-[gray]"
                  : "opacity-[50%]"
              }`}
              onClick={() => handleListItemClick(firstImage, 1)}
            >
              <h3
                className={`${
                  selectedItem === 1 ? "text-[#3988F6]" : ""
                } font-bold text-[18px] leading-[23.4px] tracking-[0.9px]`}
              >
                TRANSPARENT PRICING
              </h3>
              <p>
                The USAE shows no favoritism among its traders. Everyone sees
                the same price at the same time for every trade.
              </p>
              {selectedItem === 1 && (
                <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-[17px] bottom-auto w-[34px] h-[34px] rounded-full bg-[#3988F6] flex justify-center items-center text-white">
                  {selectedItem}
                </div>
              )}
            </li>
            <div className="max-xl:hidden">
              <li
                className={`w-[480px] rounded-[10px] flex flex-col justify-center px-[53px] pt-[20px] pb-[14px] gap-[20px] relative max-sm:w-3/4 max-s1:w-[315px] hover:cursor-pointer  ${
                  selectedItem === 2
                    ? "bg-white border-solid border-[1px] border-[gray]"
                    : "opacity-[50%]"
                }`}
                onClick={() => handleListItemClick(secondImage, 2)}
              >
                <h3
                  className={`${
                    selectedItem === 2 ? "text-[#3988F6]" : ""
                  } font-bold text-[18px] leading-[23.4px] tracking-[0.9px]`}
                >
                  BUY/SELL ORDER BOOKS
                </h3>
                <p>
                  Real-time order books give you full transparency into where
                  other traders are setting buy and sell prices.
                </p>
                {selectedItem === 2 && (
                  <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-[17px] bottom-auto w-[34px] h-[34px] rounded-full bg-[#3988F6] flex justify-center items-center text-white">
                    {selectedItem}
                  </div>
                )}
              </li>
              <li
                className={`w-[480px] rounded-[10px] flex flex-col justify-center px-[53px] pt-[20px] pb-[14px] gap-[20px] relative max-sm:w-3/4 max-s1:w-[315px] hover:cursor-pointer ${
                  selectedItem === 3
                    ? "bg-white border-solid border-[1px] border-[gray]"
                    : "opacity-[50%]"
                }`}
                onClick={() => handleListItemClick(thirdImage, 3)}
              >
                <h3
                  className={`${
                    selectedItem === 3 ? "text-[#3988F6]" : ""
                  } font-bold text-[18px] leading-[23.4px] tracking-[0.9px]`}
                >
                  FREE LIMIT ORDERS
                </h3>
                <p>
                  Whether you're buying or selling, USAE's limit orders put you
                  in the driver's seat. Set your preferred price and your trade
                  executes only when the price matches.
                </p>
                {selectedItem === 3 && (
                  <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-[17px] bottom-auto w-[34px] h-[34px] rounded-full bg-[#3988F6] flex justify-center items-center text-white">
                    {selectedItem}
                  </div>
                )}
              </li>
              <li
                className={`w-[480px] rounded-[10px] flex flex-col justify-center px-[53px] pt-[20px] pb-[14px] gap-[20px] relative  max-sm:w-3/4 max-s1:w-[315px] hover:cursor-pointer ${
                  selectedItem === 4
                    ? "bg-white border-solid border-[1px] border-[gray]"
                    : "opacity-[50%]"
                }`}
                onClick={() => handleListItemClick(fourthImage, 4)}
              >
                <h3
                  className={`${
                    selectedItem === 4 ? "text-[#3988F6]" : ""
                  } font-bold text-[18px] leading-[23.4px] tracking-[0.9px]`}
                >
                  HISTORICAL INSIGHTS
                </h3>
                <p>
                  Historical price trends can indicate the future direction of a
                  market. The USAE provides up to 90 days of free pricing data
                  for every product.
                </p>
                {selectedItem === 4 && (
                  <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-[17px] bottom-auto w-[34px] h-[34px] rounded-full bg-[#3988F6] flex justify-center items-center text-white">
                    {selectedItem}
                  </div>
                )}
              </li>
            </div>
          </ul>
          <img src={selectedImage} alt="" />
        </div>
      </div>
    </section>
  );
};

export default PowerfulTrading;
