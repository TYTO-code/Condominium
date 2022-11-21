import { Box, Flex } from '@chakra-ui/react';

import Footer from './components/Footer';
import TopBar from './components/TopBar';
import ADMPanel from './pages/ADMPanel';
import Login from './pages/Login';
import ResidentsPanel from './pages/ResidentsPanel';
import SyndicPanel from './pages/SyndicPanel';

function App(): JSX.Element {
  return (
    <Flex direction="column" w="100%" h="100vh">
      <TopBar />
      <Box w="100%" flex={1}>
        <Login />
      </Box>
      <Footer />
    </Flex>
  );
}

export default App;
