import { type ReactNode, useContext } from 'react';
import { Card as MantineCard, type CardProps as MantineCardProps, Flex, Text } from '@mantine/core';

import { ProfileContext } from '../../app/context/ProfileContext.ts';

interface CardProps extends MantineCardProps {
  children: ReactNode;
  title: string;
}

export const Card = ({ children, title, ...props }: CardProps) => {
  const profile = useContext(ProfileContext);
  return (
    <MantineCard
      {...props}
      shadow="sm"
      padding="lg"
      radius="md"
      withBorder
      m="lg"
      w={{ base: 800, sm: 400, md: 600 }}
    >
      <Flex mih={50} gap="lg" justify="center" align="center" direction="column">
        {profile?.user ? (
          <Text>Авторизованный пользователь: {profile.user.email}</Text>
        ) : (
          <Text>Пользователь не найден</Text>
        )}
        <h1>{title}</h1>
        {children}
      </Flex>
    </MantineCard>
  );
};
