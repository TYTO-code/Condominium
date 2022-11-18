import { Center, Flex, Stack, Text } from '@chakra-ui/react';

import PanelHeader from '../PanelHeader';
import PendingProjectBox from './PendingProjectBox';

function TabSubmittedProjects(): JSX.Element {
  return (
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
  );
}

export default TabSubmittedProjects;
