import { useState } from 'react';

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

import CondominiumBox from '../CondominiumBox';
import PanelHeader from '../PanelHeader';
import ADMInfosBox from './ADMInfosBox';
import CreateAdm from './CreateAdm';
import CreateCondominium from './CreateCondominium';

function TabUsers(): JSX.Element {
  const [isAddAdmModal, setIsAddAdmModal] = useState(false);
  const [isAddCondominiumModal, setIsAddCondominiumModal] = useState(false);

  function handleOpenAddAdmModal(): void {
    setIsAddAdmModal(true);
    setIsAddCondominiumModal(false);
  }

  function handleOpenAddCondominiumModal(): void {
    setIsAddCondominiumModal(true);
    setIsAddAdmModal(false);
  }

  function handleResetStatesModal(): void {
    setIsAddCondominiumModal(false);
    setIsAddAdmModal(false);
  }

  return (
    <Flex direction="column" h="100%">
      <PanelHeader title="Painel administrativo" subtitle="Usuários">
        <Menu>
          <ButtonGroup>
            <Button onClick={() => handleResetStatesModal()}>
              <RepeatClockIcon />
            </Button>
            <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
              Adicionar Novo
            </MenuButton>
          </ButtonGroup>
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
      {isAddAdmModal && <CreateAdm />}
      {isAddCondominiumModal && <CreateCondominium />}
      {!isAddAdmModal && !isAddCondominiumModal && (
        <>
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
        </>
      )}
    </Flex>
  );
}

export default TabUsers;
