import {
    createBrowserRouter
} from "react-router-dom";
import Home from '../pages/Home';
import MainLayout from '../pages/MainLayout';
import Donation from '../pages/Donation';
import Statistics from '../pages/Statistics';
import ErrorPage from "../pages/ErrorPage";
import DonationDetails from "../pages/DonationDetails";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/statistics",
                element: <Statistics></Statistics>
            },
            {
                path: "/donation",
                element: <Donation></Donation>
            },
            {
                path: "/donation-details/:id",
                element: <DonationDetails></DonationDetails>
            }
        ]
    }
]);

export default router;