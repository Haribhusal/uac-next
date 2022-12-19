import Header from "../components/Header";
import { Outlet } from "react-router-dom";
import Home from './../pages/Home';
import Footer from "../components/Footer";
export default function Root() {
  const currentPage = window.location;

  return (
    <div className="">
      <Header />
      <div id="detail" className="border-t-[1px]">
        {currentPage.pathname === '/' && <Home />}
        <Outlet />
      </div>
      <Footer/>
    </div>
  );
}