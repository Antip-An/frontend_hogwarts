import GuestHome from "./GuestHome";
import UserHome from "./UserHome";
import AdminHome from "./AdminHome";
import { useLocation } from "react-router";
import useToken from "../hooks/useToken";

const Home = () => {
  const { loggedIn } = useToken();
  console.log(loggedIn);
  const location = useLocation();

  const pghome = !loggedIn && location.pathname === "/";

  return (
    <div>
      {pghome ? <GuestHome /> : null}
      {!pghome ? <UserHome /> : null}
    </div>
  )
};

export default Home;
