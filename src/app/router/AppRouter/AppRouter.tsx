import { useContext } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import { privateRoutes, publicRoutes } from '../../constants/routes.ts';
import { ProfileContext } from '../../context/ProfileContext.ts';

export const AppRouter = () => {
  const profileAuth = useContext(ProfileContext);

  return (
    <Routes>
      {publicRoutes.map(({ path, component: Component }) => (
        <Route key={path} path={path} element={<Component />} />
      ))}

      {privateRoutes.map(({ path, component: Component }) => (
        <Route
          key={path}
          path={path}
          element={profileAuth?.user ? <Component /> : <Navigate to="/login" />}
        />
      ))}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};
