import { DeleteIcon, EditIcon } from '@chakra-ui/icons';
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
  Box
} from '@chakra-ui/react';

import ADMButtonsBox from '../ADMButtonsBox';
import './styles.css';

interface CondominiumBoxProps {
  children?: JSX.Element;
  name: string;
}
function CondominiumBox({ children, name }: CondominiumBoxProps): JSX.Element {
  const { isOpen, onOpen, onClose } = useDisclosure();

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
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <h1>Editar associado</h1>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Stack spacing={4}>
              <Input
                variant="outline"
                borderColor="blue.200"
                placeholder="Nome"
              />
              <Input
                variant="outline"
                borderColor="blue.200"
                placeholder="Email"
              />
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
              <Button colorScheme="green">Editar</Button>
            </ButtonGroup>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <Box
        w={{
          base: '80px',
          md: '250px'
        }}
      >
        <Text as="b">{name}</Text>
      </Box>
      <Box>
        <Button onClick={onOpen}>Ver moradores</Button>
      </Box>
      <ADMButtonsBox />
    </Flex>
  );
}

export default CondominiumBox;
