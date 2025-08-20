import { Center, Flex } from '@mantine/core';

import { AppRouter } from './app/router/AppRouter/AppRouter.tsx';
import { Navigation } from './components/Navigation/Navigation.tsx';

function App() {
  return (
    <Center>
      <Flex gap="xs" justify="center" align="center" direction="column" wrap="wrap">
        <Navigation />
        <AppRouter />
      </Flex>
    </Center>
  );
}

export default App;
