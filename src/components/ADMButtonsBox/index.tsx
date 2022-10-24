import { useState } from 'react';

import { DeleteIcon, EditIcon } from '@chakra-ui/icons';
import {
  Button,
  Flex,
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
  Input,
  Text,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Box
} from '@chakra-ui/react';
import './styles.css';

interface ADMButtonsBoxProps {
  children?: JSX.Element;
  data?: any;
}
function ADMButtonsBox({ children, data }: ADMButtonsBoxProps): JSX.Element {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isEditModal, setIsEditModal] = useState(true);

  function handleOpenEditModal(): void {
    setIsEditModal(true);
    onOpen();
  }

  function handleCloseModal(): void {
    setIsEditModal(false);
    onClose();
  }

  return (
    <Flex>
      <Modal isOpen={isOpen} onClose={() => handleCloseModal()}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <h1>{isEditModal ? 'Editar condomínio' : 'Excluir condomínio'}</h1>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Stack spacing={4}>
              {isEditModal ? (
                <>
                  <Box>
                    <Text>Nome:</Text>
                    <Input
                      variant="outline"
                      borderColor="blue.200"
                      placeholder="Nome"
                    />
                  </Box>
                  <Box>
                    <Text>Quantidade de blocos:</Text>
                    <NumberInput defaultValue={1} min={1} max={60}>
                      <NumberInputField />
                      <NumberInputStepper>
                        <NumberIncrementStepper />
                        <NumberDecrementStepper />
                      </NumberInputStepper>
                    </NumberInput>
                  </Box>
                  <Box>
                    <Text>Quantidade de apartamentos:</Text>
                    <NumberInput defaultValue={1} min={1} max={60}>
                      <NumberInputField />
                      <NumberInputStepper>
                        <NumberIncrementStepper />
                        <NumberDecrementStepper />
                      </NumberInputStepper>
                    </NumberInput>
                  </Box>
                </>
              ) : (
                <Text>Deseja excluir esse condomínio?</Text>
              )}
            </Stack>
          </ModalBody>

          <ModalFooter>
            {isEditModal ? (
              <ButtonGroup>
                <Button
                  colorScheme="red"
                  mr={3}
                  variant="ghost"
                  onClick={onClose}
                >
                  Cancelar
                </Button>
                <Button colorScheme="green">Editar</Button>
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
                <Button colorScheme="red">Excluir</Button>
              </ButtonGroup>
            )}
          </ModalFooter>
        </ModalContent>
      </Modal>
      <ButtonGroup>
        <Button onClick={() => handleOpenEditModal()}>
          <EditIcon />
        </Button>
        <Button onClick={onOpen}>
          <DeleteIcon />
        </Button>
      </ButtonGroup>
    </Flex>
  );
}

export default ADMButtonsBox;
