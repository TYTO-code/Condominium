import { Box, Flex } from '@chakra-ui/react';

import Footer from './components/Footer';
import TopBar from './components/TopBar';

function App(): JSX.Element {
  return (
    <Flex direction="column" w="100%" h="100vh">
      <TopBar />
      <Box w="100%" flex={1}>
        <h1>Hello, condominium</h1>
      </Box>
      <Footer />
    </Flex>
  );
}

export default App;
