import { DownloadIcon } from '@chakra-ui/icons';
import { Button, Flex, Text } from '@chakra-ui/react';

import './styles.css';
import PendingProjectBoxModal from './PendingProjectBoxModal';

interface ProjectBoxProps {
  children?: JSX.Element;
  title: string;
}
function PendingProjectBox({ children, title }: ProjectBoxProps): JSX.Element {
  return (
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
        <Text as="b">{title}</Text>
      </Flex>
      <Flex>
        <Button rightIcon={<DownloadIcon />} colorScheme="orange">
          Analisar
        </Button>
      </Flex>
      <PendingProjectBoxModal />
    </Flex>
  );
}

export default PendingProjectBox;
