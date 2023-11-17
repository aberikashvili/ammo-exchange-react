import BigHeader from "../../components/BigHeader";
import SmallHeader from "../../components/SmallHeader";
import Vector from "../../images/Vector 6.png";

const Shortages = () => {
  return (
    <section className="py-[130px]">
      <div className="w-full flex justify-center gap-[80px] max-xl:flex-col-reverse max-xl:items-center max-xl:px-[30px]">
        <div className="max-w-[670px] flex flex-col items-start gap-[30px]">
          <SmallHeader classname="max-sm:max-w-[250px]">
            VOLATILITY CREATES OPPORTUNITY
          </SmallHeader>
          <p className="text-[#a4a4a4] text-[16px] text-normal leading-[20.8px] tracking-[0.9px] max-md:text-[12px]">
            In the three months leading up to the last four US presidential
            elections, the retail price of popular civilian ammo shot up over
            100%. In fact, in the 60 days leading up to President Biden’s
            inauguration, the price increased over 300%.
            <span className="max-xl:hidden">
              <br />
              <br />
            </span>
            Historical data shows that the primary drivers of ammo demand and
            ammo pricing is fear (both real and unsubstantiated) and
            geo-political events.Global events, local elections, civil
            polarization, 2nd amendment rhetoric, and uncertainty have and will
            continue to directly influence ammo prices. The USAE is a simple,
            safe, and reliable way to take advantage of this opportunity.
          </p>
        </div>
        <span className="w-[1px] bg-[#D1D1D1]"></span>
        <BigHeader classname="text-[#3988F6] max-w-[482px] text-end">
          shortages cause significant price volatility making ammo AN asset
          class ripe for trading
        </BigHeader>
      </div>
      <div className="w-full">
        <img className="w-full" src={Vector} alt="" />
      </div>
    </section>
  );
};

export default Shortages;
