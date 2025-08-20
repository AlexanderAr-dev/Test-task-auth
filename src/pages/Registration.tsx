import { useNavigate } from 'react-router-dom';
import { Button, Group, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';

import { useRegister } from '../app/hooks/useRegister.ts';
import { Card } from '../components/Card/Card.tsx';

export const Registration = () => {
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      email: '',
      password: '',
    },
    validate: {
      email: value => (/^\S+@\S+$/.test(value) ? null : 'Неправильная почта'),
      password: value => (value.length < 8 ? 'Пароль должен быть 8 символов' : null),
    },
  });
  const navigate = useNavigate();
  const { register } = useRegister();

  return (
    <Card title={'Регистрация пользователя'}>
      <form
        onSubmit={form.onSubmit(values => {
          register(values);
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
      </form>
    </Card>
  );
};
