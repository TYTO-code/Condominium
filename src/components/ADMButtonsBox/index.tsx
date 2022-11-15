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
  Box,
  FormControl,
  FormLabel,
  FormErrorMessage
} from '@chakra-ui/react';
import './styles.css';
import { Field, Form, Formik } from 'formik';

import { validateName } from '../../utils/validateName';

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

  function handleOpenDeleteModal(): void {
    setIsEditModal(false);
    onOpen();
  }

  function handleCloseModal(): void {
    setIsEditModal(false);
    onClose();
  }

  return (
    <Flex>
      <Formik
        initialValues={{ name: '', amountBlocks: 1, amountApt: 1 }}
        onSubmit={(values, actions) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            actions.setSubmitting(false);
            onClose();
          }, 1000);
        }}
      >
        {props => (
          <Modal isOpen={isOpen} onClose={() => handleCloseModal()}>
            <ModalOverlay />
            <Form>
              <ModalContent>
                <ModalHeader>
                  <h1>
                    {isEditModal ? 'Editar condomínio' : 'Excluir condomínio'}
                  </h1>
                </ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                  <Stack spacing={4}>
                    {isEditModal ? (
                      <>
                        <Field name="name" validate={validateName}>
                          {({ field, form }) => (
                            <FormControl
                              // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
                              isInvalid={form.errors.name && form.touched.name}
                            >
                              <FormLabel>Nome</FormLabel>
                              <Input {...field} placeholder="Nome" />
                              <FormErrorMessage>
                                {form.errors.name}
                              </FormErrorMessage>
                            </FormControl>
                          )}
                        </Field>
                        <Field name="amountBlocks">
                          {({ field, form }) => (
                            <FormControl>
                              <FormLabel>Quantidade de blocos:</FormLabel>
                              <NumberInput
                                {...field}
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
                              <FormErrorMessage>
                                {form.errors.amountBlocks}
                              </FormErrorMessage>
                            </FormControl>
                          )}
                        </Field>
                        <Field name="amountApt">
                          {({ field, form }) => (
                            <FormControl>
                              <FormLabel>Quantidade de apartamentos:</FormLabel>
                              <NumberInput
                                {...field}
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
                              <FormErrorMessage>
                                {form.errors.amountApt}
                              </FormErrorMessage>
                            </FormControl>
                          )}
                        </Field>
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
                      <Button
                        type="submit"
                        isLoading={props.isSubmitting}
                        colorScheme="green"
                      >
                        Editar
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
                      <Button colorScheme="red">Excluir</Button>
                    </ButtonGroup>
                  )}
                </ModalFooter>
              </ModalContent>
            </Form>
          </Modal>
        )}
      </Formik>
      <ButtonGroup>
        <Button colorScheme="facebook" onClick={() => handleOpenEditModal()}>
          <EditIcon />
        </Button>
        <Button colorScheme="red" onClick={() => handleOpenDeleteModal()}>
          <DeleteIcon />
        </Button>
      </ButtonGroup>
    </Flex>
  );
}

export default ADMButtonsBox;
