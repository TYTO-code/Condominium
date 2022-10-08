import { AddIcon, DownloadIcon, ExternalLinkIcon } from '@chakra-ui/icons';
import {
  Button,
  Center,
  Flex,
  Grid,
  GridItem,
  Input,
  Stack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text
} from '@chakra-ui/react';

import InputFileUpload from '../../components/InputFileUpload';
import PanelHeader from '../../components/PanelHeader';
import SubmittedProjects from '../../components/SubmittedProjects';

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
          <TabPanel h="100%">
            <Flex direction="column" h="100%">
              <PanelHeader title="Painel do morador">
                <Button
                  rightIcon={<DownloadIcon />}
                  colorScheme="gray"
                  size="sm"
                >
                  Baixar modelo do laudo técnico
                </Button>
              </PanelHeader>
              <Stack spacing={3} flex={1} overflowY="auto">
                <Center h="50px" gap={2} alignSelf="start">
                  <Text fontSize="xl">Enviar projetos</Text>
                  <AddIcon w={4} h={4} />
                </Center>
                <Input
                  variant="outline"
                  borderColor="blue.200"
                  placeholder="Descrição"
                />
                <Grid
                  templateRows="repeat(3, 1fr)"
                  templateColumns="repeat(3, 1fr)"
                  gap={2}
                >
                  <GridItem
                    h="80px"
                    rowSpan={1}
                    colSpan={1}
                    border="2px"
                    borderColor="blue"
                    borderRadius={10}
                  >
                    <InputFileUpload label="Ordem de serviço assinada" />
                  </GridItem>
                  <GridItem
                    h="80px"
                    rowSpan={1}
                    colSpan={1}
                    border="2px"
                    borderColor="blue"
                    borderRadius={10}
                  >
                    <InputFileUpload label="Cronograma da obra" />
                  </GridItem>
                  <GridItem
                    h="80px"
                    rowSpan={1}
                    colSpan={1}
                    border="2px"
                    borderColor="blue"
                    borderRadius={10}
                  >
                    <InputFileUpload label="Projeto arquitetônico em meio digital" />
                  </GridItem>
                  <GridItem
                    h="80px"
                    rowSpan={1}
                    colSpan={1}
                    border="2px"
                    borderColor="blue"
                    borderRadius={10}
                  >
                    <InputFileUpload label="Planta baixa" />
                  </GridItem>
                  <GridItem
                    h="80px"
                    rowSpan={1}
                    colSpan={1}
                    border="2px"
                    borderColor="blue"
                    borderRadius={10}
                  >
                    <InputFileUpload label="Cortes e detalhes" />
                  </GridItem>
                  <GridItem
                    h="80px"
                    rowSpan={1}
                    colSpan={1}
                    border="2px"
                    borderColor="blue"
                    borderRadius={10}
                  >
                    <InputFileUpload label="Laudo técnico" />
                  </GridItem>

                  <GridItem
                    h="100px"
                    rowSpan={1}
                    colSpan={1}
                    border="2px"
                    borderColor="blue"
                    borderRadius={10}
                  >
                    <InputFileUpload label="RRT ou ART do responsável pela execução da obra" />
                  </GridItem>
                  <GridItem
                    h="100px"
                    rowSpan={1}
                    colSpan={1}
                    border="2px"
                    borderColor="blue"
                    borderRadius={10}
                  >
                    <InputFileUpload label="RRT ou ART do responsável pelo projeto arquitetônico" />
                  </GridItem>
                  <GridItem
                    h="100px"
                    rowSpan={1}
                    colSpan={1}
                    border="2px"
                    borderColor="blue"
                    borderRadius={10}
                  >
                    <InputFileUpload label="Documento de posse do imóvel (Escritura ou registro)" />
                  </GridItem>
                </Grid>
                <Button
                  rightIcon={<ExternalLinkIcon />}
                  colorScheme="gray"
                  size="sm"
                >
                  Enviar
                </Button>
              </Stack>
            </Flex>
          </TabPanel>
          <TabPanel>
            <p>two!</p>
          </TabPanel>
          <TabPanel h="100%">
            <SubmittedProjects />
          </TabPanel>
        </TabPanels>
      </Flex>
    </Tabs>
  );
}

export default ResidentsPanel;
