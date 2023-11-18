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
    <div className="flex justify-center flex-col items-center text-black h-screen w-screen bg-white ">
      <div className="mx-auto max-w-2xl  p-4 mt-6  text-center max-lg:pt-[900px] ">
        <h1 className=" text-5xl text-2xl font-bold  pt-12">
          BECOME A FOUNDING TRADER
        </h1>
        <p className=" mt-2 text-lg text-gray-500 max-lg:pt-4 max-lg:pb-4  ">
          Lorem ipsum dolor sit amet consectetur
        </p>
      </div>

      <div className="flex justify-between items-center  max-lg:flex-col w-[90%] m-auto">
        <div className="flex flex-col justify-center items-center max-lg:ml-6 ">
          <div className=" max-2xl:mr-4">
            <Card
              title="10% Discount"
              subTitle="Founding Traders receive inventory 10% below the lowest price of the top 10 most prominent retailers online"
              imageUrl={ticket}
              imageUrlBack={imageBackDark}
              borderClass="border"
            />
            <Card
              title="5 Calibers"
              subTitle="Initial offering: 9mm Luger, 
223 Remington, 38 special, 
45 automatic, 22 long rifle"
              imageUrl={group}
              imageUrlBack={imageBackDark}
              borderClass="border"
            />
          </div>
        </div>
        <div className="justify-center items-center">
          <div className="mb-28 max-lg:mb-0">
            <Card
              title="$ 10000 of Ammo"
              subTitle="The ammo is yours. Trade
what you want like a stock.
$100-$1000 to fund account"
              imageUrl={dollar}
              imageUrlBack={imageBackLight}
              borderClass="border"
            />
          </div>
          <div className="max-lg:block hidden">
            <Card
              title="1,176 Founders"
              subTitle="Join hunters, veterans,
first responders, investors,
enterepreneurs, and more"
              imageUrl={users}
              imageUrlBack={imageBackDark}
              borderClass="border"
            />
          </div>
          <button
            type="button"
            className="text-white bg-[#2557D6] font-medium rounded-lg text-sm px-20 py-2.5 text-center inline-flex items-center mr-2 mb-2 max-lg:mt-6 "
          >
            Become a Founding Trade
          </button>
        </div>
        <div className="flex flex-col justify-center items-center max-lg:mr-8 ">
          <div className="max-lg:mb-0 max-2xl:ml-6 max-lg:hidden  ">
            <Card
              title="1,176 Founders"
              subTitle="Join hunters, veterans,
first responders, investors,
enterepreneurs, and more"
              imageUrl={users}
              imageUrlBack={imageBackDark}
              borderClass="border"
            />
            <Card
              title="Secure a spot"
              subTitle="Click here to open an Aplication now"
              imageUrl={vector}
              imageUrlBack={imageBackDark}
              borderClass="border"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
