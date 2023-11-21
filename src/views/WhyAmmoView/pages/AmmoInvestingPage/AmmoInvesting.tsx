import BigHeader from "../../components/BigHeader";
import SmallHeader from "../../components/SmallHeader";

const AmmoInvesting = () => {
  return (
    <section className="w-full flex justify-center gap-[63px] py-[150px] max-xl:flex-col-reverse max-xl:items-center max-xl:px-[30px]">
      <div className="max-w-[515px] flex flex-col items-start gap-8">
        <SmallHeader>IT'S LIKE A STOCK MARKET BUT FOR AMMO</SmallHeader>
        <p className="text-[#a4a4a4] text-[16px] text-normal leading-[20.8px] tracking-[0.9px]">
          The USAE has sourced, inspected and is now storing millions of rounds
          of certified new ammo in its secure armories. Unlike when buying a
          stock, every ammo purchase is backed round-for-round by actual
          ammunition located in USAE’s armories. For example, a USAE user may
          purchase $1,000 worth of 9mm Luger rounds for .50 cents/round on day
          one, have their ammo stored in the USAE armory (storage is free until
          2023), and then sell their “ammo portfolio” three months later at .55
          cents/round for a quick 10% profit. Of course, profits and timing are
          never guaranteed because they are subject to actual buyers and
          sellers.
        </p>
      </div>
      <BigHeader classname="text-[#3988F6] max-w-[527px]">
        Ammo investing is now possible for everyone because of USAE’s powerful
        combination of storage and trading platform
      </BigHeader>
    </section>
  );
};

export default AmmoInvesting;
