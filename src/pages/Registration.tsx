import {useForm} from "@mantine/form";
import {Button, Group, TextInput} from "@mantine/core";
import {Card} from "../components/Card/Card.tsx";
import { useNavigate } from "react-router-dom";
import type {IUser} from "../app/types/IUser.ts";

export const Registration = () => {
  const form = useForm({
    mode: "uncontrolled",
    initialValues: {
      email: "",
      password: "",
    },
    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Неправильная почта"),
      password: (value) => (value.length < 8 ? "Пароль должен быть 8 символов" : null),
    }
  })
  const navigate = useNavigate();

  const register = (values: IUser) => {
    const users = JSON.parse(localStorage.getItem("users") || "[]");

    if (users.find((user: IUser) => user.email === values.email)) {
      alert("Пользователь с такой почтой уже существует!");
      return;
    }

    users.push(values);
    localStorage.setItem("users", JSON.stringify(users));

    alert("Регистрация успешна!");
    navigate("/authorization");
  };

  return (
    <Card title={"Регистрация пользователя"}>
      <form onSubmit={form.onSubmit(values => {register(values)})}>
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
          <Button onClick={() => navigate('/')} bg="gray">На главную</Button>
          <Button type="submit">Подтвердить</Button>
        </Group>
      </form>
    </Card>
  )
}