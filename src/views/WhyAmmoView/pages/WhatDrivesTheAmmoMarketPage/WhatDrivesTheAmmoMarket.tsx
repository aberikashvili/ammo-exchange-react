import SmallHeader from "../../components/SmallHeader";
import AmmoMarket from "../../images/AmmoMarket.svg";

const WhatDrivesTheAmmoMarket = () => (
  <section className="w-full flex justify-center items-start gap-[95px] py-[100px] pl-[100px] pr-[160px] max-1xl:flex-col max-1xl:items-center max-1xl:pr-[100px]">
    <div className="flex flex-col items-start justify-end gap-[30px] max-2xl:items-center max-md:w-[500px] max-sm:w-[90%]">
      <SmallHeader classname="text-center max-1xl:w-[250px]">
        What drives The AMMO Market
      </SmallHeader>
      <p className="text-[12px] leading-[18px] font-normal text-[#000000] max-w-[586px] max-sm:text-center max-s1:w-[300px]">
        There were no civilian ammo shortages in the US from the end of World
        War II until 2008. However, that year witnessed the onset of smart
        phones, social media, and access to news and information on both real
        and dramatized threats igniting fear and uncertainty. Since then, ammo
        demand has spiked significantly with anticipated and unanticipated
        geo-political events (i.e. elections, pandemics, protests, etc.). These
        events have been more frequent and are likely to continue.
      </p>
      <div className="max-s1:w-[311px]">
        <img className="" src={AmmoMarket} alt="Ammo Market" />
      </div>
    </div>
    <div className="w-[462px] h-[622px] rounded-[2px] border-solid border-[1px] border-black flex flex-col items-center justify-center text-center gap-5 max-md:w-[350px]">
      <h2 className="text-[#a4a4a4] leading-[31.2px] text-[24px] font-bold tracking-[0.9px] max-md:text-[18px]">
        Ammo Demand Drivers
      </h2>
      <h2 className="text-[#1E2A39] leading-[36.4px] text-[28px] font-bold tracking-[0.9px] max-md:text-[24px]">
        Political Unrest
        <br />
        Social Unrest
      </h2>
      <h2 className="text-[#a4a4a4] leading-[31.2px] text-[24px] font-bold tracking-[0.9px] max-md:text-[18px]">
        Looking Ahead
      </h2>
      <h2 className="text-[#1E2A39] leading-[36.4px] text-[28px] font-bold tracking-[0.9px] max-md:text-[24px]">
        China | TAIWAN <br /> Civil Unrest <br /> US Elections
      </h2>
    </div>
  </section>
);

export default WhatDrivesTheAmmoMarket