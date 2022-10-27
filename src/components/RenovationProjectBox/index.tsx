import { ChatIcon } from '@chakra-ui/icons';
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
  Input,
  useToast,
  ToastId
} from '@chakra-ui/react';

interface ProjectBoxProps {
  children?: JSX.Element;
  title: string;
}
function ProjectBox({ children, title }: ProjectBoxProps): JSX.Element {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();

  function handleOpenSuccessToast(): ToastId {
    return toast({
      title: 'Denúncia realizada.',
      description: 'Aguarde a administração.',
      status: 'success',
      position: 'top',
      duration: 9000,
      isClosable: true
    });
  }

  function handleOpenErrorToast(): ToastId {
    return toast({
      title: 'Ocorreu um erro.',
      description: 'Tente novamente ou entre em contato.',
      status: 'error',
      position: 'top',
      duration: 9000,
      isClosable: true
    });
  }

  return (
    <Flex
      w="100%"
      mt="16px"
      p={2}
      direction={{
        base: 'column',
        md: 'row'
      }}
      justifyContent="space-around"
      alignItems="center"
      bg="gray.300"
    >
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Fazer denúncia</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Input
              variant="outline"
              borderColor="blue.200"
              outlineColor="blue.200"
              placeholder="Descrição"
            />
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="gray" mr={3} variant="ghost" onClick={onClose}>
              Fechar
            </Button>
            <Button
              colorScheme="green"
              onClick={() => {
                handleOpenSuccessToast();
                onClose();
              }}
            >
              Cadastrar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <Text as="b">{title}</Text>
      <Button rightIcon={<ChatIcon />} onClick={onOpen} colorScheme="red">
        Fazer denúncia
      </Button>
    </Flex>
  );
}

export default ProjectBox;
