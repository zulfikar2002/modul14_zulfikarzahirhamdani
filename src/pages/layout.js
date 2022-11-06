import { Outlet, Link } from "react-router-dom";
import Title from "../komponen/Title";
import Footer from "../komponen/footer";


const Layout = () => {
  return (
    <>

      <Title />
      <Outlet />
      <Footer />
    </>
  )
};

export default Layout;