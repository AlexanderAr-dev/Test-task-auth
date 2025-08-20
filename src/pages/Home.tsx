import {Button, Group} from "@mantine/core";
import {useNavigate} from "react-router-dom";
import {Card} from "../components/Card/Card.tsx";

export const Home = () => {
  const navigate = useNavigate();

  return (
    <Card title={"Главная страница"}>
      <Group justify="center">
        <Button onClick={() => navigate("/registration")}>Зарегестрироваться</Button>
        <Button onClick={() => navigate("/authorization")}>Авторизоваться</Button>
      </Group>
    </Card>
  )
}