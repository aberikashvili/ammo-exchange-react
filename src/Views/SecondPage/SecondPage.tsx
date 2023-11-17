import GrayContainer from "../../components/GrayContainer/GrayContainer";
import done from "../../assets/images/assets-06 1.png";

export default function SecPage() {
  return (
    <div className="flex justify-center items-center text-black h-screen w-screen bg-white">
      <GrayContainer>
        <div className="mx-auto max-w-2xl p-4 mt-6 text-center">
          <div className="font-bold tracking-tight text-black relative p-4 ">
            <h2 className="text-5xl text-2xl 2xl:text-black text-black md:text-black lg:text-black s4:text-black">
              MAKING AMMO INVESTING POSSIBLE FOR ALL
            </h2>
          </div>
          <p className="mt-2 text-lg hidden text-gray-500">
            Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Possimus, modi! Molestias delectus
            qui, autem vitae minima nostrum doloremque totam exercitationem
            accusantium distinctio esse, ducimus officiis non ipsam error labore
            fugiat.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row justify-between items-center w-[800px] mx-auto mt-12  s4:w-[300px]">
          <div className="mb-4 lg:mb-0 ">
            <li className="flex items-center p-4 p-[10px] text-xl text-base ">
              <img
                className="mr-2 text-green-500 dark:text-green-400 flex-shrink-0"
                src={done}
                alt="done"
              />
              All in one Place: Buy, Store, Sell, or Ship
            </li>
            <li className="flex items-center p-4 p-[12px] text-xl text-base ">
              <img
                className="mr-2 text-green-500 dark:text-green-400 flex-shrink-0"
                src={done}
                alt="done"
              />
              Hassle Free
            </li>
            <li className="flex items-center p-4 p-[12px] text-xl text-base ">
              <img
                className="mr-2 text-green-500 dark:text-green-400 flex-shrink-0"
                src={done}
                alt="done"
              />
              Hedge Investment
            </li>
          </div>
          <div>
            <li className="flex items-center p-4 p-[12px] text-xl text-base">
              <img
                className="mr-2 text-green-500 dark:text-green-400 flex-shrink-0"
                src={done}
                alt="done"
              />
              Hard Asset
            </li>
            <li className="flex items-center p-4 p-[12px] text-xl text-base ">
              <img
                className="mr-2 text-green-500 dark:text-green-400 flex-shrink-0"
                src={done}
                alt="done"
              />
              Inflation Resistant
            </li>
            <li className="flex items-center p-4 p-[12px] text-xl text-base ">
              <img
                className="mr-2 text-green-500 dark:text-green-400 flex-shrink-0"
                src={done}
                alt="done"
              />
              Portfolio Diversity
            </li>
          </div>
        </div>
        <div className="mt-20">
          <button
            type="button"
            className="text-white bg-[#2557D6] font-medium rounded-lg text-s4 px-48 px-[110px] mt-[35px] py-2.5 text-center inline-flex items-center mr-2 mb-2 ml-4"
          >
            Get Started
          </button>
        </div>
      </GrayContainer>
    </div>
  );
}
