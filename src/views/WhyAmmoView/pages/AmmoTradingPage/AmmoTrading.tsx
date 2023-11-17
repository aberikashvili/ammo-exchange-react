import BigHeader from "../../components/BigHeader";
import SmallHeader from "../../components/SmallHeader";

const AmmoTrading = () => {
  return (
    <section className="w-full flex justify-center gap-[88px] px-[95px] py-20 max-xl:flex-col-reverse max-xl:items-center max-xl:px-[30px]">
      <div className=" flex flex-col items-start gap-[30px]">
        <SmallHeader classname="max-sm:w-[337px]">
          AMMO TRADING HAS HISTORICALLY BEEN LIMITED TO INSIDERS
        </SmallHeader>
        <p className="max-w-[463px] text-[#a4a4a4] text-[16px] text-normal leading-[20.8px] tracking-[0.9px]">
          Few Americans have profited from the massive price increases of the
          past few years. Instead, these gains have been reaped by a small
          handful of specialized insiders. Much of this is due to the nature of
          ammo. Buying large quantities requires specialized shipping and a
          large secure facility. Then you must unpack, inspect, and safely store
          it. Finally, when the price goes up, a similar process must be
          implemented in reverse. You must find the buyers who want your
          specific caliber, then pack, verify, ship, and provide customer
          support, not to mention insurance and licenses.
        </p>
      </div>
      <span className="w-[1px] bg-[#D1D1D1]"></span>
      <BigHeader classname="text-[#A62B17] max-w-[495px] text-right">
        Ammo has been a difficult product to buy, sell, and trade in large
        volumes for the average person
      </BigHeader>
    </section>
  );
}

export default AmmoTrading