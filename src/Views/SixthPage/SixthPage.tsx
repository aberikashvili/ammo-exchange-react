import dots from "../../assets/images/_.png";

import days from "../..//assets/images/34.png";
import hours from "../..//assets/images/08.png";

import minutes from "../..//assets/images/07.png";
import seconds from "../..//assets/images/36.png";

import july from "../..//assets/images/JUNE 17th.png";
import july1 from "../..//assets/images/JULY 1st.png";

export default function SixthPage() {
  return (
    <div className=" max-lg:pt-[1800px] flex justify-center flex-col items-center text-black h-screen w-screen bg-white">
      <div className="mx-auto max-w-2xl p-4 mb-12 text-center">
        <h1 className="font-bold tracking-tight text-5xl text-2xl text-black relative p-4  ">
          COUNTDOWN TO START OF TRADING
        </h1>
      </div>
      <div className="flex grid grid-cols-4 mb-24 max-lg:ml-12">
        <div className="flex relative">
          <a
            href="#"
            className=" max-sm:w-[130px]  max-sm:h-[130px] block max-md:w-[150px] max-md:p-8 max-md:pt-12 max-md:h-[200px] max-lg:w-[200px]  w-[290px] h-[290px] w-[10px] h-[10px] p-[35px] max-lg:p-12 max-lg:pt-24 px-20 py-24 bg-[#F8F8F8] border border-gray-200 rounded-lg shadow "
          >
            <h5 className="mb-2 text-2xl  font-bold tracking-tight text-gray-900 dark:text-white">
              <img src={days}></img>
            </h5>
            <p className="font-normaltext-gray-700   text-[12px] dark:text-gray-400 mt-2 text-[20px] ml-8 mt-6 text-gray-700 text-[12px] dark:text-gray-400 max-sm:absolute max-sm:bottom-3 max-sm:top-[70px] max-sm:right-[70px]">
              Days
            </p>
          </a>
          <div className="pt-28 px-4 ">
            <img src={dots} className=" max-sm:hidden"></img>
          </div>
        </div>

        <div className="flex relative">
          <a
            href="#"
            className=" max-sm:w-[130px]  max-sm:h-[130px] max-md:w-[150px] max-md:h-[200px] max-md:p-8 max-md:pt-12 max-lg:p-12 max-lg:pt-24 block max-lg:w-[200px] w-[290px] h-[290px] w-[10px] h-[10px] p-[35px] px-20 py-24 bg-[#F8F8F8] border border-gray-200 rounded-lg shadow "
          >
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              <img src={hours}></img>
            </h5>
            <p className="font-normal text-[20px]  ml-6 mt-6 max-sm:absolute max-sm:bottom-3 max-sm:top-[70px] max-sm:right-[60px]  text-[12px] text-gray-700 dark:text-gray-400">
              Hours
            </p>
          </a>
          <div className="pt-28 px-4">
            <img src={dots} className=" max-sm:hidden"></img>
          </div>
        </div>

        <div className="flex relative">
          <a
            href="#"
            className=" max-sm:w-[130px]  max-sm:h-[130px] max-md:p-8 max-md:pt-12 max-md:w-[150px] max-md:h-[200px] block max-lg:p-12 max-lg:pt-24  max-lg:w-[200px] w-[290px] h-[290px] w-[10px] h-[10px] p-[35px] px-20 py-24 bg-[#F8F8F8] border border-gray-200 rounded-lg shadow  "
          >
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white ">
              <img src={minutes}></img>
            </h5>
            <p className="font-normal text-[20px] max-sm:absolute max-sm:bottom-3 max-sm:top-[70px] max-sm:right-[50px]  ml-4 mt-6 text-gray-700 text-[12px] dark:text-gray-400">
              Minutes
            </p>
          </a>
          <div className="pt-28 px-4">
            <img src={dots} className=" max-sm:hidden"></img>
          </div>
        </div>
        <div className="flex relative">
          <a
            href="#"
            className=" max-sm:w-[130px]  max-sm:h-[130px] block max-md:w-[150px] max-md:p-8 max-md:pt-12 max-md:h-[200px] max-lg:w-[200px]  w-[290px] h-[290px] w-[10px] h-[10px] p-[35px] max-lg:p-12 max-lg:pt-24 px-20 py-24 bg-[#F8F8F8] border border-gray-200 rounded-lg shadow "
          >
            <h5 className="mb-2 text-2xl  font-bold tracking-tight text-gray-900 dark:text-white">
              <img src={seconds}></img>
            </h5>
            <p className="font-normaltext-gray-700   text-[12px] dark:text-gray-400 mt-2 text-[20px] ml-8 mt-6 text-gray-700 text-[12px] dark:text-gray-400 max-sm:absolute max-sm:bottom-3 max-sm:top-[70px] max-sm:right-[50px]">
              Seconds
            </p>
          </a>
        </div>
      </div>
      <div className="flex justify-center w-[1200px] max-lg:w-[800px] mx-auto  mb-12">
        <div className="grid grid-cols-2 max-sm:mr-24">
          <div className="flex-col  border-r border-gray-400 pr-24 w-[400px]  max-lg:w-[250px] ">
            <p className="text-4xl max-sm:text-xl text-2xl pb-8 text-gray-400  max-md:text-3xl ">
              PRE-IPO WINDOW OPENS
            </p>
            <img className="text-4xl" src={july}></img>
          </div>
          <div className="flex-col pl-32  w-[400px]  max-lg:w-[250px]  ">
            <p className="text-4xl text-2xl max-sm:text-xl  pb-8 text-gray-400 max-md:text-3xl">
              FULL TRADING BEGINS
            </p>
            <img className="text-4xl" src={july1}></img>
          </div>
        </div>
      </div>
    </div>
  );
}
