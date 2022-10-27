import { Flex, Stack } from '@chakra-ui/react';

import MessageBox from '../MessageBox';
import PanelHeader from '../PanelHeader';

function TabMessages(): JSX.Element {
  return (
    <Flex direction="column" h="100%">
      <PanelHeader
        title="Painel administrativo"
        subtitle="Mensagens"
      ></PanelHeader>
      <Stack h="500px" spacing={3} overflowY="auto">
        <MessageBox message="Mensagem teste" infos="Jabotiana" />
        <MessageBox message="Mensagem teste" infos="Grageru" />
        <MessageBox message="Mensagem teste" infos="Rosa Elze" />
        <MessageBox message="Mensagem teste" infos="Jardins" />
      </Stack>
    </Flex>
  );
}

export default TabMessages;
