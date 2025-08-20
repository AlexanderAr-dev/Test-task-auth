import { useNavigate } from 'react-router-dom';
import { Button, Group } from '@mantine/core';

import { Card } from '../components/Card/Card.tsx';

export const Home = () => {
  const navigate = useNavigate();

  return (
    <Card title={'Главная страница'}>
      <Group justify="center">
        <Button onClick={() => navigate('/register')}>
          Зарегестрироваться
        </Button>
        <Button onClick={() => navigate('/login')}>
          Авторизоваться
        </Button>
      </Group>
    </Card>
  );
};
