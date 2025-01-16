import { createBrowserRouter } from "react-router-dom";
import Main from "../../components/Main/Main";
import Home from "../../pages/Home/Home";
import Shop from "../../pages/Shop/Shop";
import Cart from "../../pages/Cart/Cart";
import Login from "../../pages/Login/Login";
import Register from "../../pages/Register/Register";
import Dashboard from "../../pages/Dashboard/Dashboard";
import SelllerHome from "../../pages/Dashboard/SelllerHome";
import ManageMedicines from "../../pages/Dashboard/ManageMedicines";
import PaymentHistory from "../../pages/Dashboard/PaymentHistory";

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
            path:'/cart',
            element:<Cart/>
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
    element:<Dashboard/>,
    children:[
        {
            path:'seller-home',
            element:<SelllerHome/>
        },
        {
            path:'manage-medicine',
            element:<ManageMedicines/>
        },
        {
            path:'payment-history',
            element:<PaymentHistory/>
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