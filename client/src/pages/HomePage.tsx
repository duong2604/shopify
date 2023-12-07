import { Outlet } from "react-router-dom";
import { Navbar } from "../components/index";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};
export default HomePage;
