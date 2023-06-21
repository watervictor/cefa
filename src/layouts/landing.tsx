import { Outlet } from "react-router-dom";
import { Footer, Header } from "../blocks";

const Landing = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};
export default Landing;
