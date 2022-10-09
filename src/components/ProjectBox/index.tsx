import { CheckIcon, InfoIcon } from '@chakra-ui/icons';
import {
  Button,
  Center,
  Flex,
  Text,
  Tooltip,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton
} from '@chakra-ui/react';
import './styles.css';

interface ProjectBoxProps {
  children?: JSX.Element;
  title: string;
}
function ProjectBox({ children, title }: ProjectBoxProps): JSX.Element {
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
          <ModalHeader>Funcionários</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <h1>INFORMAÇÕES</h1>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost">Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <Text as="b">{title}</Text>
      <Button onClick={onOpen}>Ver funcionários</Button>
      <Tooltip
        label="Prazo e dias em obra"
        aria-label="Tooltip contendo prazo e dias"
      >
        <Center
          className="shadow"
          w="50px"
          h="50px"
          borderRadius="full"
          bg="yellow.400"
        >
          <InfoIcon />
        </Center>
      </Tooltip>
      {/* <Tooltip label="Projeto reprovado" aria-label="Projeto reprovado">
        <Center
          className="shadow"
          w="50px"
          h="50px"
          borderRadius="full"
          bg="red.500"
        >
          <CloseIcon />
        </Center>
      </Tooltip> */}
      {/* <Tooltip label="Projeto aprovado" aria-label="Projeto aprovado">
        <Center
          className="shadow"
          w="50px"
          h="50px"
          rounded="full"
          bg="green.400"
        >
          <CheckIcon />
        </Center>
      </Tooltip> */}
    </Flex>
  );
}

export default ProjectBox;
