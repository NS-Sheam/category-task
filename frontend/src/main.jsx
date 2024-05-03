import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayout from './layouts/MainLayout.jsx';
import Products from './pages/Products.jsx';
import SingleProduct from './pages/SingleProduct.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Products />
      },
      {
        path: "/order",
        element: <div>Order</div>
      },

      {
        path: "/card",
        element: <div>Payment Details</div>
      },
      {
        path: "/contact",
        element: <div>Contact</div>
      },
      {
        path: "/about",
        element: <div>About</div>
      },
      {
        path: "/setting",
        element: <div>Setting</div>
      },

    ],

  },
  {
    path: "/:id",
    element: <SingleProduct />,
    loader: async ({ params }) => {
      const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/product/${params.id}`);
      const data = await res.json();


      const pCategoryData = await fetch(`${import.meta.env.VITE_BACKEND_URL}/product/category/${data.data.category._id}`);


      const productByCategory = await pCategoryData.json()

      return {
        productData: data.data,
        relatedProducts: productByCategory.data
      }
    }
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
