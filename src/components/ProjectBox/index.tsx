import { useState } from 'react';

import { AddIcon, CloseIcon, InfoIcon } from '@chakra-ui/icons';
import {
  Button,
  Center,
  Flex,
  Text,
  Tooltip,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  ButtonGroup,
  TableContainer,
  Stack,
  Input,
  Table,
  TableCaption,
  Thead,
  Tr,
  Th,
  Tbody,
  Tfoot,
  Td
} from '@chakra-ui/react';
import './styles.css';

interface ProjectBoxProps {
  children?: JSX.Element;
  title: string;
}
function ProjectBox({ children, title }: ProjectBoxProps): JSX.Element {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isAddEmployeeModal, setAddEmployeeModal] = useState(false);

  function handleOpenCreateEmployee(): void {
    setAddEmployeeModal(true);
    onOpen();
  }

  function handleCloseModal(): void {
    setAddEmployeeModal(false);
    onClose();
  }

  return (
    <Flex
      w="100%"
      mt="16px"
      p={2}
      direction="row"
      justifyContent="space-around"
      alignItems="center"
      bg="gray.300"
    >
      <Modal isOpen={isOpen} onClose={() => handleCloseModal()}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <h1>
              {isAddEmployeeModal ? 'Adicionar funcionário' : 'Funcionários'}
            </h1>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {isAddEmployeeModal ? (
              <Stack spacing={4}>
                <Input
                  variant="outline"
                  borderColor="blue.200"
                  placeholder="Nome"
                />
                <Input
                  variant="outline"
                  borderColor="blue.200"
                  placeholder="Função"
                />
              </Stack>
            ) : (
              <TableContainer>
                <Table variant="simple" colorScheme="teal">
                  <Thead>
                    <Tr>
                      <Th>Nome</Th>
                      <Th>Função</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    <Tr>
                      <Td>Dayvid Santana</Td>
                      <Td>Programador de sistemas</Td>
                    </Tr>
                    <Tr>
                      <Td>Breno Andrade</Td>
                      <Td>Programador de sistemas</Td>
                    </Tr>
                    <Tr>
                      <Td>Igor Monteiro</Td>
                      <Td>Programador de sistemas</Td>
                    </Tr>
                  </Tbody>
                </Table>
              </TableContainer>
            )}
          </ModalBody>

          <ModalFooter>
            {isAddEmployeeModal ? (
              <ButtonGroup>
                <Button
                  colorScheme="red"
                  mr={3}
                  variant="ghost"
                  onClick={onClose}
                >
                  Cancelar
                </Button>
                <Button colorScheme="green">Adicionar</Button>
              </ButtonGroup>
            ) : (
              <Button
                colorScheme="red"
                mr={3}
                variant="ghost"
                onClick={onClose}
              >
                Fechar
              </Button>
            )}
          </ModalFooter>
        </ModalContent>
      </Modal>
      <Text as="b">{title}</Text>
      <ButtonGroup gap={4}>
        <Button onClick={onOpen}>Ver funcionários</Button>
        <Button onClick={() => handleOpenCreateEmployee()}>
          <AddIcon />
        </Button>
      </ButtonGroup>
      {/* <Tooltip
        label="Prazo e dias em obra"
        aria-label="Tooltip contendo prazo e dias"
      >
        <Center
          className="shadow"
          w="50px"
          h="50px"
          borderRadius="full"
          bg="yellow.400"
        >
          <InfoIcon />
        </Center>
      </Tooltip> */}
      <Tooltip label="Projeto reprovado" aria-label="Projeto reprovado">
        <Center
          className="shadow"
          w="50px"
          h="50px"
          borderRadius="full"
          bg="red.500"
        >
          <CloseIcon />
        </Center>
      </Tooltip>
      {/* <Tooltip label="Projeto aprovado" aria-label="Projeto aprovado">
        <Center
          className="shadow"
          w="50px"
          h="50px"
          rounded="full"
          bg="green.400"
        >
          <CheckIcon />
        </Center>
      </Tooltip> */}
    </Flex>
  );
}

export default ProjectBox;
