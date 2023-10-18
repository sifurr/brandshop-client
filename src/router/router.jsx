import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Root from "../pages/Home/Root";
import AddProduct from "../pages/AddProduct/AddProduct";
import MyCart from "../pages/MyCart/MyCart";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/add-product',
        element: <AddProduct></AddProduct>
      },
      {
        path: '/my-cart',
        element: <MyCart></MyCart>
      }
    ]
  }
])

export default router;