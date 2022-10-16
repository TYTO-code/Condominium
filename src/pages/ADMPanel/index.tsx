import {
  Center,
  Flex,
  Stack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text
} from '@chakra-ui/react';

import PanelHeader from '../../components/PanelHeader';
import PendingProjectBox from '../../components/PendingProjectBox';

function ADMPanel(): JSX.Element {
  return (
    <Tabs h="100%" variant="unstyled">
      <Flex align="center" h="100%">
        <TabList
          w="300px"
          flexDirection="column"
          gap={2}
          justifyContent="center"
          borderRight="4px"
          h="100%"
          borderColor="gray.400"
        >
          <Tab bg="gray.300" _selected={{ bg: 'gray.400' }}>
            Envios de projetos
          </Tab>
          <Tab bg="gray.300" _selected={{ bg: 'gray.400' }}>
            Usuários
          </Tab>
          <Tab bg="gray.300" _selected={{ bg: 'gray.400' }}>
            Mensagens
          </Tab>
        </TabList>

        <TabPanels h="100%">
          <TabPanel h="100%">
            <Flex direction="column">
              <PanelHeader title="Painel administrativo" />
              <Center h="50px" gap={2} alignSelf="start">
                <Text fontSize="xl">Projetos pendentes</Text>
              </Center>
              <Stack spacing={3} overflowY="auto">
                <PendingProjectBox title="COND/BLOCO/APT/NOME" />
                <PendingProjectBox title="COND/BLOCO/APT/NOME" />
                <PendingProjectBox title="COND/BLOCO/APT/NOME" />
              </Stack>
            </Flex>
          </TabPanel>
          <TabPanel h="100%">
            <h1>Usuários</h1>
          </TabPanel>
          <TabPanel h="100%">
            <h1>Mensagens</h1>
          </TabPanel>
        </TabPanels>
      </Flex>
    </Tabs>
  );
}

export default ADMPanel;
