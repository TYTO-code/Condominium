import {
  Button,
  Center,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper
} from '@chakra-ui/react';
import { Field, Form, Formik } from 'formik';

import { validateName } from '../../../utils/validateName';

interface CreateCondominiumProps {
  children?: JSX.Element;
}
function CreateCondominium({ children }: CreateCondominiumProps): JSX.Element {
  return (
    <Flex align="center" justify="center" direction="column">
      <Formik
        initialValues={{ name: '', amountBlocks: 1, amountApt: 1 }}
        onSubmit={(values, actions) => {
          setTimeout(() => {
            actions.setSubmitting(false);
          }, 1000);
        }}
      >
        {props => (
          <Form>
            <Center flexDirection="column" width="300px">
              <Heading my={6} as="h4" size="md">
                Adicionar condomínio
              </Heading>
              <Field name="name" validate={validateName}>
                {({ field, form }) => (
                  <FormControl
                    // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
                    isInvalid={form.errors.name && form.touched.name}
                  >
                    <FormLabel>Nome</FormLabel>
                    <Input {...field} placeholder="Nome" />
                    <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>
              <Field name="amountBlocks">
                {({ field, form }) => (
                  <FormControl>
                    <FormLabel>Quantidade de blocos:</FormLabel>
                    <NumberInput {...field} defaultValue={1} min={1} max={60}>
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
                    <NumberInput {...field} defaultValue={1} min={1} max={60}>
                      <NumberInputField />
                      <NumberInputStepper>
                        <NumberIncrementStepper />
                        <NumberDecrementStepper />
                      </NumberInputStepper>
                    </NumberInput>
                    <FormErrorMessage>{form.errors.amountApt}</FormErrorMessage>
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

export default CreateCondominium;
