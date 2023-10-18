import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Root from "../pages/Home/Root";
import AddProduct from "../pages/AddProduct/AddProduct";
import MyCart from "../pages/MyCart/MyCart";
import Brand from "../pages/Brand/Brand";
import AddBrand from "../pages/AddBrand/AddBrand";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: ()=>fetch(`http://localhost:5000/products`)
      },
      {
        path: '/add-product',
        element: <AddProduct></AddProduct>
      },
      {
        path: '/my-cart',
        element: <MyCart></MyCart>
      },
      {
        path: '/brand/:id',
        element: <Brand></Brand>
      },
      {
        path: '/add-brand',
        element: <AddBrand></AddBrand>
      }
    ]
  }
])

export default router;