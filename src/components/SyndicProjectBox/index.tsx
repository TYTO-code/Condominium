import { AddIcon, CloseIcon, InfoIcon, TimeIcon } from '@chakra-ui/icons';
import { Center, Flex, Text, Tooltip } from '@chakra-ui/react';
import './styles.css';

interface SyndicProjectBoxProps {
  children?: JSX.Element;
  title: string;
}
function SyndicProjectBox({
  children,
  title
}: SyndicProjectBoxProps): JSX.Element {
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
      <Center
        w={{
          base: '80px',
          md: '200px'
        }}
        h="100%"
      >
        <Text as="b">{title}</Text>
      </Center>

      {/* <Tooltip
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
      </Tooltip> */}
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
      <Tooltip label="Projeto em análise" aria-label="Projeto em análise">
        <Center
          className="shadow"
          w="50px"
          h="50px"
          borderRadius="full"
          bg="whiteAlpha.400"
        >
          <TimeIcon />
        </Center>
      </Tooltip>
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

export default SyndicProjectBox;
