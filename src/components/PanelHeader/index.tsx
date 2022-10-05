import { Box, Flex, Heading } from '@chakra-ui/react';

interface PanelHeaderProps {
  children?: JSX.Element;
  title: string;
}
// border="4px" borderColor="blue"
function PanelHeader({ children, title }: PanelHeaderProps): JSX.Element {
  return (
    <Flex
      p="8px"
      borderBottom="2px"
      borderColor="blue"
      w="100%"
      direction="column"
    >
      <Heading alignSelf="center" as="h4" size="md">
        {title}
      </Heading>
      <Box alignSelf="end">{children}</Box>
    </Flex>
  );
}

export default PanelHeader;
