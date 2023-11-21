import BigHeader from "../../components/BigHeader";
import scale from '../../images/scale.png'

const WhyAmmoNow = () => (
  <>
    <div className="bg-[#212B39] w-full flex justify-center flex-wrap gap-[57px] pb-[68px] pt-[42px] max-1xl:hidden">
      <div className="flex flex-col justify-center gap-[30px] items-start w-[563px]">
        <BigHeader classname="text-white">WHY AMMO NOW</BigHeader>
        <p className="text-[12px] leading-[18px] font-normal text-[#FFFFFF]">
          The US civilian ammunition industry is currently experiencing record
          supply shortages amidst all-time high demand.
          <br />
          <br />
          Behind this dynamic is the rapid number of new gun owners since 2012,
          which is now estimated to be over 70 million.
          <br />
          <br />
          The recent spike in ammo demand was naturally followed by price
          volatility, and historical data now proves that the true drivers of
          the recent increase in both ammo demand and ammo pricing are the
          anticipated and unanticipated geo-political events.
          <br />
          <br />
          For example, in the three months leading up to the last four US
          presidential elections, there was an increase in price of over 100% on
          all major civilian ammo calibers.
          <br />
          <br />
          Moreover, in the 60 days leading up to President Biden’s inauguration,
          most major civilian ammo prices increased over 300%. if only there was
          a simple, safe, and reliable way to take advantage of this potential
          investment opportunity.
        </p>
      </div>
      <img src={scale} alt="Scale" />
    </div>
    <div className="bg-[#212B39] w-full justify-center flex-col items-center gap-[57px] pb-[68px] pt-[42px] hidden max-1xl:flex max-1xl:px-[30px]">
      <BigHeader classname="text-white">WHY AMMO NOW</BigHeader>
      <div>
        <img src={scale} alt="Scale" />
      </div>
      <p className="text-[12px] text-center leading-[18px] font-normal text-[#FFFFFF]">
        The US civilian ammunition industry is currently experiencing record
        supply shortages amidst all-time high demand.
        <br />
        <br />
        Behind this dynamic is the rapid number of new gun owners since 2012,
        which is now estimated to be over 70 million.
        <br />
        <br />
        The recent spike in ammo demand was naturally followed by price
        volatility, and historical data now proves that the true drivers of the
        recent increase in both ammo demand and ammo pricing are the anticipated
        and unanticipated geo-political events.
        <br />
        <br />
        For example, in the three months leading up to the last four US
        presidential elections, there was an increase in price of over 100% on
        all major civilian ammo calibers.
        <br />
        <br />
        Moreover, in the 60 days leading up to President Biden’s inauguration,
        most major civilian ammo prices increased over 300%. if only there was a
        simple, safe, and reliable way to take advantage of this potential
        investment opportunity.
      </p>
    </div>
  </>
);

export default WhyAmmoNow;
