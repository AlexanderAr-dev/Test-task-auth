import {useForm} from "@mantine/form";
import {Button, Group, TextInput} from "@mantine/core";
import {Card} from "../components/Card/Card.tsx";
import {useNavigate} from "react-router-dom";
import type {IUser} from "../app/types/IUser.ts";

export const Authorization = () => {
  const form = useForm({
    mode: "uncontrolled",
    initialValues: {
      email: "",
      password: "",
    },
    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Неправильная почта"),
      password: (value) => (value.length < 8 ? "Пароль не совпадет" : null),
    }
  })
  const navigate = useNavigate();

  const login = (values: IUser) => {
    const users = JSON.parse(localStorage.getItem("users") || "[]");

    const foundUser = users.find(
      (user: IUser) => user.email === values.email && user.password === values.password
    );

    if (!foundUser) {
      alert("Неверный email или пароль!");
      return;
    }

    localStorage.setItem("currentUser", JSON.stringify(foundUser));

    alert("Вы успешно вошли!");
    navigate("/profile");
  }

  return (
    <Card title={"Авторизация пользователя"}>
      <form onSubmit={form.onSubmit(values => login(values))}>
        <TextInput
          mb="md"
          withAsterisk
          label="Email"
          placeholder="your@email.com"
          key={form.key('email')}
          {...form.getInputProps('email')}
        />
        <TextInput
          mb="md"
          withAsterisk
          label="Password"
          placeholder="***********"
          key={form.key('password')}
          {...form.getInputProps('password')}
        />
        <Group justify="center">
          <Button onClick={() => navigate('/')} bg='gray'>На главную</Button>
          <Button type="submit">Подтвердить</Button>
        </Group>
      </form>
    </Card>
  )
}