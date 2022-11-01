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
import TabHome from '../../components/TabHome';
import TabMessages from '../../components/TabMessages';
import TabSubmittedProjects from '../../components/TabSubmittedProjects';
import TabUsers from '../../components/TabUsers';

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
            Recebidos
          </Tab>
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
            <TabHome />
          </TabPanel>
          <TabPanel h="100%">
            <TabSubmittedProjects />
          </TabPanel>
          <TabPanel h="100%">
            <TabUsers />
          </TabPanel>
          <TabPanel h="100%">
            <TabMessages />
          </TabPanel>
        </TabPanels>
      </Flex>
    </Tabs>
  );
}

export default ADMPanel;
