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
  Input
} from '@chakra-ui/react';
import './styles.css';

interface MessageBoxProps {
  children?: JSX.Element;
  infos: string;
  message: string;
}
function MessageBox({
  children,
  infos,
  message
}: MessageBoxProps): JSX.Element {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex direction="column">
      <Flex
        w="100%"
        mt="16px"
        p={2}
        direction={{
          base: 'column',
          md: 'row'
        }}
        gap={{
          base: 6,
          md: 0
        }}
        justifyContent="space-around"
        alignItems="center"
        bg="gray.300"
      >
        <Flex
          w={{
            base: '100%',
            md: '200px'
          }}
          h="100%"
          justifyContent="center"
          alignItems="center"
        >
          <Text as="span">{infos}</Text>
        </Flex>
        <Flex w="110px" justifyContent="center">
          Data/Hora
        </Flex>
      </Flex>
      <Flex
        w="100%"
        borderColor="gray.300"
        borderTop="1px"
        p={2}
        direction={{
          base: 'column',
          md: 'row'
        }}
        gap={{
          base: 6,
          md: 0
        }}
        justifyContent="space-around"
        alignItems="center"
        bg="gray.300"
      >
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>
              <h1>Enviar uma resposta</h1>
            </ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Flex flexDirection="column" gap={2}>
                <Input
                  variant="outline"
                  borderColor="blue.200"
                  outlineColor="blue.200"
                  placeholder="Resposta"
                />
              </Flex>
            </ModalBody>

            <ModalFooter>
              <ButtonGroup>
                <Button
                  colorScheme="gray"
                  mr={3}
                  variant="ghost"
                  onClick={onClose}
                >
                  Cancelar
                </Button>
                <Button colorScheme="whatsapp">Responder</Button>
              </ButtonGroup>
            </ModalFooter>
          </ModalContent>
        </Modal>
        <Flex
          w={{
            base: '100%',
            md: '200px'
          }}
          h="100%"
          justifyContent="center"
          alignItems="center"
        >
          <Text as="b">{message}</Text>
        </Flex>
        <ButtonGroup>
          <Button colorScheme="gray" onClick={onOpen}>
            Responder
          </Button>
        </ButtonGroup>
      </Flex>
    </Flex>
  );
}

export default MessageBox;
