import BigHeader from "../../components/BigHeader";
import SmallHeader from "../../components/SmallHeader";

const TheUS = () => (
  <section className="w-full flex justify-center gap-[80px] py-[132px] max-xl:flex-col max-xl:items-center max-xl:px-[30px]">
    <BigHeader classname="text-[#A62B17] max-w-[337px]">
      THE U.S. HAS OVER 80 MILLION GUN OWNERS AND ALL OF THEM NEED AMMO
    </BigHeader>
    <span className="w-[1px] bg-[#D1D1D1]"></span>
    <div className="flex flex-col justify-center gap-[30px]">
      <div className="max-w-[676px] flex flex-col items-start gap-[30px]">
        <SmallHeader classname="max-sm:max-w-[200px]">
          THE MASSIVE CIVILIAN AMMO MARKET
        </SmallHeader>
        <p className="text-[#a4a4a4] text-[16px] text-normal leading-[20.8px] tracking-[0.9px] max-md:text-[12px]">
          The U.S. gun and ammo industry is rapidly expanding. The country has
          over 80 million gun owners -- twenty million were added since 2012,
          and seven million added in just the last two years. In fact, last
          year, sports shooting become the 2nd fastest growing recreational
          activity in the U.S., and today it's estimated that over $30 billion
          in ammo is being privately held by US citizens.
        </p>
      </div>
      <hr className="bg-[#D1D1D1]" />
      <div className="max-w-[676px] flex flex-col items-start gap-[30px]">
        <SmallHeader>A DISRUPTIVE NEW PLATFORM</SmallHeader>
        <p className="text-[#a4a4a4] text-[16px] text-normal leading-[20.8px] tracking-[0.9px] max-md:text-[12px]">
          The U.S. Ammo Exchange (USAE) is a powerful new trading platform that
          will disrupt the U.S. ammo industry. Our all-in-one trading website
          allows users to safely and securely buy, hold, sell, and ship with
          just a few clicks. It’s part E*Trade, part Amazon, but all ammo.
        </p>
      </div>
    </div>
  </section>
);

export default TheUS;
