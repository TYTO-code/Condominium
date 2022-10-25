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
  Box,
  TableContainer,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td
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
        <ModalContent w="700px">
          <ModalHeader>
            <h1>Ver ID moradores</h1>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <TableContainer>
              <Table variant="simple" colorScheme="teal">
                <Thead>
                  <Tr>
                    <Th>ID</Th>
                    <Th>Apartamento</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  <Tr>
                    <Td>ID Gerado</Td>
                    <Td>01</Td>
                  </Tr>
                  <Tr>
                    <Td>ID Gerado</Td>
                    <Td>02</Td>
                  </Tr>
                  <Tr>
                    <Td>ID Gerado</Td>
                    <Td>03</Td>
                  </Tr>
                </Tbody>
              </Table>
            </TableContainer>
          </ModalBody>

          <ModalFooter>
            <ButtonGroup>
              <Button
                colorScheme="gray"
                mr={3}
                variant="ghost"
                onClick={onClose}
              >
                Fechar
              </Button>
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
        <Button onClick={onOpen}>Ver ID moradores</Button>
      </Box>
      <ADMButtonsBox />
    </Flex>
  );
}

export default CondominiumBox;
