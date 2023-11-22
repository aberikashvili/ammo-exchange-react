import GrayContainer from "../../components/GrayContainer/GrayContainer";
import donebackground from "../../assets/images/donebackground.png";

import octagon from "../../assets/images/Octagon_Check@2x.png";
import trending from "../../assets/images/Trending_Up@2x.png";

import paper from "../../assets/images/paper.png";
import done from "../../assets/images/done.png";

import bigDone from "../../assets/images/Shield_Check@2x.png";
import bigOctagon from "../../assets/images/Octagon_Check@3x.png";
import bigTrending from "../../assets/images/Trending_Up@3x.png";
import bigPaper from "../../assets/images/File_Blank.png";

import AmmoCard from "../../components/AmmoCard/AmmoCard";

export default function FifthPage() {
  return (
    <div className="flex justify-center  border-none items-center max-xl:pt-[300px]  max-lg:pt-[1000px]  text-black h-screen w-screen bg-white">
      <GrayContainer>
        <div className=" w-full   h-[800px] 2xl:px-14 rounded-3xl 	   mx-auto p-4  text-center">
          <div className="mx-auto 2xl:max-w-2xl 2xl:p-4 2xl:mt-6 text-center ">
            <h1 className=" font-bold tracking-tight text-5xl text-2xl max-xl:pt-[100px] text-black relative p-4">
              WHY AMMO IS A GOOD INVESTMENT
            </h1>
          </div>

          <div className="flex justify-between items-center w-full m-auto max-pb-12 max-2xl:pt-[40px]  bg-gray-100">
            <div className="max-lg:block hidden flex-col justify-center items-center mx-auto mt-8">
              <div className="mt-[43px]">
                <AmmoCard
                  title="Hedge Investment"
                  subTitle="Ammo is in extremely high demand, if you can find it, and prices typically act like traditional commodities with price fluctuations depending on certain geo-political events. (insert ammo charts from the Pitch Deck). When some see price volatility others see investment opportunity.
"
                  imageUrlBack={donebackground}
                  imageUrl={bigDone}
                />
              </div>
              <div className="mt-[60px]">
                <AmmoCard
                  title="Hard Asset"
                  subTitle="When you buy ammo on the USAE, it’s your ammo. You own it. Unlike stocks on paper, this is a hard asset you own with a year’s long shelf life for future trading or enjoyment."
                  imageUrlBack={donebackground}
                  imageUrl={bigPaper}
                />
              </div>

              <div className="mt-[60px]">
                <AmmoCard
                  title="Inflation resistant"
                  subTitle="Ammo is a strong investment for rising prices and turbulent times."
                  imageUrlBack={donebackground}
                  imageUrl={bigOctagon}
                />
              </div>
              <div className="mt-[60px ">
                <AmmoCard
                  title="Portfolio Diversity"
                  subTitle="Ammo is a strong investment for rising prices and turbulent times."
                  imageUrlBack={donebackground}
                  imageUrl={bigTrending}
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 max-w-5xl p-4 text-center flex justify-center items-center  mx-auto mt-[50px]">
            <div className=" flex-col items-center max-lg:hidden block  pr-6 pb-6  border-b border-gray-400 max-lg:hidden block ">
              <div className="relative flex ">
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
              <div className="w-270px items-start justify-start text-start flex-start">
                <h2 className="items-start justify-start flex pl-[50px] pb-4 font-bold">
                  Hedge Investment
                </h2>
                <p className="flex pl-12 ">
                  Ammo is in extremely high demand, if you can find it, and
                  prices typically act like traditional commodities with price
                  fluctuations depending on certain geo-political events. When
                  some see price volatility others see investment opportunity.
                </p>
              </div>
            </div>

            <div className=" flex-col items-center max-lg:hidden block   pl-6 pb-24 border-l border-b border-gray-400 max-lg:hidden block ">
              <div className="relative flex ">
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
              <div className="w-270px items-start justify-start text-start flex-start">
                <h2 className="items-start justify-start flex pl-[50px] pb-4 font-bold">
                  Inflation resistant
                </h2>
                <p className="flex pl-12 ">
                  Ammo is a strong investment for rising prices and turbulent
                  times.
                </p>
              </div>
            </div>

            <div className=" flex-col items-center max-lg:hidden block  pr-6 pb-8 max-lg:hidden block ">
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
              <div className="w-270px  items-start justify-start text-start flex-start">
                <h2 className="items-start justify-start flex pl-[50px] pb-4 font-bold">
                  Hard Asset
                </h2>
                <p className=" pl-12 ">
                  When you buy ammo on the USAE, it’s your ammo. You own it.
                  Unlike stocks on paper, this is a hard asset you own with a
                  year’s long shelf life for future trading or enjoyment.
                </p>
              </div>
            </div>

            <div className=" flex-col items-center max-lg:hidden block   pl-6 pb-[55px] border-l border-gray-400 max-lg:hidden block">
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
              <div className="w-270px items-start justify-start text-start flex-start">
                <h2 className="items-start justify-start flex pl-[50px] pb-4 font-bold">
                  Portfolio Diversity
                </h2>
                <p className=" pl-12 ">
                  Beyond stocks, bonds, real estate and other investments, you
                  can now balance your wealth with bullets.
                </p>
              </div>
            </div>
          </div>
        </div>
      </GrayContainer>
    </div>
  );
}
