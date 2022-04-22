import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useLocation } from "react-router";
import useToken from "../hooks/useToken";

const Page = () => {
  const { loggedIn } = useToken(); 
  console.log(loggedIn);
  const location = useLocation();

  const hideElements = !loggedIn && location.pathname === "/";

  return (
    <div>
      {!hideElements ? <Header /> : null}
      <Outlet />
      {!hideElements ? <Footer /> : null}
    </div>
  );
};

export default Page;
