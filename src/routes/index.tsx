import { createBrowserRouter } from "react-router-dom";
import { Landing } from "../layouts";
import { Home } from "../pages";

const element = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
]);

export default element;
