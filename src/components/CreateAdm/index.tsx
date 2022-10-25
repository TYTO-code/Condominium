import {
  Button,
  Center,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input
} from '@chakra-ui/react';

interface CreateAdmProps {
  children?: JSX.Element;
}
function CreateAdm({ children }: CreateAdmProps): JSX.Element {
  return (
    <Flex align="center" justify="center" direction="column">
      <Center flexDirection="column" width="300px">
        <Heading my={6} as="h4" size="md">
          Adicionar administrador
        </Heading>
        <FormControl isRequired>
          <FormLabel>Nome</FormLabel>
          <Input type="text" />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Sobrenome</FormLabel>
          <Input type="text" />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Função</FormLabel>
          <Input type="text" />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Email</FormLabel>
          <Input type="email" />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Senha</FormLabel>
          <Input type="password" />
        </FormControl>
        <Button alignSelf="end" mt={4} colorScheme="green" type="submit">
          Adicionar
        </Button>
      </Center>
    </Flex>
  );
}

export default CreateAdm;
