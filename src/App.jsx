import { Children } from "react";
import Layout from "./components/Layout.jsx";
import MainPage from "./pages/1-index/MainPage.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CategoriesPage from "./pages/2-categories/CategoriesPage.jsx";
import ProductsPage from "./pages/3-products-page/ProductsPage.jsx";
import ProductDetailPage from "./pages/4-product-detail/ProductDetailPage.jsx";
import CheckoutPage from "./pages/5-checkout/CheckoutPage.jsx";
import CartPage from "./pages/6-cart/CartPage.jsx";
import AuthPage from "./pages/7-auth/AuthPage.jsx";
import DashboardPage from "./pages/8-dashboard-page/DashboardPage.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    // errorElement: <ErrorPage />, // مستقبلاً سنضع هنا صفحة 404 احترافية
    children: [
      {
        index: true,
        element: <MainPage />,
      },

      {
        path: "vendor/:slug",
        element: (
          <div className="container mt-5 text-white">
            <h2>Vendor Profile (Coming Soon)</h2>
          </div>
        ),
      },
      {
        path: "categories/",
        element: <CategoriesPage />,
      },
      {
        path: "category/:category_slug",
        element: <ProductsPage />,
      },

      { path: "products/",
         element: <ProductsPage /> },
      {
        path: "product/:slug",
        element: <ProductDetailPage />,
      },
      {
        path:'checkout/',
        element:<CheckoutPage/>,
      },
      {
        path: "cart/",
        element: <CartPage/>
      },
      {
        path:'login/',
        element:<AuthPage/>
      },
      {
        path:'register/',
        element:<AuthPage/>
      },
    {
      path:'dashboard/',
      element:<DashboardPage/>
    }
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
