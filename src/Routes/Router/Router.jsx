import { createBrowserRouter } from "react-router-dom";
import Main from "../../components/Main/Main";
import Home from "../../pages/Home/Home";
import Shop from "../../pages/Shop/Shop";
import Cart from "../../pages/Cart/Cart";
import Login from "../../pages/Login/Login";
import Register from "../../pages/Register/Register";
import Dashboard from "../../pages/Dashboard/Dashboard";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import SellerHome from "../../pages/Dashboard/Seller/SellerHome";
import ManageMedicines from './../../pages/Dashboard/Seller/ManageMedicines';
import PaymentHistory from './../../pages/Dashboard/Seller/PaymentHistory';
import AdminHome from "../../pages/Dashboard/Admin/AdminHome";
import ManageUser from "../../pages/Dashboard/Admin/ManageUser";
import PaymentManagement from "../../pages/Dashboard/Admin/PaymentManagement";
import SalesReport from "../../pages/Dashboard/Admin/SalesReport";
import ManageCategory from "../../pages/Dashboard/Admin/ManageCategory";
import ManageBannerAd from "../../pages/Dashboard/Admin/ManageBannerAd";
import UserPaymentHistory from "../../pages/Dashboard/User/UserPaymentHistory";
import HealthCategory from "../../pages/Home/HealthCategory";
import AdminRoute from "../AdminRoute/AdminRoute";
import UpdateCategory from "../../pages/Dashboard/Admin/UpdateCategory";
import Payment from "../../pages/Cart/Payment";


export const router = createBrowserRouter([{
    path:'/',
    element:<Main/>,
    children:[
        {
            path:'/',
            element:<Home/>
        },
        {
            path:'/shop',
            element:<Shop/>
        },
        {
            path:'/shop/:category',
            element:<HealthCategory/>
        },
        {
            path:'/cart',
            element:<PrivateRoute><Cart/></PrivateRoute>
        },
        {
            path:'/login',
            element:<Login/>
        },
        {
            path:'/register',
            element:<Register/>
        }
    ]
},
{
    path:'/dashboard',
    element:<PrivateRoute><Dashboard/></PrivateRoute>,
    children:[
        {
            path:'seller-home',
            element:<SellerHome/>
        },
        {
            path:'payment',
            element:<Payment/>
        },
        {
            path:'manage-medicine',
            element:<ManageMedicines/>
        },
        {
            path:'payment-history',
            element:<PaymentHistory/>
        },
        {
            path:'admin-home',
            element:<AdminHome/>
        },
        {
            path:'manage-user', 
            element:<AdminRoute><ManageUser/></AdminRoute>
        },
        {
            path:'payment-management',
            element:<PaymentManagement/>
        },
        {
            path:'sales-report',
            element:<SalesReport/>
        },
        {
            path:'manage-category',
            element:<AdminRoute><ManageCategory/></AdminRoute>
        },
        {
            path:'update/:id',
            element:<AdminRoute><UpdateCategory/></AdminRoute>
        },
        {
            path:'manage-banner-ad',
            element:<ManageBannerAd/>
        },
        {
            path:'user-payment-history',
            element:<UserPaymentHistory/>
        }
    ]
}
])

const Router = () => {
    return (
        <div>
            
        </div>
    );
};

export default Router;