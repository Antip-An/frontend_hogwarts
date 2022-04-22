import { useState } from "react";

import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

import "./css/registr.css";
import { useNavigate } from "react-router";
import { postData } from "../utils/network";
import useLoginGuard from "../hooks/useLoginGuard";

const RegistrPage = () => {
  useLoginGuard({ loggedIn: true, path: "/" });
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const onLogin = async () => {
    const response = await postData("/users/login", { email, password });

    if (!response.success) {
      alert(response.message);
      if (response.code !== "NETWORK_ERROR") setPassword("");
      return;
    }

    localStorage.setItem("token", response.token);
    navigate("/");
  };

  return (
    <Container>
      <Row>
        <Col md={3} sm={0} />
        <Col md={6} sm={12}>
          <Card style={{ marginTop: 50 }}>
            <Card.Body>
              <Card.Title>Регистрация</Card.Title>
              <Form>
                <Form.Group className="reg-fg">
                  <Form.Label>Адрес электронной почты</Form.Label>
                  <Form.Control
                    type="email"
                    id="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                  />
                </Form.Group>
                <Form.Group className="reg-fg">
                  <Form.Label>Логин</Form.Label>
                  <Form.Control
                    type="login"
                    id="login"
                    value={login}
                    onChange={(event) => setLogin(event.target.value)}
                  />
                </Form.Group>
                <Form.Group className="reg-fg">
                  <Form.Label>Пароль</Form.Label>
                  <Form.Control
                    type="password"
                    id="password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                  />
                </Form.Group>
                <Form.Group className="reg-fg">
                  <Form.Label>Повторите пароль</Form.Label>
                  <Form.Control
                    type="password"
                    id="password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                  />
                </Form.Group>
              </Form>
              <Button onClick={onLogin}>Зарегистрироваться</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3} sm={0} />
      </Row>
    </Container>
  );
};

export default RegistrPage;