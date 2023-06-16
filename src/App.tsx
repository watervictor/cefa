import { RouterProvider } from "react-router-dom";
import element from "./routes";

function App() {
  return (
    <>
      <RouterProvider router={element} />
    </>
  );
}

export default App;
