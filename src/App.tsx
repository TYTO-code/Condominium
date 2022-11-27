import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import { Box, Flex } from '@chakra-ui/react';

import Footer from './components/Footer';
import TopBar from './components/TopBar';
import ADMPanel from './pages/ADMPanel';
import Login from './pages/Login';
import ResidentsPanel from './pages/ResidentsPanel';
import SyndicPanel from './pages/SyndicPanel';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />
  },
  {
    path: '/painel-associado',
    element: <ADMPanel />
  },
  {
    path: '/painel-morador',
    element: <ResidentsPanel />
  },
  {
    path: '/painel-sindico',
    element: <SyndicPanel />
  }
]);

function App(): JSX.Element {
  return (
    <Flex direction="column" w="100%" h="100vh">
      <TopBar />
      <Box w="100%" flex={1}>
        <RouterProvider router={router} />
      </Box>
      <Footer />
    </Flex>
  );
}

export default App;
