import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { ProfileContext } from '../context/ProfileContext.ts';
import type { IUser } from '../types/IUser.ts';

export const useLogin = () => {
  const navigate = useNavigate();
  const profile = useContext(ProfileContext);

  const [error, setError] = useState<string | null>(null);

  const login = (values: IUser) => {
    const users: IUser[] = JSON.parse(localStorage.getItem('users') || '[]');

    const foundUser = users.find(
      user => user.email === values.email && user.password === values.password,
    );

    if (!foundUser) {
      setError('Неверный email или пароль!');
      return false;
    }

    profile?.setUser(foundUser);
    setError(null);

    localStorage.setItem('currentUser', JSON.stringify(values));

    alert('Вы успешно вошли!');
    navigate('/profile');
    return true;
  };

  return { login, error };
};
