import { Outlet } from "react-router-dom";
import { Footer } from "../../components/Footer";

export function Layout() {
  return (
    <div>
      {/* <header className="w-full h-[98px] bg-[#212B39]"></header> */}
      <Outlet />
      <Footer />
    </div>
  );
}
