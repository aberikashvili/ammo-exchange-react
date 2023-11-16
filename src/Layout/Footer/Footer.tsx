import footertext from "../../assets/images/Group 98.png";

export default function Footer() {
  return (
    <footer className="w-full h-[255px] bg-[#DFDFDF] flex justify-between p-[70px]">
      <ul className="w-[393px] h-[123px] font-medium text-[16px] leading-[20.8px] tracking-[0.9px] text-[#747474] flex flex-col gap-[30px] flex-wrap">
        <li>Home</li>
        <li>How It Works</li>
        <li>Why Ammo now</li>
        <li>FAQs</li>
      </ul>
      <span>
        <img src={footertext} alt="" />
      </span>
      <div className="flex flex-col gap-[30px] items-end text-end">
        <h3 className="text-[18px] text-[#323232] leading-[27px] font-bold">
          Subscribe to newsletter
        </h3>
        <p className="text-[14px] leading-[21px] font-normal text-[#000000] opacity-[50%]">
          Discover new product features and get <br /> industry news and
          insights.
        </p>
        <span className="relative">
          <input
            className="w-[393px] rounded-[5px] border-solid border-[1px] py-[11px] pl-3 border-[#DFDFDF] bg-white"
            type="email"
            placeholder="E-mail"
          />
          <button className="absolute right-[5px] top-[5px] font-medium text-white bg-blue-500 py-[7px] px-[14.47px] rounded-[5px]">
            Subscribe
          </button>
        </span>
      </div>
    </footer>
  );
}
