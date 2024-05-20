import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import Layout from "./Layout/Layout.jsx";
import Home from "./Pages/Home/Home.jsx";
import Cart from "./Pages/Cart/Cart.jsx";
import Products from "./Pages/Products/Products.jsx";
import LoginSignup from "./Pages/LoginSignup/LoginSignup.jsx";
import ShopCategory from "./Pages/ShopCategory/ShopCategory.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Navigate to="/home" replace />,
      },
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "loginsignup",
        element: <LoginSignup />,
      },
      {
        path: "products",
        element: <Products />,
      },
      {
        path: "products/:productId",
        element: <Products />,
      },
      {
        path: "mens",
        element: <ShopCategory category="mens" />,
      },
      {
        path: "womens",
        element: <ShopCategory category="womens" />,
      },
      {
        path: "kids",
        element: <ShopCategory category="kids" />,
      },
      {
        path: "*",
        element: <Navigate to="/" replace />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
