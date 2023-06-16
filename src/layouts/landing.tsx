import { Outlet } from "react-router-dom";
import { Header } from "../blocks";

const Landing = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};
export default Landing;
