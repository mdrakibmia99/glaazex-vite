import { Outlet } from "react-router-dom";
import Navbar from "../components/header/Navbar";
import Footer from "../components/footer/Footer";
import HeaderTop from "../components/header/HeaderTop";
import BottomNavbar from "../components/BottomNavbar/BottomNavbar";

const Main = () => {
    return (
        <div className="relatve">
            <div className="fixed top-0 right-0 left-0 z-20">
             <HeaderTop></HeaderTop>
            <Navbar></Navbar>
            </div>
            {/* <div className="fixed bottom-0 right-0 left-0 z-20 block bg-white">
              <BottomNavbar/>
            </div> */}
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
}

export default Main