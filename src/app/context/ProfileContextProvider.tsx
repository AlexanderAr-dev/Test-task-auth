import { type FC, type ReactNode, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import type { IUser } from '../types/IUser.ts';

import { ProfileContext } from './ProfileContext.ts';

interface ProfileContextProviderProps {
  children: ReactNode;
}

export const ProfileContextProvider: FC<ProfileContextProviderProps> = ({ children }) => {
  const [user, setUser] = useState<IUser | null>(() => {
    const currentUser = localStorage.getItem('currentUser');
    if (!currentUser) return null;

    return JSON.parse(currentUser) as IUser;
  });

  const navigate = useNavigate();
  const logout = () => {
    setUser(null);
    localStorage.removeItem('currentUser');
    navigate('/');
  };

  return (
    <ProfileContext.Provider value={{ user, setUser, logout }}>{children}</ProfileContext.Provider>
  );
};
