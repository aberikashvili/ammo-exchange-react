import { Outlet } from "react-router-dom";
import { Footer } from "../../components/Footer";

export function Layout() {
  return (
    <div>
      <Outlet />
      <Footer />
    </div>
  );
}
