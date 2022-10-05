import { Box, Flex } from '@chakra-ui/react';

import Footer from './components/Footer';
import TopBar from './components/TopBar';
import ResidentsPanel from './pages/ResidentsPanel';

function App(): JSX.Element {
  return (
    <Flex direction="column" w="100%" h="100vh">
      <TopBar />
      <Box w="100%" flex={1}>
        <ResidentsPanel />
      </Box>
      <Footer />
    </Flex>
  );
}

export default App;
