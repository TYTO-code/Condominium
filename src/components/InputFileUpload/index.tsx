import { Flex } from '@chakra-ui/react';

import './styles.css';

interface InputFileUploadProps {
  children?: JSX.Element;
  label: string;
}

function InputFileUpload({
  children,
  label
}: InputFileUploadProps): JSX.Element {
  return (
    <Flex direction="column" w="100%" border="none" outline="none">
      <label htmlFor="teste">{label}</label>
      <input className="custom-file-input" type="file" />
      {/* <InputRightAddon>
        <DownloadIcon />
      </InputRightAddon> */}
    </Flex>
  );
}

export default InputFileUpload;
