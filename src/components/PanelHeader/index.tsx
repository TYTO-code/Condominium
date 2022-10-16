import { Box, Flex, Heading, Text } from '@chakra-ui/react';

interface PanelHeaderProps {
  children?: JSX.Element;
  title: string;
  subtitle?: string;
}
// border="4px" borderColor="blue"
function PanelHeader({
  children,
  title,
  subtitle
}: PanelHeaderProps): JSX.Element {
  return (
    <Flex
      p="8px"
      borderBottom="2px"
      borderColor="blue"
      w="100%"
      direction="column"
    >
      <Flex justifyContent="center" direction="column">
        <Heading alignSelf="center" as="h4" size="md">
          {title}
        </Heading>
        <Text alignSelf="center">{subtitle}</Text>
      </Flex>
      <Box mt={4} alignSelf="end">
        {children}
      </Box>
    </Flex>
  );
}

export default PanelHeader;
