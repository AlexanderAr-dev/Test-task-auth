import { useNavigate } from 'react-router-dom';

import type { IUser } from '../types/IUser.ts';

export const useRegister = () => {
  const navigate = useNavigate();
  const users: IUser[] = JSON.parse(localStorage.getItem('users') || '[]');

  const register = (values: IUser) => {
    if (users.find((user: IUser) => user.email === values.email)) {
      alert('Пользователь с такой почтой уже существует!');
      return;
    }

    users.push(values);
    localStorage.setItem('users', JSON.stringify(users));

    alert('Регистрация успешна!');
    navigate('/login');
  };

  return { register };
};
