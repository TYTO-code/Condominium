import {
  Button,
  Center,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input
} from '@chakra-ui/react';
import { Field, Form, Formik } from 'formik';

interface CreateAdmProps {
  children?: JSX.Element;
}
function CreateAdm({ children }: CreateAdmProps): JSX.Element {
  function validateName(value: string): string {
    let error = '';
    if (value.length === 0) {
      error = 'Nome é obrigatório!';
    }
    return error;
  }

  function validateFunction(value: string): string {
    let error = '';
    if (value.length === 0) {
      error = 'Função é obrigatório!';
    }
    return error;
  }

  function validatePassword(value: string): string {
    const error = '';
    if (value.length === 0) {
      return 'Senha é obrigatória!';
    }

    if (value.length <= 6) {
      return 'Senha precisa ter mais de 6 caractéres!';
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
    <Flex align="center" justify="center" direction="column">
      <Formik
        initialValues={{ name: '', email: '', func: '', password: '' }}
        onSubmit={(values, actions) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            actions.setSubmitting(false);
          }, 1000);
        }}
      >
        {props => (
          <Form>
            <Center flexDirection="column" width="300px">
              <Heading my={6} as="h4" size="md">
                Adicionar administrador
              </Heading>
              <Field name="name" validate={validateName}>
                {({ field, form }) => (
                  <FormControl
                    isRequired
                    // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
                    isInvalid={form.errors.name && form.touched.name}
                  >
                    <FormLabel>Nome</FormLabel>
                    <Input {...field} placeholder="Nome" />
                    <FormErrorMessage>{form.errors.name}</FormErrorMessage>
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
                    <FormErrorMessage>{form.errors.func}</FormErrorMessage>
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
                    <FormErrorMessage>{form.errors.email}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>
              <Field name="password" validate={validatePassword}>
                {({ field, form }) => (
                  <FormControl
                    // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
                    isInvalid={form.errors.password && form.touched.password}
                  >
                    <FormLabel>Senha</FormLabel>
                    <Input {...field} type="password" placeholder="Senha" />
                    <FormErrorMessage>{form.errors.password}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>
              <Button
                isLoading={props.isSubmitting}
                alignSelf="end"
                mt={4}
                colorScheme="green"
                type="submit"
              >
                Adicionar
              </Button>
            </Center>
          </Form>
        )}
      </Formik>
    </Flex>
  );
}

export default CreateAdm;
