import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";

const SearchInput = () => {
  return (
    <InputGroup>
      <InputLeftElement>
        <BsSearch
        /* or <InputLeftElement children={<BsSeach />} /> */
        />
      </InputLeftElement>
      <Input
        borderRadius={20}
        placeholder="Search Games..."
        variant={"filled"}
      />
    </InputGroup>
  );
};

export default SearchInput;
