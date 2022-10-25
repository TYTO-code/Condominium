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
        <Text alignSelf="center" fontSize="20px">
          {subtitle}
        </Text>
      </Flex>
      {children != null ? (
        <Box
          mt={{
            base: 4,
            md: -6
          }}
          alignSelf="end"
        >
          {children}
        </Box>
      ) : null}
    </Flex>
  );
}

export default PanelHeader;
