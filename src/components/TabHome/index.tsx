import { ChevronDownIcon, RepeatClockIcon } from '@chakra-ui/icons';
import {
  Button,
  ButtonGroup,
  Center,
  Flex,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Stack,
  Text
} from '@chakra-ui/react';

import PanelHeader from '../PanelHeader';

function TabHome(): JSX.Element {
  return (
    <Flex direction="column" h="100%">
      <PanelHeader
        title="Painel administrativo"
        subtitle="Visão geral"
      ></PanelHeader>
      <Center h="50px" gap={2} alignSelf="start">
        <Text fontSize="xl">Projetos recebidos hoje:</Text>
      </Center>
      <Stack h="200px" spacing={3} overflowY="auto" bg="gray.200">
        <h1>Projetos recebidos</h1>
      </Stack>
      <Center h="50px" gap={2} alignSelf="start">
        <Text fontSize="xl">Mensagens recebidas hoje:</Text>
      </Center>
      <Stack h="200px" spacing={3} overflowY="auto" bg="gray.200">
        <h1>Mensagens recebidas</h1>
      </Stack>
    </Flex>
  );
}

export default TabHome;
