import { ChevronDownIcon } from '@chakra-ui/icons';
import {
  Center,
  Flex,
  Stack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button
} from '@chakra-ui/react';

import ADMInfosBox from '../../components/ADMInfosBox';
import CondominiumBox from '../../components/CondominiumBox';
import PanelHeader from '../../components/PanelHeader';
import PendingProjectBox from '../../components/PendingProjectBox';

function ADMPanel(): JSX.Element {
  return (
    <Tabs h="100%" variant="unstyled">
      <Flex
        align="center"
        direction={{
          base: 'column-reverse',
          md: 'row'
        }}
        h="100%"
      >
        <TabList
          w={{
            base: '100%',
            md: '300px'
          }}
          h={{
            base: '80px',
            md: '100%'
          }}
          flexDirection={{
            base: 'row',
            md: 'column'
          }}
          gap={2}
          justifyContent="center"
          borderRight="4px"
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
            <Flex direction="column" h="100%">
              <PanelHeader title="Painel administrativo" />
              <Center h="50px" gap={2} alignSelf="start">
                <Text fontSize="xl">Projetos pendentes</Text>
              </Center>
              <Stack h="400px" spacing={3} overflowY="auto">
                <PendingProjectBox title="COND/BLOCO/APT/NOME" />
                <PendingProjectBox title="COND/BLOCO/APT/NOME" />
                <PendingProjectBox title="COND/BLOCO/APT/NOME" />
                <PendingProjectBox title="COND/BLOCO/APT/NOME" />
                <PendingProjectBox title="COND/BLOCO/APT/NOME" />
                <PendingProjectBox title="COND/BLOCO/APT/NOME" />
              </Stack>
            </Flex>
          </TabPanel>
          <TabPanel h="100%">
            <Flex direction="column" h="100%">
              <PanelHeader title="Painel administrativo" subtitle="Usuários">
                <Menu>
                  <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                    Adicionar Novo
                  </MenuButton>
                  <MenuList>
                    <MenuItem>Associado</MenuItem>
                    <MenuItem>Condomínio</MenuItem>
                  </MenuList>
                </Menu>
              </PanelHeader>
              <Center h="50px" gap={2} alignSelf="start">
                <Text fontSize="xl">Lista de associados cadastrados</Text>
              </Center>
              <Stack h="150px" spacing={3} overflowY="auto">
                <ADMInfosBox
                  name="Igor Nathan Monteiro Santos"
                  email="igor@gmail.com"
                />
                <ADMInfosBox name="Dayvid Santana" email="dayvid@gmail.com" />
                <ADMInfosBox name="Breno Andrade" email="breno@gmail.com" />
              </Stack>
              <Center h="50px" gap={2} alignSelf="start">
                <Text fontSize="xl">Lista de condomínios</Text>
              </Center>
              <Stack h="200px" spacing={3} overflowY="auto">
                <CondominiumBox name="Jabotiana" />
                <CondominiumBox name="Grageru" />
                <CondominiumBox name="Rosa Elze" />
                <CondominiumBox name="Jardins" />
              </Stack>
            </Flex>
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
