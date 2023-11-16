import dots from "../../assets/images/_.png";

import days from "../..//assets/images/34.png";
import hours from "../..//assets/images/08.png";

import minutes from "../..//assets/images/07.png";
import seconds from "../..//assets/images/36.png";

import july from "../..//assets/images/JUNE 17th.png";
import july1 from "../..//assets/images/JULY 1st.png";

export default function SixthPage() {
  return (
    <div className="flex justify-center flex-col items-center text-black h-screen w-screen bg-white">
      <div className="mx-auto max-w-2xl p-4 mb-12 text-center">
        <h1 className="font-bold tracking-tight 2xl:text-5xl text-2xl text-black relative p-4  ">
          COUNTDOWN TO START OF TRADING
        </h1>
      </div>
      <div className="flex grid grid-cols-4 mb-24">
        <div className="flex">
          <a
            href="#"
            className="block 2xl:w-[290px] 2xl:h-[290px] w-[10px] h-[10px] p-[35px]  2xl:px-20 2xl:py-24 bg-[#F8F8F8] border border-gray-200 rounded-lg shadow "
          >
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              <img src={days}></img>
            </h5>
            <p className="2xl:font-normal 2xl:text-[20px] ml-8 mt-6 text-gray-700 text-[12px] dark:text-gray-400">
              Days
            </p>
          </a>
          <div className=" 2xl:block hidden pt-28 px-4">
            <img src={dots}></img>
          </div>
        </div>
        <div className="flex">
          <a
            href="#"
            className="block 2xl:w-[290px] 2xl:h-[290px] w-[10px] h-[10px] p-[35px] 2xl:px-20 2xl:py-24 bg-[#F8F8F8] border border-gray-200 rounded-lg shadow "
          >
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              <img src={hours}></img>
            </h5>
            <p className="2xl:font-normal 2xl:text-[20px]  2xl:ml-6 2xl:mt-6   text-[12px] text-gray-700 dark:text-gray-400">
              Hours
            </p>
          </a>
          <div className="pt-28 px-4">
            <img src={dots}></img>
          </div>
        </div>

        <div className="flex ">
          <a
            href="#"
            className="block 2xl:w-[290px] 2xl:h-[290px] w-[10px] h-[10px] p-[35px] 2xl:px-20 2xl:py-24 bg-[#F8F8F8] border border-gray-200 rounded-lg shadow "
          >
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              <img src={minutes}></img>
            </h5>
            <p className="2xl:font-normal 2xl:text-[20px]  ml-4 mt-6 text-gray-700 text-[12px] dark:text-gray-400">
              Minutes
            </p>
          </a>
          <div className="pt-28 px-4">
            <img src={dots}></img>
          </div>
        </div>

        <div className="flex">
          <a
            href="#"
            className="block 2xl:w-[290px] 2xl:h-[290px] w-[10px] h-[10px] p-[35px] 2xl:px-20 2xl:py-24 bg-[#F8F8F8] border border-gray-200 rounded-lg shadow "
          >
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              <img src={seconds}></img>
            </h5>
            <p className="2xl:font-normal 2xl:text-[20px]  ml-4 mt-6 text-gray-700 text-[12px] dark:text-gray-400">
              seconds
            </p>
          </a>
        </div>
      </div>
      <div className="flex justify-center 2xl:w-[1200px] mx-auto  mb-12">
        <div className="grid grid-cols-2 ">
          <div className="flex-col  border-r border-gray-400 2xl:pr-24 w-[400px] ">
            <p className="2xl:text-4xl text-2xl 2xl:pb-8 text-gray-400">
              PRE-IPO WINDOW OPENS
            </p>
            <img className="2xl:text-4xl" src={july}></img>
          </div>
          <div className="flex-col 2xl:pl-32  2xl:w-[400px] ">
            <p className="2xl:text-4xl text-2xl 2xl:pb-8 text-gray-400">
              FULL TRADING BEGINS
            </p>
            <img className="2xl:text-4xl" src={july1}></img>
          </div>
        </div>
      </div>
    </div>
  );
}
