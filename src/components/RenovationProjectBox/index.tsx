import { ChangeEvent, useState } from 'react';

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
  FormControl,
  FormErrorMessage
} from '@chakra-ui/react';

interface ProjectBoxProps {
  children?: JSX.Element;
  title: string;
}
function ProjectBox({ children, title }: ProjectBoxProps): JSX.Element {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [answer, setAnswer] = useState<string | null>(null);

  const handleAprovedAnswerChange = (e: ChangeEvent<HTMLInputElement>): void =>
    setAnswer(e.target.value);

  const answerIncorrect = answer === '';

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
            <FormControl isInvalid={answerIncorrect}>
              <Input
                value={answer ?? ''}
                onChange={handleAprovedAnswerChange}
                variant="outline"
                borderColor="blue.200"
                outlineColor="blue.200"
                maxLength={100}
                placeholder="Resposta"
              />
              {answerIncorrect && (
                <FormErrorMessage>
                  A resposta ao cliente é obrigatória!
                </FormErrorMessage>
              )}
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="gray" mr={3} variant="ghost" onClick={onClose}>
              Fechar
            </Button>
            <Button
              colorScheme="green"
              onClick={() => {
                onClose();
              }}
              disabled={answerIncorrect || answer === null}
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
