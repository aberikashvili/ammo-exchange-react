import React from "react";

interface TAmmoCardInfo {
  title: string;
  subTitle: string;
  imageUrl: string;
  imageUrlBack: string;
}

export default function AmmoCard({
  imageUrl,
  imageUrlBack,
  title,
  subTitle,
}: TAmmoCardInfo) {
  return (
    <div className="mx-auto md:w-80 max-lg:w-[300px] mb-6 ">
      <div className="bg-transparent border-b border-gray-300 ">
        <div className="flex flex-col items-center max-lg:pb-10 mt-6  ">
          <div className="relative flex items-center justify-center mb-[29px] ">
            <img
              className="w-[100px] h-[100px] rounded-full shadow-lg"
              src={imageUrlBack}
              alt="Card Image"
            />
            <img
              src={imageUrl}
              alt="Ticket"
              className="absolute  mr-[65px] mb-[6px] mt-[85px] w-[81px] height-[78px] left-1/2 transform -translate-x-1/2 -translate-y-1/2 "
            />
          </div>
          <div className="px-6 pb-[58px] text-center">
            <h5 className="text-2xl font-bold text-black pb-[22px]">{title}</h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              {subTitle}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
