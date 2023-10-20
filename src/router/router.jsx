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

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: ()=> fetch(`http://localhost:5000/brands`)
      },
      {
        path: '/add-product',
        element: <PrivateRoute><AddProduct></AddProduct></PrivateRoute>
      },
      {
        path: '/my-cart',
        element: <MyCart></MyCart>
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
      }
    ]
  }
])

export default router;