import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Page = () => {
  const loggedIn = true;
  const page = loggedIn ? (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  ) : (
    <div>
      <Outlet />
      <Footer />
    </div>
  );
  return page;
};

export default Page;
