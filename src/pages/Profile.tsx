import {Card} from "../components/Card/Card.tsx";
import {Button, Text} from "@mantine/core"
import {useNavigate} from "react-router-dom";

export const Profile = () => {
  const user = JSON.parse(localStorage.getItem("currentUser") || "null");
  const navigate = useNavigate();

  if (!user) {
    return (
      <Card title={"Профиль пользователя"}>
        <p>Вы не авторизованы</p>
      </Card>
    );
  }

  return (
    <Card title={"Профиль пользователя"}>
      <Text>Email: {user.email}</Text>
      <Text>Пароль: {user.password}</Text>
      <Button onClick={() => navigate("/")}>Вернуться на главную</Button>
    </Card>
  );
}