import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Group, Text } from '@mantine/core';

import { ProfileContext } from '../app/context/ProfileContext.ts';
import { Card } from '../components/Card/Card.tsx';

export const Profile = () => {
  const profile = useContext(ProfileContext);
  const navigate = useNavigate();

  if (!profile?.user) {
    return (
      <Card title={'Профиль пользователя'}>
        <p>Вы не авторизованы</p>
      </Card>
    );
  }

  return (
    <Card title={'Профиль пользователя'}>
      <Text>Email: {profile.user.email}</Text>
      <Text>Пароль: {profile.user.password}</Text>
      <Group justify="center">
        <Button onClick={() => navigate('/')} bg="gray">
          На главную
        </Button>
        <Button onClick={profile?.logout}>Выйти из профиля</Button>
      </Group>
    </Card>
  );
};
