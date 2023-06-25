import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import { lazy, Suspense } from "react";
import Registration from "../components/auth/Registration";
import SignIn from "../components/auth/SignIn";
import HomeLoading from "../components/Loading/HomeLoading";
import CategoryAllProduct from "../components/CategoryAllProduct/CategoryAllProduct";
import AllSubCategory from "../components/AllSubCategory/AllSubCategory";
import ProductDetail from "../components/productDetails/ProductDetail";
import Reset from "../pages/Reset";
import ProductCheckOut from "../pages/ProductCheckOut";
import CheckoutInformation from "../pages/CheckoutInformation";
const Home = lazy(() => import("../pages/Home"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: (
            <Suspense fallback={<HomeLoading />}>
              <Home />
            </Suspense>

        ),
      },
      {
        path: "login",
        element: <SignIn />,
      },
      {
        path: "/reset",
        element: <Reset/>,
      },
      {
        path: "/registration",
        element: <Registration />,
      },
      {
        path: "/allProducts/:productType",
        element: (<Suspense fallback={<HomeLoading />}>
          <CategoryAllProduct />,
        </Suspense>)
      },
      {
        path: "/sub_category/:subCat",
        element: (
          <Suspense fallback={<HomeLoading />}>
            <AllSubCategory />
          </Suspense>),
      },
      {
        path: "/product/:id",
        element: <ProductDetail />,
      },
      {
        path: "/order/product",
        element: <ProductCheckOut/>,
      },
      {
        path: "/order/product/Information",
        element: <CheckoutInformation/>,
      },
    ],
  },
]);
export default router