import imageBackLight from "../../assets/images/Ellipse 36.png";
import imageBackDark from "../../assets/images/Ellipse 35.png";

import dollar from "../../assets/images/dollar-symbol 1.png";
import users from "../../assets/images/users-alt 1.png";

import ticket from "../../assets/images/ticket 1.png";

import vector from "../../assets/images/Vector.png";
import group from "../../assets/images/Group.png";

import Card from "../../components/Card/Card";

export default function ThirdPage() {
  return (
    <div className="2xl:flex 2xl:justify-center 2xl:flex-col 2xl:items-center text-black h-screen w-screen bg-white">
      <div className="mx-auto max-w-2xl  2xl:p-4 2xl:mt-6  text-center">
        <h1 className=" 2xl:text-5xl text-2xl font-bold 2xl:pt-2 pt-12">
          BECOME A FOUNDING TRADER
        </h1>
        <p className=" mt-2 text-lg text-gray-500 ">
          Lorem ipsum dolor sit amet consectetur
        </p>
      </div>

      <div className="2xl:flex 2xl:justify-between 2xl:items-center  2xl:w-[90%] m-auto">
        <div className="flex flex-col justify-center items-center ">
          <div className="mb-6">
            <Card
              title="10% Discount"
              subTitle="Here are the biggest enterprise technology acquisitions
              of 2021 so far, in reverse chronological orderggest enterprise
              technology acquisitions"
              imageUrl={ticket}
              imageUrlBack={imageBackDark}
            />
          </div>
          <Card
            title="5 Calibers"
            subTitle="Here are the biggest enterprise technology acquisitions
              of 2021 so far, in reverse chronological orderggest enterprise
              technology acquisitions"
            imageUrl={group}
            imageUrlBack={imageBackDark}
          />
        </div>
        <div className="justify-center items-center">
          <div className="mb-28">
            <Card
              title="$ 10000 of Ammo"
              subTitle="Here are the biggest enterprise technology acquisitions
              of 2021 so far, in reverse chronological orderggest enterprise
              technology acquisitions"
              imageUrl={dollar}
              imageUrlBack={imageBackLight}
            />
          </div>
          <button
            type="button"
            className="text-white bg-[#2557D6] font-medium rounded-lg text-sm px-20 py-2.5 text-center inline-flex items-center mr-2 mb-2"
          >
            Become a Founding Trade
          </button>
        </div>
        <div className="flex flex-col justify-center items-center ">
          <div className="mb-6">
            <Card
              title="1,176 Founders"
              subTitle="Here are the biggest enterprise technology acquisitions
              of 2021 so far, in reverse chronological orderggest enterprise
              technology acquisitions"
              imageUrl={users}
              imageUrlBack={imageBackDark}
            />
          </div>
          <Card
            title="Secure a spot"
            subTitle="Here are the biggest enterprise technology acquisitions
              of 2021 so far, in reverse chronological orderggest enterprise
              technology acquisitions"
            imageUrl={vector}
            imageUrlBack={imageBackDark}
          />
        </div>
      </div>
    </div>
  );
}
