import { Outlet } from "react-router-dom";
import Navbar from "../components/header/Navbar";
import Footer from "../components/footer/Footer";
import HeaderTop from "../components/header/HeaderTop";

const Main = () => {
    return (
        <div className="relatve">
            <div className="sticky top-0 z-20">
             <HeaderTop></HeaderTop>
            <Navbar></Navbar>
            </div>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
}

export default Main