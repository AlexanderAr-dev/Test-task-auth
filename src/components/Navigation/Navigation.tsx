import { Fragment, useContext, useMemo } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Tabs } from '@mantine/core';

import { ProfileContext } from '../../app/context/ProfileContext.ts';

export const Navigation = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const profile = useContext(ProfileContext);
  const authTabs = useMemo(
    () => [
      <Tabs.Tab value="register" key="register">
        Регистрация
      </Tabs.Tab>,
      <Tabs.Tab value="login" key="login">
        Авторизация
      </Tabs.Tab>,
    ],
    [],
  );
  const publicTabs = useMemo(
    () => [
      <Tabs.Tab value="main" key="main">
        Главная
      </Tabs.Tab>,
    ],
    [],
  );
  const privateTabs = useMemo(
    () => [
      <Tabs.Tab value="profile" key="profile">
        Профиль
      </Tabs.Tab>,
    ],
    [],
  );

  const currentTab = location.pathname === '/' ? 'main' : location.pathname.replace('/', '');

  return (
    <Tabs value={currentTab} onChange={val => navigate(val === 'main' ? '/' : `/${val}`)} mt={15}>
      <Tabs.List>
        {profile?.user && (
          <Fragment>
            {publicTabs}
            {privateTabs}
          </Fragment>
        )}
        {!profile?.user && (
          <Fragment>
            {publicTabs}
            {authTabs}
          </Fragment>
        )}
      </Tabs.List>
    </Tabs>
  );
};
