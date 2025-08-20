import { Authorization } from '../../pages/Authorization.tsx';
import { Home } from '../../pages/Home.tsx';
import { Profile } from '../../pages/Profile.tsx';
import { Registration } from '../../pages/Registration.tsx';

export const privateRoutes = [{ path: '/profile', component: Profile, exact: true }];

export const publicRoutes = [
  { path: '/login', component: Authorization, exact: true },
  { path: '/register', component: Registration, exact: true },
  { path: '/', component: Home, exact: true },
];
