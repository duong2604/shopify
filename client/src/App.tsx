import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Cart, Checkout, HomePage, Login, Register } from "./pages";
import { Banner, ProductList } from "./components";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    children: [
      {
        index: true,
        element: <Banner />,
      },
      {
        path: "/products",
        element: <ProductList />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/checkout",
        element: <Checkout />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};
export default App;
