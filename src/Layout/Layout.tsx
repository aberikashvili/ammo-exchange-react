import { Outlet } from "react-router";

import Footer from "./Footer/Footer";
import Header from "./Header/Header";

export default function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
