import GrayContainer from "../../components/GrayContainer/GrayContainer";
import donebackground from "../../assets/images/donebackground.png";

import octagon from "../../assets/images/Octagon_Check@2x.png";
import trending from "../../assets/images/Trending_Up@2x.png";

import paper from "../../assets/images/paper.png";
import done from "../../assets/images/done.png";

export default function FifthPage() {
  return (
    <div className="flex justify-center items-center  text-black  h-screen w-screen bg-white">
      <GrayContainer>
        <div className="mx-auto 2xl:max-w-2xl 2xl:p-4 2xl:mt-6 text-center">
          <h1 className=" font-bold tracking-tight 2xl:text-5xl text-2xl text-black relative p-4">
            WHY AMMO IS A GOOD INVESTMENT
          </h1>
        </div>

        <div className="grid grid-cols-2 max-w-5xl p-4 text-center flex justify-center items-center  mx-auto mt-[50px]">
          <div className=" flex-col items-center pr-6 pb-6 border-b border-gray-400">
            <div className="relative flex">
              <div className="relative flex items-center absolute top-[37px] left-[4px] right-4 justify-center ">
                <img
                  className="w-7 h-7 mb-3 rounded-full shadow-lg"
                  src={donebackground}
                  alt="Card Image"
                />
                <img
                  src={done}
                  alt="Done Image"
                  className="absolute top-[35%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-5"
                />
              </div>
            </div>
            <div className="w-270px">
              <h2 className="items-start justify-start flex pl-[60px] pb-4 font-bold">
                Hedge Investment
              </h2>
              <p className="items-start justify-start flex pl-12 ">
                Ammo is in extremely high demand, if you can find it, and prices
                typically act like traditional commodities with price
                fluctuations depending on certain geo-political events. When
                some see price volatility others see investment opportunity.
              </p>
            </div>
          </div>

          <div className=" flex-col items-center  pl-6 pb-24 border-l border-b border-gray-400 ">
            <div className="relative flex">
              <div className="relative flex items-center absolute top-[37px] left-[4px] right-4 justify-center ">
                <img
                  className="w-7 h-7 mb-3 rounded-full shadow-lg"
                  src={donebackground}
                  alt="Card Image"
                />
                <img
                  src={octagon}
                  alt="Done Image"
                  className="absolute top-[35%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-5"
                />
              </div>
            </div>
            <div className="w-270px">
              <h2 className="items-start justify-start flex pl-[60px] pb-4 font-bold">
                Inflation resistant
              </h2>
              <p className="items-start justify-start flex pl-12 ">
                Ammo is a strong investment for rising prices and turbulent
                times.
              </p>
            </div>
          </div>

          <div className=" flex-col items-center pr-6 pb-8  ">
            <div className="relative flex">
              <div className="relative flex items-center absolute top-[37px] left-[4px] right-4 justify-center ">
                <img
                  className="w-7 h-7 mb-3 rounded-full shadow-lg"
                  src={donebackground}
                  alt="Card Image"
                />
                <img
                  src={paper}
                  alt="Done Image"
                  className="absolute top-[35%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-5"
                />
              </div>
            </div>
            <div className="w-270px">
              <h2 className="items-start justify-start flex pl-[60px] pb-4 font-bold">
                Hard Asset
              </h2>
              <p className="items-start justify-start flex pl-12  ">
                When you buy ammo on the USAE, it’s your ammo. You own it.
                Unlike stocks on paper, this is a hard asset you own with a
                year’s long shelf life for future trading or enjoyment.
              </p>
            </div>
          </div>

          <div className=" flex-col items-center  pl-6 pb-[55px] border-l border-gray-400 ">
            <div className="relative flex">
              <div className="relative flex items-center absolute top-[37px] left-[4px] right-4 justify-center ">
                <img
                  className="w-7 h-7 mb-3 rounded-full shadow-lg"
                  src={donebackground}
                  alt="Card Image"
                />
                <img
                  src={trending}
                  alt="Done Image"
                  className="absolute top-[35%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-5"
                />
              </div>
            </div>
            <div className="w-270px">
              <h2 className="items-start justify-start flex pl-[60px] pb-4 font-bold">
                Portfolio Diversity
              </h2>
              <p className="items-start justify-start flex pl-12 ">
                Beyond stocks, bonds, real estate and other investments, you can
                now balance your wealth with bullets.
              </p>
            </div>
          </div>
        </div>
      </GrayContainer>
    </div>
  );
}
