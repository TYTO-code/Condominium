import {
  Button,
  Center,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper
} from '@chakra-ui/react';

interface CreateCondominiumProps {
  children?: JSX.Element;
}
function CreateCondominium({ children }: CreateCondominiumProps): JSX.Element {
  return (
    <Flex align="center" justify="center" direction="column">
      <Center flexDirection="column" width="300px">
        <Heading my={6} as="h4" size="md">
          Adicionar condomínio
        </Heading>
        <FormControl isRequired>
          <FormLabel>Nome</FormLabel>
          <Input type="text" />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Quantidade de blocos</FormLabel>
          <NumberInput max={10} min={1}>
            <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Quantidade de apartamentos</FormLabel>
          <NumberInput max={100} min={1}>
            <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
        </FormControl>
        <Button alignSelf="end" mt={4} colorScheme="green" type="submit">
          Adicionar
        </Button>
      </Center>
    </Flex>
  );
}

export default CreateCondominium;
