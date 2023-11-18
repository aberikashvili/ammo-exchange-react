import GrayContainer from "../../components/GrayContainer/GrayContainer";
import done from "../../assets/images/assets-06 1.png";

export default function SecPage() {
  return (
    <div className="flex justify-center items-center text-black h-screen w-screen bg-white">
      <GrayContainer>
        <div className="mx-auto max-w-2xl p-4 mt-6 max-lg:mt-2 text-center">
          <div className="font-bold tracking-tight text-black relative p-4 ">
            <h2 className="text-5xl text-2xl 2xl:text-black text-black md:text-black lg:text-black s4:text-black">
              MAKING AMMO INVESTING POSSIBLE FOR ALL
            </h2>
          </div>
          <p className="mt-8 text-lg max-lg:mt-2 text-gray-500">
            With a few clicks you will have a stockpile of ammo in a secured
            armory in case you need it delivered, or want to sell it later at a
            different price. The USAE has taken all of the hassle out of
            finding, storing, and selling ammo
          </p>
        </div>

        <div className="flex flex-col lg:flex-row justify-between items-center w-[1000px] mx-auto mt-12 max-md:mt-6  s4:w-[300px]">
          <div className="mb-4  lg:mb-0 md:mb-0 sm:mb-0  s4:mb-0 s1:mb-0  s3:mb-0  s2:mb-0 max-md:pr-[450px] max-lg:pr-[50px]">
            <li className="flex items-center pb-[30px] text-3xl font-bold max-lg:text-2xl">
              <img
                className="mr-6 text-green-500 dark:text-green-400 flex-shrink-0"
                src={done}
                alt="done"
              />
              All in one Place: Buy, Store, Sell, or Ship
            </li>
            <li className="flex items-center  pb-[30px] text-3xl font-bold  max-lg:text-2xl ">
              <img
                className="mr-6 text-green-500 dark:text-green-400 flex-shrink-0"
                src={done}
                alt="done"
              />
              Hassle Free
            </li>
            <li className="flex items-center text-3xl font-bold  max-lg:text-2xl ">
              <img
                className="mr-6 text-green-500 dark:text-green-400 flex-shrink-0"
                src={done}
                alt="done"
              />
              <p>Hedge Investment</p>
            </li>
          </div>
          <div className="max-lg:pr-[280px] max-lg:pt-[30px] max-md:pr-[680px] max-mg:pl-0 ">
            <li className="flex items-center pb-[30px] text-3xl font-bold  max-lg:text-2xl">
              <img
                className="mr-6 text-green-500 dark:text-green-400 flex-shrink-0"
                src={done}
                alt="done"
              />
              Hard Asset
            </li>
            <li className="flex items-center pb-[30px] text-3xl font-bold  max-lg:text-2xl">
              <img
                className="mr-6 text-green-500 dark:text-green-400 flex-shrink-0"
                src={done}
                alt="done"
              />
              Inflation Resistant
            </li>
            <li className="flex items-center  text-3xl font-bold  max-lg:text-2xl">
              <img
                className="mr-6 text-green-500 dark:text-green-400 flex-shrink-0"
                src={done}
                alt="done"
              />
              Portfolio Diversity
            </li>
          </div>
        </div>
        <div className="max-lg:mt-[20px] max-md:mt-[20px] max-xl:mt-[90px] mt-[90px] max-md:mt-0   max-md:mr-[120px] ">
          <button
            type="button"
            className="text-white  bg-[#2557D6] font-medium rounded-lg text-s4  px-[200px] mt-[35px] py-2.5 text-center inline-flex items-center mr-2 mb-2 ml-4"
          >
            Get Started
          </button>
        </div>
      </GrayContainer>
    </div>
  );
}
