import { Carousel, Caption, Button, Nav } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router";
import { Link } from "react-router-dom";
import "./css/home.css";
import logo from "../assets/logo.png";
import foto1 from "../assets/1.jpg";
import foto2 from "../assets/2.jpg";
import foto3 from "../assets/3.jpg";
import useToken from "../hooks/useToken";

const Home = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { loggedIn } = useToken();

  const onLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <Carousel>
      <Carousel.Item>
        <img id="foto" src={foto1} />
        <Carousel.Caption>
          <img id="logo" src={logo} />
          <h1>Школа чародейства и волшебства Хогвартс</h1>
          <h4>Онлайн-курсы магических дисциплин</h4>
          {!loggedIn ? (
            <Button variant="light" as={Link} to="/login" disabled={pathname === "/login"}>
              Вход
            </Button>
          ) : (
            <Button onClick={onLogout}>Выход</Button>
          )}
          {!loggedIn ? (
            <Button variant="light" as={Link} to="/registr" disabled={pathname === "/registr"}>
              Регистрация
            </Button>
          ) : (
            <Button onClick={onLogout}>Регистрация</Button>
          )}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img id="foto" src={foto2} />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <Button variant="light">Пробный урок</Button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img id="foto" src={foto3} />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Home;
