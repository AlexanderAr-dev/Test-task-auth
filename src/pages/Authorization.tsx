import { useNavigate } from 'react-router-dom';
import { Button, Group, Text, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';

import { useLogin } from '../app/hooks/useLogin.ts';
import { Card } from '../components/Card/Card.tsx';

export const Authorization = () => {
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      email: '',
      password: '',
    },
    validate: {
      email: value => (/^\S+@\S+$/.test(value) ? null : 'Неправильная почта'),
      password: value => (value.length < 8 ? 'Пароль не совпадет' : null),
    },
  });
  const navigate = useNavigate();
  const { login, error } = useLogin();

  return (
    <Card title={'Авторизация пользователя'}>
      <form
        onSubmit={form.onSubmit(values => {
          login(values);
        })}
      >
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
          <Button onClick={() => navigate('/')} bg="gray">
            На главную
          </Button>
          <Button type="submit">Подтвердить</Button>
        </Group>
        {error && <Text c="red">{error}</Text>}
      </form>
    </Card>
  );
};
