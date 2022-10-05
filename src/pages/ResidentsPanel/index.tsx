import { DownloadIcon } from '@chakra-ui/icons';
import {
  Button,
  Flex,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs
} from '@chakra-ui/react';

import PanelHeader from '../../components/PanelHeader';

function ResidentsPanel(): JSX.Element {
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
            Painel do morador
          </Tab>
          <Tab bg="gray.300" _selected={{ bg: 'gray.400' }}>
            Projetos em reforma
          </Tab>
          <Tab bg="gray.300" _selected={{ bg: 'gray.400' }}>
            Projetos enviados
          </Tab>
        </TabList>

        <TabPanels h="100%">
          <TabPanel>
            <PanelHeader title="Painel dos moradores">
              <Button rightIcon={<DownloadIcon />} colorScheme="gray" size="sm">
                Baixar modelo do laudo técnico
              </Button>
            </PanelHeader>
          </TabPanel>
          <TabPanel>
            <p>two!</p>
          </TabPanel>
          <TabPanel>
            <p>three!</p>
          </TabPanel>
        </TabPanels>
      </Flex>
    </Tabs>
  );
}

export default ResidentsPanel;
