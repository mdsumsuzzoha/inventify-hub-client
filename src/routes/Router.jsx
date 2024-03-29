import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Home/Login/Login";
import Registration from "../pages/Home/Registration/Registration";
import Error404 from "../othersPages/Error404/Error404";
import CreateShop from "../pages/Home/CreateShop/CreateShop";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../layout/Dashboard";
import ShopHome from "../pages/Dashboard/ManagerPanel/ShopHome/ShopHome";
import ProductManagement from "../pages/Dashboard/ManagerPanel/ProductManagement/ProductManagement";
import ManagerRoute from "./ManagerRoute";
import AddProductForm from "../components/AddProductForm/AddProductForm";
import UpdateProductForm from "../components/UpdateProductForm/UpdateProductForm";
import SalesCollection from "../pages/Dashboard/SalesCollection/SalesCollection";
import CheckOut from "../pages/Dashboard/CheckOut/CheckOut";
import SaleInvoice from "../components/SaleInvoice/SaleInvoice";
import InvoicesColection from "../pages/Dashboard/InvoicesColection/InvoicesColection";
import Subscription from "../pages/Dashboard/Subscription/Subscription";
import Payment from "../pages/Dashboard/Payment/Payment";
import SalesSummary from "../pages/Dashboard/SalesSummary/SalesSummary";
import StoreAuthorizeRoute from "./StoreAuthorizeRoute";
import AdminRoute from "./AdminRoute";
import AdminHome from "../pages/Dashboard/AdminPanel/AdminHome/AdminHome";
import Users from "../pages/Dashboard/AdminPanel/Users/Users";
import AllShops from "../pages/Dashboard/AdminPanel/AllShops/AllShops";
import ShopsProduct from "../pages/Dashboard/AdminPanel/AllShops/ShopsProduct";
import AdminManagerRoute from "./AdminManagerRoute";
import ContactUs from "../othersPages/ContactUs/ContactUs";
import JoinShop from "../pages/Home/JoinShop/JoinShop";
import JoiningRequest from "../pages/Dashboard/JoiningRequest/JoiningRequest";
import ManageShop from "../pages/Dashboard/ManagerPanel/ManageShop/ManageShop";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <Error404></Error404>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
            },
            {
                path: '/createShop',
                element: <PrivateRoute>
                    <CreateShop></CreateShop>
                </PrivateRoute>,
            },
            {
                path: '/joinShop',
                element: <PrivateRoute>
                    <JoinShop></JoinShop>
                </PrivateRoute>,
            },
            {
                path: '/login',
                element: <Login></Login>,
            },
            {
                path: '/register',
                element: <Registration></Registration>,
            },
            {
                path: '/contact',
                element: <ContactUs></ContactUs>,
            },
        ]
    },
    {
        path: '/dashboard',
        element: <Dashboard></Dashboard>,
        errorElement: <Error404></Error404>,
        children: [
            // Manager routes
            {
                path: 'shopHome',
                element: <PrivateRoute>
                    <StoreAuthorizeRoute>
                        <ShopHome></ShopHome>
                    </StoreAuthorizeRoute>
                </PrivateRoute>
            },
            {
                path: 'productManagement',
                element: <PrivateRoute>
                    <ManagerRoute>
                        <ProductManagement></ProductManagement>
                    </ManagerRoute>
                </PrivateRoute>,
            },
            {
                path: 'addProduct',
                element: <PrivateRoute>
                    <ManagerRoute>
                        <AddProductForm></AddProductForm>
                    </ManagerRoute>
                </PrivateRoute>,

            },
            {
                path: 'productManagement/updateProduct/:id',
                element: <PrivateRoute>
                    <AdminManagerRoute>
                        <UpdateProductForm></UpdateProductForm>
                    </AdminManagerRoute>
                </PrivateRoute>,

            },
            {
                path: 'sales',
                element: <PrivateRoute>
                    <StoreAuthorizeRoute>
                        <SalesCollection></SalesCollection>
                    </StoreAuthorizeRoute>
                </PrivateRoute>

            },
            {
                path: 'checkOut',
                element: <PrivateRoute>
                    <StoreAuthorizeRoute>
                        <CheckOut></CheckOut>
                    </StoreAuthorizeRoute>
                </PrivateRoute>

            },
            {
                path: 'invoice/:id',
                element: <PrivateRoute>
                    <StoreAuthorizeRoute>
                        <SaleInvoice></SaleInvoice>
                    </StoreAuthorizeRoute>
                </PrivateRoute>,

            },
            {
                path: 'invoicesColection',
                element: <PrivateRoute>
                    <StoreAuthorizeRoute>
                        <InvoicesColection></InvoicesColection>
                    </StoreAuthorizeRoute>
                </PrivateRoute>

            },
            {
                path: 'subscription',
                element: <PrivateRoute>
                    <ManagerRoute>
                        <Subscription></Subscription>
                    </ManagerRoute>
                </PrivateRoute>,

            },
            {
                path: 'payment/:amount',
                element: <PrivateRoute>
                    <ManagerRoute>
                        <Payment></Payment>
                    </ManagerRoute>
                </PrivateRoute>
            },
            {
                path: 'salesSummary',
                element: <PrivateRoute>
                    <ManagerRoute>
                        <SalesSummary></SalesSummary>
                    </ManagerRoute>
                </PrivateRoute>
            },
            {
                path: 'manageShop',
                element: <PrivateRoute>
                    <ManagerRoute>
                        <ManageShop></ManageShop>
                    </ManagerRoute>
                </PrivateRoute>
            },
            {
                path: 'joinReq',
                element: <PrivateRoute>
                    <AdminManagerRoute>
                        <JoiningRequest></JoiningRequest>
                    </AdminManagerRoute>
                </PrivateRoute>
            },

            // AdminRoutes
            {
                path: 'adminHome',
                element: <PrivateRoute>
                    <AdminRoute>
                        <AdminHome></AdminHome>
                    </AdminRoute>
                </PrivateRoute>
            },
            {
                path: 'shops',
                element: <PrivateRoute>
                    <AdminRoute>
                        <AllShops></AllShops>
                    </AdminRoute>
                </PrivateRoute>
            },
            {
                path: 'shops/shopsProduct',
                element: <PrivateRoute>
                    <AdminRoute>
                        <ShopsProduct></ShopsProduct>
                    </AdminRoute>
                </PrivateRoute>
            },
            {
                path: 'users',
                element: <PrivateRoute>
                    <AdminRoute>
                        <Users></Users>
                    </AdminRoute>
                </PrivateRoute>
            }



        ]
    }
]);