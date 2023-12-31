import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Root from "../pages/Home/Root";
import AddProduct from "../pages/AddProduct/AddProduct";
import MyCart from "../pages/MyCart/MyCart";
import Brand from "../pages/Brand/Brand";
import AddBrand from "../pages/AddBrand/AddBrand";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import PrivateRoute from "./PrivatRoute";
import ProductDetails from "../pages/ProductDetails/ProductDetails";
import ProductUpdate from "../pages/ProductUpdate/ProductUpdate";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import AddTeam from "../pages/AddBrand/AddTeam";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch(`https://brand-shop-server-side-ghmk6yp8z-saifurs-projects.vercel.app/brands`)
      },
      {
        path: '/add-product',
        element: <PrivateRoute><AddProduct></AddProduct></PrivateRoute>
      },
      {
        path: '/my-cart',
        element: <PrivateRoute><MyCart></MyCart></PrivateRoute>
      },
      {
        path: '/brand/:brandName',
        element: <Brand></Brand>
      },
      {
        path: '/add-brand',
        element: <PrivateRoute><AddBrand></AddBrand></PrivateRoute>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/details/:id',
        element: <PrivateRoute><ProductDetails></ProductDetails></PrivateRoute>
      },
      {
        path: '/update/:id',
        element: <PrivateRoute><ProductUpdate></ProductUpdate></PrivateRoute>
      },
      {
        path: '/add-team',
        element: <PrivateRoute><AddTeam></AddTeam></PrivateRoute>
      }
    ]
  }
])

export default router;