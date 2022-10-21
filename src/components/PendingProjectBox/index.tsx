import { useState } from 'react';

import {
  Button,
  Flex,
  Text,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  ButtonGroup,
  Stack,
  Box,
  NumberInput,
  NumberInputField,
  NumberIncrementStepper,
  NumberDecrementStepper,
  NumberInputStepper,
  Center,
  Input
} from '@chakra-ui/react';
import './styles.css';

interface ProjectBoxProps {
  children?: JSX.Element;
  title: string;
}
function PendingProjectBox({ children, title }: ProjectBoxProps): JSX.Element {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isAproveProjectModal, setIsAproveProjectModal] = useState(true);

  function handleOpenAproveProjectModal(): void {
    setIsAproveProjectModal(true);
    onOpen();
  }

  function handleCloseModal(): void {
    setIsAproveProjectModal(false);
    onClose();
  }

  return (
    <Flex
      w="100%"
      mt="16px"
      p={2}
      direction={{
        base: 'column',
        md: 'row'
      }}
      gap={{
        base: 6,
        md: 0
      }}
      justifyContent="space-around"
      alignItems="center"
      bg="gray.300"
    >
      <Modal isOpen={isOpen} onClose={() => handleCloseModal()}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <h1>
              {isAproveProjectModal ? 'Aprovar projeto' : 'Reprovar projeto'}
            </h1>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {isAproveProjectModal ? (
              <Stack pb={2}>
                <Input
                  variant="outline"
                  borderColor="blue.200"
                  outlineColor="blue.200"
                  placeholder="Resposta"
                />
                <Text>Defina o prazo (em dias) estimado para a reforma:</Text>
                <NumberInput defaultValue={1} min={1} max={60}>
                  <NumberInputField />
                  <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                  </NumberInputStepper>
                </NumberInput>
              </Stack>
            ) : (
              <Flex flexDirection="column" gap={2}>
                <Text>Tem certeza que deseja reprovar esse projeto?</Text>
                <Input
                  variant="outline"
                  borderColor="blue.200"
                  outlineColor="blue.200"
                  placeholder="Resposta"
                />
              </Flex>
            )}
          </ModalBody>

          <ModalFooter>
            {isAproveProjectModal ? (
              <ButtonGroup>
                <Button
                  colorScheme="red"
                  mr={3}
                  variant="ghost"
                  onClick={onClose}
                >
                  Cancelar
                </Button>
                <Button colorScheme="green">Aprovar</Button>
              </ButtonGroup>
            ) : (
              <ButtonGroup>
                <Button
                  colorScheme="gray"
                  mr={3}
                  variant="ghost"
                  onClick={onClose}
                >
                  Cancelar
                </Button>
                <Button colorScheme="red">Reprovar</Button>
              </ButtonGroup>
            )}
          </ModalFooter>
        </ModalContent>
      </Modal>
      <Flex
        w={{
          base: '100%',
          md: '200px'
        }}
        h="100%"
        justifyContent="center"
        alignItems="center"
      >
        <Text as="b">{title}</Text>
      </Flex>
      <ButtonGroup>
        <Button
          colorScheme="whatsapp"
          onClick={() => handleOpenAproveProjectModal()}
        >
          Aprovar
        </Button>
        <Button colorScheme="red" onClick={onOpen}>
          Reprovar
        </Button>
      </ButtonGroup>
    </Flex>
  );
}

export default PendingProjectBox;
