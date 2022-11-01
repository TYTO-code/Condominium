import { ChangeEvent, useState } from 'react';

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
  NumberInput,
  NumberInputField,
  NumberIncrementStepper,
  NumberDecrementStepper,
  NumberInputStepper,
  Input,
  FormControl,
  FormErrorMessage
} from '@chakra-ui/react';

function PendingProjectBoxModal(): JSX.Element {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isAproveProjectModal, setIsAproveProjectModal] = useState(true);
  const [daysToReform, setDaysToReform] = useState(1);

  const [aprovedAnswer, setAprovedAnswer] = useState<string | null>(null);

  const handleAprovedAnswerChange = (e: ChangeEvent<HTMLInputElement>): void =>
    setAprovedAnswer(e.target.value);

  const aprovedAnswerIncorrect = aprovedAnswer === '';

  const [reprovedAnswer, setReprovedAnswer] = useState<string | null>(null);

  const handleReprovedAnswerChange = (e: ChangeEvent<HTMLInputElement>): void =>
    setReprovedAnswer(e.target.value);

  const reprovedAnswerIncorrect = reprovedAnswer === '';

  const handleChangeDaysToReformChange = (e: string): void =>
    setDaysToReform(+e);

  function handleOpenAproveProjectModal(): void {
    setIsAproveProjectModal(true);
    onOpen();
  }

  function handleCloseModal(): void {
    setIsAproveProjectModal(false);
    setReprovedAnswer(null);
    setAprovedAnswer(null);
    onClose();
  }

  return (
    <>
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
                <FormControl isInvalid={aprovedAnswerIncorrect}>
                  <Input
                    value={aprovedAnswer ?? ''}
                    onChange={handleAprovedAnswerChange}
                    variant="outline"
                    borderColor="blue.200"
                    outlineColor="blue.200"
                    maxLength={100}
                    placeholder="Resposta"
                  />
                  {aprovedAnswerIncorrect && (
                    <FormErrorMessage>
                      A resposta ao cliente é obrigatória!
                    </FormErrorMessage>
                  )}
                </FormControl>
                <Text>Defina o prazo (em dias) estimado para a reforma:</Text>
                <NumberInput
                  value={daysToReform}
                  onChange={handleChangeDaysToReformChange}
                  defaultValue={1}
                  min={1}
                  max={60}
                >
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
                <FormControl isInvalid={reprovedAnswerIncorrect}>
                  <Input
                    value={reprovedAnswer ?? ''}
                    onChange={handleReprovedAnswerChange}
                    variant="outline"
                    borderColor="blue.200"
                    outlineColor="blue.200"
                    maxLength={100}
                    placeholder="Resposta"
                  />
                  {reprovedAnswerIncorrect && (
                    <FormErrorMessage>
                      A resposta ao cliente é obrigatória!
                    </FormErrorMessage>
                  )}
                </FormControl>
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
                <Button disabled={aprovedAnswerIncorrect} colorScheme="green">
                  Aprovar
                </Button>
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
                <Button disabled={reprovedAnswerIncorrect} colorScheme="red">
                  Reprovar
                </Button>
              </ButtonGroup>
            )}
          </ModalFooter>
        </ModalContent>
      </Modal>
      <ButtonGroup>
        <Button
          colorScheme="green"
          onClick={() => handleOpenAproveProjectModal()}
        >
          Aprovar
        </Button>
        <Button colorScheme="red" onClick={onOpen}>
          Reprovar
        </Button>
      </ButtonGroup>
    </>
  );
}

export default PendingProjectBoxModal;
