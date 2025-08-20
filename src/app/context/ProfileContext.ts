import { createContext } from 'react';

import type { IUser } from '../types/IUser.ts';

interface ProfileContextType {
  user: IUser | null;
  setUser: (user: IUser | null) => void;
  logout: () => void;
}

export const ProfileContext = createContext<ProfileContextType | null>(null);
