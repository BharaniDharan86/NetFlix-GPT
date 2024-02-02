import { Provider } from "react-redux";
import Body from "./components/Body";
import store from "./utils/store";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./pages/Login";
import Browser from "./pages/Browser";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/browser",
    element: <Browser />,
  },
]);
const App = () => {
  return (
    <RouterProvider router={router}>
      <Provider store={store}>
        <div>
          <Body />
        </div>
      </Provider>
    </RouterProvider>
  );
};

export default App;
