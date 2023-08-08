import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import React from "react";
import { BsChevronDown } from "react-icons/bs";

const SortSelector = () => {
  return (
    <Menu /* you can always check the chakra website for more info  */>
      <MenuButton
        as={Button} /* Button from chakra */
        rightIcon={<BsChevronDown />} /* BsChevronDown from react-icons */
      >
        Select By: sth
      </MenuButton>

      <MenuList>
        <MenuItem>1</MenuItem>
        <MenuItem>2</MenuItem>
        <MenuItem>3</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
