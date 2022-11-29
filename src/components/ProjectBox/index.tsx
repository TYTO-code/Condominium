import { useState } from 'react';

import { AddIcon, CloseIcon, InfoIcon, TimeIcon } from '@chakra-ui/icons';
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
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Box,
  FormLabel,
  FormControl,
  FormErrorMessage
} from '@chakra-ui/react';

import './styles.css';
import { Field, Form, Formik } from 'formik';

import { validateFunction } from '../../utils/validateFunction';
import { validateName } from '../../utils/validateName';

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
        <>
          <Formik
            initialValues={{ name: '', func: '' }}
            onSubmit={(values, actions) => {
              setTimeout(() => {
                actions.setSubmitting(false);
              }, 1000);
            }}
          >
            {props => (
              <Form>
                <ModalContent>
                  <ModalHeader>
                    <h1>
                      {isAddEmployeeModal
                        ? 'Adicionar funcionário'
                        : 'Funcionários'}
                    </h1>
                  </ModalHeader>
                  <ModalCloseButton />
                  <ModalBody>
                    {isAddEmployeeModal ? (
                      <Stack spacing={4}>
                        <Field name="name" validate={validateName}>
                          {({ field, form }) => (
                            <FormControl
                              isRequired
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
                        <Field name="func" validate={validateFunction}>
                          {({ field, form }) => (
                            <FormControl
                              isRequired
                              // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
                              isInvalid={form.errors.func && form.touched.func}
                            >
                              <FormLabel>Função</FormLabel>
                              <Input {...field} placeholder="Função" />
                              <FormErrorMessage>
                                {form.errors.func}
                              </FormErrorMessage>
                            </FormControl>
                          )}
                        </Field>
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
                        <Button
                          type="submit"
                          isLoading={props.isSubmitting}
                          colorScheme="green"
                        >
                          Adicionar
                        </Button>
                      </ButtonGroup>
                    ) : (
                      <Button
                        colorScheme="gray"
                        mr={3}
                        variant="ghost"
                        onClick={onClose}
                      >
                        Fechar
                      </Button>
                    )}
                  </ModalFooter>
                </ModalContent>
              </Form>
            )}
          </Formik>
        </>
      </Modal>
      <Box
        w={{
          base: '80px',
          md: '200px'
        }}
        h="100%"
      >
        <Text as="b">{title}</Text>
      </Box>
      <ButtonGroup>
        <Button onClick={onOpen}>Ver funcionários</Button>
        <Button colorScheme="green" onClick={() => handleOpenCreateEmployee()}>
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
      {/* <Tooltip label="Projeto reprovado" aria-label="Projeto reprovado">
        <Center
          className="shadow"
          w="50px"
          h="50px"
          borderRadius="full"
          bg="red.500"
        >
          <CloseIcon />
        </Center>
      </Tooltip> */}
      <Tooltip label="Projeto em análise" aria-label="Projeto em análise">
        <Center
          className="shadow"
          w="50px"
          h="50px"
          borderRadius="full"
          bg="whiteAlpha.400"
        >
          <TimeIcon />
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
