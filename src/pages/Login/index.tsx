import {
  Button,
  Center,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs
} from '@chakra-ui/react';
import { Field, Form, Formik } from 'formik';

import { validateEmail } from '../../utils/validateEmail';
import { validateFunction } from '../../utils/validateFunction';
import { validateName } from '../../utils/validateName';
import { validatePassword } from '../../utils/validatPassword';

function Login(): JSX.Element {
  return (
    <Flex h="100%">
      <Center w="50%" display={{ base: 'none', md: 'flex' }} h="100%" bg="blue">
        Apresentação
      </Center>
      <Center w={{ base: '100%', md: '50%' }} h="100%" flexDirection="column">
        <Heading my={6} as="h4" size="md">
          Entrar no sistema
        </Heading>
        <Tabs>
          <TabList>
            <Tab>Associado</Tab>
            <Tab>Morador ou Síndico</Tab>
          </TabList>

          <TabPanels>
            <TabPanel>
              <Formik
                initialValues={{ email: '', password: '' }}
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
                      <Field name="password" validate={validatePassword}>
                        {({ field, form }) => (
                          <FormControl
                            // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
                            isInvalid={
                              form.errors.password && form.touched.password
                            }
                          >
                            <FormLabel>Senha</FormLabel>
                            <Input
                              {...field}
                              type="password"
                              placeholder="Senha"
                            />
                            <FormErrorMessage>
                              {form.errors.password}
                            </FormErrorMessage>
                          </FormControl>
                        )}
                      </Field>
                      <Button
                        isLoading={props.isSubmitting}
                        alignSelf="center"
                        mt={4}
                        size="md"
                        w="200px"
                        colorScheme="green"
                        type="submit"
                      >
                        Login
                      </Button>
                    </Center>
                  </Form>
                )}
              </Formik>
            </TabPanel>
            <TabPanel>
              <Formik
                initialValues={{ id: '' }}
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
                      <Field name="id">
                        {({ field, form }) => (
                          <FormControl
                            // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
                            isInvalid={form.errors.id && form.touched.id}
                          >
                            <FormLabel>ID</FormLabel>
                            <Input
                              {...field}
                              placeholder="ID do morador ou síndico"
                            />
                            <FormErrorMessage>
                              {form.errors.id}
                            </FormErrorMessage>
                          </FormControl>
                        )}
                      </Field>
                      <Button
                        isLoading={props.isSubmitting}
                        alignSelf="center"
                        mt={4}
                        size="md"
                        w="200px"
                        colorScheme="green"
                        type="submit"
                      >
                        Login
                      </Button>
                    </Center>
                  </Form>
                )}
              </Formik>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Center>
    </Flex>
  );
}

export default Login;
