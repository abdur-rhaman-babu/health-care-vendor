import { createBrowserRouter } from "react-router-dom";
import Main from "../../components/Main/Main";
import Home from "../../pages/Home/Home";
import Shop from "../../pages/Shop/Shop";
import Cart from "../../pages/Cart/Cart";

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
        }
    ]
}])

const Router = () => {
    return (
        <div>
            
        </div>
    );
};

export default Router;