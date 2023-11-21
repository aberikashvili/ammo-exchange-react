import Logo from "../../assets/Logo.png";

export function Footer() {
  return (
    <footer className="w-full bg-[#DFDFDF] flex justify-between px-[100px] py-[65px] max-1xl:flex-col max-1xl:items-center max-1xl:gap-[115px]">
      <div className="flex justify-between w-[52.5%] max-1xl:flex-col-reverse max-1xl:w-full max-1xl:items-center max-1xl:gap-[60px]">
        <ul className="w-[393px] h-[123px] font-medium text-[16px] leading-[20.8px] tracking-[0.9px] text-[#747474] flex flex-col gap-[30px] flex-wrap max-s1:w-[256px]">
          <li>Home</li>
          <li>How It Works</li>
          <li>Why Ammo now</li>
          <li>FAQs</li>
        </ul>
        <span>
          <img src={Logo} alt="" />
        </span>
      </div>
      <div className="flex flex-col gap-[30px] items-end text-end max-1xl:items-center max-1xl:text-center">
        <h3 className="text-[18px] text-[#323232] leading-[27px] font-bold">
          Subscribe to newsletter
        </h3>
        <p className="text-[14px] leading-[21px] font-normal text-[#000000] opacity-[50%]">
          Discover new product features and get <br /> industry news and
          insights.
        </p>
        <span className="relative">
          <input
            className="w-[393px] rounded-[5px] border-solid border-[1px] py-[11px] pl-3 border-[#DFDFDF] max-s1:w-[315px]"
            type="email"
            placeholder="E-mail"
          />
          <button className="absolute right-[5px] top-[5px] font-medium text-white bg-[#1E2A39] py-[7px] px-[14.47px] rounded-[5px]">
            Subscribe
          </button>
        </span>
      </div>
    </footer>
  );
}
