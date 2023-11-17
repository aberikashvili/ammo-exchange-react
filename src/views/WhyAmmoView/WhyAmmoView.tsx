import WhyAmmoNowPage from "./pages/WhyAmmoNowPage";
import WhatDrivesTheAmmoMarketPage from "./pages/WhatDrivesTheAmmoMarketPage";
import TheUS from "./pages/TheUS.Page/TheUS";
import Shortages from "./pages/ShortagesPage/Shortages";
import AmmoTrading from "./pages/AmmoTradingPage/AmmoTrading";
import Usae from "./pages/UsaePage/Usae";
import AmmoInvesting from "./pages/AmmoInvestingPage/AmmoInvesting";
import PowerfulTrading from "./pages/PowerfulTradingPage/PowerfulTrading";



const WhyAmmoView = () => (
  <main className="w-full">
    <WhyAmmoNowPage />
    <WhatDrivesTheAmmoMarketPage />
    <TheUS />
    <Shortages />
    <AmmoTrading />
    <Usae />
    <AmmoInvesting />
    <PowerfulTrading />
  </main>
);

export default WhyAmmoView;
