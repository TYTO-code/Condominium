import { EditIcon } from '@chakra-ui/icons';
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
  Input,
  Box,
  FormControl,
  FormErrorMessage,
  FormLabel
} from '@chakra-ui/react';
import { Formik, Field, Form } from 'formik';
import './styles.css';

interface ADMInfosBoxProps {
  children?: JSX.Element;
  name: string;
  email: string;
}
function ADMInfosBox({ children, name, email }: ADMInfosBoxProps): JSX.Element {
  const { isOpen, onOpen, onClose } = useDisclosure();

  function validateName(value: string): string {
    let error = '';
    if (value.length === 0) {
      error = 'Nome é obrigatório!';
    }
    return error;
  }
  function validateEmail(email: string): string {
    const error = '';
    if (email.length === 0) {
      return 'Email é obrigatório!';
    }
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
      return 'Email inválido!';
    }
    return error;
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
      <Formik
        initialValues={{ name: '', email: '' }}
        onSubmit={(values, actions) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            actions.setSubmitting(false);
            onClose();
          }, 1000);
        }}
      >
        {props => (
          <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <Form>
              <ModalContent>
                <ModalHeader>
                  <h1>Editar associado</h1>
                </ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                  <Stack spacing={4}>
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
                    <Field name="email" validate={validateEmail}>
                      {({ field, form }) => (
                        <FormControl
                          // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
                          isInvalid={form.errors.email && form.touched.email}
                        >
                          <FormLabel>Email</FormLabel>
                          <Input {...field} placeholder="Email" />
                          <FormErrorMessage>
                            {form.errors.email}
                          </FormErrorMessage>
                        </FormControl>
                      )}
                    </Field>
                  </Stack>
                </ModalBody>

                <ModalFooter>
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
                </ModalFooter>
              </ModalContent>
            </Form>
          </Modal>
        )}
      </Formik>
      <Box
        w={{
          base: '80px',
          md: '250px'
        }}
      >
        <Text as="b">{name}</Text>
      </Box>
      <Box
        w={{
          base: '80px',
          md: '250px'
        }}
      >
        <Text as="b">{email}</Text>
      </Box>
      <ButtonGroup>
        <Button colorScheme="facebook" onClick={onOpen}>
          <EditIcon />
        </Button>
      </ButtonGroup>
    </Flex>
  );
}

export default ADMInfosBox;
