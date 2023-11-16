import GrayContainer from "../../components/GrayContainer/GrayContainer";
import done from "../../assets/images/assets-06 1.png";

export default function SecPage() {
  return (
    <div className="flex justify-center items-center text-black h-screen w-screen bg-white">
      <GrayContainer>
        <div className="mx-auto max-w-2xl 2xl:p-4 2xl:mt-6 text-center">
          <div className="font-bold tracking-tight  text-black relative p-4">
            <h2 className="2xl:text-5xl text-2xl">
              MAKING AMMO INVESTING POSSIBLE FOR ALL
            </h2>
          </div>
          <p className="mt-2 text-lg hidden 2xl:block 2xl:w-[664px] s4:hidden text-gray-500">
            Lorem ipsum dolor sit amet consectetur
          </p>
        </div>
        <p className="mt-2 2xl:hidden s4:block s4:w-[300px]  text-lg text-gray-500">
          With a few clicks you will have a stockpile of ammo in a secured
          armory in case you need it delivered, or want to sell it later at a
          different price. The USAE has taken all of the hassle out of finding,
          storing, and selling ammo
        </p>

        <div className="2xl:flex 2xl:justify-between items-center 2xl:w-[800px] mx-auto mt-12 ">
          <div className="flex flex-col">
            <li className="flex items-center 2xl:p-4 p-[10px] 2xl:text-xl  text-base ">
              <img
                className=" mr-2 text-green-500 dark:text-green-400 flex-shrink-0"
                src={done}
              ></img>
              All in one Place:Buy, Store, Sell, or Ship
            </li>
            <li className="flex items-center  2xl:p-4 p-[12px] 2xl:text-xl text-base ">
              <img
                className=" mr-2 text-green-500 dark:text-green-400 flex-shrink-0"
                src={done}
              ></img>
              Hassle Free
            </li>
            <li className="flex items-center  2xl:p-4 p-[12px] 2xl:text-xl text-base ">
              <img
                className=" mr-2 text-green-500 dark:text-green-400 flex-shrink-0"
                src={done}
              ></img>
              Hadge Investment
            </li>
          </div>
          <div className="flex flex-col">
            <li className="flex items-center   2xl:p-4 p-[12px] 2xl:text-xl text-base 	">
              <img
                className=" mr-2 text-green-500 dark:text-green-400 flex-shrink-0"
                src={done}
              ></img>
              Hard Asset
            </li>
            <li className="flex items-center  2xl:p-4 p-[12px] 2xl:text-xl text-base ">
              <img
                className=" mr-2 text-green-500 dark:text-green-400 flex-shrink-0 	"
                src={done}
              ></img>
              Inflation Resistent
            </li>
            <li className="flex items-center  2xl:p-4  p-[12px] 2xl:text-xl text-base ">
              <img
                className=" mr-2 text-green-500 dark:text-green-400 flex-shrink-0"
                src={done}
              ></img>
              Portfolio Diversity
            </li>
          </div>
        </div>
        <div className=" sm:mt-10 s4:mt-4 2xl:mt-20">
          <button
            type="button"
            className="text-white bg-[#2557D6] font-medium rounded-lg text-sm 2xl:px-48 px-[110px] mt-[35px] 2xl:py-2.5 text-center inline-flex items-center mr-2 mb-2 ml-4"
          >
            Get Started
          </button>
        </div>
      </GrayContainer>
    </div>
  );
}
