import BigHeader from "../../components/BigHeader";
import SmallHeader from "../../components/SmallHeader";

const Usae = () => {
  return (
    <section className="w-full flex justify-center gap-[44px] px-[100px] py-[125px] max-xl:flex-col max-xl:items-center max-xl:px-[30px]">
      <BigHeader classname="text-[#3988F6] max-w-[654px]">
        USAE has removed the hassle of FINDING, PURCHASING, inspecting, STORING,
        and selling AMMO
      </BigHeader>
      <div className="max-w-[502px] flex flex-col items-start gap-8">
        <SmallHeader classname="max-sm:w-[318px]">
          INTRODUCING ONE-CLICK AMMO TRADING
        </SmallHeader>
        <p className="text-[#a4a4a4] text-[16px] text-normal leading-[20.8px] tracking-[0.9px]">
          USAE is the one-stop-shop where ammo can by bought, stored, and sold
          at a later date, just like investing in a stock. And like any common
          stock trading website, USAE will also provide various trading tools,
          such as historical pricing data to help users make educated decisions.
          However, unlike stock trading websites, the USAE also serves as an
          e-commerce marketplace where members can buy and take possession of
          high demand ammo with its fulfillment and shipping options.
        </p>
      </div>
    </section>
  );
}

export default Usae