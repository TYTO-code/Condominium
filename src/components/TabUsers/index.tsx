import { useState } from 'react';

import { ChevronDownIcon } from '@chakra-ui/icons';
import {
  Button,
  Center,
  Flex,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Stack,
  Text
} from '@chakra-ui/react';

import ADMInfosBox from '../ADMInfosBox';
import CondominiumBox from '../CondominiumBox';
import CreateAdm from '../CreateAdm';
import CreateCondominium from '../CreateCondominium';
import PanelHeader from '../PanelHeader';

function TabUsers(): JSX.Element {
  const [isAddAdmModal, setIsAddAdmModal] = useState(true);
  const [isAddCondominiumModal, setIsAddCondominiumModal] = useState(false);

  function handleOpenAddAdmModal(): void {
    setIsAddAdmModal(true);
    setIsAddCondominiumModal(false);
  }

  function handleOpenAddCondominiumModal(): void {
    setIsAddCondominiumModal(true);
    setIsAddAdmModal(false);
  }
  return (
    <Flex direction="column" h="100%">
      <PanelHeader title="Painel administrativo" subtitle="Usuários">
        <Menu>
          <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
            Adicionar Novo
          </MenuButton>
          <MenuList>
            <MenuItem onClick={() => handleOpenAddAdmModal()}>
              Associado
            </MenuItem>
            <MenuItem onClick={() => handleOpenAddCondominiumModal()}>
              Condomínio
            </MenuItem>
          </MenuList>
        </Menu>
      </PanelHeader>
      <CreateCondominium />
      {/* <Center h="50px" gap={2} alignSelf="start">
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
      </Stack> */}
    </Flex>
  );
}

export default TabUsers;
