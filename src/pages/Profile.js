import { Image } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import slide1 from "../assets/logo.png";
import useLoginGuard from "../hooks/useLoginGuard"; 

const Profile = () => {
    useLoginGuard({ loggedIn: false, path: "/" });
    return (
        <p>profile</p>
    )
}

export default Profile;