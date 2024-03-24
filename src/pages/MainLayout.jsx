import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import { ToastContainer, toast } from 'react-toastify';


const MainLayout = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <ToastContainer />
        </div>
    );
};

export default MainLayout;