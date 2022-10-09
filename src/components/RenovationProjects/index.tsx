import { Box, Flex } from '@chakra-ui/react';

import PanelHeader from '../PanelHeader';
import RenovationProjectBox from '../RenovationProjectBox';

interface RenovationProjectsProps {
  children?: JSX.Element;
}
function RenovationProjects({
  children
}: RenovationProjectsProps): JSX.Element {
  return (
    <Flex direction="column" h="100%" justifyContent="center">
      <PanelHeader title="Projetos em reforma" />
      <Box h="400px" overflowY="auto">
        <RenovationProjectBox title="BLOCO/APT/NOME" />
        <RenovationProjectBox title="BLOCO/APT/NOME" />
        <RenovationProjectBox title="BLOCO/APT/NOME" />
        <RenovationProjectBox title="BLOCO/APT/NOME" />
        <RenovationProjectBox title="BLOCO/APT/NOME" />
        <RenovationProjectBox title="BLOCO/APT/NOME" />
        <RenovationProjectBox title="BLOCO/APT/NOME" />
      </Box>
    </Flex>
  );
}

export default RenovationProjects;
