import { Flex, Text } from '@chakra-ui/react';
import './styles.css';

interface EmployeeProjectBoxProps {
  children?: JSX.Element;
  title: string;
  nome: string;
}
function EmployeeProjectBox({
  children,
  title,
  nome
}: EmployeeProjectBoxProps): JSX.Element {
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
          <Text as="span">{title}</Text>
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
          <Text as="b">{nome}</Text>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default EmployeeProjectBox;
