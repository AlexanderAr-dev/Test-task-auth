import {Card as MantineCard, type CardProps as MantineCardProps, Flex} from "@mantine/core"
import type {ReactNode} from "react";

interface CardProps extends MantineCardProps {
  children: ReactNode;
  title: string;
}

export const Card = ({ children, title, ...props }: CardProps) => {
  return (
    <MantineCard {...props}
      shadow="sm"
      padding="lg"
      radius="md"
      withBorder
      m="lg"
      w={{ base: 800, sm: 400, md: 600 }}
    >
      <Flex
        mih={50}
        gap="lg"
        justify="center"
        align="center"
        direction="column"
      >
        <h1>{title}</h1>
        {children}
      </Flex>
    </MantineCard>
  );
};