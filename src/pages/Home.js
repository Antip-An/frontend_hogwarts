import GuestHome from "./GuestHome";
import UserHome from "./UserHome";
import { useLocation } from "react-router";
import useToken from "../hooks/useToken";
//import AdminHome from "./AdminHome";

const Home = (props) => {
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
