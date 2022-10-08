import { Box, Flex } from '@chakra-ui/react';

import PanelHeader from '../PanelHeader';
import ProjectBox from '../ProjectBox';

interface SubmittedProjectsProps {
  children?: JSX.Element;
}
function SubmittedProjects({ children }: SubmittedProjectsProps): JSX.Element {
  return (
    <Flex direction="column" h="100%" justifyContent="center">
      <PanelHeader title="Projetos enviados" />
      <Box h="400px" overflowY="auto">
        <ProjectBox title="TITULO" />
        <ProjectBox title="TITULO" />
        <ProjectBox title="TITULO" />
        <ProjectBox title="TITULO" />
        <ProjectBox title="TITULO" />
        <ProjectBox title="TITULO" />
        <ProjectBox title="TITULO" />
      </Box>
    </Flex>
  );
}

export default SubmittedProjects;
