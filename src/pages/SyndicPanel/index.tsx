import { Search2Icon } from '@chakra-ui/icons';
import {
  Button,
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

import EmployeeProjectBox from '../../components/EmployeeProjectBox';
import PanelHeader from '../../components/PanelHeader';
import PendingProjectBox from '../../components/TabSubmittedProjects/PendingProjectBox';
import SyndicProjectBox from '../../components/SyndicProjectBox';

function SyndicPanel(): JSX.Element {
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
            Contratados
          </Tab>
        </TabList>
        <TabPanels h="100%">
          <TabPanel h="100%">
            <Flex direction="column" h="100%">
              <PanelHeader title="Painel dos síndicos">
                <Button rightIcon={<Search2Icon />}>
                  Listar projetos finalizados
                </Button>
              </PanelHeader>
              <Center h="50px" gap={2} alignSelf="start">
                <Text fontSize="xl">Projetos pendentes</Text>
              </Center>
              <Stack h="400px" spacing={3} overflowY="auto">
                <SyndicProjectBox title="COND/BLOCO/APT/NOME" />
                <SyndicProjectBox title="COND/BLOCO/APT/NOME" />
                <SyndicProjectBox title="COND/BLOCO/APT/NOME" />
                <SyndicProjectBox title="COND/BLOCO/APT/NOME" />
                <SyndicProjectBox title="COND/BLOCO/APT/NOME" />
              </Stack>
            </Flex>
          </TabPanel>
          <TabPanel h="100%">
            <Flex direction="column" h="100%">
              <PanelHeader title="Painel dos síndicos" />
              <Center h="50px" gap={2} alignSelf="start">
                <Text fontSize="xl">Projetos pendentes</Text>
              </Center>
              <Stack h="400px" spacing={3} overflowY="auto">
                <EmployeeProjectBox nome="Igor Monteiro" title="BLOCO/APT" />
                <EmployeeProjectBox nome="Igor Monteiro" title="BLOCO/APT" />
                <EmployeeProjectBox nome="Igor Monteiro" title="BLOCO/APT" />
                <EmployeeProjectBox nome="Igor Monteiro" title="BLOCO/APT" />
                <EmployeeProjectBox nome="Igor Monteiro" title="BLOCO/APT" />
                <EmployeeProjectBox nome="Igor Monteiro" title="BLOCO/APT" />
              </Stack>
            </Flex>
          </TabPanel>
        </TabPanels>
      </Flex>
    </Tabs>
  );
}

export default SyndicPanel;
