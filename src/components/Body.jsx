import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Browser from "../pages/Browser";
import Login from "../pages/Login";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/browser",
    element: <Browser />,
  },
]);

function Body() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default Body;
